import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { faqs } from '../data/content.js';
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

const initialState = { name: '', email: '', company: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name) nextErrors.name = 'Name is required';
    if (!form.email) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email';
    }
    if (!form.message) nextErrors.message = 'Tell us about your goals';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
      <section className="px-6 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build your next growth chapter"
            description="Share your objectives, timelines, and metrics. We’ll respond within one business day with next steps."
            align="center"
          />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-primary/10 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-primary dark:text-white">Tell us about your goals</h3>
            <p className="mt-2 text-sm text-primary/70 dark:text-slate-300">
              We’ll review your details, audit your current programs, and share a tailored roadmap in our kickoff session.
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-sm font-semibold text-primary dark:text-slate-200">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-accent dark:bg-slate-900 ${
                    errors.name ? 'border-red-400' : 'border-primary/20 dark:border-slate-700'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-primary dark:text-slate-200">Business Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-accent dark:bg-slate-900 ${
                    errors.email ? 'border-red-400' : 'border-primary/20 dark:border-slate-700'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-primary dark:text-slate-200">Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-primary/20 px-4 py-3 text-sm outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-primary dark:text-slate-200">What are you looking to achieve?</label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-accent dark:bg-slate-900 ${
                    errors.message ? 'border-red-400' : 'border-primary/20 dark:border-slate-700'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Request Consultation
              </button>
              {submitted && (
                <p className="text-sm font-semibold text-green-500">
                  Thanks! We’ll be in touch shortly.
                </p>
              )}
            </form>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-primary/10">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Bright Digital office"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-primary dark:text-white">Connect with us</h3>
              <ul className="mt-4 space-y-3 text-sm text-primary/70 dark:text-slate-300">
                <li className="flex items-center gap-3">
                  <FiMail className="text-accent" /> hello@brightdigital.com
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="text-accent" /> +1 (305) 555-0129
                </li>
                <li className="flex items-center gap-3">
                  <FiMessageCircle className="text-accent" /> WhatsApp: +1 (305) 555-0129
                </li>
              </ul>
              <a
                href="https://calendly.com"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
              >
                Book a strategy call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-primary/10 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-primary dark:text-white">Frequently Asked Questions</h3>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-primary/10 bg-white/70 p-5 dark:border-slate-700 dark:bg-slate-900/70">
                <div className="text-base font-semibold text-primary dark:text-white">{faq.question}</div>
                <p className="mt-2 text-sm text-primary/70 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
