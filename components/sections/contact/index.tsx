import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { clinic } from "@/data/clinic";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/animations";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section className="section-py mesh-bg">
      <div className="section-container">
        <FadeUp>
          <div className="mb-12">
            <SectionHeader
              eyebrow="Find Us"
              title="Visit Sai Shree"
              titleHighlight="Polyclinic"
              subtitle="Conveniently located on Ring Road, Kathagola, Cuttack — easily accessible from all parts of the city."
            />
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <FadeUp className="space-y-5">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-base text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                <MapPin size={18} className="text-primary" />
                Address
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{clinic.address}</p>
              <a
                href={`https://maps.google.com/?q=Sai+Shree+Polyclinic+Cuttack+Odisha`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold mt-3 hover:underline"
              >
                <Navigation size={13} />
                Get Directions
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-base text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                <Phone size={18} className="text-primary" />
                Phone
              </h3>
              <a
                href={`tel:+91${clinic.phone}`}
                className="text-gray-600 text-sm hover:text-primary transition-colors font-medium"
              >
                {clinic.phoneDisplay}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-base text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                <Clock size={18} className="text-primary" />
                Working Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday – Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a href={`tel:+91${clinic.phone}`} className="btn-primary flex-1 justify-center">
                <Phone size={16} /> Call Now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 justify-center"
              >
                WhatsApp
              </a>
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={0.15}>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[420px]">
              <iframe
                title="Sai Shree Polyclinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.97!2d85.8823!3d20.4686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19009b2c59e1a1%3A0x4a0b9e1d2e3f5a6b!2sKathagola%2C+Cuttack%2C+Odisha+753110!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
