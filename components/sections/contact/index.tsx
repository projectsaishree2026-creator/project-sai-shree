import { ArrowUpRight } from "lucide-react";
import { clinic, directionsUrl } from "@/data/clinic";
import { SectionHeader } from "@/components/shared/section-header";

export function ContactSection() {
  const mapsDirections = directionsUrl();

  const rows = [
    { label: "Address", value: clinic.address },
    { label: "Phone", value: clinic.phoneDisplay, href: `tel:+91${clinic.phone}` },
    { label: "Email", value: clinic.email, href: `mailto:${clinic.email}` },
    { label: "Hours", value: "Mon – Sat · 9:00 AM – 7:00 PM · Sunday closed" },
  ];

  return (
    <section className="frame section bg-white">
      <div className="container-x">
        <SectionHeader
          index={8}
          eyebrow="Find us"
          meta="Mangalabag · Cuttack · 753001"
          title="Visit Sai Shree"
          titleHighlight="Polyclinic."
          subtitle="Conveniently located on Kathagola Rd, near Shreema Hospital — easily accessible from all parts of the city."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 border border-line-strong lg:grid-cols-[minmax(0,1fr)_1.4fr]">
          <div className="flex flex-col">
            <dl>
              {rows.map((r) => (
                <div key={r.label} className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-line px-6 py-5 md:px-8">
                  <dt className="label-mono pt-0.5 text-[0.6875rem] text-ink-400">{r.label}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink-800">
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
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="fx-fill group mt-auto flex items-center justify-between bg-ink-900 px-6 py-6 md:px-8 label-mono text-white [--fx-fill:var(--color-brand-600)]"
            >
              Get directions
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="min-h-[24rem] border-t border-line-strong lg:border-t-0 lg:border-l">
            <iframe
              title="Map showing Sai Shree Polyclinic location"
              src={clinic.mapEmbedUrl}
              className="h-full min-h-[24rem] w-full grayscale-[40%]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
