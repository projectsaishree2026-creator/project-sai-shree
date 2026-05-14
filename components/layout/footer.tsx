import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Image from "next/image";
import { clinic } from "@/data/clinic";
import { navigation } from "@/config/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main footer */}
      <div className="section-container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Sai Shree Polyclinic Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-xl shadow-md"
              />
              <div>
                <span className="block text-white text-[14px] leading-tight" style={{ fontWeight: 800, fontFamily: "var(--font-display)" }}>
                  Sai Shree Polyclinic
                </span>
                <span className="block text-[10px] font-semibold" style={{ color: "var(--color-primary)", letterSpacing: "0.06em" }}>Multi-Specialty Care</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Advanced multi-specialty care with trusted doctors across 8+ departments under one roof in Cuttack, Odisha.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:+91${clinic.phone}`}
                className="flex-1 btn-primary text-sm py-2.5 justify-center"
              >
                <Phone size={14} /> Call Us
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-whatsapp text-sm py-2.5 justify-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Specialties</h3>
            <ul className="space-y-2.5">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400 leading-relaxed">{clinic.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a href={`tel:+91${clinic.phone}`} className="text-gray-400 hover:text-primary transition-colors">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400">{clinic.hours}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${clinic.email}`} className="text-gray-400 hover:text-primary transition-colors">
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>{clinic.address}</p>
        </div>
      </div>
    </footer>
  );
}
