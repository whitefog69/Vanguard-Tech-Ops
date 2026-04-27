import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Brain, Terminal, ShoppingBag, CheckCircle, Settings2, Code2, Activity, Headset, Bolt, Globe, Palette, Server, Key, Workflow, RefreshCw, BarChart } from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Services" 
        description="Our services forge the ultimate digital advantage. Spanning elite cloud virtualization, autonomous AI workflows, high-converting e-commerce builds, and striking visual design."
      />
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
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
              Foundational Excellence
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-on-surface mb-8 leading-tight"
            >
              Architects of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Sovereignty</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-on-surface-variant text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-10 md:mb-12 opacity-80"
            >
              Our services forge the ultimate digital advantage. Spanning elite cloud virtualization, autonomous AI workflows, high-converting e-commerce builds, and striking visual design, we engineer ecosystems built to dominate.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/contact" className="px-10 py-5 bg-primary-container text-white font-headline font-bold tracking-widest uppercase text-base flex items-center justify-center gap-3 hover:bg-primary-container/80 transition-all active:scale-95">
                Initialize Protocol <ArrowRight className="w-6 h-6" />
              </Link>
              <Link to="/about" className="px-10 py-5 border border-outline-variant/30 text-on-surface font-headline font-bold tracking-widest uppercase text-base hover:bg-surface-container-highest/20 transition-all">
                Technical Manifesto
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Virtualization & Cloud */}
          <Link to="/services/cloud" className="md:col-span-8">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card p-8 md:p-12 flex flex-col justify-between group hover:border-primary/30 transition-all neon-glow-cobalt overflow-hidden relative h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/cloud/cloud-bg.png`} 
                  alt="Virtualization & Cloud Background" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 via-surface-container-low/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-violet border border-secondary/20">
                    <Server className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-0 text-on-surface leading-tight uppercase">Virtualization & Cloud</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-10">
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">Server Creation & Management</p>
                        <p className="text-xs text-on-surface-variant opacity-60">End-to-end setup and oversight.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">AWS & Cloud Infrastructure</p>
                        <p className="text-xs text-on-surface-variant opacity-60">Expert orchestration of AWS ecosystems.</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">Oracle Cloud Solutions</p>
                        <p className="text-xs text-on-surface-variant opacity-60">Specialized OCI deployment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-primary w-6 h-6 mt-1 shrink-0" />
                      <div>
                        <p className="font-headline text-on-surface font-bold text-xs md:text-sm uppercase tracking-widest">Enterprise Virtualization</p>
                        <p className="text-xs text-on-surface-variant opacity-60">Precise environment configuration.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 2. Precision Web & Ecom Development */}
          <Link to="/services/web-dev" className="md:col-span-4">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-surface-container-low p-8 md:p-12 flex flex-col justify-between border border-outline-variant/10 neon-glow-violet group hover:border-secondary-container/40 transition-all overflow-hidden relative h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/web/web-bg.png`} 
                  alt="Precision Web & Ecom Development Background" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 via-surface-container-low/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-violet border border-secondary/20">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface leading-tight uppercase">Web & Ecom Engineering</h3>
                </div>
                <p className="text-on-surface-variant text-sm md:text-base mb-10 leading-relaxed">Bespoke builds focused on speed and clean architecture.</p>
                <ul className="space-y-6">
                  {[
                    "Custom WordPress Engineering",
                    "Shopify Platform Development",
                    "Custom Web Development",
                    "High-End UI/UX Optimization"
                  ].map((item, idx) => (
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
          <Link to="/services/ai-systems" className="md:col-span-5">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card p-8 md:p-12 relative group border-outline-variant/5 neon-glow-cobalt overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/ai/ai-bg.png`} 
                  alt="AI & Automation Background" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/20 flex items-center justify-center neon-glow-cobalt border border-primary/20">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tight">AI & Automation</h3>
                </div>
                <div className="space-y-6 md:space-y-8 flex-grow">
                  {[
                    { title: "Intelligent AI Bots", desc: "Specialized logic handlers." },
                    { title: "AI Integration", desc: "Embedding AI in existing software." },
                    { title: "Custom App Dev", desc: "Engineering proprietary business apps." },
                    { title: "API Integrations", desc: "Secure, high-speed API bridges." },
                    { title: "Workflow Automation", desc: "Eliminating manual overhead." }
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
          <Link to="/services/shopify" className="md:col-span-7">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-surface-container-low p-8 md:p-12 relative overflow-hidden group border border-outline-variant/10 neon-glow-cobalt transition-all h-full"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/shopify/shopify-bg.png`} 
                  alt="Shopify Integrations Background" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low/90 via-surface-container-low/40 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/20 flex items-center justify-center neon-glow-cobalt border border-primary/20">
                    <ShoppingBag className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tight">Shopify & WordPress Development</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                  {[
                    { icon: ShoppingBag, title: "App Development" },
                    { icon: Code2, title: "Plugin Engineering" },
                    { icon: Workflow, title: "Automation" },
                    { icon: RefreshCw, title: "Logic Syncing" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 md:p-6 bg-surface-container-highest/20 rounded-lg border border-outline-variant/10">
                      <item.icon className="text-primary w-6 h-6 md:w-8 md:h-8 mb-4" />
                      <p className="font-headline text-[10px] md:text-xs text-on-surface font-bold uppercase tracking-widest">{item.title}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 p-5 md:p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <BarChart className="text-primary w-6 h-6 md:w-8 md:h-8" />
                  <p className="font-headline text-[10px] md:text-xs text-on-surface font-bold uppercase tracking-[0.2em]">Store Performance Scaling</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 5. Graphic & Web Design */}
          <Link to="/services/design" className="md:col-span-12">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card p-8 md:p-12 relative group border-outline-variant/5 neon-glow-violet overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/services/design/design-bg.png`} 
                  alt="Graphic & Web Design Background" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
              </div>

              <div className="absolute top-0 right-0 p-12 md:p-16 opacity-5">
                <Palette className="w-64 h-64 md:w-96 md:h-96 text-secondary" />
              </div>
              <div className="relative z-10 flex flex-col gap-8 md:gap-16 md:flex-row lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-violet border border-secondary/20">
                    <Palette className="w-8 h-8 text-secondary" />
                  </div>
                    <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface uppercase tracking-tight">Graphic & Web Design</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm md:text-base lg:text-xl leading-relaxed mb-10 max-w-2xl">Crafting cohesive visual identities and visually striking website layouts that align with modern aesthetics.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    {[
                      "Brand Identity & Logo Creation",
                      "Custom Web Interface Design",
                      "Digital Asset & Marketing Graphics",
                      "UI/UX Prototyping & Wireframing",
                      "Responsive Visual Design"
                    ].map((item, idx) => (
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold text-on-surface mb-8 md:mb-10 tracking-tighter uppercase leading-tight">
              Ready to Architect Your <br className="sm:hidden" /> <span className="italic font-light">Sovereignty</span>?
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed text-sm md:text-base lg:text-lg">
              Secure a strategic consultation with our lead technical architects to map your infrastructure's evolution.
            </p>
            <Link to="/contact" className="inline-block px-12 md:px-16 py-6 md:py-7 bg-gradient-to-r from-primary-container to-secondary-container text-white font-headline font-bold tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform active:scale-95 text-xs md:text-sm lg:text-base">
              Initiate Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
