import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandProps {
  /** Light text for dark backgrounds. */
  inverted?: boolean;
  className?: string;
  preload?: boolean;
}

/** Logo lockup: mark │ name over mono subtitle. The clinic logo is used as-is, never recoloured. */
export function Brand({ inverted = false, className, preload = false }: BrandProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center shrink-0", className)}
      aria-label="Sai Shree Polyclinic — Home"
    >
      <Image
        src="/logo.png"
        alt="Sai Shree Polyclinic logo"
        width={48}
        height={48}
        preload={preload}
        className="h-11 w-11 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span
        className={cn("mx-3.5 md:mx-4 h-9 md:h-10 w-px", inverted ? "bg-white/15" : "bg-line-strong")}
        aria-hidden="true"
      />
      <span className="flex flex-col justify-center">
        <span
          className={cn(
            "font-display text-[1.0625rem] md:text-[1.1875rem] font-semibold leading-none tracking-[-0.03em] whitespace-nowrap",
            inverted ? "text-white" : "text-ink-900"
          )}
        >
          Sai Shree Polyclinic
        </span>
        <span
          className={cn(
            "mt-1.5 font-mono text-[0.625rem] md:text-[0.6875rem] font-medium uppercase leading-none tracking-[0.16em] whitespace-nowrap",
            inverted ? "text-ink-400" : "text-ink-500"
          )}
        >
          Multi-Specialty Care
        </span>
      </span>
    </Link>
  );
}
