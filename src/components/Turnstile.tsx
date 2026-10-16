import React, { useEffect, useRef } from 'react';
import type { Lang } from '@/src/i18n/LanguageContext';

// Cloudflare Turnstile bot check. The site key is public; set VITE_TURNSTILE_SITE_KEY at build time.
// Without it we fall back to Cloudflare's always-pass test key so local dev keeps working.
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

interface TurnstileApi {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('Turnstile unavailable')));
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error('Failed to load Turnstile'));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

interface TurnstileProps {
  lang: Lang;
  onVerify: (token: string) => void;
  onExpire: () => void;
}

const Turnstile = ({ lang, onVerify, onExpire }: TurnstileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Keep the latest callbacks without re-rendering the widget on every parent render.
  const callbacks = useRef({ onVerify, onExpire });
  callbacks.current = { onVerify, onExpire };

  useEffect(() => {
    let widgetId: string | undefined;
    let cancelled = false;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current) return;
        widgetId = turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          theme: 'dark',
          language: lang,
          callback: (token: string) => callbacks.current.onVerify(token),
          'expired-callback': () => callbacks.current.onExpire(),
          'error-callback': () => callbacks.current.onExpire(),
        });
      })
      .catch((error) => console.error('Bot check failed to load:', error));

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
      // A removed widget's token can't be trusted to still be valid.
      callbacks.current.onExpire();
    };
  }, [lang]);

  return <div ref={containerRef} className="flex justify-center min-h-[65px]" />;
};

export default Turnstile;
