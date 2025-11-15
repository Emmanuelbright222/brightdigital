import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 p-4 shadow-lg backdrop-blur dark:bg-slate-900/95">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 text-sm text-primary/80 dark:text-slate-200 md:flex-row md:items-center md:justify-between">
        <p>
          We use cookies to personalize content, analyze performance, and deliver better experiences. By using the site, you agree to our privacy policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="rounded-full border border-primary/10 px-4 py-2 font-semibold text-primary transition hover:bg-primary/10 dark:border-slate-700 dark:text-slate-200"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
