"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Renders its children everywhere except the admin website editor. */
export function PublicOnly({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <>{children}</>;
}
