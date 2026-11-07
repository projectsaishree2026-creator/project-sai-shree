/**
 * schema.org JSON-LD builders (SEO Phase 5).
 *
 * One connected graph: the clinic is defined once (`CLINIC_ID`) and every page entity
 * references it by @id. Only confirmed facts are used — `geo` and `sameAs` are omitted
 * until the clinic confirms coordinates and social/GBP URLs; `lastReviewed` / `reviewedBy`
 * appear only when a doctor has actually reviewed the page (data/content-review.ts).
 */
import { clinic } from "@/data/clinic";
import { absoluteUrl, siteConfig } from "@/config/site";
import type { Doctor } from "@/data/doctors";
import { doctors } from "@/data/doctors";
import type { ReviewStatus } from "@/data/content-review";

export const CLINIC_ID = absoluteUrl("/#clinic");
export const WEBSITE_ID = absoluteUrl("/#website");

/** schema.org MedicalSpecialty enumeration members for each department */
export const SPECIALTY_ENUM: Record<string, string[]> = {
  endocrinology: ["https://schema.org/Endocrine"],
  neurology: ["https://schema.org/Neurologic"],
  pulmonology: ["https://schema.org/Pulmonary"],
  gastroenterology: ["https://schema.org/Gastroenterologic"],
  dental: ["https://schema.org/Dentistry"],
  gynecology: ["https://schema.org/Gynecologic", "https://schema.org/Obstetric"],
  urology: ["https://schema.org/Urologic"],
  oncology: ["https://schema.org/Oncologic"],
};

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: clinic.streetAddress,
  addressLocality: clinic.city,
  addressRegion: clinic.state,
  postalCode: clinic.pincode,
  addressCountry: "IN",
};

export const doctorId = (d: Doctor) => absoluteUrl(`/doctors/${d.slug}#physician`);

/** Site-wide entities: the clinic and the website. Rendered once in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_ID,
        name: clinic.name,
        description: clinic.description,
        url: siteConfig.url,
        logo: absoluteUrl("/logo.png"),
        image: absoluteUrl(siteConfig.ogImage),
        telephone: clinic.phoneE164,
        email: clinic.email,
        address: postalAddress,
        hasMap: clinic.google.mapsUrl,
        geo: { "@type": "GeoCoordinates", latitude: clinic.geo.latitude, longitude: clinic.geo.longitude },
        // Add Facebook / Instagram profile URLs here once they exist.
        sameAs: [clinic.google.mapsUrl],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        medicalSpecialty: Object.values(SPECIALTY_ENUM).flat(),
        availableService: [
          "Digital X-ray",
          "Ultrasound",
          "ECG",
          "Spirometry",
          "Diagnostic laboratory",
          "Endoscopy",
        ].map((name) => ({ "@type": "MedicalTest", name })),
        isAcceptingNewPatients: true,
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Debit Card, Credit Card",
        knowsLanguage: ["or", "hi", "en"],
        areaServed: ["Cuttack", "Bhubaneswar", "Jagatsinghpur", "Kendrapara", "Jajpur", "Dhenkanal", "Angul"].map(
          (name) => ({ "@type": "Place", name })
        ),
        // Physician is an Organization type in schema.org, so `member` (not `employee`, which expects a Person).
        // Each entry is self-describing; the full Physician node lives on the doctor's own page under the same @id.
        member: doctors.map((d) => ({
          "@type": "Physician",
          "@id": doctorId(d),
          name: d.name,
          url: absoluteUrl(`/doctors/${d.slug}`),
          medicalSpecialty: SPECIALTY_ENUM[d.specialtySlug],
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: clinic.stats.rating,
          reviewCount: clinic.stats.reviewCount,
          bestRating: "5",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: clinic.name,
        inLanguage: ["en-IN", "or-IN"],
        publisher: { "@id": CLINIC_ID },
      },
    ],
  };
}

export interface Crumb {
  label: string;
  href?: string;
}

export function breadcrumbList(crumbs: Crumb[], currentPath: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href ?? currentPath),
    })),
  };
}

export function faqPage(items: { q: string; a: string }[], path: string, inLanguage = "en-IN") {
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
    inLanguage,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "ProfilePage" | "CollectionPage" | "FAQPage";

/** A WebPage-family node tying the page to the website and clinic. */
export function webPage(
  path: string,
  name: string,
  description: string,
  { type = "WebPage", inLanguage = "en-IN" }: { type?: PageType; inLanguage?: string } = {}
) {
  return {
    "@type": type,
    "@id": absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": CLINIC_ID },
  };
}

export function medicalWebPage(opts: {
  path: string;
  name: string;
  description: string;
  serviceSlug: string;
  conditions: string[];
  review?: ReviewStatus;
  inLanguage?: string;
}) {
  const reviewer = opts.review?.reviewedOn ? doctors.find((d) => d.id === opts.review?.reviewerId) : undefined;
  return {
    "@type": "MedicalWebPage",
    "@id": absoluteUrl(opts.path),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: opts.inLanguage ?? "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": CLINIC_ID },
    specialty: SPECIALTY_ENUM[opts.serviceSlug],
    about: opts.conditions.map((name) => ({ "@type": "MedicalCondition", name })),
    ...(reviewer &&
      opts.review?.reviewedOn && {
        lastReviewed: opts.review.reviewedOn,
        reviewedBy: { "@id": doctorId(reviewer) },
      }),
  };
}

export function physician(d: Doctor) {
  const realWebsite = d.website && d.website !== "#" ? [d.website] : undefined;
  return {
    "@type": "Physician",
    "@id": doctorId(d),
    name: d.name,
    url: absoluteUrl(`/doctors/${d.slug}`),
    image: absoluteUrl(d.image),
    description: d.bio,
    medicalSpecialty: SPECIALTY_ENUM[d.specialtySlug],
    knowsLanguage: d.languages,
    address: postalAddress,
    telephone: clinic.phoneE164,
    isAcceptingNewPatients: true,
    parentOrganization: { "@id": CLINIC_ID },
    ...(realWebsite && { sameAs: realWebsite }),
  };
}

/** Wraps page-level nodes in a graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/**
 * Blog post: a MedicalWebPage (which carries lastReviewed / reviewedBy once a doctor has
 * reviewed it) whose mainEntity is the BlogPosting. The author is the clinic — never a
 * doctor who has not written or reviewed the post.
 */
export function blogPostGraphNodes(opts: {
  path: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  serviceSlug: string;
  review?: ReviewStatus;
}) {
  const reviewer = opts.review?.reviewedOn ? doctors.find((d) => d.id === opts.review?.reviewerId) : undefined;
  const postId = absoluteUrl(`${opts.path}#post`);
  return [
    {
      "@type": "MedicalWebPage",
      "@id": absoluteUrl(opts.path),
      url: absoluteUrl(opts.path),
      name: opts.title,
      description: opts.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      specialty: SPECIALTY_ENUM[opts.serviceSlug],
      mainEntity: { "@id": postId },
      ...(reviewer &&
        opts.review?.reviewedOn && {
          lastReviewed: opts.review.reviewedOn,
          reviewedBy: { "@id": doctorId(reviewer) },
        }),
    },
    {
      "@type": "BlogPosting",
      "@id": postId,
      headline: opts.title,
      description: opts.description,
      image: absoluteUrl(opts.image),
      datePublished: opts.datePublished,
      dateModified: opts.dateModified,
      inLanguage: "en-IN",
      author: { "@id": CLINIC_ID },
      publisher: { "@id": CLINIC_ID },
      mainEntityOfPage: { "@id": absoluteUrl(opts.path) },
    },
  ];
}

