import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, breadcrumbList } from "@/lib/schema";
import { GraduationCap, Building2, HeartHandshake } from "lucide-react";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIndex } from "@/components/shared/section-index";
import { CTABand } from "@/components/shared/cta-band";
import { DoctorDirectory } from "@/components/sections/doctors/doctor-directory";

const META = {
  title: "Specialist Doctors in Cuttack | Sai Shree Polyclinic",
  description:
    "Meet 9 specialist doctors at Sai Shree Polyclinic, Cuttack: MD, MS, DM and MCh qualified across 8 departments. View profiles, OPD days and book a visit.",
  path: "/doctors",
};

export const metadata: Metadata = pageMetadata(META);

const trust = [
  {
    icon: GraduationCap,
    title: "Specialist qualifications",
    desc: "Our doctors hold postgraduate and super-specialty degrees — MD, MS, DM, MCh or MDS — in the fields they practise.",
  },
  {
    icon: Building2,
    title: "8 specialties under one roof",
    desc: "From Endocrinology to Urology, Sai Shree Polyclinic covers all major medical departments in Cuttack.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-first approach",
    desc: "We prioritise clear communication, minimal wait times, and personalised treatment at every visit.",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <JsonLd data={graph(webPage(META.path, META.title, META.description, { type: "CollectionPage" }), breadcrumbList([{ label: "Home", href: "/" }, { label: "Doctors" }], META.path))} />
      <PageHero
        kicker="Specialist doctors in Cuttack"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
        eyebrow={`Our team · ${doctors.length} specialists`}
        title={
          <>
            Meet our <span className="text-brand-400">specialist doctors.</span>
          </>
        }
        description="Highly qualified and experienced doctors committed to your health and recovery. Browse our specialist team below."
      />

      <section className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="Directory" meta="Filter by department" className="mb-10" />
          <DoctorDirectory />
        </div>
      </section>

      {/* About the team */}
      <section className="frame section bg-paper" aria-labelledby="team-heading">
        <div className="container-x">
          <SectionIndex index={2} label="Expert medical team · Cuttack, Odisha" />
          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-20">
            <div>
              <h2 id="team-heading" className="display-md">
                Qualified specialists at <span className="text-brand-500">Sai Shree Polyclinic.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-ink-600">
                At <strong className="text-ink-900">Sai Shree Polyclinic, Cuttack</strong>, our medical team
                is made up of specialists with between 8 and 16 years of experience in their fields. Each one is committed to accurate diagnosis,
                personalised treatment plans, and compassionate follow-up care. From{" "}
                <strong className="text-ink-900">MD Endocrinologists</strong> managing diabetes and thyroid
                disorders to <strong className="text-ink-900">MCh Urologists</strong> performing minimally
                invasive procedures, our 8-specialty team covers a comprehensive range of medical needs — all
                under one roof in the heart of Cuttack, Odisha.
              </p>
              <p className="mt-6 label-mono text-[0.6875rem] leading-relaxed text-ink-500">
                {clinic.address} · {clinic.phoneDisplay} · {clinic.hours}
              </p>
            </div>

            <ul className="border-t border-line-strong">
              {trust.map((item, i) => (
                <li key={item.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line-strong py-7">
                  <span className="label-mono pt-1 text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                      <item.icon size={20} className="text-brand-500" strokeWidth={1.75} />
                    </div>
                    <p className="mt-2 leading-relaxed text-ink-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title="Book a consultation"
        highlight="today."
        description="Connect with the right specialist at Sai Shree Polyclinic, Cuttack. We confirm your appointment within 30 minutes via WhatsApp."
        whatsappMessage="Hi, I'd like to book an appointment at Sai Shree Polyclinic."
      />
    </>
  );
}
