import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Ulypo home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Ulypo logo"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      <span className="font-display text-[1.15rem] tracking-tight font-semibold text-ink">
        Ulypo
      </span>
    </Link>
  );
}
