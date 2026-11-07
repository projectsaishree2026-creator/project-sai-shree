import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage } from "@/lib/schema";
import { odiaHome, odiaServiceNames, odiaDays, ODIA_SERVICE_SLUGS } from "@/data/odia";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { LanguageSwitch } from "@/components/shared/language-switch";
import { WhatsAppIcon } from "@/components/shared/icons";
import { ECGLine } from "@/components/shared/ecg-line";

export const metadata: Metadata = pageMetadata({
  title: odiaHome.seoTitle,
  description: odiaHome.metaDescription,
  path: "/or",
  languages: { en: "/", or: "/or" },
  locale: "or_IN",
});

const pad = (n: number) => String(n).padStart(2, "0");

export default function OdiaHomePage() {
  const waUrl = getWhatsAppUrl(`ନମସ୍କାର ${clinic.name}, ମୁଁ ଆପଏଣ୍ଟମେଣ୍ଟ ବୁକ୍ କରିବାକୁ ଚାହୁଁଛି।`);

  return (
    <>
      <JsonLd data={graph(webPage("/or", odiaHome.seoTitle, odiaHome.metaDescription, { inLanguage: "or-IN" }))} />
      <PageHero
        breadcrumbs={[{ label: "ମୂଳ ପୃଷ୍ଠା" }]}
        eyebrow="ମଙ୍ଗଳାବାଗ · କଟକ, ଓଡ଼ିଶା"
        kicker={odiaHome.kicker}
        title={
          <>
            {odiaHome.title} <span className="text-brand-400">{odiaHome.titleAccent}</span>
          </>
        }
        description={odiaHome.lead}
        actions={
          <>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp ରେ ବୁକ୍ କରନ୍ତୁ
            </a>
            <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-ghost-light btn-lg">
              <Phone size={16} /> {clinic.phoneDisplay}
            </a>
            <LanguageSwitch href="/" to="en" tone="dark" className="self-center" />
          </>
        }
      />

      <div className="relative h-20 bg-ink-900 text-brand-400 md:h-24" aria-hidden="true">
        <ECGLine />
      </div>

      {/* Departments */}
      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="ବିଭାଗ" meta={`${services.length}ଟି ବିଶେଷଜ୍ଞ ବିଭାଗ`} />
          <h2 className="display-md mt-12">
            ଗୋଟିଏ ଛାତ ତଳେ <span className="text-brand-500">8ଟି ବିଭାଗ।</span>
          </h2>
          <ol className="mt-12 border-t border-line-strong">
            {services.map((s, i) => {
              const odia = odiaServiceNames[s.slug];
              const hasOdia = ODIA_SERVICE_SLUGS.includes(s.slug);
              return (
                <li key={s.id} className="border-b border-line-strong">
                  <Link
                    href={hasOdia ? `/or/services/${s.slug}` : `/services/${s.slug}`}
                    hrefLang={hasOdia ? "or" : "en"}
                    className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-4 py-7"
                  >
                    <span className="label-mono pt-2 text-ink-400">{pad(i + 1)}</span>
                    <span>
                      <span className="block font-display text-2xl md:text-3xl font-semibold text-ink-900 group-hover:text-brand-600">
                        {odia.name}
                      </span>
                      <span className="mt-2 block text-ink-600">{odia.line}</span>
                      {!hasOdia && <span className="mt-1 block text-sm text-ink-400">ପୃଷ୍ଠାଟି ଇଂରାଜୀରେ</span>}
                    </span>
                    <ArrowUpRight size={22} className="mt-1 text-ink-400 group-hover:text-brand-600" />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Doctors */}
      <section className="dark-scope frame section bg-ink-900">
        <div className="container-x">
          <SectionIndex index={2} label="ଆମ ଡାକ୍ତର" meta={`${doctors.length} ଜଣ ବିଶେଷଜ୍ଞ`} tone="dark" />
          <h2 className="display-md mt-12 text-white">
            ଆପଣଙ୍କ ଯତ୍ନ ନେଉଥିବା <span className="text-brand-400">ବିଶେଷଜ୍ଞ ଡାକ୍ତର।</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <Link
                key={d.id}
                href={`/doctors/${d.slug}`}
                hrefLang="en"
                className="group flex gap-4 border border-white/10 p-4 transition-colors hover:border-brand-400"
              >
                <span className="relative h-20 w-16 shrink-0 overflow-hidden bg-ink-850">
                  <Image src={d.image} alt={d.name} fill sizes="64px" className="object-cover object-top" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-white">{d.name}</span>
                  <span className="mt-0.5 block text-sm text-brand-300">
                    {odiaServiceNames[d.specialtySlug]?.name ?? d.specialty}
                  </span>
                  <span className="mt-1 block text-sm text-ink-300">{odiaDays[d.available] ?? d.available}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={3} label="କାହିଁକି Sai Shree" />
          <div className="mt-12 grid grid-cols-1 border-l border-t border-line-strong sm:grid-cols-2 lg:grid-cols-4">
            {odiaHome.why.map((w, i) => (
              <div key={w.title} className="border-b border-r border-line-strong p-7">
                <span className="label-mono text-[0.6875rem] text-ink-400">{pad(i + 1)}</span>
                <h3 className="mt-8 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-ink-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="frame section bg-paper">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionIndex index={4} label="ଠିକଣା" />
            <h2 className="display-md mt-12">{odiaHome.visit.title}</h2>
            <p className="mt-6 text-lg text-ink-700">{odiaHome.visit.address}</p>
            <p className="mt-3 text-ink-600">{odiaHome.visit.hours}</p>
            <p className="mt-6 text-ink-600">{odiaHome.visit.tip}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
              <Link href="/contact" hrefLang="en" className="btn-secondary">
                ମାନଚିତ୍ର ଓ ରାସ୍ତା <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <p className="self-end border border-amber-200 bg-amber-50 p-5 text-ink-700">{odiaHome.emergency}</p>
        </div>
      </section>
    </>
  );
}
