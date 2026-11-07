import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Info } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { blogPosts, getPost } from "@/data/blog";
import { blogReview } from "@/data/content-review";
import { services } from "@/data/services";
import { getDoctorsForService } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { ReviewByline } from "@/components/shared/review-byline";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppIcon } from "@/components/shared/icons";
import { FAQList } from "@/components/sections/faq/faq-list";
import { graph, blogPostGraphNodes, breadcrumbList, faqPage } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    image: { url: `/images/specialties/${post.service}.webp`, alt: post.title, width: 1024, height: 1024 },
  });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = services.find((s) => s.slug === post.service);
  const docs = getDoctorsForService(post.service);
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const path = `/blog/${post.slug}`;
  const waUrl = getWhatsAppUrl(
    `Hello ${clinic.name}, I read your article "${post.title}" and would like to book an appointment.`
  );

  return (
    <>
      <JsonLd
        data={graph(
          ...blogPostGraphNodes({
            path,
            title: post.title,
            description: post.metaDescription,
            image: `/images/specialties/${post.service}.webp`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            serviceSlug: post.service,
            review: blogReview[post.slug],
          }),
          breadcrumbList([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }], path),
          faqPage(post.faqs, path)
        )}
      />
      <PageHero
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: service?.name ?? "Article" }]}
        eyebrow={`${service?.name ?? "Health"} · ${formatDate(post.datePublished)}`}
        title={post.title}
        description={post.excerpt}
      />

      <section className="frame section bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <article className="min-w-0 max-w-3xl">
            <ReviewByline status={blogReview[post.slug]} />

            <figure className="relative mt-10 aspect-[16/9] overflow-hidden bg-surface-2">
              <Image
                src={`/images/specialties/${post.service}.webp`}
                alt={`${service?.name ?? "Specialist"} care at Sai Shree Polyclinic, Cuttack`}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 48rem"
                className="object-cover"
              />
            </figure>

            <aside className="mt-10 border border-brand-100 bg-brand-50 p-6 md:p-7" aria-label="Key takeaways">
              <p className="label-mono text-brand-700">Key takeaways</p>
              <ul className="mt-4 space-y-3">
                {post.keyTakeaways.map((k) => (
                  <li key={k} className="flex gap-3 text-ink-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-500" aria-hidden="true" />
                    {k}
                  </li>
                ))}
              </ul>
            </aside>

            {post.sections.map((sec) => (
              <section key={sec.heading} className="mt-14">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.03em]">{sec.heading}</h2>
                <div className="prose-clinic mt-5">
                  {sec.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {sec.list && (
                  <ul className="mt-5 border-t border-line">
                    {sec.list.map((li) => (
                      <li key={li} className="flex gap-3 border-b border-line py-3.5 text-[1.0625rem] leading-relaxed text-ink-700">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-500" aria-hidden="true" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.callout && (
                  <p className="mt-6 flex gap-3 border-l-2 border-brand-500 bg-paper p-5 leading-relaxed text-ink-700">
                    <Info size={18} className="mt-1 shrink-0 text-brand-500" aria-hidden="true" />
                    {sec.callout}
                  </p>
                )}
              </section>
            ))}

            <section className="mt-16">
              <SectionIndex label="Questions" meta={`${post.faqs.length} answers`} />
              <h2 className="mt-8 font-display text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
                Frequently asked questions
              </h2>
              <div className="mt-8">
                <FAQList items={post.faqs} idPrefix={`blog-${post.slug}`} defaultOpen={-1} />
              </div>
            </section>

            {/* CTA */}
            <section className="dark-scope mt-16 bg-ink-900 p-7 md:p-10">
              <p className="label-mono text-brand-300">{service?.name}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.035em] text-white">{post.ctaHeading}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-300">{post.ctaText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
                </a>
                {service && (
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-ghost-light h-auto min-h-[3.25rem] whitespace-normal py-3 text-center"
                  >
                    {service.name} department <ArrowRight size={15} />
                  </Link>
                )}
              </div>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="border border-line-strong bg-paper p-6 lg:sticky lg:top-28">
              <p className="label-mono text-[0.6875rem] text-brand-600">Your specialist</p>
              {docs.map((d) => (
                <Link key={d.id} href={`/doctors/${d.slug}`} className="group mt-5 flex items-center gap-4">
                  <span className="relative h-16 w-14 shrink-0 overflow-hidden bg-surface-2">
                    <Image src={d.image} alt={d.name} fill sizes="56px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-900 group-hover:text-brand-600">{d.name}</span>
                    <span className="block text-sm text-ink-500">{d.qualification.split(",").slice(-1)[0].trim()}</span>
                  </span>
                </Link>
              ))}
              {service && (
                <Link href={`/services/${service.slug}`} className="link-arrow mt-6">
                  About {service.name.toLowerCase()} <ArrowUpRight size={14} />
                </Link>
              )}
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 w-full">
                <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="frame section bg-paper">
          <div className="container-x">
            <SectionIndex label="Keep reading" meta={`${blogPosts.length} articles`} />
            <div className="mt-10 grid grid-cols-1 border-l border-t border-line-strong md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="fx-fill group flex flex-col justify-between gap-6 border-b border-r border-line-strong bg-white p-6"
                >
                  <span className="label-mono text-[0.625rem] text-brand-600 group-hover:text-brand-300">
                    {services.find((s) => s.slug === p.service)?.name}
                  </span>
                  <span className="font-display text-xl font-semibold leading-snug tracking-[-0.025em] text-ink-900 group-hover:text-white">
                    {p.title}
                  </span>
                  <ArrowUpRight size={18} className="text-ink-400 group-hover:text-brand-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
