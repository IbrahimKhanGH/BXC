import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Craft from './components/Craft';
import Services from './components/Services';
import ProblemSolution from './components/ProblemSolution';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative overflow-x-hidden w-full bg-charcoal-950 text-white antialiased">
      <Header />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-royal-500 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Hero />
      <Craft />
      <Services />
      <ProblemSolution />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
