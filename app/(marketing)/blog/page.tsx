import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { CTABand } from "@/components/shared/cta-band";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, breadcrumbList } from "@/lib/schema";
import { absoluteUrl } from "@/config/site";

const META = {
  title: "Health Articles from Cuttack Specialists | Sai Shree Blog",
  description:
    "Practical health guides from Sai Shree Polyclinic, Cuttack: diabetes diet with Odia food, root canal treatment, migraine, spirometry and more. Read and book.",
  path: "/blog",
};

export const metadata: Metadata = pageMetadata(META);

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPage(META.path, META.title, META.description, { type: "CollectionPage" }),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: blogPosts.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/blog/${p.slug}`),
                name: p.title,
              })),
            },
          },
          breadcrumbList([{ label: "Home", href: "/" }, { label: "Blog" }], META.path)
        )}
      />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Health guides"
        kicker="Health articles from Cuttack specialists"
        title={
          <>
            Clear answers, <span className="text-brand-400">from our departments.</span>
          </>
        }
        description="Practical, India-specific guides written for patients and families — what a condition is, when to see a specialist, and what to expect."
      />

      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="Latest articles" meta={`${blogPosts.length} articles`} />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {blogPosts.map((p) => {
              const svc = services.find((s) => s.slug === p.service);
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group card flex flex-col overflow-hidden transition-colors hover:border-ink-900">
                  <span className="relative block aspect-[16/9] overflow-hidden bg-surface-2">
                    <Image
                      src={`/images/specialties/${p.service}.webp`}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6 md:p-7">
                    <span className="flex items-center justify-between label-mono text-[0.6875rem]">
                      <span className="text-brand-600">{svc?.name}</span>
                      <span className="text-ink-400">{formatDate(p.datePublished)}</span>
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-ink-900 group-hover:text-brand-600">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-600">{p.excerpt}</p>
                    <span className="link-arrow mt-6">
                      Read article <ArrowUpRight size={14} />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
