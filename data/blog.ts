import blogData from "@/content/blog.json";

/**
 * Blog posts (SEO Phase 6). Same content rules as the department pages:
 * no cure promises, no prices, no unverifiable claims, emergency guidance where relevant,
 * and medical review by the department doctor before `reviewedOn` is set (data/content-review.ts).
 */

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Optional highlighted note shown after the section */
  callout?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  /** Department slug this post supports (for CTA, related links and review) */
  service: string;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaText: string;
}

export const blogPosts = blogData as BlogPost[];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const postsForService = (service: string) => blogPosts.filter((p) => p.service === service);
