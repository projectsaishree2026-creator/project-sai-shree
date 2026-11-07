import { Phone, Lock } from "lucide-react";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { SectionIndex } from "@/components/shared/section-index";
import { OpenStatus } from "@/components/shared/open-status";
import { WhatsAppIcon } from "@/components/shared/icons";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  { title: "Share your details", desc: "Tell us the department and a date that suits you." },
  { title: "We confirm on WhatsApp", desc: "Our front desk confirms your slot within 30 minutes." },
  { title: "Visit the clinic", desc: "Come in at your time — minimal waiting, no surprises." },
];

export function AppointmentSection() {
  return (
    <section id="appointment" className="frame section scroll-mt-16 bg-white">
      <div className="container-x">
        <SectionIndex index={6} label="Book a visit" meta={<OpenStatus tone="light" />} />

        <div className="mt-14 md:mt-20 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:gap-20">
          <div>
            <h2 className="display-md">
              Schedule your visit <span className="text-brand-500">today.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-500">
              Fill in the form or reach us directly. Our team will confirm your slot within 30 minutes.
            </p>

            <ol className="mt-12 border-t border-line">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line py-6">
                  <span className="label-mono pt-1 text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-display text-xl font-semibold tracking-[-0.03em] text-ink-900">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-ink-500">{s.desc}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-outline">
                <Phone size={15} /> {clinic.phoneDisplay}
              </a>
              <a
                href={getWhatsAppUrl("Hi, I'd like to book an appointment at Sai Shree Polyclinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4" /> Instant booking
              </a>
            </div>
          </div>

          <div className="border border-line-strong bg-paper p-6 md:p-10">
            <div className="mb-8 flex items-center justify-between label-mono text-[0.6875rem]">
              <span className="text-ink-900">Appointment request</span>
              <span className="text-ink-500">* required</span>
            </div>
            <AppointmentForm />
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-ink-500">
              <Lock size={14} className="mt-0.5 shrink-0" />
              Your details are kept strictly confidential and only used to arrange your appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
