"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CallButton() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-5 z-40 hidden md:flex flex-col items-end gap-2">
      {expanded && (
        <div className="glass-card p-4 w-52 shadow-xl mb-1">
          <p className="text-xs font-semibold text-gray-700 mb-3">Reach Us Directly</p>
          <div className="space-y-2">
            <a
              href={`tel:+91${clinic.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              <Phone size={14} className="text-primary" />
              {clinic.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-green-500">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.843L.057 23.486a.5.5 0 0 0 .613.614l5.74-1.466A11.957 11.957 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.022-1.38l-.36-.213-3.736.954.97-3.647-.233-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
        style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
        aria-label="Contact options"
      >
        {expanded ? (
          <X size={18} className="text-white" />
        ) : (
          <Phone size={18} className="text-white" />
        )}
      </button>
    </div>
  );
}
