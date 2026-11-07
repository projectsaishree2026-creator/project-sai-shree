import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { graph, breadcrumbList, faqPage } from "@/lib/schema";
import { faqs } from "@/data/faq";
import { FAQSection } from "@/components/sections/faq";
import { PageHero } from "@/components/shared/page-hero";
import { CTABand } from "@/components/shared/cta-band";

const META = {
  title: "FAQs: Timings, Booking & Doctors | Sai Shree Polyclinic",
  description:
    "Answers on timings, appointments, specialties, diagnostics, payments and parking at Sai Shree Polyclinic, Mangalabag, Cuttack. Still unsure? Call or WhatsApp.",
  path: "/faq",
};

export const metadata: Metadata = pageMetadata(META);

export default function FAQPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbList([{ label: "Home", href: "/" }, { label: "FAQ" }], META.path), faqPage(faqs.map((f) => ({ q: f.question, a: f.answer })), META.path))} />
      <PageHero
        kicker="Sai Shree Polyclinic — FAQs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="Help center"
        title={
          <>
            Frequently asked <span className="text-brand-400">questions.</span>
          </>
        }
        description="Got questions? We've got answers. If you can't find what you're looking for, reach us directly."
      />
      <FAQSection showHeader={false} />
      <CTABand />
    </>
  );
}
