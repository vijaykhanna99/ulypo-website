"use client";

import { PageHero } from "@/components/page-hero";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { useLang } from "@/components/language-provider";

export function PricingContent() {
  const { tr } = useLang();
  const p = tr.pricingPage;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={<><span className="text-gradient">{p.title.split(".")[0]}.</span>{p.title.split(".").slice(1).join(".")}</>}
        description={p.desc}
      />

      <PricingTeaser />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-center">{p.tableHeading}</h2>
          <p className="mt-3 text-center text-ink-soft">{p.tableSub}</p>
          <div className="mt-10 card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink-mute border-b border-white/10">
                  <th className="px-5 py-4 font-medium">{p.tableColAction}</th>
                  <th className="px-5 py-4 font-medium">{p.tableColCost}</th>
                  <th className="px-5 py-4 font-medium hidden sm:table-cell">{p.tableColNote}</th>
                </tr>
              </thead>
              <tbody>
                {p.costs.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4 text-ink">{row.feature}</td>
                    <td className="px-5 py-4 text-peach-300 font-medium">{row.cost}</td>
                    <td className="px-5 py-4 text-ink-mute hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-xs text-ink-mute">{p.tableNote}</p>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
