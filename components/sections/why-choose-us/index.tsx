"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Cpu,
  IndianRupee,
  PhoneCall,
  ClipboardList,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Stagger, StaggerItem } from "@/components/animations";
import Link from "next/link";

const reasons = [
  {
    icon: Building2,
    color: "#0EA5E9",
    bg: "#EFF6FF",
    title: "All Specialties Under One Roof",
    desc: "No need to travel across the city. 8 specialist departments available in one convenient location in Cuttack.",
  },
  {
    icon: Stethoscope,
    color: "#6366F1",
    bg: "#EEF2FF",
    title: "Experienced Specialist Doctors",
    desc: "Our doctors are MD/MS/DM qualified specialists with an average of 10+ years of experience in their fields.",
  },
  {
    icon: Cpu,
    color: "#06B6D4",
    bg: "#ECFEFF",
    title: "Modern Medical Equipment",
    desc: "Digital X-ray, ultrasound, ECG, spirometry, and a fully equipped diagnostic lab for accurate results.",
  },
  {
    icon: IndianRupee,
    color: "#10B981",
    bg: "#ECFDF5",
    title: "Affordable & Transparent Pricing",
    desc: "Quality healthcare at fair prices. No hidden fees. Insurance-linked billing supported for select providers.",
  },
  {
    icon: PhoneCall,
    color: "#EC4899",
    bg: "#FDF2F8",
    title: "Easy Appointment Booking",
    desc: "Book via our website, WhatsApp, or phone. Walk-ins welcome. Minimal waiting time guaranteed.",
  },
  {
    icon: ClipboardList,
    color: "#F59E0B",
    bg: "#FFFBEB",
    title: "Personalized Treatment Plans",
    desc: "Every patient is unique. We create customized care plans based on your specific health needs and lifestyle.",
  },
  {
    icon: ShieldCheck,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Safe & Hygienic Environment",
    desc: "We follow strict hygiene protocols and infection control standards for the safety of every patient and staff.",
  },
  {
    icon: Clock,
    color: "#3B82F6",
    bg: "#EFF6FF",
    title: "Long Hours for Your Convenience",
    desc: "Open Monday to Saturday, 9 AM to 7 PM. We work around your schedule so you never miss a consultation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-py mesh-bg">
      <div className="section-container">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Healthcare You Can"
            titleHighlight="Trust & Rely On"
            subtitle="Sai Shree Polyclinic combines clinical excellence with patient-first care to deliver an experience that truly makes a difference."
          />
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 hover:shadow-card-hover transition-shadow duration-300 h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.bg }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <h3
                  className="font-display font-bold text-base text-gray-900 mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link href="/contact#appointment" className="btn-primary inline-flex text-base px-8 py-3.5">
            Book Your Consultation Today
          </Link>
        </div>
      </div>
    </section>
  );
}
