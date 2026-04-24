import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarCheck, Languages, Award, Stethoscope } from "lucide-react";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AppointmentForm } from "@/components/forms/appointment-form";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) return {};
  return {
    title: `${doc.name} — ${doc.specialty} Specialist`,
    description: `${doc.name} is a ${doc.specialty} specialist at ${clinic.name}, Cuttack. ${doc.qualification}. ${doc.experience} of experience.`,
  };
}

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

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) notFound();

  const color = SPECIALTY_COLORS[doc.specialty] || "#0EA5E9";
  const relatedService = services.find((s) => s.slug === doc.specialtySlug);
  const initials = doc.name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const waUrl = getWhatsAppUrl(
    `Hello ${clinic.name}, I'd like to book an appointment with ${doc.name} (${doc.specialty}).`
  );

  return (
    <div className="pt-28 pb-20">
      <div className="section-container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Back to Doctors
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile card */}
            <div className="glass-card p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Avatar */}
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-3xl font-extrabold shrink-0 shadow-md"
                  style={{
                    background: `${color}14`,
                    color,
                    fontFamily: "var(--font-display)",
                    border: `2px solid ${color}28`,
                  }}
                >
                  {initials}
                </div>

                <div className="flex-1">
                  <h1
                    className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {doc.name}
                  </h1>
                  <p className="text-sm text-gray-500 mb-3">{doc.qualification}</p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: `${color}14`, color }}
                    >
                      <Stethoscope size={11} className="mr-1.5" />
                      {doc.specialty}
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
                      <Award size={11} className="mr-1.5" />
                      {doc.experience} Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass-card p-6">
              <h2
                className="font-display font-bold text-lg text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About {doc.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">{doc.bio}</p>
            </div>

            {/* Details grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <CalendarCheck size={16} className="text-primary" />
                  <h3 className="font-semibold text-sm text-gray-900">Available Days</h3>
                </div>
                <p className="text-sm text-gray-600">{doc.available}</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Clock size={16} className="text-primary" />
                  <h3 className="font-semibold text-sm text-gray-900">Clinic Hours</h3>
                </div>
                <p className="text-sm text-gray-600">9:00 AM – 7:00 PM</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Languages size={16} className="text-primary" />
                  <h3 className="font-semibold text-sm text-gray-900">Languages</h3>
                </div>
                <p className="text-sm text-gray-600">{doc.languages.join(", ")}</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Award size={16} className="text-primary" />
                  <h3 className="font-semibold text-sm text-gray-900">Qualification</h3>
                </div>
                <p className="text-sm text-gray-600">{doc.qualification}</p>
              </div>
            </div>

            {/* Related service */}
            {relatedService && (
              <div
                className="rounded-2xl p-6 border"
                style={{ background: `${color}06`, borderColor: `${color}20` }}
              >
                <h2
                  className="font-display font-bold text-base text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About {relatedService.name} at {clinic.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {relatedService.shortDesc}
                </p>
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="text-xs font-semibold hover:underline"
                  style={{ color }}
                >
                  View {relatedService.name} Department →
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5">
            {/* Booking card */}
            <div className="glass-card p-6 sticky top-24">
              <h3
                className="font-display font-bold text-lg text-gray-900 mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book with {doc.name.split(" ")[1]}
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                Confirmed within 30 minutes
              </p>
              <AppointmentForm compact />
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 mb-2">Or message directly</p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-sm"
                >
                  WhatsApp {doc.name.split(" ")[1]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
