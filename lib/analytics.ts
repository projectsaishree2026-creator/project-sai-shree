import { sendGAEvent } from "@next/third-parties/google";

/** GA4 Measurement ID (G-XXXXXXXXXX). Analytics stays off until it is set. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** Send a GA4 event. A no-op when analytics is not configured. */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;
  sendGAEvent("event", name, params);
}
