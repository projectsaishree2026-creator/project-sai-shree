"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const OPEN_HOUR = 9;
const CLOSE_HOUR = 19;

type Status = { open: boolean; text: string; short: string };

/** Clinic status from the current time in India (IST, UTC+5:30). Mon–Sat 9 AM – 7 PM. */
function getStatus(now = new Date()): Status {
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60_000);
  const day = ist.getDay(); // 0 = Sunday
  const hour = ist.getHours() + ist.getMinutes() / 60;

  if (day !== 0 && hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
    return { open: true, text: "Open now · until 7 PM", short: "Open now" };
  }
  if (day !== 0 && hour < OPEN_HOUR) return { open: false, text: "Closed · opens 9 AM today", short: "Opens 9 AM" };
  // After closing, or Sunday: Saturday evening and Sunday both reopen on Monday
  const nextDay = day === 6 || day === 0 ? "Monday" : "tomorrow";
  return { open: false, text: `Closed · opens 9 AM ${nextDay}`, short: "Closed now" };
}

export function OpenStatus({
  className,
  tone = "dark",
  compact = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  /** Short label ("Open now" / "Closed now") for tight spaces like the header. */
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-2 whitespace-nowrap",
        tone === "dark" ? "text-ink-300" : "text-ink-600",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 shrink-0 rounded-full",
          !status && "bg-ink-500",
          status?.open && "bg-pulse animate-pulse-ring",
          status && !status.open && "bg-amber-400"
        )}
        aria-hidden="true"
      />
      {status ? (compact ? status.short : status.text) : compact ? "Mon–Sat" : "Mon–Sat · 9 AM – 7 PM"}
    </span>
  );
}
