import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { absoluteUrl } from "@/config/site";
import { locations } from "@/data/locations";
import { ODIA_SERVICE_SLUGS } from "@/data/odia";
import { blogPosts } from "@/data/blog";

/** Date the site content was last materially updated. Bump when page content changes. */
const CONTENT_UPDATED = new Date("2026-10-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly" = "monthly",
    odiaPath?: string
  ) => ({
    url: absoluteUrl(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
    ...(odiaPath && {
      alternates: { languages: { "en-IN": absoluteUrl(path.startsWith("/or") ? odiaPath : path), "or-IN": absoluteUrl(path.startsWith("/or") ? path : odiaPath) } },
    }),
  });
  const englishOf = (slug: string) => `/services/${slug}`;
  const odiaOf = (slug: string) => `/or/services/${slug}`;

  return [
    page("/", 1, "weekly", "/or"),
    page("/or", 0.8, "monthly", "/"),
    page("/services", 0.9, "weekly"),
    page("/doctors", 0.9),
    page("/about", 0.6),
    page("/contact", 0.8),
    page("/faq", 0.6),
    ...services.map((s) =>
      page(englishOf(s.slug), 0.9, "monthly", ODIA_SERVICE_SLUGS.includes(s.slug) ? odiaOf(s.slug) : undefined)
    ),
    ...ODIA_SERVICE_SLUGS.map((slug) => page(odiaOf(slug), 0.7, "monthly", englishOf(slug))),
    ...locations.map((l) => page(`/locations/${l.slug}`, 0.7)),
    page("/blog", 0.7, "weekly"),
    ...blogPosts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.6), lastModified: new Date(p.dateModified) })),
    ...doctors.map((d) => page(`/doctors/${d.slug}`, 0.8)),
  ];
}
