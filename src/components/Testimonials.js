import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const reviews = [
  {
    name: 'Greg French',
    location: 'East Texas',
    quote:
      "BXC gets my FULL recommendation! Excellent job — starting with Adam in sales doing an entire roof inspection. He found areas of hail damage that other companies came by and never found.",
    rating: 5,
  },
  {
    name: 'Smoky Jinx',
    location: 'East Texas',
    quote:
      "Everyone did an excellent job on the sale, installation, clean up and inspection of our newly installed roof. Brett Scroggins and Junior Vasquez were very courteous, informative, and professional. I would recommend BXC Roofing to my family and friends.",
    rating: 5,
  },
  {
    name: 'Michael Stine',
    location: 'East Texas',
    quote:
      "BXC replaced my roof last week. They arrived promptly at 6am and completed the roof at 2pm the same day. Outstanding work. This is my third roof job over the last 40 years, and they are the best.",
    rating: 5,
  },
  {
    name: 'Eric Schwartz',
    location: 'East Texas',
    quote:
      "Absolutely awesome company. Adam Franks as the point man and Junior Vasquez as the contractor were an ideal team. House looks 100% better. They did everything we asked and were efficient and helpful.",
    rating: 5,
  },
  {
    name: 'Linda Robertson',
    location: 'Tyler, TX',
    quote:
      "I had never really thought about a roof being beautiful…but my roof is BEAUTIFUL. Each step in the roofing process was explained and the work completed beautifully and on time!",
    rating: 5,
  },
  {
    name: 'Mark Little',
    location: 'Marshall, TX',
    quote:
      "BXC did an outstanding job on our new roof. Extremely easy to work with from start to finish. We were really impressed how they have separate managers for each step of the process.",
    rating: 5,
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const r = reviews[index];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow font-bold text-royal-400 mb-6">
              <span className="w-10 h-px bg-royal-500" />
              <span>05 / Reviews</span>
            </div>
            <h2 className="display-xxl text-5xl md:text-6xl text-white">
              Trusted by
              <br />
              <span className="text-royal-400">Texas Homeowners.</span>
            </h2>
            <div className="hairline my-8 max-w-xs ml-0" />
            <div className="flex items-center gap-1 text-royal-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} fill="currentColor" strokeWidth={0} size={22} />
              ))}
            </div>
            <div className="font-display text-6xl text-white leading-none">5.0</div>
            <div className="mt-2 text-[11px] uppercase tracking-eyebrow text-white/60 font-bold">
              Verified on Google
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[11px] uppercase tracking-eyebrow font-bold text-white/55 mb-5 md:mb-6"
            >
              200+ reviews on Google
            </motion.p>
            <div className="bg-charcoal-900 border border-white/10 p-8 md:p-12 min-h-[320px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-1 text-royal-400 mb-6">
                    {[...Array(r.rating)].map((_, i) => (
                      <FiStar key={i} fill="currentColor" strokeWidth={0} size={18} />
                    ))}
                  </div>
                  <blockquote className="font-tight text-2xl md:text-3xl text-white leading-snug font-semibold flex-1">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="w-10 h-px bg-royal-500" />
                    <div>
                      <div className="font-bold text-white">{r.name}</div>
                      <div className="text-[11px] uppercase tracking-eyebrow text-white/55 font-bold">
                        {r.location}
                      </div>
                    </div>
                  </figcaption>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-eyebrow font-bold text-white/55">
                {String(index + 1).padStart(2, '0')}
                <span className="text-white/25"> / {String(reviews.length).padStart(2, '0')}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="w-12 h-12 border border-white/20 hover:border-royal-400 hover:bg-royal-600 hover:text-white text-white/80 flex items-center justify-center transition-colors"
                >
                  <FiArrowLeft />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="w-12 h-12 border border-white/20 hover:border-royal-400 hover:bg-royal-600 hover:text-white text-white/80 flex items-center justify-center transition-colors"
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
