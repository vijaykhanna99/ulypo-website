"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { useLang } from "@/components/language-provider";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { tr } = useLang();
  const c = tr.contactPage;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={<>{c.title.replace("hello", "")}<span className="text-gradient">hello</span>.</>}
        description={c.desc}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold">{c.emailCardTitle}</h3>
              <p className="mt-2 text-ink-soft text-sm">{c.emailCardDesc}</p>
              <a href="mailto:hello@ulypo.ai" className="mt-3 inline-block text-brand-300 hover:text-brand-200 transition">
                hello@ulypo.ai
              </a>
            </div>
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold">{c.pressCardTitle}</h3>
              <p className="mt-2 text-ink-soft text-sm">{c.pressCardDesc}</p>
              <a href="mailto:press@ulypo.ai" className="mt-3 inline-block text-brand-300 hover:text-brand-200 transition">
                press@ulypo.ai
              </a>
            </div>
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold">{c.hoursCardTitle}</h3>
              <p className="mt-2 text-ink-soft text-sm">{c.hoursCardDesc}</p>
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="card p-7"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{c.successTitle}</h3>
                <p className="mt-2 text-ink-soft">{c.successBody}</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={c.nameLabel}>
                    <input required name="name" className="input" placeholder={c.namePlaceholder} />
                  </Field>
                  <Field label={c.emailLabel}>
                    <input required type="email" name="email" className="input" placeholder={c.emailPlaceholder} />
                  </Field>
                </div>
                <Field label={c.reasonLabel}>
                  <select required name="reason" className="input">
                    {c.reasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label={c.messageLabel}>
                  <textarea required name="message" rows={6} className="input resize-none" placeholder={c.messagePlaceholder} />
                </Field>
                <button type="submit" className="btn-primary mt-2">
                  {c.submit}
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 10h10M11 6l4 4-4 4" />
                  </svg>
                </button>
                <p className="text-xs text-ink-mute">{c.privacy}</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.875rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .input::placeholder { color: var(--color-ink-mute); }
        .input:focus {
          border-color: rgba(105, 115, 255, 0.6);
          background: rgba(255,255,255,0.06);
        }
        .input option {
          background: #11112a;
          color: var(--color-ink);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm text-ink-soft">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
