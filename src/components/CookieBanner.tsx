import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { getConsent, saveConsent, OPEN_SETTINGS_EVENT } from '@/src/lib/consent';
import { useLanguage } from '@/src/i18n/LanguageContext';

// Accept and Refuse share one style: CNIL requires refusing to be as easy as accepting.
const choiceButton = "flex-1 px-5 py-3 font-headline font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs border border-primary/40 text-on-surface hover:bg-primary/10 hover:border-primary transition-all";

const Toggle = ({ checked, disabled, onChange, label }: { checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void; label: string }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    onClick={() => onChange?.(!checked)}
    className={cn(
      "relative w-11 h-6 flex-shrink-0 rounded-full border transition-colors",
      checked ? "bg-primary-container border-primary/60" : "bg-surface-container-high border-outline-variant",
      disabled && "opacity-60 cursor-not-allowed"
    )}
  >
    <span className={cn("absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full bg-white transition-transform", checked && "translate-x-5")} />
  </button>
);

const CookieBanner = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!getConsent()) setIsOpen(true);

    const openSettings = () => {
      setAnalytics(getConsent()?.analytics ?? false);
      setShowDetails(true);
      setIsOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  const decide = (allowAnalytics: boolean) => {
    saveConsent(allowAnalytics);
    setIsOpen(false);
    setShowDetails(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] bg-surface-container-lowest/95 backdrop-blur-xl border border-primary/20 shadow-[0_0_40px_rgba(0,71,171,0.2)] rounded-xl p-6 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center gap-3 mb-3">
            <Cookie className="w-5 h-5 text-primary" />
            <h2 id="cookie-banner-title" className="font-headline font-bold text-on-surface text-base">
              {showDetails
                ? t({ en: 'Cookie settings', fr: 'Paramètres des cookies' })
                : t({ en: 'Your privacy', fr: 'Votre vie privée' })}
            </h2>
          </div>

          {!showDetails ? (
            <p className="font-body text-sm text-on-surface-variant/80 leading-relaxed mb-5">
              {t({
                en: 'We use what\'s strictly needed to run this site. With your permission, we\'d also like to use analytics cookies to understand how visitors use it. You can change your choice at any time from "Cookie settings" in the footer.',
                fr: 'Nous utilisons uniquement ce qui est nécessaire au fonctionnement du site. Avec votre accord, nous aimerions aussi utiliser des cookies de mesure d’audience pour comprendre comment le site est utilisé. Vous pouvez modifier votre choix à tout moment via « Paramètres des cookies » en bas de page.'
              })}{' '}
              <Link to="/privacy" className="text-primary underline underline-offset-2 hover:text-white">{t({ en: 'Privacy Policy', fr: 'Politique de confidentialité' })}</Link>
            </p>
          ) : (
            <div className="space-y-4 mb-5">
              <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-surface-container-low/60 border border-outline-variant/20">
                <div>
                  <p className="font-body font-semibold text-sm text-on-surface mb-1">{t({ en: 'Strictly necessary', fr: 'Strictement nécessaires' })}</p>
                  <p className="font-body text-xs text-on-surface-variant/70 leading-relaxed">
                    {t({
                      en: 'Needed for the site to work, such as remembering your cookie choice and language. Always on.',
                      fr: 'Indispensables au fonctionnement du site, par exemple pour mémoriser votre choix de cookies et votre langue. Toujours actifs.'
                    })}
                  </p>
                </div>
                <Toggle checked disabled label={t({ en: 'Strictly necessary (always on)', fr: 'Strictement nécessaires (toujours actifs)' })} />
              </div>
              <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-surface-container-low/60 border border-outline-variant/20">
                <div>
                  <p className="font-body font-semibold text-sm text-on-surface mb-1">{t({ en: 'Analytics', fr: 'Mesure d’audience' })}</p>
                  <p className="font-body text-xs text-on-surface-variant/70 leading-relaxed">
                    {t({
                      en: 'Help us understand which pages are visited and how the site is used, so we can improve it. Only used if you allow it.',
                      fr: 'Nous aident à comprendre quelles pages sont consultées et comment le site est utilisé, afin de l’améliorer. Utilisés uniquement avec votre accord.'
                    })}
                  </p>
                </div>
                <Toggle checked={analytics} onChange={setAnalytics} label={t({ en: 'Analytics cookies', fr: 'Cookies de mesure d’audience' })} />
              </div>
              <p className="font-body text-xs text-on-surface-variant/60">
                {t({ en: 'More details in our', fr: 'Plus de détails dans notre' })}{' '}
                <Link to="/privacy" className="text-primary underline underline-offset-2 hover:text-white">{t({ en: 'Privacy Policy', fr: 'politique de confidentialité' })}</Link>.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2">
            {!showDetails ? (
              <>
                <button onClick={() => decide(false)} className={choiceButton}>{t({ en: 'Refuse all', fr: 'Tout refuser' })}</button>
                <button onClick={() => setShowDetails(true)} className={cn(choiceButton, "border-outline-variant/40")}>{t({ en: 'Customize', fr: 'Personnaliser' })}</button>
                <button onClick={() => decide(true)} className={choiceButton}>{t({ en: 'Accept all', fr: 'Tout accepter' })}</button>
              </>
            ) : (
              <>
                <button onClick={() => decide(false)} className={choiceButton}>{t({ en: 'Refuse all', fr: 'Tout refuser' })}</button>
                <button onClick={() => decide(analytics)} className={choiceButton}>{t({ en: 'Save choices', fr: 'Enregistrer' })}</button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
