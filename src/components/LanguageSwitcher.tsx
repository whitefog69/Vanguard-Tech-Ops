import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { LANGUAGES, useLanguage } from '@/src/i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t({ en: 'Change language', fr: 'Changer de langue' })}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-outline-variant/30 text-on-surface/80 hover:text-on-surface hover:border-primary/50 transition-colors font-headline text-xs font-bold tracking-widest"
      >
        <Globe className="w-4 h-4" />
        {current.short}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            role="listbox"
            aria-label={t({ en: 'Language', fr: 'Langue' })}
            className="absolute right-0 top-full mt-2 w-40 py-1 bg-surface-container-low border border-outline-variant/20 shadow-2xl backdrop-blur-2xl rounded-lg overflow-hidden z-50"
          >
            {LANGUAGES.map((l) => (
              <li key={l.code} role="option" aria-selected={l.code === lang}>
                <button
                  type="button"
                  lang={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 font-body text-sm transition-colors",
                    l.code === lang ? "text-primary" : "text-on-surface-variant hover:bg-primary-container/10 hover:text-on-surface"
                  )}
                >
                  {l.label}
                  {l.code === lang && <Check className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
