"use client";

import { useState } from "react";
import { useLang } from "@/components/language-provider";

const ICONS: React.ReactNode[] = [
  <svg key="r" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M7 3v8a2 2 0 0 0 2 2v8" /><path d="M11 3v8a2 2 0 0 1-2 2" /><path d="M15 3c0 4 2 6 2 8s-1 2-2 2v8" /></svg>,
  <svg key="h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-6h6v6" /><path d="M12 10v4M10 12h4" /></svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><circle cx="12" cy="10" r="4" /><path d="M12 14v7" /><path d="M8 21h8" /><path d="M5 8a7 7 0 0 1 14 0" /></svg>,
  <svg key="t" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M3 5h10M8 3v2c0 4-2.5 7-5 8" /><path d="M5 9c2.5 5 6 7 9 8" /><path d="M13 21l4-10 4 10M14.5 17h5" /></svg>,
  <svg key="f" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L21 21" /></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 3v2M16 3v2" /></svg>,
  <svg key="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M14 3v5h5" /><path d="M9 14l2 2 4-4" /></svg>,
];

export function AgentStrip() {
  const [active, setActive] = useState<number | null>(null);
  const { tr } = useLang();
  const { label, agents } = tr.agentStrip;

  return (
    <div className="w-full border-b border-line bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-ink-mute pr-4 border-r border-line mr-1">
            {label}
          </span>
          {agents.map((name, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(isActive ? null : i)}
                className={[
                  "group shrink-0 flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl border cursor-pointer transition-all duration-200",
                  isActive
                    ? "bg-brand-500 border-brand-500 shadow-md shadow-brand-500/30"
                    : "bg-bg-soft border-line hover:border-brand-300 hover:bg-surface hover:shadow-sm",
                ].join(" ")}
              >
                <span className={["h-5 w-5 transition-colors", isActive ? "text-white" : "text-ink-mute group-hover:text-brand-500"].join(" ")}>
                  {ICONS[i]}
                </span>
                <span className={["text-[10px] font-semibold text-center leading-tight whitespace-nowrap transition-colors", isActive ? "text-white" : "text-ink-mute group-hover:text-ink-soft"].join(" ")}>
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
