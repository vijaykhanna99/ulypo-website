"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./logo";
import { useLang } from "./language-provider";
import { LANGUAGES } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const langRef                   = useRef<HTMLDivElement>(null);

  const { lang, setLang, tr } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const NAV = [
    { href: "/features",    label: tr.nav.features    },
    { href: "/how-it-works",label: tr.nav.howItWorks  },
    { href: "/pricing",     label: tr.nav.pricing     },
    { href: "/about",       label: tr.nav.about       },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-ink-mute hover:text-ink rounded-lg hover:bg-surface transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-demo"
              className="px-3.5 py-2 text-sm font-medium text-brand-500 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              {tr.nav.bookDemo}
            </Link>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-surface transition-colors"
                aria-label="Change language"
                aria-expanded={langOpen}
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M2 10h16M10 2c-2 2-3.5 4.8-3.5 8s1.5 6 3.5 8M10 2c2 2 3.5 4.8 3.5 8S12 16 10 18" />
                </svg>
                <span>{currentLang.short}</span>
                <svg className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 rounded-xl border border-line bg-white shadow-lg py-1 z-50">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code
                          ? "text-brand-500 font-semibold bg-brand-50"
                          : "text-ink-soft hover:bg-surface"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="https://ulypo.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-mute hover:text-ink transition-colors px-3 py-2"
            >
              {tr.signIn}
            </Link>
            <Link
              href="https://ulypo.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              {tr.tryFree}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-mute hover:bg-surface transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? <path d="M6 6l12 12M18 6L6 18" />
                : <><path d="M3 7h18M3 12h18M3 17h18" /></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-line mt-1">
            <nav className="flex flex-col gap-0.5 pt-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-surface transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book-demo"
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-500 hover:bg-brand-50 transition-colors"
              >
                {tr.nav.bookDemo}
              </Link>

              {/* Mobile language switcher */}
              <div className="px-3 pt-2 pb-1">
                <p className="text-xs text-ink-mute mb-2">Language</p>
                <div className="flex gap-1.5">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        lang === l.code
                          ? "border-brand-400 bg-brand-50 text-brand-600"
                          : "border-line text-ink-mute hover:bg-surface"
                      }`}
                    >
                      {l.short}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href="https://ulypo.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-3"
              >
                {tr.tryFree}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
