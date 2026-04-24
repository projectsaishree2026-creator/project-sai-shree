import { ExternalLink } from "lucide-react";

interface VisitWebsiteButtonProps {
  /** The full URL of the doctor's personal/profile website. */
  url: string | undefined;
  /** Display name used for the accessible aria-label. */
  doctorName: string;
  /** Extra class names forwarded to the anchor element. */
  className?: string;
  /** Prevent card flip / other parent click handlers from firing. Defaults to true. */
  stopPropagation?: boolean;
}

/**
 * Renders a glass-style "Visit Website" anchor button.
 * Returns null if `url` is falsy — callers do not need to guard.
 */
export function VisitWebsiteButton({
  url,
  doctorName,
  className = "",
  stopPropagation = true,
}: VisitWebsiteButtonProps) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${doctorName}'s personal website`}
      onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
      className={[
        // Base layout — matches btn-primary sizing but uses outline/glass style
        "inline-flex items-center justify-center gap-1.5",
        "py-2.5 px-3",
        "rounded-full",
        "text-sm font-semibold",
        "whitespace-nowrap",
        "border border-gray-200",
        "bg-white/70 backdrop-blur-sm",
        "text-gray-700",
        "shadow-sm",
        "transition-all duration-200",
        "hover:border-primary/60 hover:text-primary hover:bg-white hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ExternalLink size={14} strokeWidth={2.2} aria-hidden="true" />
      Visit Website
    </a>
  );
}
