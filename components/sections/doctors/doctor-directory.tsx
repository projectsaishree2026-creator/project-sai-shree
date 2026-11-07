"use client";

import { useMemo, useState } from "react";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { DoctorCard } from "@/components/sections/doctors";
import { cn } from "@/lib/utils";

/** Filterable grid of every doctor, grouped by department. */
export function DoctorDirectory() {
  const [filter, setFilter] = useState<string>("all");

  const departments = useMemo(
    () => services.filter((s) => doctors.some((d) => d.specialtySlug === s.slug)),
    []
  );
  const visible = filter === "all" ? doctors : doctors.filter((d) => d.specialtySlug === filter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter doctors by department"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0"
      >
        {[{ slug: "all", name: "All doctors" }, ...departments].map((d) => {
          const active = filter === d.slug;
          return (
            <button
              key={d.slug}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(d.slug)}
              className={cn(
                "fx-press h-10 shrink-0 rounded border px-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] transition-colors",
                active
                  ? "border-ink-900 bg-ink-900 text-white"
                  : "fx-fill border-line-strong bg-white text-ink-700 hover:border-ink-900 hover:text-white"
              )}
            >
              {d.name}
            </button>
          );
        })}
      </div>

      <p className="mt-6 label-mono text-[0.6875rem] text-ink-500" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "doctor" : "doctors"}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} showBio />
        ))}
      </div>
    </>
  );
}
