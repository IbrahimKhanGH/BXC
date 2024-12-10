import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bxcLogo from "../assets/bxclogo.png";
import CTAButton from "./CTAButton";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close the mobile menu if open
  };

  return (
    <>
      {/* Header Section */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/75 backdrop-blur-sm shadow-lg py-2"
            : "bg-gradient-to-b from-black/50 to-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => scrollToSection(e, "hero")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={bxcLogo}
                alt="BXC Roofing"
                className={`h-12 md:h-14 transition-all duration-300 ${
                  isScrolled ? "brightness-100" : "brightness-200"
                }`}
              />
            </motion.a>

            {/* Navigation Links - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                href="#problem-solution"
                isScrolled={isScrolled}
                onClick={(e) => scrollToSection(e, "problem-solution")}
              >
                Services
              </NavLink>
              <NavLink
                href="#process"
                isScrolled={isScrolled}
                onClick={(e) => scrollToSection(e, "process")}
              >
                Process
              </NavLink>
              <NavLink
                href="#testimonials"
                isScrolled={isScrolled}
                onClick={(e) => scrollToSection(e, "testimonials")}
              >
                Reviews
              </NavLink>
              <NavLink
                href="#contact-form"
                isScrolled={isScrolled}
                onClick={(e) => scrollToSection(e, "contact-form")}
              >
                Contact
              </NavLink>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+9033203030"
                className={`flex items-center text-lg font-semibold transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-yellow-400 drop-shadow-md"
                }`}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (903) 320-3030
              </motion.a>
              <CTAButton
                text="Free Estimate"
                type="primary"
                size="small"
                scrollTo="contact-form"
              />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2"
            >
              <svg
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white drop-shadow-md"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-40 border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink
                  href="#problem-solution"
                  onClick={(e) => scrollToSection(e, "problem-solution")}
                >
                  Services
                </MobileNavLink>
                <MobileNavLink
                  href="#process"
                  onClick={(e) => scrollToSection(e, "process")}
                >
                  Process
                </MobileNavLink>
                <MobileNavLink
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, "testimonials")}
                >
                  Reviews
                </MobileNavLink>
                <MobileNavLink
                  href="#contact-form"
                  onClick={(e) => scrollToSection(e, "contact-form")}
                >
                  Contact
                </MobileNavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Navigation Link Component
const NavLink = ({ href, children, isScrolled, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    whileHover={{ y: -2 }}
    className={`font-medium transition-colors ${
      isScrolled
        ? "text-gray-600 hover:text-red-500"
        : "text-white/90 hover:text-white drop-shadow-md"
    }`}
  >
    {children}
  </motion.a>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className="text-white hover:text-yellow-400 py-2 transition-colors"
  >
    {children}
  </motion.a>
);

export default Header;
