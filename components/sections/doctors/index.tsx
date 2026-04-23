"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Clock, Languages, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { SectionHeader } from "@/components/shared/section-header";
import { Stagger, StaggerItem } from "@/components/animations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { clinic } from "@/data/clinic";

const SPECIALTY_COLORS: Record<string, string> = {
  Endocrinology: "#0EA5E9",
  Gynecology: "#EC4899",
  Neurology: "#6366F1",
  Dental: "#10B981",
  Pulmonology: "#06B6D4",
  Oncology: "#8B5CF6",
  Urology: "#3B82F6",
  Gastroenterology: "#F59E0B",
};

const INITIALS_BG: Record<string, string> = {
  Endocrinology: "#EFF6FF",
  Gynecology: "#FDF2F8",
  Neurology: "#EEF2FF",
  Dental: "#ECFDF5",
  Pulmonology: "#ECFEFF",
  Oncology: "#F5F3FF",
  Urology: "#EFF6FF",
  Gastroenterology: "#FFFBEB",
};

export function DoctorsSection() {
  return (
    <section className="section-py">
      <div className="section-container">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Our Doctors"
            title="Meet Our"
            titleHighlight="Expert Specialists"
            subtitle="Qualified, experienced, and compassionate doctors dedicated to your health and well-being."
          />
        </div>

        <Stagger className="flex flex-wrap justify-center gap-6">
          {doctors.map((doc) => (
            <StaggerItem key={doc.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <div className="w-full">
                <DoctorCard doctor={doc} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Link href="/doctors" className="btn-outline inline-flex">
            View All Doctors
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DoctorCard({ doctor }: { doctor: (typeof doctors)[0] }) {
  const [flipped, setFlipped] = useState(false);
  const color = SPECIALTY_COLORS[doctor.specialty] || "#0EA5E9";
  const waUrl = getWhatsAppUrl(
    `Hello ${clinic.name}, I'd like to book an appointment with ${doctor.name} (${doctor.specialty}).`
  );

  return (
    <div
      className="group relative w-full h-[380px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 [perspective:1000px]"
      onClick={() => setFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((prev) => !prev);
        }
      }}
      aria-label={`View details for ${doctor.name}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : "md:group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-4 text-white w-full">
            <h3
              className="font-display font-bold text-xl leading-tight mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {doctor.name}
            </h3>
            <span
              className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20"
              style={{ background: `${color}40`, color: "#fff" }}
            >
              {doctor.specialty}
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-white rounded-2xl p-5 flex flex-col justify-between h-full border border-gray-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <div className="mb-4">
              <h3
                className="font-display font-bold text-lg text-gray-900 leading-tight mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {doctor.name}
              </h3>
              <span
                className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: `${color}14`, color }}
              >
                {doctor.specialty}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">
              {doctor.bio}
            </p>

            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-medium text-gray-800 leading-snug">
                {doctor.qualification}
              </p>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                <span>{doctor.experience} Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarCheck size={14} className="text-accent" />
                <span>{doctor.available}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Languages size={14} className="text-gray-400" />
                <span className="truncate">{doctor.languages.join(", ")}</span>
              </div>
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent flip when clicking button
            className="btn-primary mt-auto w-full justify-center py-2.5 text-sm"
            aria-label={`Book Appointment with ${doctor.name}`}
          >
            <CalendarCheck size={16} />
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
