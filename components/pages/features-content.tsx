"use client";

import { PageHero } from "@/components/page-hero";
import { Agents } from "@/components/home/agents";
import { Features } from "@/components/home/features";
import { Showcase } from "@/components/home/showcase";
import { CTA } from "@/components/home/cta";
import { useLang } from "@/components/language-provider";

export function FeaturesContent() {
  const { tr } = useLang();
  const p = tr.featuresPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.desc} />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-3 md:grid-cols-2">
          {p.deepFeatures.map((f, i) => (
            <div key={i} className="card p-7">
              <h3 className="font-display text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-mute leading-relaxed">{f.desc}</p>
              <ul className="mt-5 space-y-2">
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-ink-mute">
                    <svg className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3 3 7-7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Agents />
      <Features />
      <Showcase />
      <CTA />
    </>
  );
}
