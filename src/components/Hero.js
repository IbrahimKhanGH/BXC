import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiArrowRight } from 'react-icons/fi';
import ScrollIndicator from './ScrollIndicator';
import roofBackground from '../assets/hero-roof.jpg';

function Hero() {
  const stagger = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const rise = {
    initial: { opacity: 0, y: 22 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] md:min-h-[92vh] flex flex-col text-white overflow-hidden"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={roofBackground}
          alt="BXC Roofing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/85 via-charcoal-950/40 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />
      </motion.div>

      {/* MAIN CONTENT BLOCK */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-20 px-6 md:px-10 max-w-7xl mx-auto w-full pt-32 sm:pt-36 md:pt-44 pb-14 md:pb-20"
      >
        {/* Eyebrow */}
        <motion.div variants={rise} className="mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400">
            <span className="w-10 h-px bg-royal-500" />
            <span>East Texas · Locally Owned · Licensed & Insured</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={rise}
          className="display-xxl text-[56px] sm:text-7xl md:text-8xl lg:text-[132px] leading-[0.95] sm:leading-[0.92] md:leading-[0.9] text-white max-w-5xl"
        >
          The Most
          <br />
          <span className="text-royal-400">Trusted Roofers</span>
          <br />
          In East Texas.
        </motion.h1>

        {/* Subhead */}
        <motion.div
          variants={rise}
          className="mt-8 md:mt-10 hairline max-w-md ml-0 mr-auto"
        />
        <motion.p
          variants={rise}
          className="mt-7 md:mt-8 max-w-2xl text-base md:text-lg text-white/85 font-medium leading-relaxed"
        >
          Locally owned and operated since 2008. A{' '}
          <span className="text-white font-bold">10-year labor warranty</span> on
          every roof, a 100% satisfaction guarantee, and a team that treats
          your home like it's their own.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={rise}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
        >
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('contact-form')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center gap-3 bg-royal-600 hover:bg-royal-500 text-white px-8 py-4 md:py-5 text-[12px] md:text-[13px] uppercase tracking-eyebrow font-bold transition-colors shadow-[0_8px_40px_rgba(37,99,235,0.35)]"
          >
            Book Free Inspection
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+19033203030"
            className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white text-white px-8 py-4 md:py-5 text-[12px] md:text-[13px] uppercase tracking-eyebrow font-bold transition-colors"
          >
            <FiPhone />
            Call (903) 320-3030
          </a>
        </motion.div>
      </motion.div>

      {/* STATS FOOTER — clearly separated zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="relative z-20 mt-auto px-6 md:px-10 max-w-7xl mx-auto w-full pt-14 sm:pt-16 md:pt-24 pb-10 md:pb-14"
      >
        <div className="hairline mb-7 md:mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {[
            ['1200+', 'Projects Completed'],
            ['5.0★', 'Customer Rating'],
            ['25+', 'Years Experience'],
            ['100%', 'Satisfaction'],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col">
              <div className="font-display text-4xl md:text-5xl text-white leading-none">
                {num}
              </div>
              <div className="mt-2.5 text-[10px] uppercase tracking-eyebrow text-white/60 font-bold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-3 left-0 right-0 z-30 h-12 hidden lg:block">
        <ScrollIndicator
          targetId="services"
          label="Scroll"
          className="bottom-0"
        />
      </div>
    </section>
  );
}

export default Hero;
