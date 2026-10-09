import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Move } from 'lucide-react';
import { useLanguage } from '@/src/i18n/LanguageContext';

const InteractionIndicator = () => {
  const { t } = useLanguage();
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <AnimatePresence>
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onPointerDown={() => setHasInteracted(true)}
          className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing flex items-center justify-center bg-black/5 group-hover:bg-black/0 transition-colors duration-500"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 backdrop-blur-[2px]"
            >
              <Move className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold bg-background/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/5 shadow-xl">
              {t({ en: 'Interact to Explore', fr: 'Interagissez pour explorer' })}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractionIndicator;
