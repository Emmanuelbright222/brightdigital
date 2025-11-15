import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => (
  <div className="flex min-h-[80vh] flex-col items-center justify-center gap-8 bg-white px-6 pt-24 text-center dark:bg-[#050816]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl space-y-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="text-9xl font-bold text-primary/10 dark:text-slate-800"
      >
        404
      </motion.div>
      <h1 className="text-4xl font-semibold text-primary dark:text-white sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mx-auto max-w-md text-base text-primary/70 dark:text-slate-300">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track to grow your brand.
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col gap-4 sm:flex-row"
    >
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary/90"
      >
        <FiHome size={18} /> Return Home
      </Link>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
      >
        <FiArrowLeft size={18} /> Contact Us
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
