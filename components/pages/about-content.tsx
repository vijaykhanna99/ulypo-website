"use client";

import { PageHero } from "@/components/page-hero";
import { CTA } from "@/components/home/cta";
import { useLang } from "@/components/language-provider";

export function AboutContent() {
  const { tr } = useLang();
  const p = tr.aboutPage;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={<>{p.title.split("actually does things").length > 1
          ? <>{p.title.split("actually does things")[0]}<span className="text-gradient">actually does things</span>{p.title.split("actually does things")[1]}</>
          : p.title
        }</>}
        description={p.desc}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-6">{p.storyHeading}</h2>
          {p.story.map((para, i) => (
            <p key={i} className={`${i > 0 ? "mt-5 " : ""}text-lg text-ink-soft leading-relaxed`}>{para}</p>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-soft/40 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="chip">{p.valuesChip}</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{p.valuesHeading}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {p.values.map((v, i) => (
              <div key={i} className="card p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
