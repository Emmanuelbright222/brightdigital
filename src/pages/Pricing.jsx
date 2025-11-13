import SectionHeading from '../components/SectionHeading.jsx';
import { pricingPlans } from '../data/content.js';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Pricing = () => (
  <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
    <section className="px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible growth programs for every stage"
          description="Choose the engagement that matches your goals. Every plan includes a dedicated strategist, quarterly roadmap, and performance dashboards."
          align="center"
        />
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-[32px] border border-primary/10 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900 ${
              plan.recommended ? 'ring-2 ring-accent' : ''
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-primary">
                Recommended
              </span>
            )}
            <h3 className="text-xl font-semibold text-primary dark:text-white">{plan.name}</h3>
            <div className="mt-3 text-3xl font-semibold text-primary dark:text-accent">{plan.price}</div>
            <p className="mt-2 text-sm text-primary/70 dark:text-slate-300">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-primary/70 dark:text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <FiCheck className="mt-1 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Book a Free Consultation
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Pricing;
