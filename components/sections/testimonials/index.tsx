"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { clinic } from "@/data/clinic";
import { SectionIndex } from "@/components/shared/section-index";
import { RatingStars } from "@/components/shared/rating-stars";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="frame section bg-paper overflow-hidden">
      <div className="container-x">
        <SectionIndex index={5} label="Patient stories" meta="Verified Google reviews" />

        <div className="mt-14 md:mt-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-md max-w-3xl">
            Real recoveries, <span className="text-brand-500">in our patients&apos; own words.</span>
          </h2>
          <div className="flex items-end gap-8">
            <div>
              <p className="font-display text-6xl font-semibold tracking-[-0.06em] text-ink-900">
                {clinic.stats.rating}
                <span className="text-ink-300">/5</span>
              </p>
              <div className="mt-2 flex items-center gap-3">
                <RatingStars rating={5} size={14} />
                <a
                  href={clinic.google.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-[0.6875rem] text-ink-500 underline-offset-4 hover:text-brand-600 hover:underline"
                >
                  {clinic.stats.reviewCount} Google reviews
                </a>
              </div>
            </div>
            <div className="hidden sm:flex">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Previous reviews"
                className="flex h-12 w-12 items-center justify-center fx-fill fx-press border border-ink-900 text-ink-900 hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Next reviews"
                className="-ml-px flex h-12 w-12 items-center justify-center fx-fill fx-press border border-ink-900 text-ink-900 hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 md:mt-16 flex snap-x snap-mandatory overflow-x-auto scroll-pl-5 px-5 md:scroll-pl-10 md:px-10 xl:px-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))] xl:scroll-pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]"
        role="region"
        aria-label="Patient reviews"
        tabIndex={0}
      >
        {testimonials.map((t, i) => (
          <figure
            key={t.id}
            data-card
            className="-ml-px flex w-[88%] shrink-0 snap-start flex-col border border-line-strong bg-white p-7 md:p-9 first:ml-0 sm:w-[26rem]"
          >
            <div className="flex items-center justify-between label-mono text-[0.6875rem]">
              <span className="text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-brand-600">{t.specialty}</span>
            </div>
            <blockquote className="mt-10 flex-1 font-serif text-[1.625rem] leading-[1.25] text-ink-900">
              “{t.review}”
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-between gap-3 border-t border-line pt-5">
              <span>
                <span className="block font-semibold text-ink-900">{t.name}</span>
                <span className="block label-mono text-[0.625rem] text-ink-500">{t.location}</span>
              </span>
              <RatingStars rating={t.rating} size={13} />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
