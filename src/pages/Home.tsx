import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Brain, Terminal, ShoppingBag, CheckCircle, Settings2, Code2, Activity, Headset, Bolt, Globe, Palette, Server, Key, Workflow, RefreshCw, BarChart, Star } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Vanguard Tech Ops" 
        description="We architect sovereign digital environments where security, intelligence, and performance converge into singular system resilience."
      />
      {/* Unified Hero & CTA Section */}
      <section className="relative min-h-screen lg:h-screen flex flex-col items-center justify-center lg:py-0 px-6 overflow-hidden">
        {/* Background Video */}
        <video 
          loop 
          muted 
          playsInline
          poster={`${import.meta.env.BASE_URL}assets/services/cloud/cloud-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}assets/home-banner.mp4`} type="video/mp4" />
        </video>
        
        {/* Overlay for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]"></div>
        
        {/* Decorative 3D Glass elements */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          animate={{ opacity: 0.1, x: 0, rotate: 12 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 glass-card rounded-xl hidden lg:block z-[2]"
        ></motion.div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 pt-20 lg:pt-0">
          <div className="text-center lg:text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h2 className="font-body text-primary-fixed-dim uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">
                Foundational Excellence
              </h2>
              <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-tight">
                Technological <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Superiority</span>
              </h1>
              <p className="font-body text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl lg:mx-0 mx-auto leading-relaxed opacity-80">
                We architect sovereign digital environments where security, intelligence, and performance converge into singular system resilience.
              </p>
              
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start w-full sm:w-auto">
                <Link to="/contact" className="px-8 py-4 bg-primary-container text-white font-headline font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 hover:bg-primary-container/80 transition-all active:scale-95 shadow-[0_0_15px_rgba(177,197,255,0.1)]">
                  Initialize Protocol <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Auto-presenting Popout Modal */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-3 md:gap-4 relative z-20 w-full lg:w-auto"
          >
            {[
              { title: "Virtualization & Cloud", icon: Server, path: "/services/cloud" },
              { title: "Precision Web & Ecom Development", icon: Globe, path: "/services/web-dev" },
              { title: "AI & Automation", icon: Brain, path: "/services/ai-systems" },
              { title: "Shopify & WordPress Development", icon: ShoppingBag, path: "/services/shopify" },
              { title: "Graphic & Web Design", icon: Palette, path: "/services/design" },
            ].map((item, idx) => (
              <Link key={idx} to={item.path} className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className="bg-surface-container-lowest border border-primary/20 p-4 md:p-5 rounded-lg flex items-center gap-4 md:gap-5 shadow-[0_0_10px_rgba(177,197,255,0.05)] min-w-0 w-full lg:min-w-[340px] hover:shadow-[0_0_20px_rgba(177,197,255,0.1)] hover:border-primary transition-all duration-500 group hover:scale-[1.02]"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 bg-surface-container-highest/30 rounded-md flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/40 transition-all duration-300">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <span className="font-headline font-bold text-[10px] md:text-xs text-on-surface uppercase tracking-[0.1em]">{item.title}</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Unified CTA Footer */}
        <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-7xl px-6 mt-16 md:mt-24 text-center border-t border-outline-variant/30 pt-12 transform-gpu"
        >
            <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-6 tracking-tighter uppercase">
                Ready to Architect Your <span className="italic font-light text-primary">Sovereignty</span>?
            </h2>
            <Link to="/about" className="px-8 sm:px-12 py-4 sm:py-5 border border-outline-variant/60 text-on-surface font-headline font-bold tracking-widest uppercase hover:bg-surface-container-highest/20 transition-all text-[10px] sm:text-xs md:text-sm">
                View Technical Manifesto
            </Link>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="text-center mb-12 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 block font-bold"
          >
            Verified Performance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-on-surface uppercase"
            >
            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-[0.15em]">REVIEWS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {/* Real client feedback only: name, role, service and their words (with their permission). */}
          {[
            {
              name: "Marcus Thorne",
              role: "Tech Manager, SaaS Solutions",
              service: "AI & Automation",
              content: "Implementing their AI & Automation suite revolutionized our internal workflows. As a tech manager, I value stability and efficiency; their autonomous agents delivered both, drastically reducing our operational overhead.",
              stars: 5
            },
            {
              name: "Maya Patel",
              role: "Entrepreneur, Online Seller",
              service: "Web & E-commerce",
              content: "The web and E-commerce development they provided completely transformed my storefront. My site is now faster, more secure, and perfectly tailored for high-volume sales. My conversion rates have never looked better.",
              stars: 5
            },
            {
              name: "Alex Rivera",
              role: "Cybersecurity Student",
              service: "Security & Cloud",
              content: "For my research, I analyzed their virtualization protocols and found their implementation of digital sovereignty and hardened environments to be genuinely impressive. The best-practice architecture they use is a gold standard.",
              stars: 5
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className="glass-card p-8 md:p-10 flex flex-col justify-between gap-8 hover:border-primary/20 transition-colors duration-500"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary opacity-80" />
                    ))}
                  </div>
                  <span className="font-body text-xs text-on-surface-variant opacity-60 whitespace-nowrap">{t.service}</span>
                </div>

                <p className="font-body text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  {t.content}
                </p>
              </div>

              <div className="pt-6 border-t border-outline-variant/10 flex items-center gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-headline font-bold text-primary text-sm">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-body font-semibold text-on-surface text-base">{t.name}</h4>
                  <p className="font-body text-xs text-on-surface-variant opacity-70">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-32 px-6 bg-surface-container-lowest/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <span className="font-body text-secondary tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 font-bold">Unwavering Standards</span>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl font-bold text-on-surface uppercase tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container italic pr-[0.15em]">Guarantee</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "100% SECURE & RELIABLE", icon: Shield },
              { title: "DATA SOVEREIGNTY ASSURED", icon: Key },
              { title: "PERFORMANCE OPTIMIZATION", icon: Bolt }
            ].map((g, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 md:p-12 text-center space-y-8 group hover:bg-surface-container-highest/10 transition-all duration-500 border border-white/5"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-surface-container-high/50 p-[1px]">
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <g.icon className="w-6 h-6 sm:w-8 sm:h-8 text-on-surface opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
                
                <h3 className="font-headline text-base sm:text-lg font-bold tracking-widest text-on-surface uppercase">{g.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-24 uppercase tracking-tighter text-on-surface">
          Institutional <span className="text-primary italic">Metrics</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 text-center">
          {[
            { value: "99.9%", label: "SUCCESS RATE" },
            { value: "80+", label: "PROJECTS COMPLETED" },
            { value: "4+", label: "YEARS OF EXCELLENCE" }
          ].map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4 group"
            >
              <div className="font-headline text-6xl sm:text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container tracking-tighter">
                {m.value}
              </div>
              <div className="font-body text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.4em] text-outline uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
