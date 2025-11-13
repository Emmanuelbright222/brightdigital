const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {eyebrow && <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</span>}
    <h2 className="mt-3 text-3xl font-semibold text-primary dark:text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-3 text-base text-primary/70 dark:text-slate-300">{description}</p>}
  </div>
);

export default SectionHeading;
