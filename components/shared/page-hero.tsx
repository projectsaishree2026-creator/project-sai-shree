import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { OpenStatus } from "@/components/shared/open-status";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  /** Keyword line rendered inside the <h1>, above the display title (e.g. "Neurologist in Cuttack") */
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  /** Optional content on the right (image, card…). */
  aside?: ReactNode;
  /** Smaller title size for long headlines (blog posts) */
  compact?: boolean;
  className?: string;
}

/** Dark editorial header band for inner pages. */
export function PageHero({ eyebrow, kicker, title, description, breadcrumbs, actions, aside, compact = false, className }: PageHeroProps) {
  return (
    <section className={cn("dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300", className)}>
      <div
        className="absolute inset-0 grid-lines opacity-100 [--grid-line:rgb(255_255_255/0.035)] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative pt-10 pb-16 md:pt-12 md:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 label-mono">
          {breadcrumbs ? (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-ink-400">
                {breadcrumbs.map((c, i) => (
                  <li key={c.label} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {c.href ? (
                      <Link href={c.href} className="hover:text-white transition-colors">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : (
            <span />
          )}
          <OpenStatus />
        </div>

        <div className={cn("mt-14 md:mt-20 grid grid-cols-1 gap-12", aside && "lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-end")}>
          <div>
            {eyebrow && (
              <p className="mb-6 flex items-center gap-2 label-mono text-brand-300">
                <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            <h1 className="text-white">
              {kicker && (
                <span className="mb-5 block font-display text-xl md:text-2xl font-medium tracking-[-0.02em] text-brand-300">
                  {kicker}
                </span>
              )}{" "}
              <span className={cn(compact ? "display-md" : "display-lg", "block")}>{title}</span>
            </h1>
            {description && (
              <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-300">{description}</p>
            )}
            {actions && <div className="mt-10 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
