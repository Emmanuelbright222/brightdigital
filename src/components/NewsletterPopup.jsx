import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('newsletterDismissed');
    if (dismissed === 'true') return;
    const timer = setTimeout(() => setIsOpen(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    localStorage.setItem('newsletterDismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 p-6">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 text-primary shadow-2xl dark:bg-slate-900 dark:text-white">
        <button
          className="absolute right-4 top-4 text-primary/60 transition hover:text-primary dark:text-slate-400 dark:hover:text-white"
          onClick={close}
          aria-label="Close newsletter popup"
        >
          <FiX size={20} />
        </button>
        <h3 className="text-2xl font-semibold">Unlock the 2024 Growth Playbook</h3>
        <p className="mt-3 text-sm text-primary/70 dark:text-slate-300">
          Join 8k+ marketers receiving monthly frameworks and templates. Subscribe and get our GTM readiness checklist.
        </p>
        <form className="mt-6 flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Full name"
            className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm outline-none focus:border-accent dark:border-slate-700 dark:bg-slate-800"
          />
          <input
            type="email"
            placeholder="Business email"
            className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm outline-none focus:border-accent dark:border-slate-700 dark:bg-slate-800"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Download the Checklist
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
