import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ArrowUpRight, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, medicalWebPage, breadcrumbList, faqPage } from "@/lib/schema";
import { odiaServices, ODIA_SERVICE_SLUGS } from "@/data/odia";
import { getDoctorsForService } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { LanguageSwitch } from "@/components/shared/language-switch";
import { WhatsAppIcon } from "@/components/shared/icons";
import { FAQList } from "@/components/sections/faq/faq-list";
import { DoctorCard } from "@/components/sections/doctors";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ODIA_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = odiaServices[slug];
  if (!c) return {};
  return pageMetadata({
    title: c.seoTitle,
    description: c.metaDescription,
    path: `/or/services/${slug}`,
    languages: { en: `/services/${slug}`, or: `/or/services/${slug}` },
    locale: "or_IN",
    image: { url: `/images/specialties/${slug}.webp`, alt: c.title, width: 1024, height: 1024 },
  });
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function OdiaServicePage({ params }: Props) {
  const { slug } = await params;
  const c = odiaServices[slug];
  if (!c) notFound();

  const docs = getDoctorsForService(slug);
  const waUrl = getWhatsAppUrl(`ନମସ୍କାର ${clinic.name}, ମୁଁ ${c.title} ପାଇଁ ଆପଏଣ୍ଟମେଣ୍ଟ ବୁକ୍ କରିବାକୁ ଚାହୁଁଛି।`);

  return (
    <>
      <JsonLd
        data={graph(
          medicalWebPage({
            path: `/or/services/${slug}`,
            name: c.seoTitle,
            description: c.metaDescription,
            serviceSlug: slug,
            conditions: c.conditions.map((x) => x.name),
            inLanguage: "or-IN",
          }),
          breadcrumbList([{ label: "ମୂଳ ପୃଷ୍ଠା", href: "/or" }, { label: c.title }], `/or/services/${slug}`),
          faqPage(c.faqs, `/or/services/${slug}`, "or-IN")
        )}
      />
      <PageHero
        breadcrumbs={[{ label: "ମୂଳ ପୃଷ୍ଠା", href: "/or" }, { label: c.title }]}
        eyebrow="ମଙ୍ଗଳାବାଗ · କଟକ"
        kicker={c.kicker}
        title={
          <>
            {c.title}
            <span className="text-brand-400">।</span>
          </>
        }
        description={c.intro[0]}
        actions={
          <>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp ରେ ବୁକ୍ କରନ୍ତୁ
            </a>
            <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-ghost-light btn-lg">
              <Phone size={16} /> {clinic.phoneDisplay}
            </a>
            <LanguageSwitch href={`/services/${slug}`} to="en" tone="dark" className="self-center" />
          </>
        }
      />

      <section className="frame section bg-white">
        <div className="container-x max-w-4xl">
          <p className="border-y border-line py-4 text-sm text-ink-500">
            ଏହି ପୃଷ୍ଠା ସାଧାରଣ ସୂଚନା ପାଇଁ, ରୋଗ ନିର୍ଣ୍ଣୟ ନୁହେଁ। ନିଜ ସ୍ୱାସ୍ଥ୍ୟ ବିଷୟରେ ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ।
          </p>

          <div className="mt-12 space-y-5 text-[1.0625rem] text-ink-600">
            {c.intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16">
            <SectionIndex index={1} label="ଚିକିତ୍ସା କରାଯାଉଥିବା ରୋଗ" />
            <h2 className="mt-8 font-display text-3xl font-semibold">ଆମେ କେଉଁ ରୋଗର ଚିକିତ୍ସା କରୁ</h2>
            <dl className="mt-8 border-t border-line-strong">
              {c.conditions.map((x, i) => (
                <div key={x.name} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-6">
                  <span className="label-mono pt-1 text-[0.6875rem] text-ink-400">{pad(i + 1)}</span>
                  <div>
                    <dt className="font-display text-xl font-semibold text-ink-900">{x.name}</dt>
                    <dd className="mt-2 text-ink-600">{x.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16">
            <SectionIndex index={2} label="କେବେ ଡାକ୍ତର ଦେଖାଇବେ" />
            <h2 className="mt-8 font-display text-3xl font-semibold">ଏହି ଲକ୍ଷଣ ଥିଲେ ବିଶେଷଜ୍ଞଙ୍କୁ ଦେଖାନ୍ତୁ</h2>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {c.symptoms.map((s) => (
                <li key={s} className="flex gap-3 border-b border-line py-4 text-ink-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-500" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 border border-amber-200 bg-amber-50 p-4 text-sm text-ink-700">
              <AlertTriangle size={18} className="mt-1 shrink-0 text-amber-600" />
              ଛାତି ଯନ୍ତ୍ରଣା, ଶ୍ୱାସକଷ୍ଟ, ପକ୍ଷାଘାତର ଲକ୍ଷଣ, ଅଧିକ ରକ୍ତସ୍ରାବ ବା ଚେତା ହରାଇବା ଭଳି ଜରୁରୀ ଅବସ୍ଥାରେ ତୁରନ୍ତ
              ନିକଟସ୍ଥ ହସ୍ପିଟାଲର ଇମର୍ଜେନ୍ସିକୁ ଯାଆନ୍ତୁ।
            </p>
          </div>

          <div className="mt-16">
            <SectionIndex index={3} label="କ୍ଲିନିକରେ ଉପଲବ୍ଧ" />
            <h2 className="mt-8 font-display text-3xl font-semibold">ପରୀକ୍ଷା ଓ ସେବା</h2>
            <ul className="mt-8 border-t border-line-strong">
              {c.available.map((a, i) => (
                <li key={a} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-4 text-ink-700">
                  <span className="label-mono pt-0.5 text-brand-600">{pad(i + 1)}</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {docs.length > 0 && (
            <div className="mt-16">
              <SectionIndex index={4} label="ଡାକ୍ତର" />
              <h2 className="mt-8 font-display text-3xl font-semibold">ଆପଣଙ୍କ ବିଶେଷଜ୍ଞ</h2>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" lang="en">
                {docs.map((d) => (
                  <DoctorCard key={d.id} doctor={d} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <SectionIndex index={5} label="ପ୍ରଥମ ଭିଜିଟ" />
            <h2 className="mt-8 font-display text-3xl font-semibold">ପ୍ରଥମ ଭିଜିଟରେ କ’ଣ ଆଶା କରିବେ</h2>
            <ol className="mt-8 border-t border-line-strong">
              {c.firstVisit.map((s, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-line py-5 text-ink-700">
                  <span className="label-mono pt-0.5 text-brand-600">{pad(i + 1)}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16">
            <SectionIndex index={6} label="ପ୍ରଶ୍ନ ଓ ଉତ୍ତର" />
            <h2 className="mt-8 font-display text-3xl font-semibold">ସାଧାରଣ ପ୍ରଶ୍ନ</h2>
            <div className="mt-8">
              <FAQList items={c.faqs} idPrefix={`or-${slug}`} />
            </div>
          </div>

          <div className="mt-16 border border-line-strong bg-paper p-6 md:p-8">
            <p className="font-display text-2xl font-semibold text-ink-900">ଠିକଣା ଓ ସମୟ</p>
            <p className="mt-3 text-ink-700">କାଠଗୋଲା ରୋଡ, ଶ୍ରୀମା ହସ୍ପିଟାଲ ପାଖରେ, ମଙ୍ଗଳାବାଗ, କଟକ, ଓଡ଼ିଶା 753001</p>
            <p className="mt-1 text-ink-600">ସୋମବାରରୁ ଶନିବାର: ସକାଳ 9ଟାରୁ ସନ୍ଧ୍ୟା 7ଟା · ରବିବାର ବନ୍ଦ</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
              <Link href="/or" className="btn-secondary">
                ସମସ୍ତ ବିଭାଗ <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
