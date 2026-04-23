"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const waUrl = getWhatsAppUrl("Hi, I'd like to book an appointment at Sai Shree Polyclinic.");

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-2.5 py-3">
      <div className="flex items-center gap-2">
        <a
          href={`tel:+91${clinic.phone}`}
          className="btn-outline flex-1 justify-center py-2.5 px-0 text-xs sm:text-[13px] whitespace-nowrap"
        >
          <Phone size={14} />
          Call
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 justify-center py-2.5 px-0 text-xs sm:text-[13px] whitespace-nowrap"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.843L.057 23.486a.5.5 0 0 0 .613.614l5.74-1.466A11.957 11.957 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.022-1.38l-.36-.213-3.736.954.97-3.647-.233-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          WhatsApp
        </a>
        <Link
          href="/contact#appointment"
          className="btn-primary flex-1 justify-center py-2.5 px-0 text-xs sm:text-[13px] whitespace-nowrap"
        >
          <CalendarCheck size={14} />
          Book
        </Link>
      </div>
    </div>
  );
}
