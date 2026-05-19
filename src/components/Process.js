import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiSearch, FiFileText, FiHome } from 'react-icons/fi';

function Process() {
  const steps = [
    {
      icon: FiPhoneCall,
      title: 'Contact Us',
      copy: 'Reach out for your complimentary consultation. 24/7 response, easy scheduling, zero pressure.',
    },
    {
      icon: FiSearch,
      title: 'Free Inspection',
      copy: 'Our experts thoroughly assess your roof — complete inspection, damage report, full photo documentation.',
    },
    {
      icon: FiFileText,
      title: 'Custom Solution',
      copy: 'A detailed proposal with clear pricing, material options, and a project timeline — in writing.',
    },
    {
      icon: FiHome,
      title: 'Expert Installation',
      copy: 'Professional installation by certified roofers. Quality materials, a clean worksite, and a finished product you can stand under.',
    },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-6">
            <span className="w-10 h-px bg-royal-500" />
            <span>04 / Process</span>
          </div>
          <h2 className="display-xxl text-5xl md:text-6xl lg:text-7xl text-white">
            From first call
            <br />
            to <span className="text-royal-400">final shingle.</span>
          </h2>
        </motion.div>

        {/* Desktop: connected timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-[50px] left-[10%] right-[10%] h-[2px] bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: '0% 50%' }}
              className="h-full bg-royal-500"
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.18 }}
                  className="relative"
                >
                  <div className="flex justify-center mb-10">
                    <div className="relative">
                      <div className="w-[100px] h-[100px] bg-royal-600 flex items-center justify-center relative z-10 shadow-[0_8px_30px_rgba(37,99,235,0.4)]">
                        <Icon className="text-white" size={32} strokeWidth={2} />
                      </div>
                      <span className="absolute -top-3 -right-3 z-20 w-9 h-9 bg-white text-royal-700 text-sm font-display flex items-center justify-center leading-none pt-1">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <h3 className="font-display text-3xl text-white mb-3 leading-none">
                      {s.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">
                      {s.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden space-y-px">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-white/10 last:border-b py-8 flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-royal-600 flex items-center justify-center">
                    <Icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <span className="mt-3 text-[10px] uppercase tracking-eyebrow font-bold text-royal-400">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl text-white mb-2 leading-none">
                    {s.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed">
                    {s.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
