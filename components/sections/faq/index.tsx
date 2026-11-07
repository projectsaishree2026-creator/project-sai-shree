import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { faqs } from "@/data/faq";
import { clinic } from "@/data/clinic";
import { SectionIndex } from "@/components/shared/section-index";
import { FAQList } from "@/components/sections/faq/faq-list";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  /** Hide the section heading (e.g. when the page hero already introduces FAQs). */
  showHeader?: boolean;
  /** Number of FAQs to show (homepage shows the most common ones). */
  limit?: number;
}

export function FAQSection({ showHeader = true, limit }: FAQSectionProps) {
  const items = (limit ? faqs.slice(0, limit) : faqs).map((f) => ({ q: f.question, a: f.answer }));

  return (
    <section className="frame section bg-paper">
      <div className="container-x">
        {showHeader && <SectionIndex index={7} label="Questions" meta={`${items.length} answers`} />}

        <div className={cn("grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20", showHeader && "mt-14 md:mt-20")}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            {showHeader && (
              <h2 className="display-md">
                Questions, <span className="text-brand-500">answered.</span>
              </h2>
            )}
            <div className={cn("border border-line-strong bg-white p-6 md:p-7", showHeader && "mt-10")}>
              <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink-900">
                Still have a question?
              </p>
              <p className="mt-2 text-ink-500">Our front desk is happy to help during clinic hours.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-secondary btn-sm">
                  <Phone size={14} /> {clinic.phoneDisplay}
                </a>
                <Link href={showHeader ? "/faq" : "/contact"} className="btn-primary btn-sm">
                  {showHeader ? "All FAQs" : "Contact us"} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <FAQList items={items} idPrefix="clinic-faq" />
        </div>
      </div>
    </section>
  );
}
