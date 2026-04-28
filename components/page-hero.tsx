export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-20 pb-14 md:pt-28 md:pb-16 border-b border-white/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-widest text-ink-mute mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.06] text-ink">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-ink-mute leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
