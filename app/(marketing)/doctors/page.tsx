import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight, CalendarCheck, Languages } from "lucide-react";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { DoctorCard } from "@/components/sections/doctors";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Specialist Doctors | Sai Shree Polyclinic, Cuttack",
  description: `Meet the specialist doctors at Sai Shree Polyclinic, Cuttack, Odisha. Our team includes MD, MS, DM, and MCh qualified specialists in Endocrinology, Neurology, Gynecology, Gastroenterology, Urology, Pulmonology, Dental, and Oncology.`,
};

const SPECIALTY_COLORS: Record<string, string> = {
  Endocrinology: "#0EA5E9",
  Gynecology: "#EC4899",
  "Gynecology & IVF": "#EC4899",
  Neurology: "#6366F1",
  Dental: "#10B981",
  Pulmonology: "#06B6D4",
  Oncology: "#8B5CF6",
  Urology: "#3B82F6",
  Gastroenterology: "#F59E0B",
};

export default function DoctorsPage() {
  const waUrl = getWhatsAppUrl("Hi, I'd like to book an appointment at Sai Shree Polyclinic.");
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-16 mb-16 md:pt-36">
        <div className="section-container text-center">
          <p className="section-eyebrow justify-center">Our Team</p>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet Our <span className="gradient-text">Specialist Doctors</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Highly qualified and experienced doctors committed to your health and recovery. Browse our specialist team below.
          </p>
        </div>
      </section>

      <div className="section-container">
        {/* Flip Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {doctors.map((doc) => (
            <div key={doc.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <div className="w-full">
                <DoctorCard doctor={doc} />
              </div>
            </div>
          ))}
        </div>

        {/* ── About the Team Section ── */}
        <section className="mt-20 mb-16" aria-label="About Our Doctors at Sai Shree Polyclinic">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Expert Medical Team · Cuttack, Odisha</p>
              <h2
                className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Qualified Specialists at Sai Shree Polyclinic
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                At <strong>Sai Shree Polyclinic, Cuttack</strong>, our medical team comprises highly experienced specialists
                who have trained at reputed institutions across India. Every doctor in our panel is board-certified and
                committed to delivering accurate diagnoses, personalised treatment plans, and compassionate follow-up care.
                From <strong>MD Endocrinologists</strong> managing diabetes and thyroid disorders to{" "}
                <strong>MCh Urologists</strong> performing minimally invasive procedures, our 8-specialty team covers a
                comprehensive range of medical needs — all under one roof in the heart of Cuttack, Odisha.
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-primary shrink-0" />
                  <span>Sai shree polyclinic Cuttack At- Kathagola, Ring Rd, near Shree Maa, Cuttack, Odisha 753110</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-primary shrink-0" />
                  <a href={`tel:+91${clinic.phone}`} className="hover:text-primary transition-colors">
                    {clinic.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-primary shrink-0" />
                  <span>Mon–Sat: 9 AM – 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Per-Doctor Detail Cards ── */}
        <section className="mb-16" aria-label="Doctor Profiles at Sai Shree Polyclinic Cuttack">
          <h2
            className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Doctors &amp; Their Specialties
          </h2>
          <p className="text-gray-500 mb-10 text-sm max-w-2xl">
            Detailed profiles of every specialist at Sai Shree Polyclinic. Find the right doctor for your condition, check availability, and book an appointment instantly.
          </p>

          <div className="space-y-5">
            {doctors.map((doc) => {
              const color = SPECIALTY_COLORS[doc.specialty] || "#0EA5E9";
              return (
                <article
                  key={doc.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Doctor Photo */}
                    <div className="shrink-0">
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-md" style={{ outline: `2px solid ${color}40` }}>
                        <Image
                          src={doc.image}
                          alt={`${doc.name} - ${doc.specialty} Specialist at Sai Shree Polyclinic Cuttack`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <h3
                            className="font-display font-bold text-xl text-gray-900 leading-snug"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {doc.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-0.5">{doc.qualification}</p>
                        </div>
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full shrink-0"
                          style={{ background: `${color}18`, color }}
                        >
                          {doc.specialty}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{doc.bio} Based at <strong>Sai Shree Polyclinic, Cuttack, Odisha</strong>, {doc.name.split(" ")[0]} brings {doc.experience} of hands-on clinical experience to every consultation.</p>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="shrink-0" style={{ color }} />
                          <span><strong>{doc.experience}</strong> Experience</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CalendarCheck size={12} className="shrink-0" style={{ color }} />
                          <span>Available: <strong>{doc.available}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Languages size={12} className="text-gray-400 shrink-0" />
                          <span>{doc.languages.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/doctors/${doc.slug}`}
                          className="text-xs font-semibold px-4 py-2 rounded-xl border flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                          style={{ borderColor: `${color}50`, color, background: `${color}0d` }}
                        >
                          Full Profile <ArrowRight size={12} />
                        </Link>
                        <a
                          href={getWhatsAppUrl(`Hi, I'd like to book an appointment with ${doc.name} at Sai Shree Polyclinic.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-4 py-2 rounded-xl bg-emerald-500 text-white flex items-center gap-1.5 hover:bg-emerald-600 transition-colors"
                        >
                          <CalendarCheck size={12} />
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Why Trust Section ── */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Board-Certified Specialists", desc: "All our doctors hold MD, MS, DM, or MCh degrees from accredited Indian medical institutions.", color: "#0EA5E9" },
              { title: "8 Specialties Under One Roof", desc: "From Endocrinology to Urology, Sai Shree Polyclinic covers all major medical departments in Cuttack.", color: "#10B981" },
              { title: "Patient-First Approach", desc: "We prioritise clear communication, minimal wait times, and personalised treatment at every visit.", color: "#8B5CF6" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: `${item.color}18` }}>
                  <div className="w-4 h-4 rounded-full" style={{ background: item.color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Booking CTA ── */}
        <section
          className="relative overflow-hidden rounded-3xl p-8 md:p-14 text-white text-center"
          style={{ background: "linear-gradient(135deg, #6366F1 0%, #0EA5E9 60%, #06B6D4 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
          <div className="absolute -bottom-14 -left-8 w-72 h-72 rounded-full opacity-10" style={{ background: "rgba(255,255,255,0.4)" }} />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-white/30">
              8 Specialist Doctors · Cuttack, Odisha
            </span>
            <h2
              className="font-display font-extrabold text-3xl md:text-4xl mb-3 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a Consultation Today
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
              Connect with the right specialist at Sai Shree Polyclinic, Cuttack. We confirm your appointment within 30 minutes via WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white font-bold px-7 py-3 rounded-2xl text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                style={{ color: "#6366F1" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.843L.057 23.486a.5.5 0 0 0 .613.614l5.74-1.466A11.957 11.957 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.022-1.38l-.36-.213-3.736.954.97-3.647-.233-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                Book via WhatsApp
              </a>
              <a
                href={`tel:+91${clinic.phone}`}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-7 py-3 rounded-2xl text-sm hover:bg-white/25 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {clinic.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
