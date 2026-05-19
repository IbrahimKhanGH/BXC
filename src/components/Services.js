import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiCloudRain, FiTool } from 'react-icons/fi';
import { TbBuildingSkyscraper } from 'react-icons/tb';

function Services() {
  const services = [
    {
      icon: FiHome,
      title: 'Residential Roofing',
      copy: 'Complete roofing solutions for homes of all sizes — shingle, metal, and tile installed by certified crews.',
      features: ['Shingle Roofing', 'Metal Roofing', 'Tile Roofing', 'Roof Repairs'],
    },
    {
      icon: TbBuildingSkyscraper,
      title: 'Commercial Roofing',
      copy: 'TPO, modified bitumen, and built-up systems. Tenants stay open. We work clean, fast, and out of the way.',
      features: ['Flat Roofing', 'TPO Systems', 'Built-Up Roofing', 'Maintenance'],
    },
    {
      icon: FiCloudRain,
      title: 'Emergency Services',
      copy: '24/7 emergency response when the weather turns. Storm damage, leaks, and tarping — handled fast.',
      features: ['Storm Damage', 'Leak Repairs', 'Emergency Tarping', 'Quick Response'],
    },
    {
      icon: FiTool,
      title: 'Additional Services',
      copy: 'Beyond the roof — gutters, skylights, ventilation, and the finishing details that protect the bigger investment.',
      features: ['Gutter Installation', 'Skylight Installation', 'Ventilation', 'Insulation'],
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-6">
            <span className="w-10 h-px bg-royal-500" />
            <span>02 / Services</span>
          </div>
          <h2 className="display-xxl text-5xl md:text-6xl lg:text-7xl text-white">
            Built for every
            <br />
            <span className="text-royal-400">roofing need.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="group relative bg-charcoal-900 p-8 md:p-12 hover:bg-charcoal-950 transition-colors duration-500 overflow-hidden"
              >
                {/* Hover accent bar */}
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-royal-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-royal-600/10 border border-royal-500/30 flex items-center justify-center group-hover:bg-royal-600 group-hover:border-royal-500 transition-colors">
                    <Icon className="text-royal-400 group-hover:text-white transition-colors" size={26} strokeWidth={2} />
                  </div>
                  <span className="font-display text-3xl text-white/15">0{i + 1}</span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl text-white mb-3 leading-none">
                  {s.title}
                </h3>
                <p className="text-white/65 leading-relaxed mb-8 max-w-md">
                  {s.copy}
                </p>

                <ul className="grid grid-cols-2 gap-y-3 mb-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-white/85"
                    >
                      <span className="w-1.5 h-1.5 bg-royal-500" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
