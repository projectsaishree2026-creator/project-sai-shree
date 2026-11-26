import type { CollectionKey } from "@/lib/admin/collections";
import { SERVICE_ICON_NAMES } from "@/lib/service-icons";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Item = Record<string, any>;

export type Field =
  | {
      type: "text" | "textarea" | "url" | "email" | "date" | "number";
      key: string;
      label: string;
      help?: string;
      /** Shows a character counter with this target */
      maxLen?: number;
      rows?: number;
      placeholder?: string;
      /** Only editable when adding a new item */
      lockedWhenSaved?: boolean;
    }
  | { type: "slug"; key: string; label: string; from: string; help?: string; lockedWhenSaved?: boolean }
  | { type: "color"; key: string; label: string; help?: string }
  | { type: "select"; key: string; label: string; options: string[] | "services"; help?: string; onPick?: (item: Item, value: string, services: Item[]) => Item }
  | { type: "checkbox"; key: string; label: string; help?: string }
  | { type: "list"; key: string; label: string; help?: string; placeholder?: string; multiline?: boolean }
  | { type: "image"; key: string; label: string; folder: string; nameFrom: string; help?: string }
  | { type: "group"; key: string; label: string; fields: Field[] }
  | { type: "repeater"; key: string; label: string; itemTitle: (it: Item, i: number) => string; fields: Field[]; newItem: () => Item; help?: string };

export interface ObjectConfig {
  kind: "object";
  intro: string;
  fields: Field[];
}
export interface ListConfig {
  kind: "list";
  intro: string;
  singular: string;
  title: (it: Item) => string;
  subtitle?: (it: Item) => string;
  image?: (it: Item) => string | undefined;
  /** false = existing items can be edited but not added/removed */
  canAdd: boolean;
  newItem?: () => Item;
  /** Fill derived fields (e.g. id) before saving */
  finalize?: (it: Item) => Item;
  fields: Field[];
  previewPath?: (it: Item) => string;
}
export type CollectionConfig = ObjectConfig | ListConfig;

const SEO: Field[] = [
  { type: "text", key: "seoTitle", label: "SEO title (Google headline)", maxLen: 60, help: "Aim for 50–60 characters." },
  { type: "textarea", key: "metaDescription", label: "Meta description (Google snippet)", maxLen: 158, rows: 3, help: "Aim for 140–158 characters." },
];

const today = () => new Date().toISOString().slice(0, 10);
const rid = () => Math.random().toString(36).slice(2, 8);

export const CONFIG: Record<CollectionKey, CollectionConfig> = {
  clinic: {
    kind: "object",
    intro:
      "Contact details shown across the whole site, in Google search data and on the map. Name, address and phone must match the Google Business Profile exactly.",
    fields: [
      { type: "text", key: "name", label: "Clinic name" },
      { type: "text", key: "tagline", label: "Tagline" },
      { type: "textarea", key: "description", label: "Short description", rows: 2, maxLen: 158 },
      {
        type: "group",
        key: "",
        label: "Phone & email",
        fields: [
          { type: "text", key: "phone", label: "Phone (10 digits)", placeholder: "7008512773" },
          { type: "text", key: "phoneDisplay", label: "Phone as displayed", placeholder: "+91 70085 12773" },
          { type: "text", key: "phoneE164", label: "Phone for call links", placeholder: "+917008512773" },
          { type: "text", key: "whatsapp", label: "WhatsApp number (with 91)", placeholder: "917008512773" },
          { type: "email", key: "email", label: "Email" },
        ],
      },
      {
        type: "group",
        key: "",
        label: "Address",
        fields: [
          { type: "text", key: "address", label: "Full address" },
          { type: "text", key: "streetAddress", label: "Street address" },
          { type: "text", key: "city", label: "City" },
          { type: "text", key: "state", label: "State" },
          { type: "text", key: "pincode", label: "Pincode" },
        ],
      },
      {
        type: "group",
        key: "",
        label: "Timings",
        fields: [
          { type: "text", key: "hours", label: "Hours as displayed", placeholder: "Mon–Sat: 9 AM – 7 PM" },
          { type: "text", key: "openingHours", label: "Hours for Google (schema)", placeholder: "Mo-Sa 09:00-19:00", help: "Format: Mo-Sa 09:00-19:00" },
        ],
      },
      {
        type: "group",
        key: "stats",
        label: "Numbers shown on the site",
        fields: [
          { type: "text", key: "patients", label: "Patients treated" },
          { type: "text", key: "rating", label: "Google rating", help: "Keep in sync with the Google Business Profile." },
          { type: "text", key: "reviewCount", label: "Google review count" },
          { type: "text", key: "experience", label: "Years of experience" },
          { type: "text", key: "specialties", label: "Specialties" },
        ],
      },
      {
        type: "group",
        key: "social",
        label: "Social links",
        fields: [
          { type: "url", key: "facebook", label: "Facebook", help: "Use # to hide." },
          { type: "url", key: "instagram", label: "Instagram" },
          { type: "url", key: "google", label: "Google" },
        ],
      },
      {
        type: "group",
        key: "google",
        label: "Google Business Profile",
        fields: [
          { type: "text", key: "placeId", label: "Place ID" },
          { type: "url", key: "mapsUrl", label: "Maps link" },
          { type: "url", key: "reviewsUrl", label: "Reviews link" },
          { type: "url", key: "writeReviewUrl", label: "Write-a-review link" },
        ],
      },
      {
        type: "group",
        key: "geo",
        label: "Map pin",
        fields: [
          { type: "number", key: "latitude", label: "Latitude" },
          { type: "number", key: "longitude", label: "Longitude" },
        ],
      },
      { type: "url", key: "mapEmbedUrl", label: "Map embed URL" },
    ],
  },

  doctors: {
    kind: "list",
    intro: "Doctor cards and profile pages. Leave a field blank if it isn't confirmed — the site hides it rather than guessing.",
    singular: "doctor",
    title: (d) => d.name || "New doctor",
    subtitle: (d) => [d.role, d.available].filter(Boolean).join(" · "),
    image: (d) => d.image,
    canAdd: true,
    newItem: () => ({
      id: "",
      slug: "",
      name: "Dr. ",
      role: "",
      seoTitle: "",
      metaDescription: "",
      specialty: "",
      specialtySlug: "",
      bio: "",
      available: "By appointment",
      languages: [],
      image: "",
    }),
    finalize: (d) => ({ ...d, id: d.id || d.slug }),
    previewPath: (d) => `/doctors/${d.slug}`,
    fields: [
      { type: "text", key: "name", label: "Full name", placeholder: "Dr. Firstname Lastname" },
      { type: "slug", key: "slug", label: "Page URL", from: "name", lockedWhenSaved: true, help: "Changing a live doctor's URL breaks Google links, so it is locked once saved." },
      { type: "image", key: "image", label: "Photo", folder: "doctors", nameFrom: "slug", help: "Square or portrait WebP/JPG, under 1.5 MB." },
      { type: "text", key: "qualification", label: "Qualification", placeholder: "MBBS, MD (Medicine)", help: "As printed by the doctor. Leave blank until confirmed." },
      { type: "text", key: "role", label: "Role", placeholder: "Neurologist" },
      {
        type: "select",
        key: "specialtySlug",
        label: "Department",
        options: "services",
        onPick: (item, value, services) => ({ ...item, specialtySlug: value, specialty: services.find((s) => s.slug === value)?.name ?? item.specialty }),
      },
      { type: "text", key: "experience", label: "Experience", placeholder: "12 Years", help: "Leave blank until confirmed." },
      { type: "text", key: "available", label: "Consulting days", placeholder: "Mon, Wed, Fri", help: "Use “Everyday” (Mon–Sat) or “By appointment” for special wording." },
      { type: "list", key: "languages", label: "Languages", placeholder: "Odia" },
      { type: "textarea", key: "bio", label: "Card bio (one sentence)", maxLen: 130, rows: 2, help: "~110–130 characters keeps every card the same height." },
      { type: "textarea", key: "about", label: "Extra detail (profile page only)", rows: 3 },
      { type: "url", key: "website", label: "Personal website", help: "Leave blank to hide the “Visit Website” button." },
      ...SEO,
      { type: "text", key: "id", label: "Internal ID", lockedWhenSaved: true, help: "Filled automatically from the page URL." },
    ],
  },

  services: {
    kind: "list",
    intro:
      "Department cards and the summary parts of each department page. New departments need full page content written first, so adding or removing one is done by your developer.",
    singular: "service",
    title: (s) => s.name,
    subtitle: (s) => s.shortDesc,
    canAdd: false,
    previewPath: (s) => `/services/${s.slug}`,
    fields: [
      { type: "text", key: "name", label: "Department name" },
      { type: "textarea", key: "shortDesc", label: "Short description", rows: 2 },
      { type: "list", key: "features", label: "Facilities / tests", placeholder: "HbA1c Testing" },
      { type: "list", key: "conditions", label: "Conditions treated", placeholder: "Type 2 Diabetes" },
      { type: "checkbox", key: "doctorAvailable", label: "Show “Doctor available” badge" },
      { type: "select", key: "icon", label: "Icon", options: SERVICE_ICON_NAMES },
      { type: "color", key: "color", label: "Accent colour" },
      ...SEO,
    ],
  },

  faq: {
    kind: "list",
    intro: "Questions shown on the FAQ page. Order matters — the homepage shows the first 8.",
    singular: "FAQ",
    title: (f) => f.question || "New question",
    subtitle: (f) => f.category,
    canAdd: true,
    newItem: () => ({ id: `faq-${rid()}`, question: "", answer: "", category: "Visiting" }),
    fields: [
      { type: "text", key: "question", label: "Question" },
      { type: "textarea", key: "answer", label: "Answer", rows: 5 },
      { type: "select", key: "category", label: "Category", options: ["Visiting", "Appointments", "Services", "Billing", "Consultations"] },
    ],
  },

  testimonials: {
    kind: "list",
    intro: "Patient reviews on the homepage. Only publish real reviews the patient agreed to share.",
    singular: "testimonial",
    title: (t) => t.name || "New testimonial",
    subtitle: (t) => `${"★".repeat(Number(t.rating) || 0)} · ${t.specialty || ""}`,
    canAdd: true,
    newItem: () => ({ id: `t-${rid()}`, name: "", location: "Cuttack", rating: 5, review: "", specialty: "", initials: "", color: "#0EA5E9" }),
    finalize: (t) => ({
      ...t,
      initials:
        t.initials ||
        String(t.name || "")
          .split(/\s+/)
          .map((w: string) => w[0] ?? "")
          .join("")
          .slice(0, 2)
          .toUpperCase(),
    }),
    fields: [
      { type: "text", key: "name", label: "Patient name" },
      { type: "text", key: "location", label: "Location" },
      { type: "select", key: "rating", label: "Rating", options: ["5", "4", "3", "2", "1"] },
      { type: "textarea", key: "review", label: "Review", rows: 4 },
      { type: "text", key: "specialty", label: "Department", placeholder: "Gynecology" },
      { type: "text", key: "initials", label: "Initials", help: "Filled from the name if left blank." },
      { type: "color", key: "color", label: "Avatar colour" },
    ],
  },

  blog: {
    kind: "list",
    intro: "Health articles. No cure promises, no prices, and add emergency guidance where relevant.",
    singular: "post",
    title: (p) => p.title || "New post",
    subtitle: (p) => `${p.datePublished} · ${p.service}`,
    canAdd: true,
    newItem: () => ({
      slug: "",
      title: "",
      seoTitle: "",
      metaDescription: "",
      service: "",
      datePublished: today(),
      dateModified: today(),
      excerpt: "",
      keyTakeaways: [],
      sections: [{ heading: "", paragraphs: [""] }],
      faqs: [],
      ctaHeading: "",
      ctaText: "",
    }),
    previewPath: (p) => `/blog/${p.slug}`,
    fields: [
      { type: "text", key: "title", label: "Title" },
      { type: "slug", key: "slug", label: "Page URL", from: "title", lockedWhenSaved: true },
      { type: "select", key: "service", label: "Department", options: "services" },
      { type: "date", key: "datePublished", label: "Published" },
      { type: "date", key: "dateModified", label: "Last updated", help: "Update this when you change the article." },
      { type: "textarea", key: "excerpt", label: "Excerpt", rows: 3 },
      { type: "list", key: "keyTakeaways", label: "Key takeaways", multiline: true },
      {
        type: "repeater",
        key: "sections",
        label: "Sections",
        itemTitle: (s, i) => s.heading || `Section ${i + 1}`,
        newItem: () => ({ heading: "", paragraphs: [""] }),
        fields: [
          { type: "text", key: "heading", label: "Heading" },
          { type: "list", key: "paragraphs", label: "Paragraphs", multiline: true },
          { type: "list", key: "list", label: "Bullet points", multiline: true },
          { type: "textarea", key: "callout", label: "Highlighted note (optional)", rows: 2 },
        ],
      },
      {
        type: "repeater",
        key: "faqs",
        label: "FAQs",
        itemTitle: (f, i) => f.q || `Question ${i + 1}`,
        newItem: () => ({ q: "", a: "" }),
        fields: [
          { type: "text", key: "q", label: "Question" },
          { type: "textarea", key: "a", label: "Answer", rows: 3 },
        ],
      },
      { type: "text", key: "ctaHeading", label: "Call-to-action heading" },
      { type: "textarea", key: "ctaText", label: "Call-to-action text", rows: 2 },
      ...SEO,
    ],
  },
};
