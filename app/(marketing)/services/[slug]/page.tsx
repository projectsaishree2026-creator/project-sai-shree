import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Activity, Brain, Wind, Zap, Smile, Heart, Droplets, Shield,
  CheckCircle2, CalendarCheck, ArrowLeft, Users,
} from "lucide-react";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AppointmentForm } from "@/components/forms/appointment-form";

const ICONS: Record<string, React.ElementType> = {
  Activity, Brain, Wind, Zap, Smile, Heart, Droplets, Shield,
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in Cuttack`,
    description: service.fullDesc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon] || Activity;
  const relatedDoctors = doctors.filter((d) => d.specialtySlug === service.slug);
  const waUrl = getWhatsAppUrl(`Hello ${clinic.name}, I'd like to book an appointment for ${service.name}.`);

  return (
    <div className="pt-28 pb-20">
      <div className="section-container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back to Services
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                style={{ background: `${service.color}14`, border: `1.5px solid ${service.color}28` }}
              >
                <Icon size={30} style={{ color: service.color }} />
              </div>
              <div>
                <h1
                  className="font-display font-extrabold text-3xl text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.name}
                </h1>
                {service.doctorAvailable && (
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-accent" />
                    <span className="text-sm font-semibold text-accent">Specialist Doctor Available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="glass-card p-6 mb-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                About This Department
              </h2>
              <p className="text-gray-600 leading-relaxed">{service.fullDesc}</p>
            </div>

            {/* Conditions */}
            <div className="glass-card p-6 mb-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Conditions We Treat
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {service.conditions.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${service.color}14` }}>
                      <CheckCircle2 size={12} style={{ color: service.color }} />
                    </div>
                    <span className="text-sm text-gray-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="glass-card p-6 mb-6">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Our Facilities & Services
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related doctors */}
            {relatedDoctors.length > 0 && (
              <div className="glass-card p-6">
                <h2 className="font-display font-bold text-lg text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                  <Users size={18} className="text-primary" />
                  Our {service.name} Specialists
                </h2>
                <div className="space-y-4">
                  {relatedDoctors.map((doc) => {
                    const initials = doc.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("").slice(0, 2);
                    return (
                      <div key={doc.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                          style={{ background: `${service.color}18`, color: service.color }}
                        >
                          {initials}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.qualification}</p>
                          <p className="text-xs text-gray-400 mt-0.5">Available: {doc.available}</p>
                        </div>
                        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-3">
                          Book
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick booking */}
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Book {service.name} Appointment
              </h3>
              <p className="text-xs text-gray-500 mb-5">Quick & easy. We confirm within 30 minutes.</p>
              <AppointmentForm compact />

              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 mb-2">Or book via WhatsApp instantly</p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center text-sm">
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
