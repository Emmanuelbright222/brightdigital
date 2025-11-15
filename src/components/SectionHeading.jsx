const SectionHeading = ({ eyebrow, title, description, align = 'left', variant = 'default' }) => {
  const isWhite = variant === 'white';
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${isWhite ? 'text-accent' : 'text-accent'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${isWhite ? 'text-white' : 'text-primary dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base ${isWhite ? 'text-white/90' : 'text-primary/70 dark:text-slate-300'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
