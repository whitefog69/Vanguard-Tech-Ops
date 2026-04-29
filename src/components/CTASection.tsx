import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-xs mx-auto text-center relative"
      >
        <div className="relative z-10">
          <Link to="/contact" className="inline-block px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-primary-container to-secondary-container text-white font-headline font-bold tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform active:scale-95 text-xs md:text-sm lg:text-base">
            Contact us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
