import type { Metadata } from "next";
import { MapPin, Phone, Clock, Mail, Navigation, MessageCircle } from "lucide-react";
import { clinic } from "@/data/clinic";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${clinic.name} — Book an appointment, get directions, or reach us by phone or WhatsApp. Located at Kathagola, Ring Rd, Cuttack, Odisha.`,
};

export default function ContactPage() {
  const waUrl = getWhatsAppUrl();
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-14 mb-14 md:pt-36">
        <div className="section-container text-center">
          <p className="section-eyebrow justify-center">Contact Us</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Book an appointment, ask a question, or find your way to our clinic. We&apos;re here to help.
          </p>
        </div>
      </section>

      <div className="section-container">
        {/* Quick contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {[
            { icon: Phone, color: "#0EA5E9", bg: "#EFF6FF", label: "Call Us", value: clinic.phoneDisplay, href: `tel:+91${clinic.phone}`, cta: "Call Now" },
            { icon: MessageCircle, color: "#25D366", bg: "#F0FDF4", label: "WhatsApp", value: "Quick Replies", href: waUrl, cta: "Chat Now", external: true },
            { icon: Mail, color: "#6366F1", bg: "#EEF2FF", label: "Email Us", value: clinic.email, href: `mailto:${clinic.email}`, cta: "Send Email" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-card transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{ background: item.bg }}>
                <item.icon size={26} style={{ color: item.color }} />
              </div>
              <p className="text-xs font-medium text-gray-400 mb-1">{item.label}</p>
              <p className="font-semibold text-sm text-gray-900 mb-3 truncate max-w-full">{item.value}</p>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: item.bg, color: item.color }}>
                {item.cta}
              </span>
            </a>
          ))}
        </div>

        {/* Main content: Appointment form + Info */}
        <div className="grid lg:grid-cols-3 gap-10 mb-14">
          {/* Appointment form */}
          <div id="appointment" className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8 h-full">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Book an Appointment
              </h2>
              <p className="text-sm text-gray-500 mb-6">Fill in your details and we&apos;ll confirm your slot within 30 minutes.</p>
              <AppointmentForm />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-5 h-full flex flex-col justify-center">
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>Clinic Info</h3>
                <p className="text-sm text-gray-500 mb-6">Reach out to us directly or visit our clinic during working hours.</p>
              </div>
              
              <div className="space-y-5">
                {[
                  { icon: MapPin, color: "#0EA5E9", text: clinic.address },
                  { icon: Phone, color: "#10B981", text: clinic.phoneDisplay },
                  { icon: Clock, color: "#F59E0B", text: "Monday – Saturday: 9:00 AM – 7:00 PM" },
                  { icon: Mail, color: "#6366F1", text: clinic.email },
                ].map(({ icon: Icon, color, text }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}14` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed mt-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
            <Navigation size={22} className="text-primary" /> Find Us on the Map
          </h2>
          <p className="text-sm text-gray-500 mb-5">First Smile Dental Clinic, Mangalabag, Kathagola, Cuttack, Odisha 753001, India</p>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px]">
            <iframe
              title="First Smile Dental Clinic Map"
              src="https://maps.google.com/maps?q=first%20smile%20dental%20clinic%20Mangalabag,%20kathagola,%20Cuttack,%20Odisha%20753001,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
