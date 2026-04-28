"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";

export function PricingTeaser() {
  const { tr } = useLang();
  const { chip, h2, sub, popular, tiers } = tr.pricing;

  return (
    <section id="pricing" className="py-20 md:py-28 bg-bg-soft border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="chip mb-4">{chip}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4 whitespace-pre-line">{h2}</h2>
          <p className="mt-4 text-ink-mute text-lg max-w-lg mx-auto">{sub}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => {
            const highlight = i === 1;
            return (
              <div key={i} className={`relative flex flex-col rounded-2xl p-8 border transition-shadow ${
                highlight
                  ? "bg-brand-500 border-brand-500 shadow-2xl shadow-brand-500/30"
                  : "bg-white border-line shadow-sm hover:shadow-md hover:shadow-brand-500/8"
              }`}>
                {highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold text-brand-600 bg-white px-3 py-1 rounded-full shadow-md border border-brand-100">
                    {popular}
                  </span>
                )}
                <div>
                  <h3 className={`font-display text-lg font-semibold ${highlight ? "text-white" : "text-ink"}`}>{tier.name}</h3>
                  <p className={`mt-1 text-sm ${highlight ? "text-white/70" : "text-ink-mute"}`}>{tier.desc}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className={`font-display text-4xl font-bold ${highlight ? "text-white" : "text-ink"}`}>{tier.price}</span>
                  <span className={`text-sm ${highlight ? "text-white/60" : "text-ink-mute"}`}>{tier.period}</span>
                </div>
                <ul className="mt-7 space-y-3 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <svg className={`h-4 w-4 mt-0.5 shrink-0 ${highlight ? "text-brand-200" : "text-brand-400"}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5l3 3 7-7" />
                      </svg>
                      <span className={highlight ? "text-white/85" : "text-ink-mute"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://ulypo.replit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    highlight
                      ? "bg-white text-brand-600 hover:bg-brand-50 shadow-md"
                      : "border-2 border-brand-200 text-brand-600 hover:bg-brand-50 hover:border-brand-400"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
