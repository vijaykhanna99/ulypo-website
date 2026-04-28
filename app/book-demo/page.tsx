"use client";

import { useState } from "react";
import { useLang } from "@/components/language-provider";

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const { tr } = useLang();
  const d = tr.demo;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 text-center px-5">
        <span className="inline-block mb-4 px-3.5 py-1 rounded-full bg-brand-50 text-brand-500 text-xs font-semibold tracking-wide uppercase">
          {d.eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink max-w-2xl mx-auto leading-tight">
          {d.title}
        </h1>
        <p className="mt-4 text-ink-soft max-w-xl mx-auto text-lg">
          {d.description}
        </p>
      </section>

      {/* Form */}
      <section className="pb-28 px-5">
        <div className="mx-auto max-w-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-line bg-white shadow-sm p-8"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-300 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {d.successTitle}
                </h2>
                <p className="mt-2 text-ink-soft">{d.successBody}</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={d.nameLabel}>
                    <input
                      required
                      name="name"
                      className="demo-input"
                      placeholder={d.namePlaceholder}
                    />
                  </Field>
                  <Field label={d.emailLabel}>
                    <input
                      required
                      type="email"
                      name="email"
                      className="demo-input"
                      placeholder={d.emailPlaceholder}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={d.companyLabel}>
                    <input
                      name="company"
                      className="demo-input"
                      placeholder={d.companyPlaceholder}
                    />
                  </Field>
                  <Field label={d.roleLabel}>
                    <input
                      name="role"
                      className="demo-input"
                      placeholder={d.rolePlaceholder}
                    />
                  </Field>
                </div>
                <Field label={d.messageLabel}>
                  <textarea
                    name="message"
                    rows={4}
                    className="demo-input resize-none"
                    placeholder={d.messagePlaceholder}
                  />
                </Field>
                <button type="submit" className="btn-primary mt-1 justify-center">
                  {d.submit}
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 10h10M11 6l4 4-4 4" />
                  </svg>
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <style>{`
        .demo-input {
          width: 100%;
          padding: 0.65rem 0.875rem;
          border-radius: 0.75rem;
          background: #fafafa;
          border: 1px solid var(--color-line);
          color: var(--color-ink);
          outline: none;
          font-size: 0.875rem;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .demo-input::placeholder { color: var(--color-ink-mute); }
        .demo-input:focus {
          border-color: var(--color-brand-400);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(80, 70, 229, 0.08);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
