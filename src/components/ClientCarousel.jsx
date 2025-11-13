const ClientCarousel = ({ clients }) => (
  <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white/60 py-6 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
    <div className="animate-marquee flex items-center gap-14 whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.4em] text-primary/50 dark:text-slate-400">
      {clients.concat(clients).map((client, index) => (
        <span key={`${client}-${index}`}>{client}</span>
      ))}
    </div>
    <style>{`
      .animate-marquee {
        animation: marquee 18s linear infinite;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default ClientCarousel;
