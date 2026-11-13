import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, webPage, faqPage } from "@/lib/schema";
import { faqs } from "@/data/faq";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { ServicesSection } from "@/components/sections/services";
import { DoctorsSection } from "@/components/sections/doctors";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { AppointmentSection } from "@/components/sections/appointment";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { DepartmentMarquee } from "@/components/shared/department-marquee";

const META = {
  title: "Multispecialty Polyclinic in Cuttack | Sai Shree Polyclinic",
  description:
    "Sai Shree Polyclinic in Mangalabag, Cuttack: 11 specialist doctors across 11 departments, plus diagnostics and a pharmacy. Mon–Sat 9 AM–7 PM. Book on WhatsApp.",
  path: "/",
  languages: { en: "/", or: "/or" },
};

export const metadata: Metadata = pageMetadata(META);

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(webPage(META.path, META.title, META.description, { type: "WebPage" }), faqPage(faqs.slice(0, 8).map((f) => ({ q: f.question, a: f.answer })), META.path))} />
      <Hero />
      <DepartmentMarquee />
      <Manifesto />
      <ServicesSection />
      <DoctorsSection />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentSection />
      <FAQSection limit={8} />
      <ContactSection />
    </>
  );
}
