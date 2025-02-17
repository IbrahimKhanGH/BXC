import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields correctly.'
      });
      return;
    }

    setFormStatus({ submitted: true, error: false, message: 'Sending...' });

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      if (result.text === 'OK') {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! We will contact you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: 'There was an error. Please try again or call us directly at (903) 320-3030.'
      });
    }
  };

  const reviews = [
    {
      name: "Linda Robertson",
      location: "Tyler, TX",
      text: "I would highly recommend BXC Roofing! My experience with this company was awesome. Tyler Pegg and everyone at BXC were incredible. Each step in the roofing process was explained and the work completed beautifully and on time! I had never really thought about a roof being beautiful…but my roof is BEAUTIFUL!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Helene Deisher",
      location: "Longview, TX",
      text: "Excellent job on our rental property roofs. They were finished quickly. Their work was clean and the roofs look wonderful. They also had to coordinate with our insurance company and they worked seamlessly with them. I can highly recommend them!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "Mark Little",
      location: "Marshall, TX",
      text: "BXC did an outstanding job on our new roof. Extremely easy to work with from start to finish. We were really impressed how they have separate managers for each step of the process. Brett, Luke, and Jake were extremely helpful. Thanks guys!!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=8"
    }
  ];

  return (
    <section id="contact-form" className="relative py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
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

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address*"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border ${
                        errors.phone ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
                    errors.serviceType ? 'border-red-500' : 'border-gray-700'
                  }`}
                >
                  <option value="">Select Service Type*</option>
                  <option value="roof-replacement">Roof Replacement</option>
                  <option value="roof-repair">Roof Repair</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="inspection">Free Inspection</option>
                  <option value="other">Other</option>
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                )}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Details"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
                ></textarea>

                {formStatus.submitted && (
                  <div
                    className={`p-4 rounded-lg ${
                      formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Free Estimate
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Reviews Section */}
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