import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 bg-white px-6 pt-24 text-center dark:bg-[#050816]">
    <motion.div
      initial={{ rotate: -2 }}
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      className="rounded-[40px] border border-primary/10 bg-white px-10 py-8 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="text-sm uppercase tracking-[0.5em] text-primary/60 dark:text-slate-400">Error 404</div>
      <h1 className="mt-4 text-5xl font-semibold text-primary dark:text-white">You found the void</h1>
      <p className="mt-3 text-sm text-primary/70 dark:text-slate-300">
        The page you’re seeking has evolved or never existed. Let’s head back to craft something remarkable.
      </p>
    </motion.div>
    <Link
      to="/"
      className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
    >
      Return home
    </Link>
  </div>
);

export default NotFound;
