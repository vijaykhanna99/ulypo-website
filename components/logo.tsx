import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Ulypo home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400 via-peach-400 to-gold-400 blur-md opacity-70 group-hover:opacity-100 transition" />
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-peach-400 text-white shadow-inner">
          {/* U + spark mark */}
          <svg
            viewBox="0 0 24 24"
            className="h-4.5 w-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M6 5v8a6 6 0 0 0 12 0V5" />
            <path d="M19 4l.7 1.5L21 6.2l-1.3.7L19 8.4l-.7-1.5L17 6.2l1.3-.7z" fill="currentColor" stroke="none" />
          </svg>
        </span>
      </span>
      <span className="font-display text-[1.15rem] tracking-tight font-semibold text-ink">
        Ulypo
      </span>
    </Link>
  );
}
