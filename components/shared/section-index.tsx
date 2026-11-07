import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionIndexProps {
  /** Section number, e.g. 1 → "[01]". */
  index?: number;
  label: string;
  /** Optional right-aligned meta, e.g. "FIG. 02 · Departments → Care". */
  meta?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/** Mono section marker: `[01] LABEL ······ META` above a hairline. */
export function SectionIndex({ index, label, meta, tone = "light", className }: SectionIndexProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("flex items-center justify-between gap-6 label-mono", className)}>
      <p className="flex items-center gap-2">
        {index !== undefined ? (
          <span className={dark ? "text-white" : "text-ink-900"}>[{String(index).padStart(2, "0")}]</span>
        ) : (
          <span className="h-[7px] w-[7px] bg-brand-500" aria-hidden="true" />
        )}
        <span className={dark ? "text-brand-300" : "text-brand-600"}>{label}</span>
      </p>
      {meta && (
        <p className={cn("hidden text-right sm:block", dark ? "text-ink-400" : "text-ink-500")}>{meta}</p>
      )}
    </div>
  );
}
