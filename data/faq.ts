export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Visiting" | "Appointments" | "Services" | "Billing" | "Consultations";
}

/** Ordered by how often patients ask — the homepage shows the first 8. */
export const faqs: FAQ[] = [
  {
    id: "timings",
    question: "What are the clinic timings? Is the clinic open on Sunday?",
    answer:
      "Sai Shree Polyclinic is open Monday to Saturday from 9:00 AM to 7:00 PM and is closed on Sundays. Emergency consultations can be arranged by calling us directly on +91 70085 12773.",
    category: "Visiting",
  },
  {
    id: "booking",
    question: "Do I need to book an appointment in advance?",
    answer:
      "Walk-ins are welcome, but we recommend booking so you don't have to wait — especially if you are travelling from outside Cuttack. You can book on our website, on WhatsApp, or by calling +91 70085 12773.",
    category: "Appointments",
  },
  {
    id: "location",
    question: "Where is Sai Shree Polyclinic located?",
    answer:
      "We are on Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack, Odisha 753001. The contact page has a map and directions from Cuttack railway station, Badambadi bus stand and Bhubaneswar.",
    category: "Visiting",
  },
  {
    id: "specialties",
    question: "Which specialties are available at Sai Shree Polyclinic?",
    answer:
      "We have 8 specialist departments: Endocrinology (diabetes, thyroid and hormones), Neurology (brain and nerves), Pulmonology (lungs and breathing), Gastroenterology (digestive system and liver), Dental, Gynaecology, Urology, and Oncology (cancer screening and evaluation).",
    category: "Services",
  },
  {
    id: "diagnostics",
    question: "Can I get blood tests and scans done at the clinic?",
    answer:
      "Yes. The clinic has an in-house diagnostic lab, digital X-ray, ultrasound, ECG and spirometry, plus endoscopy and a pharmacy, so most tests your doctor asks for can be done during the same visit.",
    category: "Services",
  },
  {
    id: "confirmation",
    question: "How quickly will my appointment be confirmed?",
    answer:
      "When you book on WhatsApp or through the website during clinic hours, our front desk confirms your appointment within 30 minutes.",
    category: "Appointments",
  },
  {
    id: "payment",
    question: "What payment methods are accepted?",
    answer:
      "We accept cash, all major UPI apps (PhonePe, Google Pay, Paytm), debit cards and credit cards. Insurance-linked billing support is available for select insurance providers.",
    category: "Billing",
  },
  {
    id: "bring",
    question: "What should I bring to my appointment?",
    answer:
      "Bring all previous prescriptions, test reports and scans (even old ones), the medicines you currently take or photos of the strips, and a valid phone number for follow-up. If you are unsure whether to come fasting, ask when you book.",
    category: "Appointments",
  },
  {
    id: "whatsapp",
    question: "Can I consult a doctor via WhatsApp or phone?",
    answer:
      "WhatsApp (+91 70085 12773) is the quickest way to ask questions and book appointments. For diagnosis and treatment, an in-person consultation is recommended so the doctor can examine you properly.",
    category: "Consultations",
  },
  {
    id: "pharmacy",
    question: "Is there a pharmacy at the clinic?",
    answer:
      "Yes. Our in-house medicine shop stocks prescribed medicines, supplements and over-the-counter products, so you can collect your medicines before you leave.",
    category: "Services",
  },
  {
    id: "languages",
    question: "Which languages do the doctors speak?",
    answer:
      "All our doctors speak Odia and Hindi, and most also consult in English. Each doctor's profile lists the languages they speak.",
    category: "Consultations",
  },
  {
    id: "second-opinion",
    question: "How do I get a second opinion for a diagnosis?",
    answer:
      "Bring your existing reports and prescriptions and book with the relevant specialist. Because several specialties work under one roof, cross-department opinions are easy to arrange.",
    category: "Consultations",
  },
  {
    id: "multiple",
    question: "Can I see more than one specialist on the same day?",
    answer:
      "Often, yes — depending on each doctor's schedule that day. Tell us which specialists you need when you book and we will try to arrange the visits together to save you a second trip.",
    category: "Appointments",
  },
  {
    id: "parking",
    question: "Is parking available near the clinic?",
    answer:
      "Yes, parking space is available near the clinic on Kathagola Rd. Our location near Shreema Hospital makes it easily accessible from all parts of Cuttack.",
    category: "Visiting",
  },
  {
    id: "emergency",
    question: "What should I do in a medical emergency?",
    answer:
      "For emergencies such as chest pain, difficulty breathing, signs of stroke, heavy bleeding or loss of consciousness, go to the nearest hospital emergency department immediately. For urgent questions during clinic hours, call +91 70085 12773.",
    category: "Visiting",
  },
];
