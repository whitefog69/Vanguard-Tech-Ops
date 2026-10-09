import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Brain, Terminal, ShoppingBag, CheckCircle, Settings2, Code2, Activity, Headset, Bolt, Globe, Palette, Server, Key, Workflow, RefreshCw, BarChart } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '@/src/i18n/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <SEO
        title="Services"
        description={t({
          en: "Our services forge the ultimate digital advantage. Spanning elite cloud virtualization, autonomous AI workflows, high-converting e-commerce builds, and striking visual design.",
          fr: "Nos services vous donnent un avantage numérique décisif : virtualisation cloud de haut niveau, workflows IA autonomes, boutiques e-commerce qui convertissent et design visuel marquant."
        })}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={`${import.meta.env.BASE_URL}assets/services-banner.mp4`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}assets/services-banner.mp4`} type="video/mp4" />
        </video>
        
        {/* Overlay for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-primary-fixed-dim uppercase tracking-[0.3em] text-sm sm:text-base mb-6"
            >
              {t({ en: 'Foundational Excellence', fr: 'L’excellence comme fondation' })}
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-[clamp(2.25rem,0.75rem+6.5vw,8rem)] font-bold tracking-tighter text-on-surface mb-8 leading-tight"
            >
              {t({ en: 'Architects of', fr: 'Architectes de la' })} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t({ en: 'Digital Sovereignty', fr: 'Souveraineté Numérique' })}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-on-surface-variant text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-10 md:mb-12 opacity-80"
            >
              {t({
                en: 'Our services forge the ultimate digital advantage. Spanning elite cloud virtualization, autonomous AI workflows, high-converting e-commerce builds, and striking visual design, we engineer ecosystems built to dominate.',
                fr: 'Nos services vous donnent un avantage numérique décisif. De la virtualisation cloud haut de gamme aux workflows IA autonomes, en passant par des boutiques e-commerce qui convertissent et un design visuel marquant, nous bâtissons des écosystèmes conçus pour dominer.'
              })}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/contact" className="px-10 py-5 bg-primary-container text-white font-headline font-bold tracking-widest uppercase text-base flex items-center justify-center gap-3 hover:bg-primary-container/80 transition-all active:scale-95">
                {t({ en: 'Contact us', fr: 'Nous contacter' })} <ArrowRight className="w-6 h-6" />
              </Link>
              <Link to="/about" className="px-10 py-5 border border-outline-variant/30 text-on-surface font-headline font-bold tracking-widest uppercase text-base hover:bg-surface-container-highest/20 transition-all">
                {t({ en: 'Technical Manifesto', fr: 'Manifeste technique' })}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 1. Virtualization & Cloud */}
          <Link to="/services/cloud" className="lg:col-span-8">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 sm:p-8 xl:p-12 flex flex-col justify-between group hover:border-primary/30 transition-all neon-glow-cobalt overflow-hidden relative h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/cloud/cloud-bg.png`} 
                  alt=""
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 via-surface-container-low/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-violet border border-secondary/20">
                    <Server className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-headline text-[clamp(1.5rem,1rem+2vw,3rem)] min-w-0 font-bold mb-0 text-on-surface leading-tight uppercase">{t({ en: 'Virtualization & Cloud', fr: 'Virtualisation & Cloud' })}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-10">
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">{t({ en: 'Server Creation & Management', fr: 'Création & gestion de serveurs' })}</p>
                        <p className="text-xs text-on-surface-variant opacity-60">{t({ en: 'End-to-end setup and oversight.', fr: 'Mise en place et supervision de bout en bout.' })}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">{t({ en: 'AWS & Cloud Infrastructure', fr: 'AWS & infrastructure cloud' })}</p>
                        <p className="text-xs text-on-surface-variant opacity-60">{t({ en: 'Expert orchestration of AWS ecosystems.', fr: 'Orchestration experte des écosystèmes AWS.' })}</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">{t({ en: 'Oracle Cloud Solutions', fr: 'Solutions Oracle Cloud' })}</p>
                        <p className="text-xs text-on-surface-variant opacity-60">{t({ en: 'Specialized OCI deployment.', fr: 'Déploiement OCI spécialisé.' })}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">{t({ en: 'Enterprise Virtualization', fr: 'Virtualisation d’entreprise' })}</p>
                        <p className="text-xs text-on-surface-variant opacity-60">{t({ en: 'Precise environment configuration.', fr: 'Configuration précise des environnements.' })}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 2. Precision Web & Ecom Development */}
          <Link to="/services/web-dev" className="lg:col-span-4">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-surface-container-low p-6 sm:p-8 xl:p-12 flex flex-col justify-between border border-outline-variant/10 neon-glow-violet group hover:border-secondary-container/40 transition-all overflow-hidden relative h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/web/web-bg.png`} 
                  alt=""
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 via-surface-container-low/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-violet border border-secondary/20">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-headline text-[clamp(1.375rem,1rem+1.25vw,2.25rem)] min-w-0 font-bold text-on-surface leading-tight uppercase">{t({ en: 'Web & Ecom Engineering', fr: 'Ingénierie Web & E-commerce' })}</h3>
                </div>
                <p className="text-on-surface-variant text-sm md:text-base mb-10 leading-relaxed">{t({ en: 'Bespoke builds focused on speed and clean architecture.', fr: 'Des réalisations sur mesure, axées sur la rapidité et une architecture propre.' })}</p>
                <ul className="space-y-6">
                  {t({
                    en: [
                      "Custom WordPress Engineering",
                      "Shopify Platform Development",
                      "Custom Web Development",
                      "High-End UI/UX Optimization"
                    ],
                    fr: [
                      "Développement WordPress sur mesure",
                      "Développement sur Shopify",
                      "Développement web sur mesure",
                      "Optimisation UI/UX haut de gamme"
                    ]
                  }).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      <span className="font-headline text-[11px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Link>

          {/* 3. AI & Automation */}
          <Link to="/services/ai-systems" className="lg:col-span-5">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 sm:p-8 xl:p-12 relative group border-outline-variant/5 neon-glow-cobalt overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/ai/ai-bg.png`} 
                  alt=""
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/20 flex items-center justify-center neon-glow-cobalt border border-primary/20">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-[clamp(1.375rem,1rem+1.25vw,2.25rem)] min-w-0 font-bold text-on-surface uppercase tracking-tight">{t({ en: 'AI & Automation', fr: 'IA & Automatisation' })}</h3>
                </div>
                <div className="space-y-6 md:space-y-8 flex-grow">
                  {[
                    { title: t({ en: "Intelligent AI Bots", fr: "Bots IA intelligents" }), desc: t({ en: "Specialized logic handlers.", fr: "Des assistants pour vos règles métier." }) },
                    { title: t({ en: "AI Integration", fr: "Intégration de l’IA" }), desc: t({ en: "Embedding AI in existing software.", fr: "L’IA intégrée à vos logiciels existants." }) },
                    { title: t({ en: "Custom App Dev", fr: "Applications sur mesure" }), desc: t({ en: "Engineering proprietary business apps.", fr: "Des applications métier conçues pour vous." }) },
                    { title: t({ en: "API Integrations", fr: "Intégrations API" }), desc: t({ en: "Secure, high-speed API bridges.", fr: "Des connexions API sûres et rapides." }) },
                    { title: t({ en: "Workflow Automation", fr: "Automatisation des processus" }), desc: t({ en: "Eliminating manual overhead.", fr: "Fini les tâches manuelles répétitives." }) }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="font-mono text-outline-variant text-xs pt-1">0{idx + 1}</div>
                      <div>
                        <h4 className="font-headline text-on-surface text-xs md:text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                        <p className="text-[11px] text-on-surface-variant opacity-60 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 4. Shopify Integrations & App Development */}
          <Link to="/services/shopify" className="lg:col-span-7">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-surface-container-low p-6 sm:p-8 xl:p-12 relative overflow-hidden group border border-outline-variant/10 neon-glow-cobalt transition-all h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/shopify/shopify-bg.png`} 
                  alt=""
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low/90 via-surface-container-low/40 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/20 flex items-center justify-center neon-glow-cobalt border border-primary/20">
                    <ShoppingBag className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-[clamp(1.375rem,1rem+1.25vw,2.25rem)] min-w-0 font-bold text-on-surface uppercase tracking-tight">{t({ en: 'Shopify & WordPress Development', fr: 'Développement Shopify & WordPress' })}</h3>
                </div>
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {[
                    { icon: ShoppingBag, title: t({ en: "App Development", fr: "Développement d’apps" }) },
                    { icon: Code2, title: t({ en: "Plugin Engineering", fr: "Création de plugins" }) },
                    { icon: Workflow, title: t({ en: "Automation", fr: "Automatisation" }) },
                    { icon: RefreshCw, title: t({ en: "Logic Syncing", fr: "Synchronisation des données" }) }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 md:p-6 bg-surface-container-highest/20 rounded-lg border border-outline-variant/10">
                      <item.icon className="text-primary w-6 h-6 md:w-8 md:h-8 mb-4" />
                      <p className="font-headline text-[10px] md:text-xs text-on-surface font-bold uppercase tracking-wider break-words">{item.title}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 p-5 md:p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <BarChart className="text-primary w-6 h-6 md:w-8 md:h-8" />
                  <p className="font-headline text-[10px] md:text-xs text-on-surface font-bold uppercase tracking-[0.2em]">{t({ en: 'Store Performance Scaling', fr: 'Montée en charge de votre boutique' })}</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 5. Graphic & Web Design */}
          <Link to="/services/design" className="lg:col-span-12">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 sm:p-8 xl:p-12 relative group border-outline-variant/5 neon-glow-violet overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/design/design-bg.png`} 
                  alt=""
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
              </div>

              <div className="absolute top-0 right-0 p-12 md:p-16 opacity-5">
                <Palette className="w-64 h-64 md:w-96 md:h-96 text-secondary" />
              </div>
              <div className="relative z-10 flex flex-col gap-8 md:gap-16 md:flex-row lg:items-center">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-violet border border-secondary/20">
                    <Palette className="w-8 h-8 text-secondary" />
                  </div>
                    <h3 className="font-headline text-[clamp(1.5rem,1rem+2vw,3rem)] min-w-0 font-bold text-on-surface uppercase tracking-tight">{t({ en: 'Graphic & Web Design', fr: 'Design Graphique & Web' })}</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm md:text-base lg:text-xl leading-relaxed mb-10 max-w-2xl">{t({ en: 'Crafting cohesive visual identities and visually striking website layouts that align with modern aesthetics.', fr: 'Création d’identités visuelles cohérentes et de maquettes web marquantes, dans l’air du temps.' })}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    {t({
                      en: [
                        "Brand Identity & Logo Creation",
                        "Custom Web Interface Design",
                        "Digital Asset & Marketing Graphics",
                        "UI/UX Prototyping & Wireframing",
                        "Responsive Visual Design"
                      ],
                      fr: [
                        "Identité de marque & création de logo",
                        "Design d’interfaces web sur mesure",
                        "Visuels digitaux & supports marketing",
                        "Prototypage UI/UX & wireframes",
                        "Design responsive"
                      ]
                    }).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="font-headline text-[10px] md:text-xs uppercase tracking-widest text-on-surface font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
