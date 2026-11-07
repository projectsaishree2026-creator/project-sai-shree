import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/icons";
import { ECGLine } from "@/components/shared/ecg-line";
import { OpenStatus } from "@/components/shared/open-status";

interface CTABandProps {
  title?: string;
  highlight?: string;
  description?: string;
  whatsappMessage?: string;
}

/** Full-bleed dark closing statement used at the end of most pages. */
export function CTABand({
  title = "Tell us how you feel.",
  highlight = "We'll take it from here.",
  description = "Book your visit in under a minute. Our front desk confirms appointments on WhatsApp within 30 minutes during clinic hours.",
  whatsappMessage = `Hello ${clinic.name}, I'd like to book an appointment.`,
}: CTABandProps) {
  return (
    <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 text-brand-500 opacity-60" aria-hidden="true">
        <ECGLine />
      </div>
      <div className="container-x relative py-24 md:py-32">
        <p className="mb-10 flex items-center gap-2 label-mono text-brand-300">
          <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
          Next step
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:items-end">
          <h2 className="display-lg text-white">
            {title} <span className="text-brand-400">{highlight}</span>
          </h2>
          <div>
            <p className="text-lg leading-relaxed">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#appointment" className="btn-primary btn-lg">
                Book appointment <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light btn-lg"
              >
                <WhatsAppIcon className="w-4 h-4 text-pulse" /> WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <OpenStatus />
              <a href={`tel:+91${clinic.phone}`} className="fx-phone label-mono flex items-center gap-2 text-white hover:text-brand-300">
                <Phone size={14} /> {clinic.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
