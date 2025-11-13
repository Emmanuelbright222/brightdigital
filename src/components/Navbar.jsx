import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm dark:bg-[#050816]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary dark:text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">BD</span>
          Bright Digital
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-primary/80 dark:text-slate-200 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-primary dark:hover:text-white ${isActive ? 'text-primary dark:text-white' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-primary/10 p-2 text-primary transition hover:bg-primary hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-accent dark:hover:text-primary"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <Link
            to="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div>
        <button
          className="rounded-lg border border-primary/10 p-2 text-primary dark:border-slate-700 dark:text-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-primary dark:text-slate-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? 'bg-primary/10 text-primary dark:bg-slate-800 dark:text-white'
                      : 'hover:bg-primary/10 hover:text-primary dark:hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-primary/10 px-4 py-2 text-primary transition hover:bg-primary/10 dark:border-slate-700 dark:text-slate-200"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              Toggle Theme
            </button>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full bg-accent px-4 py-2 text-center font-semibold text-primary"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
