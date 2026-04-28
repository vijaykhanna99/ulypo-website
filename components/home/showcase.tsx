"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";

export function Showcase() {
  const { tr } = useLang();
  const { chip, h2, sub, cta, you, examples } = tr.showcase;

  return (
    <section className="py-20 md:py-28 bg-bg-soft border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="chip mb-6">{chip}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4 whitespace-pre-line">
              {h2}
            </h2>
            <p className="mt-5 text-ink-mute leading-relaxed text-lg max-w-md">{sub}</p>
            <Link href="/features" className="btn-ghost mt-8 inline-flex">
              {cta}
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 10h10M11 6l4 4-4 4" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            {examples.map((e, i) => (
              <div key={i} className="bg-white border border-line rounded-2xl p-5 shadow-sm hover:shadow-md hover:shadow-brand-500/6 transition-shadow">
                <span className="chip text-[10px] mb-3 inline-flex">{e.tag}</span>
                <div className="space-y-2">
                  <div className="flex gap-2.5 items-start">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-surface-2 flex items-center justify-center shrink-0">
                      <svg className="h-2.5 w-2.5 text-ink-mute" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </span>
                    <p className="text-sm text-ink-soft"><span className="font-semibold text-ink">{you}</span> — {e.you}</p>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-brand-500 flex items-center justify-center shrink-0">
                      <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M13 2L4 13h6l-1 7 9-11h-6z" />
                      </svg>
                    </span>
                    <p className="text-sm text-ink"><span className="font-semibold text-brand-500">Ulypo</span> — {e.ulypo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
