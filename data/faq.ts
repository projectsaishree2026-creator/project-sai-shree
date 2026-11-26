import faqData from "@/content/faq.json";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Visiting" | "Appointments" | "Services" | "Billing" | "Consultations";
}

/** Ordered by how often patients ask — the homepage shows the first 8. */
export const faqs = faqData as FAQ[];
