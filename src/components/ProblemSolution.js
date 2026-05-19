import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import before1 from '../assets/before1.jpg';
import before2 from '../assets/before2.jpg';
import before3 from '../assets/before3.jpg';
import after1 from '../assets/after1.jpg';
import after2 from '../assets/after2.jpg';
import after3 from '../assets/after3.jpg';

const projects = [
  {
    title: 'Storm Damage Repair',
    location: 'East Texas',
    description: 'Complete restoration after severe storm damage — insurance coordinated, finished on time.',
    before: before1,
    after: after1,
  },
  {
    title: 'Full Roof Replacement',
    location: 'East Texas',
    description: 'An aging roof transformed with premium architectural shingles and full underlayment upgrade.',
    before: before2,
    after: after2,
  },
  {
    title: 'Leak Repair',
    location: 'East Texas',
    description: 'Professional leak detection and targeted repair — preserving the existing roof system.',
    before: before3,
    after: after3,
  },
];

function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const setFromClient = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const next = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPos(next);
  };

  const handleStart = (e) => {
    dragging.current = true;
    setFromClient(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const handleMove = (e) => {
    if (!dragging.current) return;
    setFromClient(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const handleEnd = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-ew-resize select-none border border-white/10"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <img
        src={after}
        alt="After restoration"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before restoration"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <span className="absolute top-5 left-5 text-[10px] uppercase tracking-eyebrow font-bold text-white bg-black/75 backdrop-blur-md px-3 py-2">
        Before
      </span>
      <span className="absolute top-5 right-5 text-[10px] uppercase tracking-eyebrow font-bold text-white bg-royal-600 px-3 py-2">
        After
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <button
        aria-label="Drag to compare"
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-ew-resize"
        style={{ left: `${pos}%` }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <FiArrowLeft className="text-royal-700" size={16} strokeWidth={3} />
        <FiArrowRight className="text-royal-700" size={16} strokeWidth={3} />
      </button>
    </div>
  );
}

function ProblemSolution() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-6">
              <span className="w-10 h-px bg-royal-500" />
              <span>03 / Our Work</span>
            </div>
            <h2 className="display-xxl text-5xl md:text-6xl lg:text-7xl text-white">
              Drag to see
              <br />
              <span className="text-royal-400">the difference.</span>
            </h2>
          </motion.div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-14 h-14 border border-white/20 hover:border-royal-400 hover:bg-royal-600 hover:text-white text-white/80 flex items-center justify-center transition-colors"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-14 h-14 border border-white/20 hover:border-royal-400 hover:bg-royal-600 hover:text-white text-white/80 flex items-center justify-center transition-colors"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <BeforeAfterSlider before={current.before} after={current.after} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Project meta */}
          <motion.div
            key={`meta-${index}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:pt-2"
          >
            <span className="text-[11px] uppercase tracking-eyebrow font-bold text-royal-400">
              Project No. 0{index + 1}
            </span>
            <h3 className="mt-4 font-display text-4xl md:text-5xl text-white leading-none">
              {current.title}
            </h3>
            <p className="mt-3 text-white/60 text-sm uppercase tracking-wide font-semibold">
              {current.location}
            </p>
            <div className="hairline my-6 max-w-xs ml-0" />
            <p className="text-white/75 leading-relaxed">
              {current.description}
            </p>

            {/* Counter */}
            <div className="mt-10 flex items-center gap-4">
              <span className="font-display text-3xl text-royal-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-white/15 relative overflow-hidden">
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={{ width: `${((index + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 bg-royal-500"
                />
              </div>
              <span className="font-display text-3xl text-white/30">
                {String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
