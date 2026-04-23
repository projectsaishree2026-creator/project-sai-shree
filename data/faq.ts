export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What are the clinic timings?",
    answer:
      "Sai Shree Polyclinic is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays. However, emergency consultations can be arranged by calling us directly.",
    category: "General",
  },
  {
    id: "2",
    question: "Do I need to book an appointment in advance?",
    answer:
      "While walk-ins are welcome, we strongly recommend booking an appointment to reduce waiting time. You can book via our website, WhatsApp, or by calling +91 70085 12773.",
    category: "Appointments",
  },
  {
    id: "3",
    question: "Which specialties are available at Sai Shree Polyclinic?",
    answer:
      "We offer 8 specialties: Endocrinology (Diabetes/Hormones), Neurology (Brain & Nerves), Pulmonology (Lungs), Gastroenterology (Digestive), Dental, Gynecology, Urology, and Oncology (Cancer Screening).",
    category: "Services",
  },
  {
    id: "4",
    question: "Is the clinic equipped with modern diagnostic facilities?",
    answer:
      "Yes. Sai Shree Polyclinic has an in-house diagnostic lab, digital X-ray, ultrasound, ECG, spirometry, and other modern equipment to ensure quick and accurate diagnosis.",
    category: "Facilities",
  },
  {
    id: "5",
    question: "What payment methods are accepted?",
    answer:
      "We accept cash, all major UPI apps (PhonePe, GPay, Paytm), debit cards, and credit cards. Insurance-linked billing support is available for select insurance providers.",
    category: "Billing",
  },
  {
    id: "6",
    question: "Can I consult a doctor via WhatsApp or phone?",
    answer:
      "For initial queries and appointment booking, you can reach us on WhatsApp at +91 70085 12773. In-person consultation is recommended for diagnosis and treatment.",
    category: "Consultations",
  },
  {
    id: "7",
    question: "Is parking available near the clinic?",
    answer:
      "Yes, parking space is available near the clinic on Ring Road, Kathagola. Our location near Shree Maa makes it easily accessible from all parts of Cuttack.",
    category: "General",
  },
  {
    id: "8",
    question: "How do I get a second opinion for a diagnosis?",
    answer:
      "Our multi-specialty setup allows for cross-department consultations. You can request a second opinion from any of our specialist doctors with your existing reports and we will review them.",
    category: "Consultations",
  },
];
