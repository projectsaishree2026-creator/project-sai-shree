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
                src={clinic.mapEmbedUrl}
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
