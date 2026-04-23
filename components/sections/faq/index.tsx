"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faq";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/animations";

export function FAQSection() {
  const [open, setOpen] = useState<string | null>("1");

  return (
    <section className="section-py bg-white">
      <div className="section-container">
        <FadeUp>
          <div className="mb-12">
            <SectionHeader
              eyebrow="FAQs"
              title="Frequently Asked"
              titleHighlight="Questions"
              subtitle="Everything you need to know about Sai Shree Polyclinic, our services, and booking an appointment."
            />
          </div>
        </FadeUp>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={faq.id} delay={i * 0.06}>
              <div
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  open === faq.id
                    ? "border-primary/30 bg-blue-50/50"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-4 p-5"
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                >
                  <span
                    className={`font-semibold text-sm md:text-base leading-snug ${
                      open === faq.id ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      open === faq.id
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {open === faq.id ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <p className="text-sm text-gray-500 leading-relaxed px-5 pb-5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
