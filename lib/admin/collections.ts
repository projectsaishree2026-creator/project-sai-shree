/** Editable content sections. Client-safe (no secrets). */
export const COLLECTIONS = {
  clinic: { label: "Clinic details", path: "content/clinic.json" },
  doctors: { label: "Doctors", path: "content/doctors.json" },
  services: { label: "Services", path: "content/services.json" },
  faq: { label: "FAQs", path: "content/faq.json" },
  testimonials: { label: "Testimonials", path: "content/testimonials.json" },
  blog: { label: "Blog", path: "content/blog.json" },
} as const;

export type CollectionKey = keyof typeof COLLECTIONS;
export const COLLECTION_KEYS = Object.keys(COLLECTIONS) as CollectionKey[];
export const isCollectionKey = (k: string): k is CollectionKey => k in COLLECTIONS;
