import Link from "next/link";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

function Cross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6 shrink-0", className)} aria-hidden="true">
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor" />
    </svg>
  );
}

/** Endless ticker of departments, alternating sans and italic serif, with medical-cross separators. */
export function DepartmentMarquee({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  const items = [...services, ...services];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-8 md:py-10",
        dark ? "border-white/[0.07] bg-ink-900" : "border-line bg-white"
      )}
    >
      <ul
        className="marquee-track flex w-max animate-marquee items-center gap-10 md:gap-14"
        aria-label="Departments"
      >
        {items.map((s, i) => {
          const serif = i % 2 === 1;
          const hidden = i >= services.length;
          return (
            <li key={`${s.id}-${i}`} className="flex items-center gap-10 md:gap-14" aria-hidden={hidden}>
              <Link
                href={`/services/${s.slug}`}
                tabIndex={hidden ? -1 : undefined}
                className="group flex items-start gap-2"
              >
                <span className="label-mono mt-2 text-[0.625rem] text-brand-400">
                  {String((i % services.length) + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "whitespace-nowrap text-5xl md:text-7xl transition-colors",
                    serif
                      ? "font-serif italic font-normal tracking-[-0.01em]"
                      : "font-display font-semibold tracking-[-0.05em]",
                    dark
                      ? serif
                        ? "text-ink-400 group-hover:text-white"
                        : "text-white group-hover:text-brand-300"
                      : serif
                        ? "text-ink-400 group-hover:text-ink-900"
                        : "text-ink-900 group-hover:text-brand-600"
                  )}
                >
                  {s.name}
                </span>
              </Link>
              <Cross className={dark ? "text-brand-500" : "text-brand-500"} />
            </li>
          );
        })}
      </ul>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r",
          dark ? "from-ink-900" : "from-white"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l",
          dark ? "from-ink-900" : "from-white"
        )}
      />
    </div>
  );
}
