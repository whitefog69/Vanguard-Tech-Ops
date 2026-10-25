import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// index.html ships a strict CSP with no inline scripts. The dev server injects an inline
// React refresh script, so allow inline scripts there only; production builds stay strict.
const devInlineScripts = (): Plugin => ({
  name: 'dev-inline-scripts',
  apply: 'serve',
  transformIndexHtml: (html) => html.replace("script-src 'self'", "script-src 'self' 'unsafe-inline'"),
});

export default defineConfig(({mode, command}) => {
  const env = loadEnv(mode, '.', '');

  // Fail the production build if the real Turnstile site key is missing, rather than
  // silently shipping Cloudflare's always-pass test key and disabling bot protection.
  if (command === 'build') {
    const siteKey = process.env.VITE_TURNSTILE_SITE_KEY || env.VITE_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      throw new Error(
        'VITE_TURNSTILE_SITE_KEY is not set. Production builds must use the real Cloudflare ' +
        'Turnstile site key (set the TURNSTILE_SITE_KEY repo/Actions variable). Refusing to ' +
        'build with the always-pass test key.'
      );
    }
  }

  return {
    base: '/',
    plugins: [react(), tailwindcss(), devInlineScripts()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
  };
});
