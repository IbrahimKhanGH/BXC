import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Residential Roofing",
      description: "Complete roofing solutions for homes of all sizes",
      features: ["Shingle Roofing", "Metal Roofing", "Tile Roofing", "Repairs"]
    },
    {
      icon: "🏢",
      title: "Commercial Roofing",
      description: "Expert commercial roofing services",
      features: ["Flat Roofing", "TPO Systems", "Built-Up Roofing", "Maintenance"]
    },
    {
      icon: "🚨",
      title: "Emergency Services",
      description: "24/7 emergency roofing repair services",
      features: ["Storm Damage", "Leak Repairs", "Emergency Tarping", "Quick Response"]
    },
    {
      icon: "🛠️",
      title: "Additional Services",
      description: "Comprehensive roofing solutions",
      features: ["Gutter Installation", "Skylight Installation", "Ventilation", "Insulation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">
            Comprehensive roofing solutions for every need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg 
                  font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 