import SectionHeading from '../components/SectionHeading.jsx';
import IconResolver from '../components/IconResolver.jsx';
import { services } from '../data/content.js';
import { Link } from 'react-router-dom';

const Services = () => (
  <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
    <section className="px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Services"
          title="Integrated growth services to build demand and capture it"
          description="Every engagement is built on a unified strategy, cross-channel expertise, and relentless optimization cycles."
          align="center"
        />
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >
            <IconResolver name={service.icon} className="text-3xl text-accent" />
            <h3 className="mt-4 text-xl font-semibold text-primary dark:text-white">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm text-primary/70 dark:text-slate-300">{service.description}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-primary/20 px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-primary/10 bg-gradient-to-br from-primary to-primary/80 p-12 text-white shadow-2xl dark:from-slate-900 dark:to-primary">
        <SectionHeading
          eyebrow="Custom Strategy"
          title="Let's design a growth program tailored to your goals"
          description="Share your KPIs, channels, and challenges. We'll architect a roadmap and show you the impact before we start."
          variant="white"
        />
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-0.5"
        >
          Talk to a Strategist
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
