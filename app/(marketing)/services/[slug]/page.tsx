import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, medicalWebPage, breadcrumbList, faqPage } from "@/lib/schema";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, AlertTriangle } from "lucide-react";
import { services } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { postsForService } from "@/data/blog";
import { serviceReview } from "@/data/content-review";
import { ODIA_SERVICE_SLUGS } from "@/data/odia";
import { LanguageSwitch } from "@/components/shared/language-switch";
import { getDoctorsForService } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { ReviewByline } from "@/components/shared/review-byline";
import { CTABand } from "@/components/shared/cta-band";
import { WhatsAppIcon } from "@/components/shared/icons";
import { DoctorCard } from "@/components/sections/doctors";
import { FAQList } from "@/components/sections/faq/faq-list";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    ...(ODIA_SERVICE_SLUGS.includes(service.slug) && {
      languages: { en: `/services/${service.slug}`, or: `/or/services/${service.slug}` },
    }),
    image: {
      url: `/images/specialties/${service.slug}.webp`,
      alt: `${service.name} at ${clinic.name}, Cuttack`,
      width: 1024,
      height: 1024,
    },
  });
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const content = serviceContent[slug];
  if (index === -1 || !content) notFound();
  const service = services[index];

  const relatedDoctors = getDoctorsForService(service.slug);
  const related = content.related
    .map((r) => services.find((s) => s.slug === r))
    .filter((s): s is (typeof services)[number] => Boolean(s));
  const otherServices = services.filter((s) => s.slug !== service.slug && !content.related.includes(s.slug));
  const waMessage = `Hello ${clinic.name}, I'd like to book an appointment for ${service.name}.`;
  const num = pad(index + 1);

  return (
    <>
      <JsonLd
        data={graph(
          medicalWebPage({
            path: `/services/${service.slug}`,
            name: service.seoTitle,
            description: service.metaDescription,
            serviceSlug: service.slug,
            conditions: content.conditions.map((c) => c.name),
            review: serviceReview[service.slug],
          }),
          breadcrumbList(
            [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }],
            `/services/${service.slug}`
          ),
          faqPage(content.faqs, `/services/${service.slug}`)
        )}
      />
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        eyebrow={`Department ${num} / ${pad(services.length)}`}
        kicker={content.h1Kicker}
        title={
          <>
            {service.name}
            <span className="text-brand-400">.</span>
          </>
        }
        description={service.shortDesc}
        actions={
          <>
            <a href="#book" className="btn-primary btn-lg">
              Book {service.name} <ArrowRight size={16} />
            </a>
            <a
              href={getWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light btn-lg"
            >
              <WhatsAppIcon className="w-4 h-4 text-pulse" /> WhatsApp
            </a>
          </>
        }
        aside={
          <figure className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-ink-850">
            <Image
              src={`/images/specialties/${service.slug}.webp`}
              alt={`${service.name} consultation at Sai Shree Polyclinic, Mangalabag, Cuttack`}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.07)]" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/90 to-transparent px-5 pb-4 pt-14 label-mono text-[0.6875rem]">
              <span className="text-white">Fig. {num} · {service.name}</span>
              {service.doctorAvailable && (
                <span className="flex items-center gap-1.5 text-pulse">
                  <span className="h-1.5 w-1.5 rounded-full bg-pulse" aria-hidden="true" />
                  Specialist available
                </span>
              )}
            </figcaption>
          </figure>
        }
      />

      <section className="frame section bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-20">
          <article className="min-w-0">
            <ReviewByline status={serviceReview[service.slug]} />
            {ODIA_SERVICE_SLUGS.includes(service.slug) && (
              <LanguageSwitch href={`/or/services/${service.slug}`} to="or" className="mt-5" />
            )}

            {/* 01 — Overview */}
            <div className="mt-12">
              <SectionIndex index={1} label={`About ${service.name.toLowerCase()} at Sai Shree`} />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                What {service.name.toLowerCase()} treats
              </h2>
              <div className="prose-clinic mt-6">
                {content.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* 02 — Conditions */}
            <div className="mt-16">
              <SectionIndex index={2} label="Conditions we treat" meta={`${content.conditions.length} conditions`} />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Conditions treated in our {service.name.toLowerCase()} department
              </h2>
              <dl className="mt-8 border-t border-line-strong">
                {content.conditions.map((c, i) => (
                  <div key={c.name} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-6">
                    <span className="label-mono pt-1 text-[0.6875rem] text-ink-400">{pad(i + 1)}</span>
                    <div>
                      <dt className="font-display text-xl font-semibold tracking-[-0.025em] text-ink-900">{c.name}</dt>
                      <dd className="mt-2 leading-relaxed text-ink-600">{c.text}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* 03 — When to see a specialist */}
            <div className="mt-16">
              <SectionIndex index={3} label="When to see a specialist" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Symptoms that mean you should book a visit
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {content.symptoms.map((s) => (
                  <li key={s} className="flex gap-3 border-b border-line py-4 text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-500" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex gap-3 border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-ink-700">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
                Severe or sudden symptoms — chest pain, difficulty breathing, signs of stroke, heavy bleeding or
                loss of consciousness — need emergency care. Go to the nearest hospital emergency immediately.
              </p>
            </div>

            {/* 04 — Available here */}
            <div className="mt-16">
              <SectionIndex index={4} label="Tests & services at the clinic" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Diagnostics and treatment available here
              </h2>
              <dl className="mt-8 grid grid-cols-1 border-l border-t border-line-strong sm:grid-cols-2">
                {content.available.map((a) => (
                  <div key={a.name} className="border-b border-r border-line-strong p-6">
                    <dt className="font-display text-lg font-semibold tracking-[-0.02em] text-ink-900">{a.name}</dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{a.text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 05 — Doctors */}
            {relatedDoctors.length > 0 && (
              <div className="mt-16">
                <SectionIndex index={5} label="Meet the doctor" />
                <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                  Your {service.name.toLowerCase()} {relatedDoctors.length > 1 ? "specialists" : "specialist"}
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {relatedDoctors.map((doc) => (
                    <DoctorCard key={doc.id} doctor={doc} showBio />
                  ))}
                </div>
              </div>
            )}

            {/* 06 — First visit */}
            <div className="mt-16">
              <SectionIndex index={6} label="Your first visit" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">What to expect at your first visit</h2>
              <ol className="mt-8 border-t border-line-strong">
                {content.firstVisit.map((step, i) => (
                  <li key={i} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-5 text-ink-700">
                    <span className="label-mono pt-0.5 text-brand-600">{pad(i + 1)}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* 07 — Getting here */}
            <div className="mt-16">
              <SectionIndex index={7} label="Getting here" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Coming from Cuttack, Bhubaneswar or nearby districts
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-600">{content.travel}</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
                Address: <strong className="text-ink-900">{clinic.address}</strong>.{" "}
                <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
                  Directions and map
                </Link>
                .
              </p>
            </div>

            {/* 08 — FAQ */}
            <div className="mt-16">
              <SectionIndex index={8} label="Questions" meta={`${content.faqs.length} answers`} />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                {service.name} — frequently asked questions
              </h2>
              <div className="mt-8">
                <FAQList items={content.faqs} idPrefix={service.slug} />
              </div>
            </div>

            {/* Related reading */}
            {postsForService(service.slug).length > 0 && (
              <div className="mt-16">
                <SectionIndex label="Related reading" />
                <ul className="mt-6 border-t border-line-strong">
                  {postsForService(service.slug).map((p) => (
                    <li key={p.slug} className="border-b border-line-strong">
                      <Link href={`/blog/${p.slug}`} className="group flex items-center justify-between gap-4 py-5">
                        <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink-900 group-hover:text-brand-600">
                          {p.title}
                        </span>
                        <ArrowUpRight size={18} className="shrink-0 text-ink-400 group-hover:text-brand-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related specialties */}
            <div className="mt-16">
              <SectionIndex label="Related specialties" />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/services/${r.slug}`}
                    className="fx-fill group flex items-center justify-between gap-4 border border-line-strong p-6"
                  >
                    <span>
                      <span className="block font-display text-xl font-semibold tracking-[-0.03em] text-ink-900 group-hover:text-white">
                        {r.name}
                      </span>
                      <span className="mt-1 block text-sm text-ink-500 group-hover:text-ink-300">{r.shortDesc}</span>
                    </span>
                    <ArrowUpRight size={18} className="shrink-0 text-ink-400 group-hover:text-brand-300" />
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <aside id="book" className="scroll-mt-28">
            <div className="border border-line-strong bg-paper p-6 md:p-7 lg:sticky lg:top-28">
              <p className="label-mono text-[0.6875rem] text-brand-600">Book · {service.name}</p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-ink-900">
                Request an appointment
              </p>
              <p className="mt-2 mb-7 text-ink-500">Quick &amp; easy. We confirm within 30 minutes.</p>
              <AppointmentForm compact defaultDepartment={service.slug} />
              <a
                href={`tel:+91${clinic.phone}`}
                className="fx-phone mt-5 flex items-center justify-center gap-2 border-t border-line pt-5 label-mono text-ink-700 hover:text-brand-600"
              >
                <Phone size={14} /> Or call {clinic.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Other departments */}
      <section className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex label="Other departments" meta={`${services.length} specialties under one roof`} />
          <div className="mt-10 grid grid-cols-1 border-l border-t border-line-strong sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="fx-fill group flex items-center justify-between gap-4 border-b border-r border-line-strong bg-white p-6"
              >
                <span>
                  <span className="block label-mono text-[0.625rem] text-ink-400 group-hover:text-brand-300">
                    {pad(services.indexOf(s) + 1)}
                  </span>
                  <span className="mt-2 block font-display text-xl font-semibold tracking-[-0.03em] text-ink-900 group-hover:text-white">
                    {s.name}
                  </span>
                </span>
                <ArrowUpRight size={18} className="text-ink-400 group-hover:text-brand-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand whatsappMessage={waMessage} />
    </>
  );
}
