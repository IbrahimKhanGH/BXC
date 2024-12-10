import React from 'react';
import { motion } from 'framer-motion';

function CTAButton({ 
  text, 
  onClick, 
  type = 'primary', 
  size = 'medium',
  icon = null,
  scrollTo = "contact-form"
}) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center";
  
  const typeStyles = {
    primary: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white",
    secondary: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900"
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const handleClick = () => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    if (onClick) onClick();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${typeStyles[type]} ${sizeStyles[size]} shadow-lg hover:shadow-xl`}
      onClick={handleClick}
    >
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
}

export default CTAButton; 