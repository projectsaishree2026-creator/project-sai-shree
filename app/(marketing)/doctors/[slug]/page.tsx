import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, physician, webPage, doctorId, breadcrumbList, faqPage } from "@/lib/schema";
import { notFound, permanentRedirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { getDoctorFaqs, availabilitySentence } from "@/data/doctor-faqs";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { CTABand } from "@/components/shared/cta-band";
import { SectionIndex } from "@/components/shared/section-index";
import { OpenStatus } from "@/components/shared/open-status";
import { WhatsAppIcon } from "@/components/shared/icons";
import { VisitWebsiteButton } from "@/components/ui/visit-website-button";
import { DoctorCard } from "@/components/sections/doctors";
import { FAQList } from "@/components/sections/faq/faq-list";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) return {};
  return pageMetadata({
    title: doc.seoTitle,
    description: doc.metaDescription,
    path: `/doctors/${doc.slug}`,
    type: "profile",
    image: { url: doc.image, alt: `${doc.name}, ${doc.role} at ${clinic.name}, Cuttack` },
  });
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const index = doctors.findIndex((d) => d.slug === slug);
  if (index === -1) {
    // Old mixed-case URLs (e.g. /doctors/dr-manasi-Das) → canonical lowercase slug
    const match = doctors.find((d) => d.slug === slug.toLowerCase());
    if (match) permanentRedirect(`/doctors/${match.slug}`);
    notFound();
  }
  const doc = doctors[index];

  const relatedService = services.find((s) => s.slug === doc.specialtySlug);
  const colleagues = doctors.filter((d) => d.id !== doc.id).slice(0, 3);
  const waMessage = `Hello ${clinic.name}, I'd like to book an appointment with ${doc.name} (${doc.specialty}).`;
  const conditions = serviceContent[doc.specialtySlug]?.conditions.map((c) => c.name) ?? [];
  const doctorFaqs = getDoctorFaqs(doc, conditions);
  const num = String(index + 1).padStart(2, "0");

  const facts = [
    { label: "Qualification", value: doc.qualification },
    { label: "Experience", value: doc.experience },
    { label: "Available", value: doc.available },
    { label: "Languages", value: doc.languages.join(", ") },
    { label: "Clinic hours", value: `${clinic.hours} · Sunday closed` },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          physician(doc),
          {
            ...webPage(`/doctors/${doc.slug}`, doc.seoTitle, doc.metaDescription, { type: "ProfilePage" }),
            mainEntity: { "@id": doctorId(doc) },
          },
          breadcrumbList(
            [{ label: "Home", href: "/" }, { label: "Doctors", href: "/doctors" }, { label: doc.name }],
            `/doctors/${doc.slug}`
          ),
          faqPage(doctorFaqs, `/doctors/${doc.slug}`)
        )}
      />
      <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
        <div
          className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.035)] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden="true"
        />
        <div className="container-x relative pt-10 pb-16 md:pt-12 md:pb-24">
          <div className="flex flex-wrap items-center justify-between gap-4 label-mono">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-ink-400">
                <li>
                  <Link href="/" className="hover:text-white">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/doctors" className="hover:text-white">Doctors</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">{doc.name}</li>
              </ol>
            </nav>
            <OpenStatus />
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end">
            <div>
              <p className="flex items-center gap-2 label-mono text-brand-300">
                <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
                {num} / {String(doctors.length).padStart(2, "0")} · {doc.specialty}
              </p>
              <h1 className="mt-6 text-white">
                <span className="mb-4 block font-display text-xl md:text-2xl font-medium tracking-[-0.02em] text-brand-300">
                  {doc.role} in Cuttack
                </span>{" "}
                <span className="display-lg block">{doc.name}</span>
              </h1>
              <p className="mt-5 label-mono text-ink-400">{doc.qualification}</p>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed">
                {doc.bio} Based at <strong className="text-white">Sai Shree Polyclinic, Cuttack, Odisha</strong>,{" "}
                {doc.name} brings {doc.experience} of hands-on clinical experience to every consultation.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#book" className="btn-primary btn-lg">
                  Book appointment <ArrowRight size={16} />
                </a>
                <a
                  href={getWhatsAppUrl(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light btn-lg"
                >
                  <WhatsAppIcon className="w-4 h-4 text-pulse" /> WhatsApp
                </a>
                <VisitWebsiteButton
                  url={doc.website}
                  doctorName={doc.name}
                  className="btn-lg border-white/20 bg-transparent text-white hover:border-white"
                />
              </div>
            </div>

            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden border border-white/10 bg-ink-850">
              <Image
                src={doc.image}
                alt={`${doc.name}, ${doc.specialty} specialist at Sai Shree Polyclinic Cuttack`}
                fill
                preload
                sizes="(max-width: 1024px) 90vw, 26rem"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.06)]" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-ink-950/90 to-transparent px-5 pb-4 pt-14 label-mono text-[0.6875rem]">
                <span className="text-white">{doc.specialty}</span>
                <span className="text-brand-300">{num}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="frame section bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-20">
          <div className="min-w-0">
            <SectionIndex index={1} label="At a glance" />
            <dl className="mt-8 border-t border-line-strong">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-1 gap-2 border-b border-line-strong py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="label-mono pt-1 text-[0.6875rem] text-ink-400">{f.label}</dt>
                  <dd className="font-display text-xl font-semibold tracking-[-0.025em] text-ink-900">{f.value}</dd>
                </div>
              ))}
            </dl>

            {conditions.length > 0 && (
              <div className="mt-16">
                <SectionIndex index={2} label="Conditions treated" meta={`${conditions.length} conditions`} />
                <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                  What {doc.name} treats
                </h2>
                <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  {conditions.map((c) => (
                    <li key={c} className="flex gap-3 border-b border-line py-4 text-ink-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-500" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-16">
              <SectionIndex index={3} label="How to book" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Book a consultation with {doc.name}
              </h2>
              <ol className="mt-8 border-t border-line-strong">
                {[
                  `Check the consultation days: ${doc.name} sees patients on ${availabilitySentence(doc)}. The clinic is open 9 AM to 7 PM and closed on Sunday.`,
                  `Book on WhatsApp or call ${clinic.phoneDisplay} — our front desk confirms your slot within 30 minutes during clinic hours.`,
                  "Bring your previous prescriptions, reports and the medicines you currently take.",
                  `Come to ${clinic.address}.`,
                ].map((step, i) => (
                  <li key={i} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-5 text-ink-700">
                    <span className="label-mono pt-0.5 text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-16">
              <SectionIndex index={4} label="Questions" meta={`${doctorFaqs.length} answers`} />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                About consulting {doc.name}
              </h2>
              <div className="mt-8">
                <FAQList items={doctorFaqs} idPrefix={doc.slug} />
              </div>
            </div>

            {relatedService && (
              <div className="mt-16">
                <SectionIndex index={5} label="Department" />
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="group mt-8 grid grid-cols-1 border border-line-strong transition-colors hover:border-ink-900 sm:grid-cols-[14rem_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[16/9] sm:aspect-auto bg-surface-2">
                    <Image
                      src={`/images/specialties/${relatedService.slug}.webp`}
                      alt={`${relatedService.name} department`}
                      fill
                      sizes="(max-width: 640px) 100vw, 14rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.035em]">
                      {relatedService.name} at {clinic.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-600">{relatedService.shortDesc}</p>
                    <span className="link-arrow mt-5">
                      View department <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <aside id="book" className="scroll-mt-28">
            <div className="border border-line-strong bg-paper p-6 md:p-7 lg:sticky lg:top-28">
              <p className="label-mono text-[0.6875rem] text-brand-600">Book · {doc.name}</p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-ink-900">
                Request an appointment
              </p>
              <p className="mt-2 mb-7 text-ink-500">Confirmed within 30 minutes.</p>
              <AppointmentForm compact defaultDepartment={doc.specialtySlug} />
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

      <section className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex
            label="Other specialists"
            meta={
              <Link href="/doctors" className="hover:text-ink-900">
                All doctors →
              </Link>
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {colleagues.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        </div>
      </section>

      <CTABand whatsappMessage={waMessage} />
    </>
  );
}
