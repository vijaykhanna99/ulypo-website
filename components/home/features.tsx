"use client";

import { useLang } from "@/components/language-provider";

const COLORS = [
  { color: "text-brand-500",  bg: "bg-brand-50"        },
  { color: "text-peach-500",  bg: "bg-peach-200/50"    },
  { color: "text-brand-400",  bg: "bg-brand-50"        },
  { color: "text-gold-500",   bg: "bg-gold-300/20"     },
  { color: "text-peach-600",  bg: "bg-peach-200/40"    },
  { color: "text-brand-600",  bg: "bg-brand-50"        },
];

const ICONS: React.ReactNode[] = [
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 13h6l-1 7 9-11h-6z" /></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h10M8 3v2c0 4-2.5 7-5 8" /><path d="M5 9c2.5 5 6 7 9 8" /><path d="M13 21l4-10 4 10M14.5 17h5" /></svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M10 9l5 3-5 3z" /></svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  <svg key="f" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9 10h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h6" /></svg>,
];

export function Features() {
  const { tr } = useLang();
  const { chip, h2, sub, items } = tr.features;

  return (
    <section id="features" className="py-20 md:py-28 bg-bg-soft border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="chip mb-4">{chip}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4">{h2}</h2>
          <p className="mt-4 text-ink-mute text-lg max-w-xl mx-auto">{sub}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="bg-white border border-line rounded-2xl p-7 hover:shadow-md hover:shadow-brand-500/8 hover:-translate-y-0.5 transition-all duration-200">
              <div className={`h-12 w-12 rounded-2xl ${COLORS[i].bg} ${COLORS[i].color} flex items-center justify-center mb-5`}>
                <span className="h-6 w-6">{ICONS[i]}</span>
              </div>
              <h3 className="font-semibold text-ink text-[16px]">{f.title}</h3>
              <p className="mt-2.5 text-sm text-ink-mute leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
