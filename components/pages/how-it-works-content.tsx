"use client";

import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Showcase } from "@/components/home/showcase";
import { CTA } from "@/components/home/cta";
import { useLang } from "@/components/language-provider";

export function HowItWorksContent() {
  const { tr } = useLang();
  const p = tr.howItWorksPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.desc} />

      <HowItWorks />

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <span className="chip">{p.anatomyChip}</span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{p.anatomyHeading}</h2>
          <p className="mt-4 text-lg text-ink-soft">{p.anatomyBody}</p>

          <ol className="mt-12 relative border-l border-white/10 ml-3 space-y-8">
            {p.flow.map((step, i) => (
              <li key={i} className="pl-8 relative">
                <span className={`absolute -left-[11px] top-1.5 h-5 w-5 rounded-full ring-4 ring-bg ${
                  i === 0 || i === 3 ? "bg-white/30" : "bg-gradient-to-br from-brand-400 via-peach-400 to-gold-400"
                }`} />
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs uppercase tracking-wider text-ink-mute">{step.label}</p>
                  {step.badge && (
                    <span className="chip text-[10px] py-0.5 px-2">{step.badge}</span>
                  )}
                </div>
                <p className="mt-1 text-ink leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative py-24 md:py-32 border-t border-white/5 bg-bg-soft/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="chip">{p.pillarsChip}</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{p.pillarsHeading}</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {p.pillars.map((pillar, i) => (
              <article key={i} className="card p-7">
                <h3 className="font-display text-2xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Showcase />
      <CTA />
    </>
  );
}
