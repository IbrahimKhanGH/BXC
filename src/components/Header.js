import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import bxcLogo from '../assets/bxclogo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact-form', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/90 backdrop-blur-xl border-b border-white/5 py-2.5'
            : 'bg-gradient-to-b from-black/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => go(e, 'hero')}
              className="flex items-center gap-3"
            >
              <img
                src={bxcLogo}
                alt="BXC Roofing"
                className="h-10 md:h-12 brightness-[1.6]"
              />
            </a>

            {/* Center nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className="text-[11px] uppercase tracking-eyebrow font-bold text-white/75 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right: phone + CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+19033203030"
                className="flex items-center gap-2 text-white hover:text-royal-300 transition-colors"
              >
                <FiPhone className="text-royal-400" />
                <span className="font-bold tracking-wide">(903) 320-3030</span>
              </a>
              <a
                href="#contact-form"
                onClick={(e) => go(e, 'contact-form')}
                className="text-[11px] uppercase tracking-eyebrow font-bold text-white bg-royal-600 hover:bg-royal-500 px-5 py-3 transition-colors"
              >
                Free Inspection
              </a>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white"
              aria-label="Menu"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal-950/97 backdrop-blur-xl md:hidden pt-24"
          >
            <div className="px-8 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-5xl text-white border-b border-white/10 pb-3"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="tel:+19033203030"
                className="mt-6 flex items-center gap-3 text-royal-400 text-xl font-bold"
              >
                <FiPhone /> (903) 320-3030
              </a>
              <a
                href="#contact-form"
                onClick={(e) => go(e, 'contact-form')}
                className="mt-2 text-center text-[12px] uppercase tracking-eyebrow font-bold text-white bg-royal-600 px-5 py-4"
              >
                Book Free Inspection
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
