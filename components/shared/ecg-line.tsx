import { cn } from "@/lib/utils";

/** Animated heartbeat trace — the site's signature medical motif. */
export function ECGLine({ className }: { className?: string }) {
  const path =
    "M0 60 H180 L198 60 L208 44 L218 60 H260 L272 60 L282 6 L296 112 L308 60 H350 L368 60 L382 38 L398 60 H600 L618 60 L628 44 L638 60 H680 L692 60 L702 6 L716 112 L728 60 H770 L788 60 L802 38 L818 60 H1200";

  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={cn("h-full w-full overflow-visible", className)}
      aria-hidden="true"
    >
      <path d={path} fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray="1"
        className="animate-ecg"
        style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
      />
    </svg>
  );
}
