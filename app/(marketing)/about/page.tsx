import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, breadcrumbList } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, Building2, ArrowRight } from "lucide-react";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { CTABand } from "@/components/shared/cta-band";
import { DepartmentMarquee } from "@/components/shared/department-marquee";
import { WhatsAppIcon } from "@/components/shared/icons";

const META = {
  title: "About Sai Shree Polyclinic, Mangalabag, Cuttack",
  description:
    "Sai Shree Polyclinic brings specialist care across 11 departments to Mangalabag, Cuttack, with diagnostics and a pharmacy in one building. Read our story.",
  path: "/about",
};

export const metadata: Metadata = pageMetadata(META);

const values = [
  {
    icon: ShieldCheck,
    title: "Patient safety first",
    desc: "We follow strict hygiene and safety protocols to protect every patient who walks through our doors.",
  },
  {
    icon: Award,
    title: "Clinical excellence",
    desc: "Our doctors are MD/MS/DM specialists following evidence-based, up-to-date treatment protocols.",
  },
  {
    icon: Users,
    title: "Compassionate care",
    desc: "We listen. We understand. We treat every patient with empathy, dignity, and respect.",
  },
  {
    icon: Building2,
    title: "Modern facilities",
    desc: "Advanced diagnostic equipment and a state-of-the-art clinical setup for accurate and fast results.",
  },
];

const stats = [
  { label: "Patients served", value: clinic.stats.patients },
  { label: "Years in service", value: clinic.stats.experience },
  { label: "Specialties", value: clinic.stats.specialties },
  { label: "Google rating", value: `${clinic.stats.rating}/5` },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(webPage(META.path, META.title, META.description, { type: "AboutPage" }), breadcrumbList([{ label: "Home", href: "/" }, { label: "About" }], META.path))} />
      <PageHero
        kicker="About Sai Shree Polyclinic, Cuttack"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About us"
        title={
          <>
            Specialist care for Cuttack, <span className="text-brand-400">under one roof.</span>
          </>
        }
        description="Sai Shree Polyclinic was founded with a single mission: to bring specialist-quality healthcare closer to the people of Cuttack and Odisha — under one convenient roof."
        actions={
          <>
            <Link href="/contact#appointment" className="btn-primary btn-lg">
              Book appointment <ArrowRight size={16} />
            </Link>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-ghost-light btn-lg">
              <WhatsAppIcon className="w-4 h-4 text-pulse" /> WhatsApp us
            </a>
          </>
        }
      />

      {/* Story */}
      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="Our story" meta="Est. over a decade ago · Cuttack" />
          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="display-md">
                Healthcare that feels <span className="text-brand-500">personal.</span>
              </h2>
              <div className="mt-10 grid grid-cols-2 gap-px border border-line-strong bg-line-strong">
                <div className="relative col-span-2 aspect-[16/9] bg-surface-2">
                  <Image
                    src="/images/specialties/endocrinology.webp"
                    alt="Specialist consultation at Sai Shree Polyclinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square bg-surface-2">
                  <Image
                    src="/images/pathology.webp"
                    alt="Diagnostic laboratory"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between bg-ink-900 p-6">
                  <Image src="/logo.png" alt="" width={56} height={56} />
                  <div>
                    <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-white">
                      {clinic.stats.experience}
                    </p>
                    <p className="mt-2 label-mono text-[0.6875rem] text-ink-400">Years caring for Cuttack</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose-clinic lg:pt-24">
              <p>
                Sai Shree Polyclinic, Cuttack was established over a decade ago with a clear vision — to provide
                accessible, high-quality specialist healthcare so that patients in Cuttack, Bhubaneswar, and across
                Odisha do not have to travel far or wait endlessly for expert medical care.
              </p>
              <p>
                Today, the polyclinic brings 11 specialist departments together under one roof. Our experienced team of doctors provides expert
                care in Endocrinology, Neurology, Pulmonology, Gastroenterology, Dental care, Gynecology, Urology, and
                Oncology, ensuring accurate diagnosis and effective treatment for a wide range of medical conditions.
              </p>
              <p>
                Conveniently located on Kathagola Rd, near Shreema Hospital, Sai Shree Polyclinic serves thousands
                of patients every year from Cuttack, Bhubaneswar, and surrounding districts of Odisha. We are
                committed to delivering affordable, patient-centred specialist care, with diagnostics and a pharmacy in the same building.
              </p>
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-2 border-y border-line-strong lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "flex flex-col-reverse py-8 pr-4",
                  i % 2 === 1 ? "border-l border-line-strong pl-6" : "",
                  i >= 2 ? "border-t border-line-strong lg:border-t-0" : "",
                  i === 2 ? "lg:border-l lg:pl-6" : "",
                ].join(" ")}
              >
                <dt className="mt-3 label-mono text-[0.6875rem] text-ink-500">{s.label}</dt>
                <dd className="font-display text-5xl font-semibold tracking-[-0.05em] text-ink-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <DepartmentMarquee />

      {/* Values */}
      <section className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex index={2} label="Our values" meta="What we stand for" />
          <h2 className="display-md mt-14 md:mt-20">
            What we <span className="text-brand-500">stand for.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 border-l border-t border-line-strong sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="border-b border-r border-line-strong bg-white p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[0.6875rem] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <v.icon size={22} className="text-brand-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold tracking-[-0.03em]">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
