import React from 'react';
import { motion } from 'framer-motion';

function ScrollIndicator({ targetId, label = 'Scroll', className = '' }) {
  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      onClick={scrollToTarget}
      className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer ${className}`}
    >
      <span className="text-[10px] uppercase tracking-eyebrow text-white/60 font-semibold">
        {label}
      </span>
      <motion.div
        animate={{ height: ['12px', '36px', '12px'], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-px bg-royal-500"
      />
    </motion.button>
  );
}

export default ScrollIndicator;
