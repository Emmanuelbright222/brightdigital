import { FiPhoneCall, FiMessageCircle } from 'react-icons/fi';

const FloatingButtons = () => (
  <>
    <a
      href="https://wa.me/13055550129"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      aria-label="WhatsApp chat"
    >
      <FiMessageCircle size={18} />
      Chat on WhatsApp
    </a>
    <div className="fixed bottom-24 right-6 z-30 hidden flex-col items-end md:flex">
      <span className="mb-1 text-xs font-medium text-primary/70 dark:text-slate-300">Ready to Get Started?</span>
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-0.5"
      >
        <FiPhoneCall size={18} /> Book a Call
      </a>
    </div>
  </>
);

export default FloatingButtons;
