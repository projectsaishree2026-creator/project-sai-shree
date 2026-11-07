"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveals that never hide content from crawlers or no-JS visitors.
 * Elements are only hidden under `html.js` (set by an inline head script before
 * first paint), so the server HTML always contains visible text.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

/* ── FadeUp ── */
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

/* ── Stagger container: children reveal one after another ── */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal-group", visible && "is-visible", className)}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
