"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  CalendarCheck,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Users,
  Heart,
} from "lucide-react";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "@/data/services";

const SPECIALTY_ICONS: Record<string, string> = {
  endocrinology: "🩸",
  neurology: "🧠",
  pulmonology: "🫁",
  gastroenterology: "🫀",
  dental: "🦷",
  gynecology: "🌸",
  urology: "💧",
  oncology: "🎗️",
};

export function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${clinic.name}, I'd like to book an appointment.`
  );

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-[72px]">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="section-container relative z-10 py-16 md:py-20 -mt-8 md:-mt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Ultra-Slim Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-md border border-white/60 shadow-sm shadow-primary/5 rounded-full p-1 pr-3 mb-6"
            >
              {/* Micro Avatars */}
              <div className="flex -space-x-1.5 mr-2">
                <div className="w-5 h-5 rounded-full border border-white bg-blue-50 flex items-center justify-center z-30">
                  <Users size={9} className="text-blue-600" />
                </div>
                <div className="w-5 h-5 rounded-full border border-white bg-emerald-50 flex items-center justify-center z-20">
                  <Heart size={9} className="text-emerald-500" />
                </div>
                <div className="w-5 h-5 rounded-full border border-white bg-amber-50 flex items-center justify-center z-10">
                  <Star size={9} className="fill-amber-400 text-amber-400" />
                </div>
                <div className="w-5 h-5 rounded-full border border-white bg-gray-900 flex items-center justify-center z-0">
                  <span className="text-[7px] font-bold text-white">+5k</span>
                </div>
              </div>

              {/* Single Line Text */}
              <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] text-gray-500">
                <span className="font-bold text-gray-900">4.9 Rating</span>
                <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                <span><strong className="text-gray-900 font-bold">5000+</strong> Treated</span>
                <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                <span className="font-semibold text-primary">Trusted Clinic</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold leading-[1.1] text-gray-900 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Advanced{" "}
              <span className="gradient-text">Multi-Specialty</span>
              <br />
              Care in Cuttack
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              8 specialties. Expert doctors. All under one roof.
              From diabetes management to cancer screening — quality healthcare made accessible in Cuttack.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link href="/contact#appointment" className="btn-primary text-base px-6 py-3.5">
                <CalendarCheck size={18} />
                Book Appointment
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-6 py-3.5"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.843L.057 23.486a.5.5 0 0 0 .613.614l5.74-1.466A11.957 11.957 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.022-1.38l-.36-.213-3.736.954.97-3.647-.233-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                WhatsApp Now
              </a>
              <a
                href={`tel:+91${clinic.phone}`}
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-md transition-all shadow-sm shrink-0 group"
                aria-label="Call Clinic"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin size={14} className="text-primary shrink-0" />
                Sai shree polyclinic Cuttack At- Kathagola, Ring Rd, near Shree Maa, Cuttack, Odisha 753110
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Clock size={14} className="text-primary" />
                Mon–Sat: 9 AM – 7 PM
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <ShieldCheck size={14} className="text-accent" />
                NABH Guidelines Followed
              </span>
            </motion.div>
          </div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative">
              {/* Hero visual card */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%)",
                  minHeight: 460,
                }}
              >
                {/* Large decorative cross */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <svg viewBox="0 0 200 200" className="w-64 h-64">
                    <rect x="80" y="10" width="40" height="180" rx="20" fill="#0EA5E9" />
                    <rect x="10" y="80" width="180" height="40" rx="20" fill="#0EA5E9" />
                  </svg>
                </div>

                {/* Clinic info card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #0EA5E9, #06B6D4)",
                    }}
                  >
                    <svg viewBox="0 0 200 200" className="w-10 h-10">
                      <rect x="80" y="10" width="40" height="180" rx="12" fill="white" />
                      <rect x="10" y="80" width="180" height="40" rx="12" fill="white" />
                    </svg>
                  </div>
                  <h3
                    className="font-extrabold text-2xl text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Sai Shree Polyclinic
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Cuttack&apos;s Trusted Multi-Specialty Care
                  </p>

                  {/* Specialty chips */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {services.slice(0, 6).map((s) => (
                      <span
                        key={s.id}
                        className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-white/60 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm"
                      >
                        <span>{SPECIALTY_ICONS[s.slug] || "🏥"}</span>
                        {s.name}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold text-primary">
                      +2 more
                      <ChevronRight size={10} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 glass-card px-4 py-3 flex items-center gap-3 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-none">4.9 ★</p>
                  <p className="text-xs text-gray-500 mt-0.5">Google Rating</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-3 flex items-center gap-3 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-none">5000+</p>
                  <p className="text-xs text-gray-500 mt-0.5">Patients Served</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 glass-card px-4 py-3 flex items-center gap-3 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-none">8+</p>
                  <p className="text-xs text-gray-500 mt-0.5">Specialties</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden mt-8 grid grid-cols-3 gap-2 p-4 glass-card"
        >
          {[
            { icon: "⭐", label: "4.9 Rating" },
            { icon: "🏥", label: "8+ Specialties" },
            { icon: "👨‍⚕️", label: "5000+ Patients" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1 py-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
