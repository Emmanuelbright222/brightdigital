import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { caseStudies } from '../data/content.js';

const Portfolio = () => (
  <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
    <section className="px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Case Studies"
          title="Campaigns engineered for measurable outcomes"
          description="Explore how Bright Digital partners with marketing teams to remove bottlenecks, unlock new revenue, and scale customer love."
          align="center"
        />
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            to={`/case-studies/${study.id}`}
            className="group flex flex-col gap-4 rounded-3xl border border-primary/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >
            <span className="text-xs uppercase tracking-widest text-primary/60 dark:text-slate-400">{study.client}</span>
            <h3 className="text-xl font-semibold text-primary dark:text-white group-hover:text-accent">{study.title}</h3>
            <p className="text-sm text-primary/70 dark:text-slate-300">{study.problem}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-primary/70 dark:text-slate-300">
              {study.metrics.map((metric) => (
                <span key={metric.label} className="rounded-full bg-primary/5 px-3 py-1 dark:bg-slate-800">
                  {metric.label}: {metric.value}
                </span>
              ))}
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-accent dark:text-slate-200">
              View case study →
            </span>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Portfolio;
