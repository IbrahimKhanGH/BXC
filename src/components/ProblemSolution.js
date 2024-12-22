import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
// Import images
import before1 from '../assets/before1.jpg';
import before2 from '../assets/before2.jpg';
import before3 from '../assets/before3.jpg';
import after1 from '../assets/after1.jpg';
import after2 from '../assets/after2.jpg';
import after3 from '../assets/after3.jpg';

function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      title: "Storm Damage Repair",
      before: before1,
      after: after1,
      description: "Complete restoration after severe storm damage"
    },
    {
      title: "Full Roof Replacement",
      before: before2,
      after: after2,
      description: "Aging roof transformed with premium materials"
    },
    {
      title: "Leak Repair",
      before: before3,
      after: after3,
      description: "Professional leak detection and repair"
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    const adjustedPage = ((newPage % transformations.length) + transformations.length) % transformations.length;
    setPage([adjustedPage, newDirection]);
    setActiveIndex(adjustedPage);
  };

  const handleNext = () => {
    paginate(1);
  };

  const handlePrev = () => {
    paginate(-1);
  };

  // Get current and next item for desktop view
  const getCurrentPair = () => {
    const nextIndex = (activeIndex + 1) % transformations.length;
    return [transformations[activeIndex], transformations[nextIndex]];
  };

  return (
    <section id="problem-solution" className="relative py-16 md:py-20 from-gray-800 via-gray-950 to-gray-900 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Transformations
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            See our recent projects
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            {/* Mobile View (Single Item) */}
            <div className="md:hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.5 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <TransformationCard item={transformations[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop View (Two Items) */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                {getCurrentPair().map((item, index) => (
                  <motion.div
                    key={`${page}-${index}`}
                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.3 }
                    }}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden"
                  >
                    <TransformationCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full
              bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full
              bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Added Scroll Indicator */}
      <div className="relative h-16 md:h-20">
        <ScrollIndicator targetId="process" className="bottom-4 md:bottom-6" />
      </div>
    </section>
  );
}

// Separate component for the transformation card
const TransformationCard = ({ item }) => (
  <>
    <div className="relative aspect-video">
      <div className="grid grid-cols-2 h-full">
        {/* Before Side */}
        <div className="relative">
          <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded-full
            text-sm text-white font-medium z-10">
            BEFORE
          </div>
          <img 
            src={item.before} 
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>
        {/* After Side */}
        <div className="relative">
          <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full
            text-sm text-white font-medium z-10">
            AFTER
          </div>
          <img 
            src={item.after} 
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
      <p className="text-gray-400 text-sm">{item.description}</p>
    </div>
  </>
);

export default ProblemSolution; 