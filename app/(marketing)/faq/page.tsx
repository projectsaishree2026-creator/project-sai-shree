import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/faq";
import { clinic } from "@/data/clinic";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${clinic.name} — appointments, services, doctors, timings, payment and more.`,
};

export default function FAQPage() {
  const waUrl = getWhatsAppUrl();
  return (
    <div>
      {/* Hero */}
      <section className="mesh-bg pt-32 pb-14 md:pt-36">
        <div className="section-container text-center">
          <p className="section-eyebrow justify-center">Help Center</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach us directly.
          </p>
        </div>
      </section>

      <FAQSection />

      {/* Still have questions CTA */}
      <section className="py-14 bg-gradient-subtle">
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Still have questions?
          </h2>
          <p className="text-gray-500 mb-7 max-w-md mx-auto text-sm">
            Our team is happy to help. Call us, WhatsApp us, or book an appointment and our staff will assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:+91${clinic.phone}`} className="btn-outline">
              <Phone size={16} /> Call {clinic.phoneDisplay}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp Us
            </a>
            <Link href="/contact#appointment" className="btn-primary">
              <CalendarCheck size={16} /> Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
