"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SLIDE_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

/** Tabbed "case file" for each doctor. Auto-advances unless paused, hovered or reduced-motion. */
export function DoctorSpotlight() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();
  const running = !paused && !hovering && !reduce;

  const doc = doctors[active];
  const next = () => setActive((a) => (a + 1) % doctors.length);

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      {/* Tabs */}
      <div className="flex border border-white/10">
        <div role="tablist" aria-label="Our doctors" className="no-scrollbar flex flex-1 overflow-x-auto">
          {doctors.map((d, i) => {
            const selected = i === active;
            return (
              <button
                key={d.id}
                role="tab"
                id={`doc-tab-${i}`}
                aria-selected={selected}
                aria-controls="doc-panel"
                onClick={() => setActive(i)}
                className={cn(
                  "relative min-w-[13rem] shrink-0 border-r border-white/10 px-5 py-4 text-left transition-colors",
                  selected ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"
                )}
              >
                {selected && (
                  <span
                    key={`${active}-${running}`}
                    className="absolute left-0 top-0 h-[2px] bg-brand-400"
                    style={{
                      width: running ? undefined : "100%",
                      animation: running ? `doc-progress ${SLIDE_MS}ms linear forwards` : undefined,
                    }}
                    onAnimationEnd={next}
                  />
                )}
                <span className="flex justify-between label-mono text-[0.6875rem]">
                  <span className={selected ? "text-brand-300" : "text-ink-500"}>{pad(i + 1)}</span>
                </span>
                <span className={cn("mt-2 block truncate font-medium", selected ? "text-white" : "text-ink-300")}>
                  {d.name}
                </span>
                <span className="mt-1 block label-mono text-[0.625rem] text-ink-500">{d.specialty}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume auto-advance" : "Pause auto-advance"}
          className="fx-fill fx-press hidden sm:flex w-16 shrink-0 items-center justify-center border-l border-white/10 text-ink-400 hover:text-white [--fx-fill:var(--color-brand-500)]"
        >
          {paused ? <Play size={15} /> : <Pause size={15} />}
        </button>
      </div>

      {/* Panel */}
      <div
        id="doc-panel"
        role="tabpanel"
        aria-labelledby={`doc-tab-${active}`}
        className="grid grid-cols-1 border-x border-b border-white/10 lg:grid-cols-[minmax(0,1fr)_1.1fr]"
      >
        <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[34rem] overflow-hidden border-b border-white/10 bg-ink-850 lg:border-b-0 lg:border-r">
          <Image
            key={doc.id}
            src={doc.image}
            alt={`${doc.name}, ${doc.specialty} specialist at Sai Shree Polyclinic`}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-top animate-[fade-in_0.6s_ease]"
          />
          <div
            className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.06)]"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/90 to-transparent px-6 pb-5 pt-16 label-mono text-[0.6875rem]">
            <span className="text-white">
              {doc.name.replace("Dr. ", "").split(" ").pop()} / {doc.specialty}
            </span>
            <span className="text-brand-300">{pad(active + 1)}</span>
          </div>
        </div>

        <div className="flex flex-col p-6 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <p className="font-display text-6xl md:text-7xl font-semibold tracking-[-0.06em] text-white">
              {pad(active + 1)}
              <span className="text-ink-700">/{pad(doctors.length)}</span>
            </p>
            <p className="text-right label-mono text-[0.6875rem] text-ink-400">
              {doc.specialty}
              <br />
              {doc.experience}
            </p>
          </div>

          <div className="mt-auto pt-12">
            <p className="label-mono text-brand-300">{doc.qualification}</p>
            <h3 className="mt-4 font-display text-3xl md:text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
              {doc.name}
            </h3>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-300">{doc.bio}</p>
          </div>

          <dl className="mt-10 grid grid-cols-3 border-y border-white/10">
            {[
              { label: "Experience", value: doc.experience },
              { label: "Available", value: doc.available },
              { label: "Languages", value: doc.languages.join(", ") },
            ].map((f, i) => (
              <div key={f.label} className={cn("flex flex-col-reverse py-5", i > 0 && "border-l border-white/10 pl-4 md:pl-6")}>
                <dt className="mt-2 label-mono text-[0.625rem] text-ink-400">{f.label}</dt>
                <dd className="font-display text-base md:text-xl font-semibold leading-snug tracking-[-0.03em] text-white">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl(
                `Hello ${clinic.name}, I'd like to book an appointment with ${doc.name} (${doc.specialty}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book with {doc.name.split(" ")[1]} <ArrowRight size={15} />
            </a>
            <Link href={`/doctors/${doc.slug}`} className="btn-ghost-light">
              Full profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
