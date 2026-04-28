"use client";

import { useLang } from "@/components/language-provider";

export function Logos() {
  const { tr } = useLang();
  const { heading, actions } = tr.logos;

  return (
    <section className="py-12 border-b border-line bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-ink-mute mb-5 text-center">
          {heading}
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-2.5 animate-marquee whitespace-nowrap w-max">
            {[...actions, ...actions].map((label, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-white text-sm text-ink-mute shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
