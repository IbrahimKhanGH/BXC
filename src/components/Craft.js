import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiAward, FiUsers } from 'react-icons/fi';

function Craft() {
  const pillars = [
    {
      icon: FiAward,
      title: 'Quality Workmanship',
      copy: 'A dedicated project manager runs every job from sales to production to final inspection — nothing handed off, nothing rushed.',
    },
    {
      icon: FiShield,
      title: '10-Year Warranty',
      copy: 'A full decade of labor warranty in writing, paired with manufacturer coverage on every shingle, fastener, and underlayment we install.',
    },
    {
      icon: FiUsers,
      title: 'Locally Owned',
      copy: 'Family-owned and operated in East Texas since 2008. A neighbor, not a contractor — we live where we work and we answer the phone.',
    },
  ];

  return (
    <section id="craft" className="relative py-24 md:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-6">
              <span className="w-10 h-px bg-royal-500" />
              <span>01 / Why BXC</span>
            </div>
            <h2 className="display-xxl text-5xl md:text-6xl lg:text-7xl text-white">
              Roofing
              <br />
              <span className="text-royal-400">Done Right</span>
              <br />
              The First Time.
            </h2>
            <div className="hairline my-8 max-w-sm ml-0" />
            <p className="text-white/70 leading-relaxed max-w-md">
              No upsells. No subcontracted shortcuts. Just honest work — finished
              the way we'd finish our own.
            </p>
          </motion.div>

          {/* Right: pillars */}
          <div className="lg:col-span-7 lg:pt-4">
            <div className="space-y-px">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative border-t border-white/10 last:border-b py-8 md:py-10 flex items-start gap-6 md:gap-10 hover:bg-royal-950/30 transition-colors px-2"
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-royal-600 flex items-center justify-center group-hover:bg-royal-500 transition-colors">
                      <Icon className="text-white" size={22} strokeWidth={2.2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-3xl md:text-4xl text-white mb-2 leading-none">
                        {p.title}
                      </h3>
                      <p className="text-white/65 leading-relaxed max-w-xl">
                        {p.copy}
                      </p>
                    </div>
                    <span className="hidden md:block font-display text-white/15 text-3xl leading-none">
                      0{i + 1}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Craft;
