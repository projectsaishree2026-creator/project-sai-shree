import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Car, TrainFront, Lightbulb } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, breadcrumbList, faqPage } from "@/lib/schema";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";
import { clinic, directionsUrl } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { CTABand } from "@/components/shared/cta-band";
import { WhatsAppIcon } from "@/components/shared/icons";
import { FAQList } from "@/components/sections/faq/faq-list";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return pageMetadata({ title: loc.seoTitle, description: loc.metaDescription, path: `/locations/${loc.slug}` });
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const routeUrl = directionsUrl(loc.mapsOrigin);
  const waMessage = `Hello ${clinic.name}, I'm coming from ${loc.name} and would like to book an appointment.`;
  const others = locations.filter((l) => l.slug !== loc.slug);

  return (
    <>
      <JsonLd
        data={graph(
          webPage(`/locations/${loc.slug}`, loc.seoTitle, loc.metaDescription),
          breadcrumbList(
            [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }, { label: loc.name }],
            `/locations/${loc.slug}`
          ),
          faqPage(loc.faqs, `/locations/${loc.slug}`)
        )}
      />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }, { label: loc.name }]}
        eyebrow={`${loc.district} district → Mangalabag, Cuttack`}
        kicker={loc.h1Kicker}
        title={
          <>
            Specialist care in Cuttack, <span className="text-brand-400">planned around your trip.</span>
          </>
        }
        description={loc.intro[0]}
        actions={
          <>
            <a href={getWhatsAppUrl(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              <WhatsAppIcon className="w-4 h-4" /> Book before you travel
            </a>
            <a href={routeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-light btn-lg">
              Route from {loc.name} <ArrowUpRight size={16} />
            </a>
          </>
        }
      />

      <section className="frame section bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <article className="min-w-0">
            {loc.intro.slice(1).map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-600">
                {p}
              </p>
            ))}

            {/* Getting here */}
            <div className="mt-14">
              <SectionIndex index={1} label={`Getting here from ${loc.name}`} />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                How to reach the clinic from {loc.name}
              </h2>
              <ul className="mt-8 border-t border-line-strong">
                <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-6">
                  <Car size={20} className="mt-0.5 text-brand-500" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">By road</h3>
                    <p className="mt-1 leading-relaxed text-ink-600">{loc.route.road}</p>
                  </div>
                </li>
                {loc.route.rail && (
                  <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-6">
                    <TrainFront size={20} className="mt-0.5 text-brand-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-lg font-semibold">By train</h3>
                      <p className="mt-1 leading-relaxed text-ink-600">{loc.route.rail}</p>
                    </div>
                  </li>
                )}
                <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-6">
                  <Lightbulb size={20} className="mt-0.5 text-brand-500" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">Travel tip</h3>
                    <p className="mt-1 leading-relaxed text-ink-600">{loc.route.tip}</p>
                  </div>
                </li>
              </ul>
              <a href={routeUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6">
                Open live route from {loc.name} in Google Maps <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Departments */}
            <div className="mt-16">
              <SectionIndex index={2} label="Departments to plan for" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Specialists patients from {loc.name} often need
              </h2>
              <div className="mt-8 grid grid-cols-1 border-l border-t border-line-strong">
                {loc.focus.map((f, i) => {
                  const svc = services.find((s) => s.slug === f.service);
                  if (!svc) return null;
                  return (
                    <Link
                      key={f.service}
                      href={`/services/${svc.slug}`}
                      className="fx-fill group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-3 border-b border-r border-line-strong p-6"
                    >
                      <span className="label-mono pt-1 text-[0.6875rem] text-ink-400 group-hover:text-brand-300">{pad(i + 1)}</span>
                      <span>
                        <span className="block font-display text-xl font-semibold tracking-[-0.03em] text-ink-900 group-hover:text-white">
                          {svc.name}
                        </span>
                        <span className="mt-2 block leading-relaxed text-ink-600 group-hover:text-ink-300">{f.why}</span>
                      </span>
                      <ArrowUpRight size={18} className="text-ink-400 group-hover:text-brand-300" />
                    </Link>
                  );
                })}
              </div>
              <p className="mt-6 text-ink-600">
                All {services.length} departments are available —{" "}
                <Link href="/services" className="font-semibold text-brand-600 hover:underline">
                  see every specialty
                </Link>
                .
              </p>
            </div>

            {/* Plan */}
            <div className="mt-16">
              <SectionIndex index={3} label="Plan your visit" />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Make one trip from {loc.name} count
              </h2>
              <ol className="mt-8 border-t border-line-strong">
                {loc.plan.map((step, i) => (
                  <li key={i} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-5 text-ink-700">
                    <span className="label-mono pt-0.5 text-brand-600">{pad(i + 1)}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <SectionIndex index={4} label="Questions" meta={`${loc.faqs.length} answers`} />
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.035em]">
                Visiting from {loc.name} — questions
              </h2>
              <div className="mt-8">
                <FAQList items={loc.faqs} idPrefix={`loc-${loc.slug}`} />
              </div>
            </div>
          </article>

          <aside>
            <div className="border border-line-strong bg-paper p-6 md:p-7 lg:sticky lg:top-28">
              <p className="label-mono text-[0.6875rem] text-brand-600">Clinic details</p>
              <dl className="mt-5 space-y-4 text-[0.9375rem]">
                <div>
                  <dt className="label-mono text-[0.625rem] text-ink-400">Address</dt>
                  <dd className="mt-1 leading-relaxed text-ink-800">{clinic.address}</dd>
                </div>
                <div>
                  <dt className="label-mono text-[0.625rem] text-ink-400">Hours</dt>
                  <dd className="mt-1 text-ink-800">{clinic.hours} · Sunday closed</dd>
                </div>
                <div>
                  <dt className="label-mono text-[0.625rem] text-ink-400">Phone / WhatsApp</dt>
                  <dd className="mt-1">
                    <a href={`tel:+91${clinic.phone}`} className="fx-phone text-ink-800 hover:text-brand-600">
                      {clinic.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={getWhatsAppUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6 w-full"
              >
                <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
              </a>
              <Link href="/contact#appointment" className="btn-secondary mt-3 w-full">
                Booking form <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex label="Visiting from elsewhere" meta={`${others.length} more areas`} />
          <div className="mt-10 grid grid-cols-1 border-l border-t border-line-strong sm:grid-cols-2 lg:grid-cols-5">
            {others.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="fx-fill group flex items-center justify-between gap-4 border-b border-r border-line-strong bg-white p-5"
              >
                <span className="font-display text-lg font-semibold tracking-[-0.03em] text-ink-900 group-hover:text-white">
                  From {l.name}
                </span>
                <ArrowUpRight size={16} className="text-ink-400 group-hover:text-brand-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand whatsappMessage={waMessage} />
    </>
  );
}
