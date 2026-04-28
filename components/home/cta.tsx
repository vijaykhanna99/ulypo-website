"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";

export function CTA() {
  const { tr } = useLang();
  const { badge, h2a, h2b, sub, primary, ghost, platforms } = tr.cta;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl hero-bg px-8 py-20 md:px-20 text-center">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-peach-400/10 blur-3xl" />

          <div className="relative">
            <span className="chip-white mb-6 inline-flex">{badge}</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mt-2">
              {h2a}<br />{h2b}
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">{sub}</p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="https://ulypo.replit.app" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                {primary}
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 10h10M11 6l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn-ghost-white text-base">{ghost}</Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/40">
              {platforms.map((p, i) => (
                <span key={i} className="flex items-center gap-6">
                  {i > 0 && <span className="text-white/20">·</span>}
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
