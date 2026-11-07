"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

/** Accessible accordion. Collapsed answers stay in the HTML so crawlers can read them. */
export function FAQList({
  items,
  idPrefix = "faq",
  defaultOpen = 0,
}: {
  items: FAQItem[];
  idPrefix?: string;
  /** Index of the item open on load, or -1 for none */
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="border-t border-line-strong">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div key={item.q} className="border-b border-line-strong">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-4 py-6 text-left md:py-7"
              >
                <span className={cn("label-mono pt-1.5", isOpen ? "text-brand-600" : "text-ink-400")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg md:text-xl font-semibold tracking-[-0.025em] text-ink-900">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center border transition-all duration-300",
                    isOpen ? "rotate-45 border-brand-500 bg-brand-500 text-white" : "border-line-strong text-ink-600"
                  )}
                  aria-hidden="true"
                >
                  <Plus size={16} />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="collapse-grid" data-open={isOpen}>
              <div>
                <p className="max-w-2xl pb-7 pl-14 pr-12 text-[1.0625rem] leading-relaxed text-ink-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
