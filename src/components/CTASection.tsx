import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
