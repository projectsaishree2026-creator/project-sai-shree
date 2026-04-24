import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { clinic } from "@/data/clinic";
import { SectionHeader } from "@/components/shared/section-header";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${clinic.name} — Cuttack's trusted multi-specialty polyclinic with expert doctors across 8 specialties.`,
};

const values = [
  {
    icon: ShieldCheck,
    color: "#0EA5E9",
    bg: "#EFF6FF",
    title: "Patient Safety First",
    desc: "We follow strict hygiene and safety protocols to protect every patient who walks through our doors.",
  },
  {
    icon: Award,
    color: "#6366F1",
    bg: "#EEF2FF",
    title: "Clinical Excellence",
    desc: "Our doctors are MD/MS/DM specialists following evidence-based, up-to-date treatment protocols.",
  },
  {
    icon: Users,
    color: "#10B981",
    bg: "#ECFDF5",
    title: "Compassionate Care",
    desc: "We listen. We understand. We treat every patient with empathy, dignity, and respect.",
  },
  {
    icon: Building2,
    color: "#F59E0B",
    bg: "#FFFBEB",
    title: "Modern Facilities",
    desc: "Advanced diagnostic equipment and a state-of-the-art clinical setup for accurate and fast results.",
  },
];

export default function AboutPage() {
  const waUrl = getWhatsAppUrl();
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-16 mb-16 md:pt-36">
        <div className="section-container text-center">
          <p className="section-eyebrow justify-center">About Us</p>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cuttack&apos;s Trusted{" "}
            <span className="gradient-text">Multi-Specialty Clinic</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Sai Shree Polyclinic was founded with a single mission: to bring
            specialist-quality healthcare closer to the people of Cuttack and
            Odisha — under one convenient roof.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact#appointment" className="btn-primary">
              <CalendarCheck size={17} /> Book Appointment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2
              className="font-display font-extrabold text-3xl text-gray-900 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Healthcare That Feels{" "}
              <span className="gradient-text">Personal</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Sai Shree Polyclinic, Cuttack was established over a decade ago
                with a clear vision — to provide accessible, high-quality
                specialist healthcare so that patients in Cuttack, Bhubaneswar,
                and across Odisha do not have to travel far or wait endlessly
                for expert medical care.
              </p>

              <p>
                Today, we are recognized as one of the most trusted
                multi-specialty polyclinics in Cuttack, offering comprehensive
                healthcare services under one roof. Our experienced team of
                doctors provides expert care in Endocrinology, Neurology,
                Pulmonology, Gastroenterology, Dental care, Gynecology, Urology,
                and Oncology, ensuring accurate diagnosis and effective
                treatment for a wide range of medical conditions.
              </p>

              <p>
                Conveniently located on Ring Road, Kathagola — near Shree Maa
                Temple — Sai Shree Polyclinic serves thousands of patients every
                year from Cuttack, Bhubaneswar, and surrounding districts of
                Odisha. We are committed to delivering affordable,
                patient-centered, and advanced medical care, making us a
                preferred choice for those searching for the best clinic in
                Cuttack.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Patients Served", value: "5000+" },
              { label: "Years in Service", value: "10+" },
              { label: "Specialties", value: "8+" },
              { label: "Google Rating", value: "4.9★" },
            ].map((s) => (
              <div key={s.label} className="glass-card p-6 text-center">
                <p
                  className="font-display font-extrabold text-3xl text-primary mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand"
            titleHighlight="For"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: v.bg }}
                >
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <h3
                  className="font-display font-bold text-base text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
