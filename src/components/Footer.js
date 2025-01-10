import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-white mb-4">BXC Roofing</h3>
              <p className="mb-6 max-w-sm">
                Professional roofing services in East Texas. Licensed, insured, and trusted by homeowners since 2008.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/bxcroofing/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/bxcroofing/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://linktr.ee/bxcroofing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start">
                  <FaPhone className="mr-3" />
                  <a href="tel:+9033203030" className="hover:text-white transition-colors duration-300">
                    (903) 320-3030
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaEnvelope className="mr-3" />
                  <a href="mailto:info@bxcroofing.com" className="hover:text-white transition-colors duration-300">
                    info@bxcroofing.com
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-3" />
                  <span>East Texas Service Area</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    Residential Roofing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    Commercial Roofing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    Roof Repairs
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    Emergency Services
                  </a>
                </li>
                <li>
                  <a href="#contact-form" className="hover:text-white transition-colors duration-300">
                    Free Inspection
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm">
              © {new Date().getFullYear()} BXC Roofing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;