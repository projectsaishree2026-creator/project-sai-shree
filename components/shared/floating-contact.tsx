"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

/**
 * Single set of conversion shortcuts:
 * - Desktop: one WhatsApp button, bottom-right.
 * - Mobile: a bottom action bar (Call · WhatsApp · Book) after the first scroll.
 */
export function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const waUrl = getWhatsAppUrl(`Hello ${clinic.name}, I'd like to book an appointment.`);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fx-shine fx-press group fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 h-14 rounded-full bg-whatsapp pl-4 pr-5 text-white shadow-lift hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgb(31_168_85/0.7)]"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="text-sm font-semibold">Chat with us</span>
      </a>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-line bg-white/95 backdrop-blur-md px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] transition-transform duration-300",
          visible ? "translate-y-0" : "translate-y-full"
        )}
        aria-hidden={!visible}
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:+91${clinic.phone}`}
            tabIndex={visible ? 0 : -1}
            className="fx-phone btn-secondary btn-sm min-w-0 gap-1.5 px-1 tracking-[0.04em]"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? 0 : -1}
            className="btn-whatsapp btn-sm min-w-0 gap-1.5 px-1 tracking-[0.04em]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            href="/contact#appointment"
            tabIndex={visible ? 0 : -1}
            className="btn-primary btn-sm min-w-0 gap-1.5 px-1 tracking-[0.04em]"
          >
            <CalendarCheck size={16} className="shrink-0" />
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
