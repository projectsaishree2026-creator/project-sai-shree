import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, breadcrumbList } from "@/lib/schema";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { clinic, directionsUrl } from "@/data/clinic";
import { locations } from "@/data/locations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { OpenStatus } from "@/components/shared/open-status";
import { WhatsAppIcon } from "@/components/shared/icons";

const META = {
  title: "Contact & Directions | Sai Shree Polyclinic, Cuttack",
  description:
    "Find Sai Shree Polyclinic on Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack. Call +91 70085 12773, WhatsApp, or book online. Mon–Sat 9 AM–7 PM.",
  path: "/contact",
};

export const metadata: Metadata = pageMetadata(META);

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DIRECTIONS = [
  {
    from: "Cuttack Railway Station",
    origin: "Cuttack Railway Station, Cuttack, Odisha",
    text: "Take an auto-rickshaw or cab from outside the station towards Mangalabag and ask for Kathagola Road, near Shreema Hospital. It is a short ride across the city.",
  },
  {
    from: "Badambadi Bus Stand",
    origin: "Badambadi Bus Stand, Cuttack, Odisha",
    text: "If you arrive by bus from another district, autos and cabs from Badambadi reach Mangalabag quickly. Ask for Kathagola Road, near Shreema Hospital.",
  },
  {
    from: "Bhubaneswar",
    origin: "Bhubaneswar, Odisha",
    text: "Cuttack is about 25–30 km from Bhubaneswar by road along NH-16. Allow around an hour depending on traffic, then head to Mangalabag and Kathagola Road.",
  },
];

export default function ContactPage() {
  const mapsDirections = directionsUrl();

  const methods = [
    { icon: Phone, label: "Call us", value: clinic.phoneDisplay, href: `tel:+91${clinic.phone}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Quick replies", href: getWhatsAppUrl(), external: true },
    { icon: Mail, label: "Email us", value: clinic.email, href: `mailto:${clinic.email}` },
  ];

  return (
    <>
      <JsonLd data={graph(webPage(META.path, META.title, META.description, { type: "ContactPage" }), breadcrumbList([{ label: "Home", href: "/" }, { label: "Contact" }], META.path))} />
      <PageHero
        kicker="Contact & directions · Mangalabag, Cuttack"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact us"
        title={
          <>
            Get in <span className="text-brand-400">touch.</span>
          </>
        }
        description="Book an appointment, ask a question, or find your way to our clinic. We're here to help."
      />

      <section className="frame bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 border-x border-b border-line-strong lg:grid-cols-3">
            {methods.map((m, i) => (
              <a
                key={m.label}
                href={m.href}
                {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={[
                  "fx-fill group flex items-center justify-between gap-4 p-6 md:p-8",
                  i > 0 ? "border-t border-line-strong lg:border-t-0 lg:border-l" : "",
                ].join(" ")}
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2 label-mono text-[0.6875rem] text-ink-400 group-hover:text-brand-300">
                    <m.icon size={14} className="w-3.5 h-3.5" />
                    {m.label}
                  </span>
                  <span className="mt-3 block break-all font-display text-xl font-semibold tracking-[-0.03em] text-ink-900 group-hover:text-white">
                    {m.value}
                  </span>
                </span>
                <ArrowUpRight size={20} className="shrink-0 text-ink-400 group-hover:text-brand-300" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="Book an appointment" meta={<OpenStatus tone="light" />} />
          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_minmax(0,1fr)] lg:gap-16">
            <div id="appointment" className="scroll-mt-28 border border-line-strong bg-paper p-6 md:p-10">
              <h2 className="display-md">
                Request a <span className="text-brand-500">visit.</span>
              </h2>
              <p className="mt-4 mb-10 text-lg text-ink-500">
                Fill in your details and we&apos;ll confirm your slot within 30 minutes.
              </p>
              <AppointmentForm />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="label-mono text-brand-600">Clinic information</p>
                <dl className="mt-5 border-t border-line-strong">
                  {[
                    { label: "Address", value: clinic.address },
                    { label: "Phone", value: clinic.phoneDisplay, href: `tel:+91${clinic.phone}` },
                    { label: "Email", value: clinic.email, href: `mailto:${clinic.email}` },
                  ].map((r) => (
                    <div key={r.label} className="border-b border-line-strong py-4">
                      <dt className="label-mono text-[0.625rem] text-ink-400">{r.label}</dt>
                      <dd className="mt-1.5 leading-relaxed text-ink-800">
                        {r.href ? (
                          <a href={r.href} className="break-all hover:text-brand-600">
                            {r.value}
                          </a>
                        ) : (
                          r.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="label-mono text-brand-600">Opening hours</p>
                <dl className="mt-5 border-t border-line-strong">
                  {DAYS.map((day) => (
                    <div key={day} className="flex justify-between border-b border-line py-3">
                      <dt className="text-ink-600">{day}</dt>
                      <dd className="font-mono text-sm text-ink-900">9:00 – 19:00</dd>
                    </div>
                  ))}
                  <div className="flex justify-between border-b border-line-strong py-3">
                    <dt className="text-ink-600">Sunday</dt>
                    <dd className="font-mono text-sm text-ink-400">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="frame section bg-white" aria-labelledby="directions-heading">
        <div className="container-x">
          <SectionIndex index={2} label="Directions" meta="Landmark: near Shreema Hospital" />
          <h2 id="directions-heading" className="display-md mt-14 md:mt-20">
            How to reach <span className="text-brand-500">Sai Shree Polyclinic.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
            We are on Kathagola Rd in Mangalabag, Cuttack, close to Shreema Hospital. Ask any auto-rickshaw driver
            for &ldquo;Kathagola Road, near Shreema Hospital, Mangalabag&rdquo;. Each route below opens live
            directions in Google Maps.
          </p>
          <div className="mt-12 grid grid-cols-1 border-l border-t border-line-strong lg:grid-cols-3">
            {DIRECTIONS.map((d, i) => (
              <article key={d.from} className="flex flex-col border-b border-r border-line-strong p-6 md:p-8">
                <p className="label-mono text-[0.6875rem] text-ink-400">Route {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">From {d.from}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-600">{d.text}</p>
                <a
                  href={directionsUrl(d.origin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-6"
                >
                  Open route in Google Maps <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-ink-600">
            <strong className="text-ink-900">Parking:</strong> parking space is available near the clinic on Kathagola
            Rd. <strong className="text-ink-900">Coming from another district?</strong> Book on WhatsApp before you
            travel so your doctor&apos;s availability is confirmed and you don&apos;t make a wasted trip.
          </p>
          <nav aria-label="Travel guides by area" className="mt-6 flex flex-wrap gap-2">
            {locations.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="chip hover:border-ink-900">
                From {l.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex index={3} label="Find us on the map" meta="Kathagola Rd · Mangalabag · Cuttack" />
          <div className="mt-10 border border-line-strong">
            <iframe
              title="Map showing Sai Shree Polyclinic location"
              src={clinic.mapEmbedUrl}
              className="block h-[28rem] w-full grayscale-[40%]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="fx-fill group flex items-center justify-between gap-4 border-t border-line-strong bg-ink-900 px-6 py-6 md:px-8 label-mono text-white [--fx-fill:var(--color-brand-600)]"
            >
              Get directions — {clinic.address}
              <ArrowUpRight size={18} className="shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
