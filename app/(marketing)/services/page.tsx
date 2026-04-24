import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Activity, Brain, Wind, Zap, Smile, Heart, Droplets, Shield, ArrowRight, CheckCircle2, MapPin, Phone, Clock } from "lucide-react";
import { services } from "@/data/services";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AboutServiceCards } from "@/components/sections/services/about-service-cards";

export const metadata: Metadata = {
  title: "Our Medical Departments & Services | Sai Shree Polyclinic, Cuttack",
  description: `Sai Shree Polyclinic in Cuttack, Odisha offers 8 specialist medical departments: Endocrinology, Neurology, Pulmonology, Gastroenterology, Dental Clinic, Gynecology, Urology, and Oncology. Expert doctors, modern equipment, and compassionate care.`,
};

const ICONS: Record<string, React.ElementType> = {
  Activity, Brain, Wind, Zap, Smile, Heart, Droplets, Shield,
};

const SERVICE_DOCTOR_MAP: Record<string, string> = {
  endocrinology: "dr-sandeep-kumar-sahu",
  gynecology: "dr-pratha-apramita",
  neurology: "dr-suresh-Das",
  dental: "dr-anita-das",
  pulmonology: "dr-Asutosh-Rout",
  oncology: "dr-nitya-nutan-misra",
  gastroenterology: "dr-suryakanta-parida",
  urology: "dr-ramesh-nayak",
};

export default function ServicesPage() {
  const waUrl = getWhatsAppUrl("Hi, I'd like to book an appointment at Sai Shree Polyclinic.");

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-16 mb-16 md:pt-36">
        <div className="section-container text-center">
          <p className="section-eyebrow justify-center">All Specialties</p>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Medical <span className="gradient-text">Departments</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Comprehensive multi-specialty care under one roof. Expert doctors, modern equipment, and personalized treatment designed for your well-being.
          </p>
        </div>
      </section>

      <div className="section-container">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = ICONS[service.icon] || Activity;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-500 flex flex-col justify-end h-[280px] md:h-[320px]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={`/images/specialties/${service.slug}.webp`}
                    alt={`${service.name} at Sai Shree Polyclinic Cuttack`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:bg-black/30" />
                </div>
                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl p-4 m-3 flex flex-col gap-2">
                  <div className="flex justify-between items-center mb-1">
                    {service.doctorAvailable ? (
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-green-400" />
                        <span className="text-[11px] font-semibold text-green-400">Doctor Available</span>
                      </div>
                    ) : (
                      <div />
                    )}
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm">
                      <Icon size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.conditions.slice(0, 2).map((c) => (
                      <span key={c} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/20">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-white mb-1 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                      {service.name}
                    </h2>
                    <p className="text-xs text-gray-200 leading-relaxed line-clamp-2">{service.shortDesc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-white text-xs font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── About Clinic Section ── */}
        <section className="mt-20 mb-16" aria-label="About Sai Shree Polyclinic">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">About Sai Shree Polyclinic, Cuttack</p>
              <h2
                className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Cuttack&apos;s Trusted Multi-Specialty Clinic
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                <strong>Sai Shree Polyclinic</strong> is a premier multi-specialty healthcare centre located at{" "}
                <strong>Sai shree polyclinic Cuttack At- Kathagola, Ring Rd, near Shree Maa, Cuttack, Odisha 753110</strong>. With 8 specialist departments under one
                roof, we deliver world-class medical expertise to the residents of Cuttack and surrounding districts of
                Odisha. Our team of qualified <strong>MD, MS, DM, and MCh specialists</strong> provides evidence-based,
                compassionate care — from routine health check-ups to the management of complex chronic conditions. We
                are equipped with modern diagnostic equipment and follow best-in-class clinical protocols to ensure
                every patient receives the right care, at the right time.
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

              {/* ── Service Feature Cards ── */}
              <AboutServiceCards />
            </div>
          </div>
        </section>

        {/* ── Per-Service Detail Section ── */}
        <section className="mb-16" aria-label="Detailed Medical Service Information">
          <h2
            className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore Our Medical Services
          </h2>
          <p className="text-gray-500 mb-10 text-sm max-w-2xl">
            Each department at Sai Shree Polyclinic in Cuttack is led by a dedicated specialist. Find the right doctor
            for your condition below.
          </p>

          <div className="space-y-5">
            {services.map((service) => {
              const doctorId = SERVICE_DOCTOR_MAP[service.slug];
              const doc = doctors.find((d) => d.id === doctorId);
              const Icon = ICONS[service.icon] || Activity;
              return (
                <article
                  key={service.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon + Title */}
                    <div className="flex-shrink-0 flex items-start gap-4 md:w-60">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0"
                        style={{ background: `${service.color}18` }}
                      >
                        <Icon size={22} style={{ color: service.color }} />
                      </div>
                      <div>
                        <h3
                          className="font-display font-bold text-lg text-gray-900 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {service.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">at Sai Shree Polyclinic, Cuttack</p>
                        {doc && (
                          <Link
                            href={`/doctors/${doc.slug}`}
                            className="text-xs font-semibold hover:underline mt-1 inline-block"
                            style={{ color: service.color }}
                          >
                            {doc.name}
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Description & Tags */}
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.fullDesc}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                            style={{ borderColor: `${service.color}40`, color: service.color, background: `${service.color}0d` }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.conditions.map((c) => (
                          <span key={c} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Doctor Mini-Card */}
                    {doc && (
                      <div className="md:w-44 shrink-0">
                        <Link
                          href={`/doctors/${doc.slug}`}
                          className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-blue-50/50 transition-all group h-full justify-center"
                        >
                          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow">
                            <Image src={doc.image} alt={`${doc.name} - ${service.name} Specialist at Sai Shree Polyclinic Cuttack`} fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 leading-snug">{doc.name}</p>
                            <p className="text-[10px] text-gray-500 mt-0.5">{doc.qualification.split(",")[0]}</p>
                            <p className="text-[10px] font-semibold mt-1" style={{ color: service.color }}>
                              {doc.experience} experience
                            </p>
                          </div>
                          <span className="text-[10px] text-primary font-semibold group-hover:underline flex items-center gap-0.5">
                            View Profile <ArrowRight size={10} />
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Booking CTA ── */}
        <section
          className="relative overflow-hidden rounded-3xl p-8 md:p-14 text-white text-center"
          style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #10B981 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
          <div className="absolute -bottom-12 -right-8 w-64 h-64 rounded-full opacity-10" style={{ background: "rgba(255,255,255,0.4)" }} />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-white/30">
              Sai Shree Polyclinic · Cuttack
            </span>
            <h2
              className="font-display font-extrabold text-3xl md:text-4xl mb-3 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book Your Appointment Today
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
              Serving Cuttack and all of Odisha with expert specialist care across 8 departments. Appointments confirmed within 30 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white font-bold px-7 py-3 rounded-2xl text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                style={{ color: "#0EA5E9" }}
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
