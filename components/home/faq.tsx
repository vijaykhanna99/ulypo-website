"use client";

import { useState } from "react";
import { useLang } from "@/components/language-provider";

export function FAQ() {
  const { tr } = useLang();
  const { chip, h2, items } = tr.faq;

  return (
    <section className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <span className="chip mb-4">{chip}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mt-4">{h2}</h2>
        </div>
        <div className="divide-y divide-line">
          {items.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-[15px] transition-colors ${open ? "text-brand-500" : "text-ink group-hover:text-brand-500"}`}>
          {q}
        </span>
        <span className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all ${open ? "bg-brand-500 rotate-45" : "bg-surface-2 group-hover:bg-surface"}`}>
          <svg className={`h-3.5 w-3.5 ${open ? "text-white" : "text-ink-mute"}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M10 4v12M4 10h12" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-ink-mute leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
