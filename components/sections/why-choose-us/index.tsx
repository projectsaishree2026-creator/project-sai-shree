import {
  Building2,
  Stethoscope,
  Microscope,
  IndianRupee,
  PhoneCall,
  ClipboardList,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Stagger, StaggerItem } from "@/components/animations";

const reasons = [
  {
    icon: Building2,
    title: "All specialties under one roof",
    desc: "No need to travel across the city. 8 specialist departments available in one convenient location in Cuttack.",
  },
  {
    icon: Stethoscope,
    title: "Experienced specialist doctors",
    desc: "Our doctors are MD/MS/DM qualified specialists with an average of 10+ years of experience in their fields.",
  },
  {
    icon: Microscope,
    title: "Modern medical equipment",
    desc: "Digital X-ray, ultrasound, ECG, spirometry, and a fully equipped diagnostic lab for accurate results.",
  },
  {
    icon: IndianRupee,
    title: "Affordable, transparent pricing",
    desc: "Quality healthcare at fair prices. No hidden fees. Insurance-linked billing supported for select providers.",
  },
  {
    icon: PhoneCall,
    title: "Easy appointment booking",
    desc: "Book via our website, WhatsApp, or phone. Walk-ins welcome — booking ahead keeps your waiting time short.",
  },
  {
    icon: ClipboardList,
    title: "Personalised treatment plans",
    desc: "Every patient is unique. We create customized care plans based on your specific health needs and lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & hygienic environment",
    desc: "We follow strict hygiene protocols and infection control standards for the safety of every patient and staff.",
  },
  {
    icon: Clock,
    title: "Long hours for your convenience",
    desc: "Open Monday to Saturday, 9 AM to 7 PM. We work around your schedule so you never miss a consultation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="frame section bg-white">
      <div className="container-x">
        <SectionHeader
          index={4}
          eyebrow="Why Sai Shree"
          meta="8 reasons patients return"
          title="Healthcare you can"
          titleHighlight="trust and rely on."
          subtitle="Clinical excellence with patient-first care — so every visit feels clear, calm and well looked after."
        />

        <Stagger className="mt-14 md:mt-20 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <StaggerItem
              key={item.title}
              className="group relative border-b border-r border-line p-7 md:p-8 transition-colors hover:bg-paper"
            >
              <div className="flex items-center justify-between">
                <span className="label-mono text-[0.6875rem] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <item.icon size={22} className="text-brand-500" strokeWidth={1.75} />
              </div>
              <h3 className="mt-12 font-display text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{item.desc}</p>
              <span
                className="absolute left-0 top-0 h-[2px] w-0 bg-brand-500 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
