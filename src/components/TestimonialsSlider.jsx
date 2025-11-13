import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialsSlider = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-10 shadow-glow dark:border-slate-700 dark:bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-primary dark:text-slate-100">“{testimonial.quote}”</p>
          <div className="mt-6 text-sm font-semibold text-primary dark:text-slate-200">
            {testimonial.name}
          </div>
          <div className="text-xs uppercase tracking-widest text-primary/60 dark:text-slate-400">{testimonial.role}</div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="rounded-full border border-primary/10 bg-white/80 p-2 text-primary transition hover:bg-primary hover:text-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="rounded-full border border-primary/10 bg-white/80 p-2 text-primary transition hover:bg-primary hover:text-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-8 rounded-full ${i === index ? 'bg-accent' : 'bg-primary/20 dark:bg-slate-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
