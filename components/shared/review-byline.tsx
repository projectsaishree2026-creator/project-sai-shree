import Link from "next/link";
import { ShieldCheck, PenLine } from "lucide-react";
import { doctors } from "@/data/doctors";
import { CONTENT_UPDATED_ON, type ReviewStatus } from "@/data/content-review";
import { cn } from "@/lib/utils";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

/**
 * Medical-content byline. Shows "Medically reviewed by …" only when a review date is recorded;
 * otherwise states who published the page, that review is pending, and when it was last updated.
 */
export function ReviewByline({ status, className }: { status?: ReviewStatus; className?: string }) {
  const reviewer = status?.reviewedOn ? doctors.find((d) => d.id === status.reviewerId) : undefined;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-line py-4 text-sm text-ink-600",
        className
      )}
    >
      {reviewer && status?.reviewedOn ? (
        <p className="flex items-center gap-2">
          <ShieldCheck size={16} className="shrink-0 text-success" />
          <span>
            Medically reviewed by{" "}
            <Link href={`/doctors/${reviewer.slug}`} className="font-semibold text-ink-900 hover:text-brand-600">
              {reviewer.name}
            </Link>
            , {(reviewer.qualification ?? reviewer.role).split(",").slice(-1)[0].trim()}
          </span>
        </p>
      ) : (
        <p className="flex items-center gap-2">
          <PenLine size={16} className="shrink-0 text-brand-500" />
          Published by Sai Shree Polyclinic · medical review pending
        </p>
      )}
      <p className="label-mono text-[0.6875rem] text-ink-400">
        {status?.reviewedOn ? `Reviewed ${formatDate(status.reviewedOn)}` : `Updated ${formatDate(CONTENT_UPDATED_ON)}`}
      </p>
      <p className="w-full text-xs text-ink-400">
        This page is general information, not a diagnosis. Please consult a doctor about your own health.
      </p>
    </div>
  );
}
