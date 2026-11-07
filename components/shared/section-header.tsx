import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionIndex } from "@/components/shared/section-index";

interface SectionHeaderProps {
  eyebrow?: string;
  /** Section number shown as "[01]" before the eyebrow. */
  index?: number;
  /** Right-aligned mono meta on the index row. */
  meta?: ReactNode;
  title: string;
  /** Rendered after the title in the accent colour. */
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  /** Optional action shown opposite the title on wide screens. */
  action?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  index,
  meta,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  action,
  tone = "light",
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div className={className}>
      {eyebrow && (
        <SectionIndex
          index={index}
          label={eyebrow}
          meta={meta}
          tone={tone}
          className={cn("mb-10 md:mb-14", centered && "justify-center")}
        />
      )}
      <div
        className={cn(
          "flex flex-col gap-8",
          !centered && action && "lg:flex-row lg:items-end lg:justify-between",
          centered && "items-center text-center"
        )}
      >
        <div className={cn("max-w-4xl", centered && "mx-auto")}>
          <Heading className={cn("display-md", dark && "text-white")}>
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className={dark ? "text-brand-400" : "text-brand-500"}>{titleHighlight}</span>
              </>
            )}
          </Heading>
          {subtitle && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg md:text-xl leading-relaxed",
                dark ? "text-ink-300" : "text-ink-500",
                centered && "mx-auto"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
