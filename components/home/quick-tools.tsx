type Tool = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const TOOLS: Tool[] = [
  {
    title: "Travel Tips",
    desc: "Bite-sized, up-to-date advice — from IC card top-ups to onsen etiquette — surfaced when you need it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
      </svg>
    ),
  },
  {
    title: "Discover Japan",
    desc: "Curated places, seasonal events, and neighbourhood walks — pinned to a map and ready to add to your trip.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Translate",
    desc: "One-tap voice and camera translation. Point at a menu, sign, or receipt — Ulypo reads it instantly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h10M8 3v2c0 4-2.5 7-5 8" />
        <path d="M5 9c2.5 5 6 7 9 8" />
        <path d="M13 21l4-10 4 10M14.5 17h5" />
      </svg>
    ),
  },
  {
    title: "Help",
    desc: "Stuck? Ulypo's support agent answers questions about credits, bookings, and how each agent works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2v.2" />
        <path d="M12 17.5h.01" />
      </svg>
    ),
  },
];

export function QuickTools() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-xl">
            <span className="chip">Always one tap away</span>
            <h2 className="font-display mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              The shortcuts that travel with you.
            </h2>
          </div>
          <p className="text-ink-soft md:max-w-md">
            Pinned to the side panel in every Ulypo session — so help, tips, and
            translation are never more than a tap away.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((t) => (
            <div
              key={t.title}
              className="card p-5 flex gap-4 items-start hover:-translate-y-0.5 transition"
            >
              <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 via-brand-500/10 to-transparent text-brand-200 ring-1 ring-brand-400/30">
                <span className="h-5 w-5">{t.icon}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
