import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import ScrollIndicator from './ScrollIndicator';

function Process() {
  const journey = [
    {
      title: "Contact Us",
      description: "Reach out for your complimentary consultation",
      icon: "📞",
      services: ["24/7 Response", "Easy Scheduling", "Free Consultation"]
    },
    {
      title: "Free Inspection",
      description: "Our experts thoroughly assess your roof's condition",
      icon: "🔍",
      services: ["Complete Inspection", "Damage Assessment", "Photo Documentation"]
    },
    {
      title: "Custom Solution",
      description: "We provide detailed recommendations and free estimate",
      icon: "📋",
      services: ["Personalized Plan", "Clear Pricing", "Material Options"]
    },
    {
      title: "Expert Installation",
      description: "Professional installation by certified roofers",
      icon: "🏠",
      services: ["Professional Team", "Quality Materials", "Clean Worksite"]
    }
  ];

  return (
    <section id="process" className="relative py-16 md:py-20 min-h-screen from-gray-900 via-gray-950 to-gray-800 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Your Journey to a Perfect Roof
          </h2>
          <p className="text-base md:text-xl text-gray-400">
            Professional service at every step
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {journey.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Arrow Connection - Hidden on mobile */}
              {index < journey.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 w-8 items-center z-10">
                  <div className="w-full h-0.5 bg-red-500"></div>
                  <div className="absolute right-0 w-3 h-3 border-t-2 border-r-2 border-red-500 transform rotate-45 -translate-y-1/2"></div>
                </div>
              )}
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 h-full">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm md:text-base text-gray-300">
                      <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative h-16 md:h-20">
        <ScrollIndicator targetId="contact-form" className="bottom-4 md:bottom-6" />
      </div>
    </section>
  );
}

export default Process; 