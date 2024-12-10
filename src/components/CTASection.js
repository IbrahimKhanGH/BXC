import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

function CTASection() {
  return (
    <section className="relative py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Roof?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get your FREE inspection and estimate today. Limited time offer: $500 off new roofs!
          </p>
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg 
                text-lg font-semibold shadow-lg transition-colors duration-300"
            >
              Get Free Estimate
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg 
                text-lg font-semibold shadow-lg transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-gray-400"
          >
            ✓ Free Inspection ✓ Licensed & Insured ✓ 5-Star Rated
          </motion.p>
        </motion.div>
      </div>

      <div className="relative h-24">
        <ScrollIndicator targetId="contact-form" />
      </div>
    </section>
  );
}

export default CTASection; 