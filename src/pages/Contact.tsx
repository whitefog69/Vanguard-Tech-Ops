import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, Phone, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '@/src/i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  // The English value is what gets sent in the inquiry email; the label is what the visitor sees.
  const services = [
    { value: 'Virtualization & Cloud', label: t({ en: 'Virtualization & Cloud', fr: 'Virtualisation & Cloud' }) },
    { value: 'Precision Web & Ecom Development', label: t({ en: 'Precision Web & Ecom Development', fr: 'Développement Web & E-commerce' }) },
    { value: 'AI & Automation', label: t({ en: 'AI & Automation', fr: 'IA & Automatisation' }) },
    { value: 'Shopify, WordPress Integrations & App Development', label: t({ en: 'Shopify, WordPress Integrations & App Development', fr: 'Intégrations Shopify, WordPress & Développement d’apps' }) },
    { value: 'Graphic & Web Design', label: t({ en: 'Graphic & Web Design', fr: 'Design Graphique & Web' }) }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const response = await fetch('https://vanguard-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormState('submitted');
    } catch (error) {
      console.error('Transmission Protocol Failure:', error);
      setFormState('error');
    }
  };

  const inputClasses = "w-full bg-surface-container-low/60 border border-primary/20 border-b-primary/40 rounded-sm px-4 py-3 text-on-surface font-body text-xs md:text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/60";
  const labelClasses = "block text-[9px] md:text-[10px] font-headline uppercase tracking-[0.2em] text-primary mb-2 font-bold";

  return (
    <div className="min-h-screen bg-background text-on-surface pt-0 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 relative overflow-hidden">
      <SEO 
        title={t({ en: "Initialize Inquiry Protocol", fr: "Démarrer votre demande" })}
        description={t({
          en: "Ready to scale your technical infrastructure? Establish a secure channel with our lead architects to engineer your sovereign digital environment.",
          fr: "Prêt à faire évoluer votre infrastructure technique ? Contactez-nous pour concevoir votre environnement numérique souverain."
        })}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="self-start text-center lg:text-left pt-10 lg:pt-0"
        >
          <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] mb-4 md:mb-6 block font-bold">{t({ en: 'Communication Protocol', fr: 'Prise de contact' })}</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none mb-6 md:mb-8">
            {t({ en: 'Initialize', fr: 'Lancer votre' })} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container leading-tight">{t({ en: 'Inquiry', fr: 'Demande' })}</span>
          </h1>
          <p className="font-body text-on-surface-variant text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 md:mb-12 opacity-95">
            {t({
              en: 'Ready to scale your technical infrastructure? Our architects are standing by to engineer your sovereign digital environment.',
              fr: 'Prêt à faire évoluer votre infrastructure technique ? Nous sommes prêts à concevoir votre environnement numérique souverain.'
            })}
          </p>

          <div className="space-y-10 md:space-y-12">
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="text-center lg:text-left">
                <h4 className="font-headline text-[10px] uppercase tracking-widest text-on-surface font-bold mb-1">{t({ en: 'Direct Channel', fr: 'Contact direct' })}</h4>
                <p className="font-mono text-xs md:text-sm text-primary/60">contact@vanguardtechops.com</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              </div>
              <div className="text-center lg:text-left">
                <h4 className="font-headline text-[10px] uppercase tracking-widest text-on-surface font-bold mb-1">{t({ en: 'Secure Mesh (Voice)', fr: 'Ligne sécurisée (voix)' })}</h4>
                <p className="font-mono text-xs md:text-sm text-secondary/60">Node Relay: +1 (555) 010-ARCH</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-container-lowest p-6 md:p-10 lg:p-12 relative border border-white/5 shadow-2xl rounded-sm self-start"
        >
          {formState === 'submitted' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-primary/30 neon-glow-cobalt">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight mb-4 text-on-surface">{t({ en: 'Protocol Accepted', fr: 'Demande reçue' })}</h2>
              <p className="font-body text-on-surface-variant max-w-xs mx-auto text-xs md:text-sm leading-relaxed">
                {t({
                  en: 'Your inquiry has been successfully integrated into our queue. An architect will establish contact shortly.',
                  fr: 'Votre demande a bien été enregistrée. Nous vous recontacterons très prochainement.'
                })}
              </p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 md:mt-10 font-headline text-[9px] uppercase tracking-[0.3em] text-primary hover:text-white transition-colors"
              >
                {t({ en: '[ Reset Secure Channel ]', fr: '[ Nouvelle demande ]' })}
              </button>
            </motion.div>
          ) : formState === 'error' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-red-500/30">
                <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight mb-4 text-on-surface">{t({ en: 'Transmission Failed', fr: 'Échec de l’envoi' })}</h2>
              <p className="font-body text-on-surface-variant max-w-xs mx-auto text-xs md:text-sm leading-relaxed">
                {t({
                  en: 'A system error occurred during data transmission. Please try again or use our direct channel.',
                  fr: 'Une erreur est survenue pendant l’envoi. Veuillez réessayer ou nous écrire directement par e-mail.'
                })}
              </p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 md:mt-10 font-headline text-[9px] uppercase tracking-[0.3em] text-primary hover:text-white transition-colors"
              >
                {t({ en: '[ Retry Protocol ]', fr: '[ Réessayer ]' })}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>{t({ en: 'Identity Name', fr: 'Nom' })}</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    <input 
                      required
                      type="text" 
                      className={cn(inputClasses, "pl-10 md:pl-12")}
                      placeholder={t({ en: 'e.g. John Doe', fr: 'ex. Jean Dupont' })}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>{t({ en: 'Email Coordinates', fr: 'Adresse e-mail' })}</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    <input 
                      required
                      type="email" 
                      className={cn(inputClasses, "pl-10 md:pl-12")}
                      placeholder={t({ en: 'name@domain.com', fr: 'nom@domaine.fr' })}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>{t({ en: 'Service Domain', fr: 'Service souhaité' })}</label>
                <div className="relative">
                  <select 
                    required
                    className={cn(inputClasses, "appearance-none")}
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" disabled>{t({ en: 'Choose a service domain...', fr: 'Choisissez un service…' })}</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value} className="bg-surface-container-low">{s.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className={labelClasses}>{t({ en: 'Inquiry Specifications', fr: 'Votre projet' })}</label>
                <textarea 
                  required
                  rows={4}
                  className={cn(inputClasses, "resize-none")}
                  placeholder={t({ en: 'Provide project technical requirements...', fr: 'Décrivez votre projet et vos besoins techniques…' })}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={formState === 'submitting'}
                className="w-full bg-primary text-on-primary font-headline font-bold py-4 md:py-5 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-all active:scale-[0.98] shadow-md shadow-primary/20 disabled:opacity-50"
              >
                {formState === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {t({ en: 'Encrypting...', fr: 'Envoi…' })}
                  </span>
                ) : (
                  <>{t({ en: 'Transmit Request', fr: 'Envoyer la demande' })} <Send className="w-4 h-4" /></>
                )}
              </button>

              <p className="font-body text-[11px] text-on-surface-variant/50 text-center leading-relaxed">
                {t({
                  en: 'Your details are only used to reply to your request and are kept for 1 year. See our',
                  fr: 'Vos informations servent uniquement à répondre à votre demande et sont conservées 1 an. Voir notre'
                })}{' '}
                <Link to="/privacy" className="text-primary/80 underline underline-offset-2 hover:text-white">{t({ en: 'Privacy Policy', fr: 'politique de confidentialité' })}</Link>.
              </p>

              <div className="flex items-center justify-center gap-2 pt-2 md:pt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant/40 uppercase tracking-widest">{t({ en: 'Secure TLS 1.3 Transmission Active', fr: 'Transmission sécurisée TLS 1.3 active' })}</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
