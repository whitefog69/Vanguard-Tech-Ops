import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Zap, Code2, Palette, Database, Layers, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface PanelProps {
  title: string;
  focus: string;
  icon: any;
  services: { name: string; desc: string }[];
}

const ArchitecturePanel = ({ title, focus, icon: Icon, services }: PanelProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={cn(
      "group relative overflow-hidden p-6 md:p-10 rounded-2xl border border-white/5 bg-surface-container-low/20 transition-all duration-500 hover:scale-[1.02]",
      "hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,71,171,0.05)]"
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 border border-primary/20 group-hover:border-primary/40 shadow-[0_0_15px_rgba(177,197,255,0.05)]">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary opacity-80 group-hover:opacity-100 group-hover:text-primary-container transition-all duration-300" />
        </div>
        <div>
          <h3 className="font-headline font-bold uppercase tracking-widest text-on-surface leading-tight text-sm md:text-base">{title}</h3>
          <p className="text-[9px] md:text-[10px] text-primary uppercase tracking-[0.2em] font-bold">{focus}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {services.map((s, i) => (
          <li key={i} className="border-l border-outline-variant/20 pl-4 group-hover:border-primary/50 transition-colors">
            <p className="font-headline text-[11px] md:text-xs font-bold uppercase text-on-surface mb-1">{s.name}</p>
            <p className="font-body text-[10px] md:text-xs text-on-surface-variant/60">{s.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface py-0 md:py-32 px-6 md:px-8">
      <SEO 
        title="Technical Manifesto & Mission" 
        description="Learn about our story, mission, and the architecture process behind our technical sovereignty. Transforming intricate technical challenges into streamlined, intuitive ecosystems."
      />
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16 md:mb-32 py-16 md:py-24 px-6 md:px-16 overflow-hidden rounded-3xl border border-[#4DA6FF]/20 bg-surface/40 backdrop-blur-xl shadow-[0_0_50px_rgba(77,166,255,0.05)]">
          {/* Lighting / Overlays - Digital Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(77,166,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,255,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
          />

          <header className="relative z-10 text-center mb-12 md:mb-20">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-headline text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-[0.1em] text-[#FFFFFF] leading-tight"
              style={{
                textShadow: "0 0 30px rgba(77,166,255,0.4), 0 0 10px rgba(255,255,255,0.2)"
              }}
            >
              ABOUT US
            </motion.h1>
          </header>

          <section className="relative z-10 text-center max-w-4xl mx-auto space-y-10 md:space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-headline text-xs md:text-2xl font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 text-[#4DA6FF]">OUR STORY</h2>
              <p className="font-body text-sm md:text-xl font-light text-[#E0E0E0] leading-relaxed max-w-3xl mx-auto">
                Founded on the principles of robust systems architecture and advanced cybersecurity, we understand that true luxury in the digital space means flawless performance and total control. We bridge the gap between complex engineering and elegant design, transforming intricate technical challenges into streamlined, intuitive ecosystems.
              </p>
            </motion.div>

            {/* Glowing Divider */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="relative h-[1px] md:h-[2px] w-4/5 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4DA6FF] to-[#E0E0E0] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4DA6FF] to-[#E0E0E0] blur-[4px] opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="font-headline text-xs md:text-2xl font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 text-[#4DA6FF]">THE MISSION</h2>
              <p className="font-body text-sm md:text-xl font-light text-[#E0E0E0] leading-relaxed max-w-3xl mx-auto">
                At Vanguard Tech Ops, we don't just build applications; we architect digital authority. We empower your business to scale, innovate, and lead through our core specializations.
              </p>
            </motion.div>
          </section>
        </div>

        <section className="py-12 md:py-20">
          <h2 className="font-headline text-xl md:text-3xl font-bold uppercase tracking-widest mb-10 md:mb-16 text-primary text-center">The Architecture Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArchitecturePanel 
              title="Architecture" 
              focus="The Blueprint" 
              icon={Database}
              services={[
                { name: "Cloud & Virtualization", desc: "Designing the scalable server environment, virtual network topology, and security perimeters." },
                { name: "Graphic & Web Design", desc: "Wireframing the user experience, designing the UI, and establishing visual brand guidelines." }
              ]}
            />
            <ArchitecturePanel 
              title="Engineering" 
              focus="The Build" 
              icon={Code2}
              services={[
                { name: "Precision Web & App Dev", desc: "Writing core application logic, front-end components, and backend APIs." },
                { name: "AI & Automation", desc: "Developing intelligent bot flows, automating processes, and ML models." },
                { name: "Shopify & WordPress", desc: "Customizing e-commerce architecture, headless storefronts, or integration channels." }
              ]}
            />
            <ArchitecturePanel 
              title="Deployment" 
              focus="The Launch" 
              icon={Rocket}
              services={[
                { name: "Cloud & Virtualization", desc: "Executing final production deployment and locking down endpoints." },
                { name: "Finalization", desc: "Pushing web, app, and AI systems live with seamless automated workflows." }
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
