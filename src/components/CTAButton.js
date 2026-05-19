import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

function CTAButton({
  text,
  onClick,
  type = 'primary',
  size = 'medium',
  scrollTo = 'contact-form',
  className = '',
}) {
  const typeStyles = {
    primary:
      'bg-royal-600 hover:bg-royal-500 text-white border border-royal-600 hover:border-royal-500',
    ghost:
      'bg-transparent text-white hover:bg-white/5 border border-white/25 hover:border-white',
    light:
      'bg-white text-charcoal-950 hover:bg-royal-500 hover:text-white border border-white',
  };

  const sizeStyles = {
    small: 'px-5 py-3 text-[11px]',
    medium: 'px-7 py-4 text-xs',
    large: 'px-9 py-5 text-sm',
  };

  const handleClick = () => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) onClick();
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-3 font-bold uppercase tracking-eyebrow transition-colors duration-300 ${typeStyles[type]} ${sizeStyles[size]} ${className}`}
    >
      <span>{text}</span>
      <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
}

export default CTAButton;
