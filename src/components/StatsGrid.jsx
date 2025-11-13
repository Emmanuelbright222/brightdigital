const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
    {stats.map((item) => (
      <div
        key={item.label}
        className="rounded-2xl border border-primary/10 bg-white/80 p-6 text-center shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
      >
        <div className="text-2xl font-semibold text-primary dark:text-white">{item.value}</div>
        <div className="mt-1 text-xs uppercase tracking-wider text-primary/60 dark:text-slate-400">{item.label}</div>
      </div>
    ))}
  </div>
);

export default StatsGrid;
