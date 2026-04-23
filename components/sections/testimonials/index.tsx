"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";
import { RatingStars } from "@/components/shared/rating-stars";
import { FadeUp } from "@/components/animations";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = testimonials.length;

  const go = (idx: number) => {
    setCurrent((idx + total) % total);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, autoplay, total]);

  // Show 3 at a time on lg, 2 on md, 1 on mobile
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % total]);
    }
    return result;
  };

  return (
    <section className="section-py bg-white">
      <div className="section-container">
        <FadeUp>
          <div className="mb-12">
            <SectionHeader
              eyebrow="Patient Stories"
              title="What Our Patients"
              titleHighlight="Say About Us"
              subtitle="Real experiences from patients who trusted Sai Shree Polyclinic with their health."
            />
          </div>
        </FadeUp>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisible().map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className={`glass-card p-6 transition-all duration-500 ${
                  i === 0 ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
                }`}
              >
                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${t.color}14` }}
                >
                  <Quote size={18} style={{ color: t.color }} />
                </div>

                <RatingStars rating={t.rating} className="mb-3" />

                <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: `${t.color}18`, color: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      {t.location} · {t.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => go(current - 1)}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 20 : 8,
                    height: 8,
                    background: i === current ? "var(--color-primary)" : "#E2E8F0",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(current + 1)}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Google rating badge */}
        <FadeUp delay={0.2}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-3.5 shadow-sm">
              <div className="flex items-center gap-1.5">
                <RatingStars rating={5} size={16} />
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">4.9/5</span> based on{" "}
                <span className="font-semibold text-primary">500+ Google Reviews</span>
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
