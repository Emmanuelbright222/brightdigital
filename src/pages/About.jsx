import SectionHeading from '../components/SectionHeading.jsx';
import { team, awards } from '../data/content.js';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

const About = () => (
  <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
    <section className="px-6 pt-24">
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <SectionHeading
          eyebrow="About"
          title="Bright Digital is the growth partner marketing leaders rely on"
          description="We are strategists, analysts, creatives, and technologists united by a single mission: build customer experiences that accelerate revenue."
          align="center"
        />
        <p className="text-base text-primary/70 dark:text-slate-300">
          Founded in 2014, Bright Digital Agency blends enterprise rigor with startup velocity. We operate globally from hubs in
          Miami and New York, embedding with marketing and revenue teams to drive measurable growth.
        </p>
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-primary/10 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <SectionHeading
            eyebrow="Mission"
            title="We build marketing engines that don’t slow down"
            description="From positioning to revenue operations, every initiative is tied back to growth KPIs. We orchestrate the channels, data, and people needed to deliver compounding ROI."
          />
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-primary/10 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-primary dark:text-white">Our Core Values</h3>
            <ul className="mt-4 space-y-4 text-sm text-primary/70 dark:text-slate-300">
              <li><span className="font-semibold text-primary dark:text-accent">Obsess over outcomes:</span> We optimize for impact, not vanity metrics.</li>
              <li><span className="font-semibold text-primary dark:text-accent">Co-create with clients:</span> We embed with your team to move faster together.</li>
              <li><span className="font-semibold text-primary dark:text-accent">Stay radically transparent:</span> Dashboards, documentation, and iteration cadences keep everyone aligned.</li>
              <li><span className="font-semibold text-primary dark:text-accent">Innovate responsibly:</span> We test new channels and tech through the lens of customer experience.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-primary/10 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-primary dark:text-white">Vision</h3>
            <p className="mt-3 text-sm text-primary/70 dark:text-slate-300">
              Build a future where marketing, product, and revenue teams operate in complete harmony—powered by actionable data, rapid experimentation, and unforgettable brand experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Team"
          title="Meet the strategists leading every engagement"
          description="Our clients work directly with senior operators backed by a full creative and analytics studio."
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary dark:text-white">{member.name}</h3>
              <p className="text-sm text-primary/60 dark:text-slate-300">{member.role}</p>
              <p className="mt-3 text-sm text-primary/70 dark:text-slate-400">{member.bio}</p>
              <div className="mt-4 flex justify-center gap-4 text-primary/60 dark:text-slate-300">
                <a href={member.socials.linkedin} aria-label={`${member.name} on LinkedIn`} className="transition hover:text-accent">
                  <FiLinkedin />
                </a>
                <a href={member.socials.twitter} aria-label={`${member.name} on Twitter`} className="transition hover:text-accent">
                  <FiTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-primary/10 bg-white p-12 text-center shadow-glow dark:border-slate-700 dark:bg-slate-900">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Certifications"
          description="Industry leaders recognize our commitment to performance and innovation."
          align="center"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {awards.map((award) => (
            <div key={award} className="rounded-2xl border border-primary/10 bg-white/80 p-4 text-sm font-semibold text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
