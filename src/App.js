import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative overflow-x-hidden w-full">
      <Header />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800">
        <Hero />
      </div>

      <div id="problem-solution" className="relative bg-gradient-to-b from-gray-800 to-gray-900">
        <ProblemSolution />
      </div>

      <div id="process" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Process />
      </div>

      <div id="contact-form" className="relative bg-gradient-to-b from-gray-900 to-gray-800">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
