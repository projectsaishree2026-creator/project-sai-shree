import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, breadcrumbList } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { getDoctorsForService } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { CTABand } from "@/components/shared/cta-band";
import { DepartmentRow } from "@/components/sections/services/department-row";
import { AboutServiceCards } from "@/components/sections/services/about-service-cards";

const META = {
  title: "Specialist Departments in Cuttack | Sai Shree Polyclinic",
  description:
    "Endocrinology, neurology, pulmonology, gastroenterology, dental, gynaecology, urology and oncology under one roof in Mangalabag, Cuttack. Explore all.",
  path: "/services",
};

export const metadata: Metadata = pageMetadata(META);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={graph(webPage(META.path, META.title, META.description, { type: "CollectionPage" }), breadcrumbList([{ label: "Home", href: "/" }, { label: "Services" }], META.path))} />
      <PageHero
        kicker="Specialist departments in Cuttack"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="All specialties"
        title={
          <>
            Our medical <span className="text-brand-400">departments.</span>
          </>
        }
        description="Comprehensive multi-specialty care under one roof. Expert doctors, modern equipment, and personalized treatment designed for your well-being."
        actions={
          <Link href="/contact#appointment" className="btn-primary btn-lg">
            Book an appointment <ArrowRight size={16} />
          </Link>
        }
      />

      {/* Index of departments */}
      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="Departments" meta={`${services.length} specialties`} />
          <ol className="mt-12 md:mt-16 border-t border-line-strong">
            {services.map((service, i) => (
              <DepartmentRow key={service.id} service={service} index={i} />
            ))}
          </ol>
        </div>
      </section>

      {/* About + facilities */}
      <section className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex index={2} label="About Sai Shree Polyclinic, Cuttack" meta="Diagnostics · Pharmacy" />
          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <h2 className="display-md">
              Eleven departments, <span className="text-brand-500">one visit.</span>
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink-600">
              <p>
                <strong className="text-ink-900">Sai Shree Polyclinic</strong> is a multispecialty polyclinic at{" "}
                <strong className="text-ink-900">{clinic.address}</strong>. Eleven specialist departments work under
                one roof, so patients from Cuttack and nearby districts of Odisha can see the right specialist without
                travelling between hospitals.
              </p>
              <p>
                Our doctors hold <strong className="text-ink-900">MD, MS, DM, MCh and MDS</strong> qualifications in
                the fields they practise. Digital X-ray, ultrasound, ECG, spirometry, a diagnostic lab, endoscopy and a
                pharmacy are in the same building — most tests can be done during the same visit.
              </p>
            </div>
          </div>
          <p className="mt-16 mb-6 label-mono text-ink-500">Our other services</p>
          <AboutServiceCards />
        </div>
      </section>

      {/* Department detail */}
      <section className="frame section bg-white" aria-labelledby="explore-heading">
        <div className="container-x">
          <SectionIndex index={3} label="Explore our medical services" meta="Detailed department guide" />
          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <nav aria-label="Departments" className="sticky top-28">
                <ul className="border-t border-line">
                  {services.map((s, i) => (
                    <li key={s.id} className="border-b border-line">
                      <a
                        href={`#${s.slug}`}
                        className="flex items-baseline gap-3 py-3 text-[0.9375rem] text-ink-600 transition-colors hover:text-brand-600"
                      >
                        <span className="label-mono text-[0.625rem] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div>
              <h2 id="explore-heading" className="sr-only">
                Explore our medical services
              </h2>
              <p className="max-w-2xl text-lg text-ink-500">
                Each department at Sai Shree Polyclinic in Cuttack is led by a dedicated specialist. Find the right
                doctor for your condition below.
              </p>

              <div className="mt-6">
                {services.map((service, i) => {
                  const specialists = getDoctorsForService(service.slug);
                  return (
                    <article key={service.id} id={service.slug} className="scroll-mt-28 border-t border-line-strong py-14">
                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <p className="label-mono text-brand-600">
                            {String(i + 1).padStart(2, "0")} · at Sai Shree Polyclinic, Cuttack
                          </p>
                          <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.045em]">{service.name}</h3>
                        </div>
                        <Link href={`/services/${service.slug}`} className="link-arrow">
                          Department page <ArrowUpRight size={14} />
                        </Link>
                      </div>

                      <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-600">
                        {serviceContent[service.slug]?.intro[0]}{" "}
                        <Link href={`/services/${service.slug}`} className="font-semibold text-brand-600 hover:underline">
                          Read the full {service.name.toLowerCase()} guide
                        </Link>
                        .
                      </p>

                      <dl className="mt-10 grid grid-cols-1 border border-line md:grid-cols-2">
                        <div className="border-b border-line p-5 md:border-b-0 md:border-r">
                          <dt className="label-mono text-[0.6875rem] text-ink-400">Services &amp; tests</dt>
                          <dd className="mt-3 flex flex-wrap gap-2">
                            {service.features.map((f) => (
                              <span key={f} className="chip border-brand-100 bg-brand-50 text-brand-800">
                                {f}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div className="p-5">
                          <dt className="label-mono text-[0.6875rem] text-ink-400">Conditions treated</dt>
                          <dd className="mt-3 flex flex-wrap gap-2">
                            {service.conditions.map((c) => (
                              <span key={c} className="chip">
                                {c}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>

                      {specialists.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {specialists.map((doc) => (
                            <Link
                              key={doc.id}
                              href={`/doctors/${doc.slug}`}
                              className="group flex items-center gap-4 border border-line p-2 pr-5 transition-colors hover:border-ink-900"
                            >
                              <span className="relative h-14 w-14 overflow-hidden bg-surface-2">
                                <Image
                                  src={doc.image}
                                  alt={`${doc.name} - ${service.name} specialist at Sai Shree Polyclinic Cuttack`}
                                  fill
                                  sizes="56px"
                                  className="object-cover object-top"
                                />
                              </span>
                              <span>
                                <span className="block font-semibold text-ink-900 group-hover:text-brand-600">
                                  {doc.name}
                                </span>
                                <span className="block label-mono text-[0.625rem] text-ink-500">
                                  {[doc.qualification?.split(",")[0], doc.experience].filter(Boolean).join(" · ") || doc.role}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Book your appointment"
        highlight="today."
        description="Serving Cuttack and all of Odisha with expert specialist care across 11 departments. Appointments confirmed within 30 minutes."
      />
    </>
  );
}
