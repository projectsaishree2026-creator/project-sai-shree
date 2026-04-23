"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Brain,
  Wind,
  Zap,
  Smile,
  Heart,
  Droplets,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { Stagger, StaggerItem } from "@/components/animations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { clinic } from "@/data/clinic";

const ICONS: Record<string, React.ElementType> = {
  Activity,
  Brain,
  Wind,
  Zap,
  Smile,
  Heart,
  Droplets,
  Shield,
};

export function ServicesSection() {
  return (
    <section className="section-py bg-gradient-subtle">
      <div className="section-container">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Our Specialties"
            title="Expert Care Across"
            titleHighlight="8 Departments"
            subtitle="From diabetes management to cancer screening — all specialties available under one roof at Sai Shree Polyclinic, Cuttack."
          />
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = ICONS[service.icon] || Activity;
            return (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} Icon={Icon} />
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-outline inline-flex">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
}: {
  service: (typeof services)[0];
  Icon: React.ElementType;
}) {
  const waUrl = getWhatsAppUrl(
    `Hello ${clinic.name}, I'd like to book an appointment for ${service.name}.`
  );
  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-500 flex flex-col justify-end h-[280px] md:h-[320px] cursor-default"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/images/specialties/${service.slug}.webp`}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:bg-black/30" />
      </div>

      {/* Glass Effect Content Container */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl p-4 m-3 flex flex-col gap-2">
        {/* Availability & Icon Row */}
        <div className="flex justify-between items-center mb-1">
          {service.doctorAvailable ? (
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-green-400" />
              <span className="text-[11px] font-semibold text-green-400">Doctor Available</span>
            </div>
          ) : (
            <div />
          )}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm"
          >
            <Icon size={14} className="text-white" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.conditions.slice(0, 2).map((c) => (
            <span
              key={c}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/20"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <div>
          <h3
            className="font-display font-bold text-lg text-white mb-1 leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {service.name}
          </h3>
          <p className="text-xs text-gray-200 leading-relaxed line-clamp-2">{service.shortDesc}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-2">
          <Link
            href={`/services/${service.slug}`}
            className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            Learn More
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-white text-black hover:bg-opacity-90 transition-all duration-200"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
