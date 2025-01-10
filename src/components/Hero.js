import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import ScrollIndicator from './ScrollIndicator';
import roofBackground from '../assets/hero-roof.jpg';
import { FaLink } from 'react-icons/fa';

function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex flex-col justify-center text-white px-4 md:px-0">
      {/* Background Image with enhanced gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        {/* Enhanced gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-gray-900 z-20"></div>
        <img 
          src={roofBackground}
          alt="Professional Roofing"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-30 container mx-auto px-4 text-center py-12 md:py-0"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
        >
          Protect Your Home With<br />
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-blue-400"
          >
            The Most Trusted Roofing Company
          </motion.span><br />
          in East Texas
        </motion.h1>

        <motion.p 
          variants={fadeIn}
          className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto"
        >
          Locally owned and operated with a 10-Year Labor Warranty included.
          Professional roofing services with a 100% satisfaction guarantee.
        </motion.p>

        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12"
        >
          <CTAButton 
            text="Schedule a Free Inspection"
            type="primary"
            size="large"
            className="w-full sm:w-auto"
          />
          <a 
            href="https://linktr.ee/bxcroofing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
          >
            <FaLink className="text-xl" />
            Our Links
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "1200+", text: "Projects Completed" },
            { number: "5.0★", text: "Customer Rating" },
            { number: "25+", text: "Years Experience" },
            { number: "100%", text: "Satisfaction" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 sm:p-4"
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-blue-400"
              >
                {item.number}
              </motion.div>
              <div className="text-xs sm:text-sm">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent z-10"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 h-24 flex items-end justify-center z-20">
        <ScrollIndicator targetId="problem-solution" />
      </div>
    </div>
  );
}

export default Hero;
