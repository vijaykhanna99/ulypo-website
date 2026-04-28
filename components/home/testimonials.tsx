"use client";

import { useLang } from "@/components/language-provider";

const COLORS = [
  "from-brand-500 to-brand-400",
  "from-peach-500 to-peach-400",
  "from-brand-400 to-gold-400",
  "from-gold-500 to-peach-400",
];

export function Testimonials() {
  const { tr } = useLang();
  const { chip, h2, items } = tr.testimonials;

  return (
    <section className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="chip mb-4">{chip}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4 whitespace-pre-line">
            {h2}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((q, i) => (
            <figure key={i} className="bg-white border border-line rounded-2xl p-8 hover:shadow-md hover:shadow-brand-500/8 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-gold-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-ink leading-relaxed text-[15px]">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`h-10 w-10 rounded-full bg-gradient-to-br ${COLORS[i]} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {q.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{q.name}</p>
                  <p className="text-xs text-ink-mute">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
