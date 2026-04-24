"use client";

import Image from "next/image";
import { useState } from "react";

const SERVICE_CARDS = [
  {
    title: "Pathology",
    desc: "Advanced diagnostic tests, blood work, and lab investigations with rapid result turnaround for accurate diagnosis.",
    img: "/images/pathology.webp",
    accent: "#0EA5E9",
  },
  {
    title: "Endoscopy",
    desc: "State-of-the-art endoscopic procedures for gastrointestinal diagnosis and treatment by specialist gastroenterologists.",
    img: "/images/endoscopy.webp",
    accent: "#06B6D4",
  },
  {
    title: "Medicine Shop",
    desc: "In-house pharmacy stocked with prescribed medications, supplements, and OTC products for your convenience.",
    img: "/images/medicine-shop.webp",
    accent: "#10B981",
  },
];

export function AboutServiceCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /** Mouse (desktop): open on enter, close on leave */
  const handlePointerEnter = (e: React.PointerEvent, index: number) => {
    if (e.pointerType === "mouse") setOpenIndex(index);
  };
  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setOpenIndex(null);
  };

  /** Touch (mobile): toggle on tap */
  const handleClick = (e: React.MouseEvent, index: number) => {
    // Only act on click if NOT triggered by a mouse pointer
    // (on mouse, hover already handled it; on touch, pointerType is "touch")
    const pe = e.nativeEvent as PointerEvent;
    if (!pe.pointerType || pe.pointerType !== "mouse") {
      setOpenIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <div className="mt-10">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-blue-100" />
        <p className="text-xs font-bold uppercase tracking-widest text-primary whitespace-nowrap">
          Our Other Services
        </p>
        <div className="h-px flex-1 bg-blue-100" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {SERVICE_CARDS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer select-none"
            style={{ height: "300px" }}
            onPointerEnter={(e) => handlePointerEnter(e, index)}
            onPointerLeave={handlePointerLeave}
            onClick={(e) => handleClick(e, index)}
          >
            {/* Full-bleed background image */}
            <Image
              src={item.img}
              alt={`${item.title} at Sai Shree Polyclinic Cuttack`}
              fill
              className="object-cover transition-transform duration-500"
              style={{ transform: isOpen ? "scale(1.06)" : "scale(1)" }}
              sizes="(max-width: 640px) 100vw, 33vw"
            />

            {/* Persistent dark gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Glass panel — expands from bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-md rounded-t-2xl px-5 overflow-hidden"
              style={{
                borderTop: `2px solid ${item.accent}60`,
                height: isOpen ? "230px" : "72px",
                transition: "height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Always-visible title row */}
              <div
                className="flex items-center justify-between shrink-0"
                style={{ height: "72px" }}
              >
                <h3 className="font-bold text-lg text-white leading-snug tracking-tight">
                  {item.title}
                </h3>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0 ml-2"
                  style={{
                    background: `${item.accent}30`,
                    color: item.accent,
                    border: `1px solid ${item.accent}60`,
                  }}
                >
                  Available
                </span>
              </div>

              {/* Description — fades in when open */}
              <p
                className="text-sm text-gray-200 leading-relaxed pb-5"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transition: `opacity 0.3s ease ${isOpen ? "0.18s" : "0s"}`,
                }}
              >
                {item.desc}
              </p>

              {/* Mobile tap hint (only shown when closed) */}
              <p
                className="text-[10px] text-gray-400 mt-1 sm:hidden"
                style={{
                  opacity: isOpen ? 0 : 0.7,
                  transition: "opacity 0.2s ease",
                }}
              >
                Tap to learn more
              </p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
