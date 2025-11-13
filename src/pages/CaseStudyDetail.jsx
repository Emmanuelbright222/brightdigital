import { useParams, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { caseStudies } from '../data/content.js';
import { FiArrowLeft } from 'react-icons/fi';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((item) => item.id === id);

  if (!study) {
    return (
      <div className="px-6 pt-32 text-center text-primary dark:text-white">
        <p>Case study not found.</p>
        <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <FiArrowLeft /> Back to case studies
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16 bg-white pb-24 dark:bg-[#050816]">
      <section className="px-6 pt-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent">
            <FiArrowLeft /> Back to case studies
          </Link>
          <SectionHeading
            eyebrow={study.client}
            title={study.title}
            description={study.problem}
          />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-primary dark:text-white">Strategy</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary/70 dark:text-slate-300">{study.strategy}</p>
          </div>
          <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-primary dark:text-white">Results</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary/70 dark:text-slate-300">{study.result}</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-primary/10 bg-primary/5 p-4 text-center text-sm font-semibold text-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  <div className="text-xl">{metric.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-primary/10 bg-white p-12 text-center shadow-glow dark:border-slate-700 dark:bg-slate-900">
          <p className="text-lg text-primary dark:text-white">“{study.testimonial}”</p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
