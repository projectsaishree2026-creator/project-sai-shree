import { CalendarCheck, Phone, MessageCircle, Clock } from "lucide-react";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/animations";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const quickContacts = [
  {
    icon: Phone,
    color: "#0EA5E9",
    bg: "#EFF6FF",
    label: "Call Us Directly",
    value: clinic.phoneDisplay,
    href: `tel:+91${clinic.phone}`,
    cta: "Call Now",
  },
  {
    icon: MessageCircle,
    color: "#25D366",
    bg: "#F0FDF4",
    label: "WhatsApp Us",
    value: clinic.phoneDisplay,
    href: getWhatsAppUrl(),
    cta: "Chat Now",
    external: true,
  },
  {
    icon: Clock,
    color: "#F59E0B",
    bg: "#FFFBEB",
    label: "Clinic Hours",
    value: "Mon – Sat: 9 AM – 7 PM",
    href: "#",
    cta: "",
  },
];

export function AppointmentSection() {
  return (
    <section id="appointment" className="section-py bg-gradient-subtle">
      <div className="section-container">
        <FadeUp>
          <div className="mb-12">
            <SectionHeader
              eyebrow="Book Appointment"
              title="Schedule Your Visit"
              titleHighlight="Today"
              subtitle="Fill in the form below or reach us directly via WhatsApp. Our team will confirm your slot within 30 minutes."
            />
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form — wider column */}
          <FadeUp className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CalendarCheck size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                    Book an Appointment
                  </h3>
                  <p className="text-xs text-gray-500">We&apos;ll confirm within 30 minutes</p>
                </div>
              </div>
              <AppointmentForm />
            </div>
          </FadeUp>

          {/* Info column */}
          <FadeUp delay={0.15} className="lg:col-span-2 flex flex-col gap-5">
            {quickContacts.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: item.bg }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-400 mb-0.5">{item.label}</p>
                  <p className="font-semibold text-sm text-gray-900 truncate">{item.value}</p>
                </div>
                {item.cta && (
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    style={{
                      color: item.color,
                      background: item.bg,
                    }}
                  >
                    {item.cta}
                  </a>
                )}
              </div>
            ))}

            {/* Trust note */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                🔒 Your data is safe with us
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                We never share your personal information. Your appointment details are kept strictly confidential.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                ⚡ Instant WhatsApp Booking
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Prefer quick booking? Send us a WhatsApp message and we&apos;ll set up your appointment instantly.
              </p>
              <a
                href={getWhatsAppUrl("Hi, I'd like to book an appointment at Sai Shree Polyclinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-2 px-4"
              >
                Open WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
