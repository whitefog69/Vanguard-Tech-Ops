import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/src/i18n/LanguageContext';

type Theme = 'dark' | 'light';

// The choice is a site preference, stored in the browser (strictly necessary, no consent needed).
// public/theme-init.js reads the same key to apply it before the first paint.
const STORAGE_KEY = 'vto-theme';

const currentTheme = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

const ThemeToggle = () => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  const toggle = () => {
    const apply = () => {
      flushSync(() => setTheme(next));
      document.documentElement.dataset.theme = next;
    };
    // Cross-fade the whole page where the browser supports it.
    if ('startViewTransition' in document && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice lasts for this visit only.
    }
  };

  const label = next === 'light'
    ? t({ en: 'Switch to light mode', fr: 'Passer en mode clair' })
    : t({ en: 'Switch to dark mode', fr: 'Passer en mode sombre' });

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="p-2 rounded-full border border-outline-variant/30 text-on-surface/80 hover:text-on-surface hover:border-primary/50 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.15 }}
          className="flex"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
