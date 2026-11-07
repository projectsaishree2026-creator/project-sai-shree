import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetaInput {
  /** Full <title>, used as-is (no template) — keep ≤ 60 characters. */
  title: string;
  /** 140–158 characters. */
  description: string;
  /** Site path, e.g. "/services/neurology". Becomes the canonical URL. */
  path: string;
  /** Optional page-specific share image (site path or absolute URL). */
  image?: { url: string; alt: string; width?: number; height?: number };
  type?: "website" | "profile" | "article";
  /** hreflang alternates, e.g. { en: "/", or: "/or" } — English is used as x-default */
  languages?: { en: string; or: string };
  /** Open Graph locale, defaults to en_IN */
  locale?: string;
}

/**
 * Complete per-page metadata. Next.js merges `openGraph`/`twitter` shallowly,
 * so every page must supply the whole object — this helper does that.
 */
export function pageMetadata({ title, description, path, image, type = "website", languages, locale }: PageMetaInput): Metadata {
  const img = image ?? {
    url: siteConfig.ogImage,
    alt: `${siteConfig.name} — multi-specialty polyclinic in Mangalabag, Cuttack`,
    width: 1200,
    height: 630,
  };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      ...(languages && {
        languages: { "en-IN": languages.en, "or-IN": languages.or, "x-default": languages.en },
      }),
    },
    openGraph: {
      type,
      locale: locale ?? siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title,
      description,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
  };
}
