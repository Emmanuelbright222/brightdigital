import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';
import StatsGrid from '../components/StatsGrid.jsx';
import ClientCarousel from '../components/ClientCarousel.jsx';
import TestimonialsSlider from '../components/TestimonialsSlider.jsx';
import IconResolver from '../components/IconResolver.jsx';
import {
  stats,
  clientLogos,
  services,
  differentiators,
  testimonials,
  caseStudies,
  blogPosts,
} from '../data/content.js';

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="space-y-24 bg-gradient-to-b from-white via-white to-primary/5 pb-24 dark:from-[#050816] dark:via-[#050816] dark:to-slate-900">
      <section className="relative overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,177,0,0.25),_transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div variants={heroVariants} initial="hidden" animate="show" className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
              Bright Digital Agency
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
              Let’s Grow Your Brand Together
            </h1>
            <p className="text-lg text-primary/70 dark:text-slate-300">
              We partner with ambitious marketing teams to design, launch, and optimize multi-channel experiences that turn
              attention into revenue.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-3 text-center text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="group rounded-full border border-primary/20 px-8 py-3 text-center text-sm font-semibold text-primary transition hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
              >
                <span className="inline-flex items-center gap-2">
                  View Our Work <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </div>
            <StatsGrid stats={stats} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative rounded-[32px] border border-primary/10 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
          >
            <div className="absolute -top-10 right-10 hidden h-20 w-20 rounded-full bg-accent/40 blur-3xl lg:block" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/60 dark:text-slate-400">Growth in Motion</h3>
            <div className="mt-6 space-y-6">
              {caseStudies.slice(0, 3).map((study) => (
                <div key={study.id} className="rounded-2xl border border-primary/10 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/80">
                  <div className="text-xs uppercase tracking-widest text-primary/50 dark:text-slate-400">{study.client}</div>
                  <div className="mt-2 text-lg font-semibold text-primary dark:text-white">{study.title}</div>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric.label}
                        className="rounded-full bg-primary/5 px-3 py-1 font-semibold text-primary dark:bg-slate-800 dark:text-slate-100"
                      >
                        {metric.label}: {metric.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <ClientCarousel clients={clientLogos} />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="Capabilities"
            title="Full-funnel marketing services built to compound growth"
            description="Our strategists design integrated roadmaps across paid, owned, and earned channels so your brand wins across the customer journey."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.title}
                className="gradient-border rounded-3xl border border-transparent bg-white/70 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/80"
              >
                <IconResolver name={service.icon} className="text-2xl text-accent" />
                <h3 className="mt-4 text-xl font-semibold text-primary dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-primary/70 dark:text-slate-300">{service.description}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent">
                  Explore service <FiArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="/services"
              className="rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-primary py-16 text-white shadow-glow dark:bg-gradient-to-br dark:from-slate-900 dark:to-primary/70">
          <div className="grid gap-12 px-8 md:grid-cols-2 md:px-16">
            <div>
              <SectionHeading
                eyebrow="Why choose us"
                title="Your growth partner from strategy to scale"
                description="We work as an embedded growth team. Expect radical transparency, relentless optimization, and senior strategists in every meeting."
                variant="white"
              />
            </div>
            <ul className="space-y-6 text-sm">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <FiCheckCircle className="mt-1 text-accent" size={20} />
                  <div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                    <p className="mt-1 text-white/80">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Revenue teams that scale with Bright Digital"
            description="Hear how marketing and revenue leaders unlock compounding returns with our partnership."
            align="center"
          />
          <div className="mt-12">
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="rounded-3xl border border-primary/10 bg-white p-10 shadow-glow dark:border-slate-700 dark:bg-slate-900">
              <SectionHeading
                eyebrow="Insights"
                title="Playbooks from the Bright Digital war room"
                description="Actionable breakdowns, trendspotting, and frameworks for your next growth leap."
              />
              <Link
                to="/insights"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent"
              >
                Browse Insights <FiArrowUpRight />
              </Link>
            </div>
            <div className="grid gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  to={`/insights/${post.slug}`}
                  key={post.slug}
                  className="group flex flex-col gap-4 rounded-3xl border border-primary/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="text-xs uppercase tracking-widest text-primary/60 dark:text-slate-400">{post.date}</div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white group-hover:text-accent">{post.title}</h3>
                  <p className="text-sm text-primary/70 dark:text-slate-300">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-accent dark:text-slate-200">
                    Read article <FiArrowUpRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-primary/10 bg-white p-12 text-center shadow-glow dark:border-slate-700 dark:bg-slate-900">
          <SectionHeading
            eyebrow="Ready to move fast?"
            title="Schedule your strategy intensive"
            description="Bring your goals, metrics, and constraints. We’ll map a 90-day acceleration plan tailored to your team."
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              to="https://calendly.com"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-0.5"
            >
              Book Strategy Call
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-primary/20 px-8 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
