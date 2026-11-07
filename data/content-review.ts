/**
 * Medical review status for each content page (E-E-A-T / YMYL).
 *
 * HOW TO MARK A PAGE AS REVIEWED: once the named doctor has read and approved the page,
 * set `reviewedOn` to that date (YYYY-MM-DD). The page byline then shows
 * "Medically reviewed by Dr. … · <date>". Until then it shows only who wrote it and when it
 * was last updated — never claim a review that has not happened.
 */

/** Date the page content was last materially updated. */
export const CONTENT_UPDATED_ON = "2026-10-27";

export interface ReviewStatus {
  /** doctor `id` from data/doctors.ts */
  reviewerId: string;
  /** YYYY-MM-DD, or null until the doctor has approved the page */
  reviewedOn: string | null;
}

export const serviceReview: Record<string, ReviewStatus> = {
  endocrinology: { reviewerId: "dr-sandeep-kumar-sahu", reviewedOn: null },
  neurology: { reviewerId: "dr-manasi-Das", reviewedOn: null },
  pulmonology: { reviewerId: "dr-Asutosh-Rout", reviewedOn: null },
  gastroenterology: { reviewerId: "dr-suryakanta-parida", reviewedOn: null },
  dental: { reviewerId: "dr-abhash-dashs", reviewedOn: null },
  gynecology: { reviewerId: "dr-pratha-apramita", reviewedOn: null },
  urology: { reviewerId: "dr-soumya-ranjan-behera", reviewedOn: null },
  oncology: { reviewerId: "dr-nitya-nutan-misra", reviewedOn: null },
};

/** Blog posts — reviewed by the doctor of the department each post supports. */
export const blogReview: Record<string, ReviewStatus> = {
  "root-canal-treatment-cuttack-guide": { reviewerId: "dr-abhash-dashs", reviewedOn: null },
  "diabetes-diet-odia-food": { reviewerId: "dr-sandeep-kumar-sahu", reviewedOn: null },
  "when-to-see-neurologist-headache-migraine": { reviewerId: "dr-manasi-Das", reviewedOn: null },
  "spirometry-test-guide": { reviewerId: "dr-Asutosh-Rout", reviewedOn: null },
};
