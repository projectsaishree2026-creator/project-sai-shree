import { z } from "zod";

/**
 * Validation for everything the admin editor saves. A save that fails here never reaches
 * GitHub, so a bad edit can't break the build or the live site.
 */

const req = (label: string) => z.string().trim().min(1, `${label} is required`);
/** Optional text: blank becomes "absent" so the UI keeps hiding it, as before. */
const opt = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v ? v : undefined));
const strList = z.array(z.string().trim()).transform((a) => a.filter(Boolean));
const optList = z
  .array(z.string().trim())
  .optional()
  .transform((a) => {
    const f = (a ?? []).filter(Boolean);
    return f.length ? f : undefined;
  });
const slug = z
  .string()
  .trim()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers and dashes");
const url = z.string().trim().refine((v) => v === "#" || /^https?:\/\//.test(v), "Must be a full URL (https://…) or #");
const imagePath = z.string().trim().refine((v) => v.startsWith("/images/") || /^https:\/\//.test(v), "Upload an image");
const isoDate = z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD");
const hex = z.string().trim().regex(/^#[0-9a-fA-F]{6}$/, "Colour must be a hex value like #0EA5E9");

function unique<T>(key: keyof T & string, label: string) {
  return (items: T[], ctx: z.RefinementCtx) => {
    const seen = new Set<unknown>();
    items.forEach((it, i) => {
      const v = it[key];
      if (seen.has(v)) ctx.addIssue({ code: "custom", path: [i, key], message: `Duplicate ${label}: ${String(v)}` });
      seen.add(v);
    });
  };
}

export const clinicSchema = z.object({
  name: req("Name"),
  tagline: req("Tagline"),
  description: req("Description"),
  address: req("Full address"),
  streetAddress: req("Street address"),
  phone: z.string().trim().regex(/^\d{10}$/, "Phone must be 10 digits"),
  phoneDisplay: req("Display phone"),
  phoneE164: z.string().trim().regex(/^\+\d{11,13}$/, "Use the +91XXXXXXXXXX format"),
  whatsapp: z.string().trim().regex(/^\d{11,13}$/, "WhatsApp must be digits with country code, e.g. 917008512773"),
  email: z.string().trim().email("Enter a valid email"),
  hours: req("Hours"),
  city: req("City"),
  state: req("State"),
  pincode: z.string().trim().regex(/^\d{6}$/, "Pincode must be 6 digits"),
  google: z.object({ placeId: req("Place ID"), mapsUrl: url, reviewsUrl: url, writeReviewUrl: url }),
  geo: z.object({ latitude: z.coerce.number(), longitude: z.coerce.number() }),
  openingHours: req("Opening hours (schema)"),
  mapEmbedUrl: url,
  stats: z.object({
    patients: req("Patients"),
    rating: req("Rating"),
    reviewCount: req("Review count"),
    experience: req("Experience"),
    specialties: req("Specialties"),
  }),
  social: z.object({ facebook: url, instagram: url, google: url }),
});

export const doctorsSchema = z
  .array(
    z.object({
      id: req("ID"),
      slug,
      name: req("Name"),
      qualification: opt,
      role: req("Role"),
      seoTitle: req("SEO title").max(70, "SEO title should be under 60–70 characters"),
      metaDescription: req("Meta description").max(170, "Meta description should be under 160 characters"),
      specialty: req("Specialty"),
      specialtySlug: slug,
      experience: opt,
      bio: req("Bio"),
      about: opt,
      available: req("Availability"),
      languages: strList,
      image: imagePath,
      website: opt.refine((v) => !v || /^https?:\/\//.test(v), "Website must start with https://"),
    }),
  )
  .superRefine(unique("id", "ID"))
  .superRefine(unique("slug", "slug"));

export const servicesSchema = z
  .array(
    z.object({
      id: req("ID"),
      slug,
      name: req("Name"),
      shortDesc: req("Short description"),
      seoTitle: req("SEO title").max(70, "SEO title should be under 60–70 characters"),
      metaDescription: req("Meta description").max(170, "Meta description should be under 160 characters"),
      icon: req("Icon"),
      color: hex,
      features: strList,
      conditions: strList,
      doctorAvailable: z.boolean(),
    }),
  )
  .superRefine(unique("slug", "slug"));

export const faqSchema = z
  .array(
    z.object({
      id: req("ID"),
      question: req("Question"),
      answer: req("Answer"),
      category: z.enum(["Visiting", "Appointments", "Services", "Billing", "Consultations"]),
    }),
  )
  .superRefine(unique("id", "ID"));

export const testimonialsSchema = z
  .array(
    z.object({
      id: req("ID"),
      name: req("Name"),
      location: req("Location"),
      rating: z.coerce.number().int().min(1).max(5),
      review: req("Review"),
      specialty: req("Specialty"),
      initials: req("Initials").max(3),
      color: hex,
    }),
  )
  .superRefine(unique("id", "ID"));

export const blogSchema = z
  .array(
    z.object({
      slug,
      title: req("Title"),
      seoTitle: req("SEO title").max(70, "SEO title should be under 60–70 characters"),
      metaDescription: req("Meta description").max(170, "Meta description should be under 160 characters"),
      service: slug,
      datePublished: isoDate,
      dateModified: isoDate,
      excerpt: req("Excerpt"),
      keyTakeaways: strList,
      sections: z
        .array(
          z.object({
            heading: req("Section heading"),
            paragraphs: optList,
            list: optList,
            callout: opt,
          }),
        )
        .min(1, "Add at least one section"),
      faqs: z.array(z.object({ q: req("FAQ question"), a: req("FAQ answer") })),
      ctaHeading: req("CTA heading"),
      ctaText: req("CTA text"),
    }),
  )
  .superRefine(unique("slug", "slug"));

export const schemas = {
  clinic: clinicSchema,
  doctors: doctorsSchema,
  services: servicesSchema,
  faq: faqSchema,
  testimonials: testimonialsSchema,
  blog: blogSchema,
} as const;
