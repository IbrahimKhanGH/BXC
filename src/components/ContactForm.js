import React from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const reviews = [
    {
      name: "John Smith",
      location: "Tyler, TX",
      text: "BXC Roofing did an amazing job on our roof replacement. Professional, efficient, and clean!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Sarah Johnson",
      location: "Longview, TX",
      text: "Best roofing company in East Texas! They responded quickly to our emergency and fixed everything perfectly.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Mike Williams",
      location: "Marshall, TX",
      text: "Great experience from start to finish. Fair pricing and excellent workmanship.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section id="contact-form" className="relative py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form - Now with vertical centering */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 lg:flex lg:items-center"
          >
            <div className="w-full">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Get Your Free Estimate
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="mb-4">
                  <select 
                    className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Service Needed</option>
                    <option>Roof Inspection</option>
                    <option>Roof Repair</option>
                    <option>New Roof</option>
                    <option>Emergency Service</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Free Estimate
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Reviews Section - Remains the same */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 flex flex-col justify-start space-y-6"
          >
            <div className="sticky top-24">
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-1 text-yellow-400 text-3xl mb-2">
                  ★★★★★
                </div>
                <h3 className="text-2xl font-bold text-white">Trusted by Texas Homeowners</h3>
                <p className="text-gray-400">Join our satisfied customers</p>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 shadow-lg"
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{review.name}</h4>
                        <p className="text-gray-400 text-sm">{review.location}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <p className="text-gray-300 text-sm">{review.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;