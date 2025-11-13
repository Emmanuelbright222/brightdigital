import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => (
  <footer className="border-t border-primary/10 bg-white py-12 dark:border-slate-800 dark:bg-[#050816]">
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-sm">
        <div className="flex items-center gap-3 text-2xl font-semibold text-primary dark:text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">BD</span>
          Bright Digital
        </div>
        <p className="mt-4 text-sm text-primary/70 dark:text-slate-300">
          We engineer full-funnel growth programs for ambitious teams ready to dominate their category.
        </p>
      </div>
      <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-slate-200">Explore</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-primary/70 dark:text-slate-300">
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/insights">Insights</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-slate-200">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary/70 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <FiMail className="text-accent" /> hello@brightdigital.com
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-accent" /> +1 (305) 555-0129
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-accent" /> Miami &amp; New York
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-slate-200">Subscribe</h4>
          <p className="mt-4 text-sm text-primary/70 dark:text-slate-300">
            Monthly playbooks and invites to our growth roundtables.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-primary/20 bg-white px-4 py-2 text-sm text-primary outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-primary/10 pt-6 text-center text-xs text-primary/60 dark:border-slate-800 dark:text-slate-500">
      © {new Date().getFullYear()} Bright Digital Agency. All rights reserved.
    </div>
  </footer>
);

export default Footer;
