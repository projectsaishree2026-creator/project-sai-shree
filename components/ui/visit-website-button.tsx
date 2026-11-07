import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisitWebsiteButtonProps {
  /** The full URL of the doctor's personal/profile website. */
  url: string | undefined;
  /** Display name used for the accessible aria-label. */
  doctorName: string;
  /** Icon-only square button (for tight card footers). */
  compact?: boolean;
  /** Extra class names forwarded to the anchor element. */
  className?: string;
}

/**
 * Renders a "Visit Website" link to a doctor's own site.
 * Returns null if `url` is missing or a placeholder — callers do not need to guard.
 */
export function VisitWebsiteButton({ url, doctorName, compact = false, className }: VisitWebsiteButtonProps) {
  if (!url || url === "#") return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${doctorName}'s website (opens in a new tab)`}
      title="Visit website"
      className={cn("btn-secondary btn-sm", compact && "w-10 px-0", className)}
    >
      <ExternalLink size={15} aria-hidden="true" />
      {!compact && "Visit website"}
    </a>
  );
}
