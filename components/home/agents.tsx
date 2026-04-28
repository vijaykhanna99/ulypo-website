"use client";

import { useLang } from "@/components/language-provider";

const COLORS = [
  "from-brand-500 to-brand-400",
  "from-peach-500 to-peach-400",
  "from-gold-500 to-gold-400",
  "from-brand-400 to-peach-400",
  "from-brand-600 to-brand-500",
  "from-peach-400 to-gold-400",
  "from-brand-500 to-peach-500",
];

const ICONS: React.ReactNode[] = [
  <svg key="r" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3v8a2 2 0 0 0 2 2v8" /><path d="M11 3v8a2 2 0 0 1-2 2" /><path d="M15 3c0 4 2 6 2 8s-1 2-2 2v8" /></svg>,
  <svg key="h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-6h6v6" /><path d="M12 10v4M10 12h4" /></svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="4" /><path d="M12 14v7" /><path d="M8 21h8" /><path d="M5 8a7 7 0 0 1 14 0" /></svg>,
  <svg key="t" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h10M8 3v2c0 4-2.5 7-5 8" /><path d="M5 9c2.5 5 6 7 9 8" /><path d="M13 21l4-10 4 10M14.5 17h5" /></svg>,
  <svg key="f" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L21 21" /></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 3v2M16 3v2" /></svg>,
  <svg key="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M14 3v5h5" /><path d="M9 14l2 2 4-4" /></svg>,
];

export function Agents() {
  const { tr } = useLang();
  const { chip, h2, sub, items } = tr.agents;

  return (
    <section id="agents" className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="chip mb-4">{chip}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4 whitespace-pre-line">
            {h2}
          </h2>
          <p className="mt-4 text-ink-mute text-lg max-w-xl mx-auto">{sub}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 4).map((a, i) => (
            <div key={i} className="card p-6 group hover:shadow-lg hover:shadow-brand-500/8 hover:-translate-y-0.5 transition-all duration-200">
              <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${COLORS[i]} flex items-center justify-center text-white mb-5 shadow-md`}>
                <span className="h-5 w-5">{ICONS[i]}</span>
              </div>
              <h3 className="font-semibold text-ink text-[15px]">{a.name}</h3>
              <p className="mt-2 text-sm text-ink-mute leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {items.slice(4).map((a, i) => (
            <div key={i} className="card p-6 group hover:shadow-lg hover:shadow-brand-500/8 hover:-translate-y-0.5 transition-all duration-200">
              <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${COLORS[i + 4]} flex items-center justify-center text-white mb-5 shadow-md`}>
                <span className="h-5 w-5">{ICONS[i + 4]}</span>
              </div>
              <h3 className="font-semibold text-ink text-[15px]">{a.name}</h3>
              <p className="mt-2 text-sm text-ink-mute leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
