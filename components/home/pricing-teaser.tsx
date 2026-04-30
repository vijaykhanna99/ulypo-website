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

        <div className="flex justify-center">
          {tiers.map((tier, i) => (
            <div key={i} className="relative flex flex-col rounded-2xl p-8 border bg-brand-500 border-brand-500 shadow-2xl shadow-brand-500/30 w-full max-w-md">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-white/70">{tier.desc}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-sm text-white/60">{tier.period}</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg className="h-4 w-4 mt-0.5 shrink-0 text-brand-200" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3 3 7-7" />
                    </svg>
                    <span className="text-white/85">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://ulypo.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full text-center py-3 rounded-xl font-semibold text-sm transition-all bg-white text-brand-600 hover:bg-brand-50 shadow-md"
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
