"use client";

import { useLang } from "@/components/language-provider";

const STEP_ICONS: React.ReactNode[] = [
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="u" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 13h6l-1 7 9-11h-6z" /></svg>,
];

export function HowItWorks() {
  const { tr } = useLang();
  const { chip, h2, steps } = tr.howItWorks;

  return (
    <section id="how" className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="chip mb-4">{chip}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4 whitespace-pre-line">
            {h2}
          </h2>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-3">
          <div className="hidden lg:block absolute top-11 left-[calc(33.33%+1.5rem)] right-[calc(33.33%+1.5rem)] h-px bg-gradient-to-r from-brand-300 via-brand-400 to-brand-300" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/30 mb-6">
                <span className="h-8 w-8">{STEP_ICONS[i]}</span>
                <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center text-[10px] font-bold text-brand-600">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-2">{s.title}</h3>
              <p className="text-ink-mute leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
