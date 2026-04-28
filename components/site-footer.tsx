"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useLang } from "./language-provider";

export function SiteFooter() {
  const { tr } = useLang();
  const f = tr.footer;

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-mute leading-relaxed">{f.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="https://ulypo.replit.app" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                {f.tryFree}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            {f.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-ink-mute mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-ink-mute hover:text-ink transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-mute">© {new Date().getFullYear()} Ulypo Labs, Inc. {f.rights}</p>
          <div className="flex items-center gap-4 text-ink-mute">
            <Link href="https://x.com" aria-label="X" className="hover:text-ink transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.875l-5.39-6.86L4.5 22H1.244l8.05-9.197L1 2h7.063l4.875 6.281L18.244 2zm-2.4 18h1.846L7.244 4H5.291l10.553 16z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com/company/ulypo" aria-label="LinkedIn" className="hover:text-ink transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.13V21H18.5v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10V9z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
