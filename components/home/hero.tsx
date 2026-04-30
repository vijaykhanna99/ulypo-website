"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";

export function Hero() {
  const { tr } = useLang();
  const h = tr.hero;

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-brand-500/18 blur-[130px]" />
      <div className="pointer-events-none absolute top-60 -left-20 h-[400px] w-[400px] rounded-full bg-brand-300/8 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-24 pb-0 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div className="chip-white mb-7 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse-soft shrink-0" />
              {h.badge}
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.06] text-white">
              {h.h1a}<br />
              <span style={{
                background: "linear-gradient(120deg,#ffffff 0%,#c7cafd 50%,#a5a8fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {h.h1b}
              </span>
            </h1>

            {/* Mission statement */}
            <p className="mt-6 text-xl md:text-2xl font-semibold leading-snug max-w-lg">
              <span style={{ color: "rgba(255,255,255,0.9)" }}>
                {h.mission.split("— ")[0]}
              </span>
              {h.mission.includes("— ") && (
                <>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>{"— "}</span>
                  <span style={{
                    background: "linear-gradient(120deg,#c7cafd 0%,#a5a8fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {h.mission.split("— ")[1]}
                  </span>
                </>
              )}
            </p>

            {/* Supporting detail */}
            <p className="mt-3 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.50)" }}>
              {h.desc}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="https://ulypo.replit.app" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                {h.cta}
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 10h10M11 6l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/how-it-works" className="btn-ghost-white text-base">
                {h.howItWorks}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {h.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl md:text-3xl font-semibold text-white">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end pb-0">
            <div className="relative">
              <div className="absolute inset-0 translate-y-8 scale-90 rounded-[3rem] bg-brand-500/40 blur-3xl" />
              <div className="relative w-72 rounded-[3rem] bg-[#0c0e1e] border border-white/10 shadow-2xl overflow-hidden"
                   style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07) inset" }}>
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-24 h-5 rounded-full bg-black" />
                </div>
                <div className="text-center py-2 border-b border-white/6">
                  <p className="text-white/40 text-[11px] font-medium tracking-wide">{h.phoneLabel}</p>
                </div>
                <div className="px-3 py-2.5 flex gap-1.5 overflow-x-auto scrollbar-hide border-b border-white/6">
                  {h.pills.map((a) => (
                    <span key={a} className="shrink-0 text-[9px] font-medium text-white/60 bg-white/6 border border-white/8 rounded-lg px-2 py-1">{a}</span>
                  ))}
                </div>
                <div className="px-3 py-3 space-y-2.5 min-h-[260px]">
                  <BubbleUser text={h.msg1} />
                  <BubbleAgent text={h.msg2} />
                  <BubbleUser text={h.msg3} />
                  <div className="flex items-center gap-1.5 py-1">
                    <div className="h-px flex-1 bg-white/8" />
                    <span className="text-[9px] text-white/30 font-medium">{h.booking}</span>
                    <div className="h-px flex-1 bg-white/8" />
                  </div>
                  <BubbleConfirm text={h.confirm} />
                </div>
                <div className="px-3 pb-6 pt-2">
                  <div className="bg-white/6 border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-2">
                    <span className="text-white/25 text-[11px] flex-1">{h.placeholder}</span>
                    <div className="h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center shrink-0">
                      <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 h-16 w-full overflow-hidden">
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function BubbleUser({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-brand-600 text-white text-[11px] leading-relaxed rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">{text}</div>
    </div>
  );
}
function BubbleAgent({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="bg-white/8 text-white/80 text-[11px] leading-relaxed rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">{text}</div>
    </div>
  );
}
function BubbleConfirm({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="bg-brand-900/60 border border-brand-500/30 text-brand-200 text-[11px] leading-relaxed rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">{text}</div>
    </div>
  );
}
