"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * One delegated listener that reports the clicks that matter for the clinic:
 * WhatsApp, phone, directions and "book appointment" links — wherever they appear.
 */
export function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const page = window.location.pathname;
      const label = (link.textContent ?? "").trim().slice(0, 60);

      if (href.includes("wa.me/")) trackEvent("whatsapp_click", { page, label });
      else if (href.startsWith("tel:")) trackEvent("phone_click", { page, label });
      else if (href.includes("google.com/maps") || href.includes("maps.google.com"))
        trackEvent("directions_click", { page, label });
      else if (href.includes("#appointment") || href === "#book") trackEvent("book_click", { page, label });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
