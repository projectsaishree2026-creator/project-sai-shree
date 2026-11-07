import Link from "next/link";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

/** Link between an English page and its Odia version (and back). */
export function LanguageSwitch({
  href,
  to,
  tone = "light",
  className,
}: {
  href: string;
  /** Language the link leads to */
  to: "or" | "en";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      hrefLang={to === "or" ? "or" : "en"}
      lang={to === "or" ? "or" : "en"}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        tone === "dark"
          ? "border-white/20 text-white hover:border-white"
          : "border-line-strong text-ink-800 hover:border-ink-900",
        className
      )}
    >
      <Languages size={15} aria-hidden="true" />
      {to === "or" ? "ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ" : "Read in English"}
    </Link>
  );
}
