export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  color: string;
  features: string[];
  conditions: string[];
  doctorAvailable: boolean;
}

export const services: Service[] = [
  {
    id: "endocrinology",
    slug: "endocrinology",
    name: "Endocrinology",
    shortDesc: "Expert care for diabetes, thyroid & hormonal disorders.",
    fullDesc:
      "Our endocrinology department provides comprehensive management of hormonal conditions including diabetes mellitus, thyroid diseases, PCOS, adrenal disorders, and metabolic syndromes. We use the latest diagnostics and personalized treatment plans.",
    icon: "Activity",
    color: "#0EA5E9",
    features: ["HbA1c Testing", "Thyroid Profiling", "Hormone Panel", "Diet Counseling"],
    conditions: ["Type 2 Diabetes", "Hypothyroidism", "PCOS", "Adrenal Disorders"],
    doctorAvailable: true,
  },
  {
    id: "neurology",
    slug: "neurology",
    name: "Neurology",
    shortDesc: "Specialized diagnosis and treatment for brain & nerve conditions.",
    fullDesc:
      "Our neurology department handles complex conditions of the brain, spinal cord, and nervous system. From headache disorders to epilepsy and stroke care, our specialists provide evidence-based treatment with advanced neurological assessments.",
    icon: "Brain",
    color: "#6366F1",
    features: ["EEG Testing", "Nerve Conduction Study", "Stroke Rehab", "Headache Clinic"],
    conditions: ["Epilepsy", "Migraine", "Parkinson's", "Stroke Recovery"],
    doctorAvailable: true,
  },
  {
    id: "pulmonology",
    slug: "pulmonology",
    name: "Pulmonology",
    shortDesc: "Advanced lung & respiratory care for all age groups.",
    fullDesc:
      "Our pulmonology team specializes in diseases of the lungs and respiratory system. We offer spirometry testing, nebulization therapy, and management of chronic respiratory conditions in a modern clinical setting.",
    icon: "Wind",
    color: "#06B6D4",
    features: ["Spirometry", "Nebulization", "Oxygen Therapy", "Allergy Testing"],
    conditions: ["Asthma", "COPD", "Bronchitis", "Sleep Apnea"],
    doctorAvailable: true,
  },
  {
    id: "gastroenterology",
    slug: "gastroenterology",
    name: "Gastroenterology",
    shortDesc: "Complete digestive system care from stomach to colon.",
    fullDesc:
      "We provide expert diagnosis and treatment of all gastrointestinal conditions. Our gastroenterology team offers endoscopic procedures, liver function assessments, and management of chronic digestive disorders.",
    icon: "Zap",
    color: "#F59E0B",
    features: ["Endoscopy", "Colonoscopy", "Liver Function Test", "H. Pylori Test"],
    conditions: ["GERD", "IBS", "Liver Disease", "Peptic Ulcer"],
    doctorAvailable: false,
  },
  {
    id: "dental",
    slug: "dental",
    name: "Dental Clinic",
    shortDesc: "Comprehensive oral health care for your entire family.",
    fullDesc:
      "Our dental clinic offers preventive, restorative, and cosmetic dental treatments. From routine cleanings and fillings to root canals and dental prosthetics, we ensure your smile stays healthy and bright.",
    icon: "Smile",
    color: "#10B981",
    features: ["Teeth Cleaning", "Root Canal", "Teeth Whitening", "Braces"],
    conditions: ["Tooth Decay", "Gum Disease", "Toothache", "Misaligned Teeth"],
    doctorAvailable: true,
  },
  {
    id: "gynecology",
    slug: "gynecology",
    name: "Gynecology",
    shortDesc: "Compassionate women's health care at every life stage.",
    fullDesc:
      "Our gynecology department provides comprehensive women's healthcare including antenatal care, menstrual disorder management, PCOS treatment, and menopause care in a comfortable and private environment.",
    icon: "Heart",
    color: "#EC4899",
    features: ["Antenatal Care", "Ultrasound", "PCOS Management", "Menopause Clinic"],
    conditions: ["PCOS", "Menstrual Disorders", "Pregnancy Care", "Infertility"],
    doctorAvailable: true,
  },
  {
    id: "urology",
    slug: "urology",
    name: "Urology",
    shortDesc: "Expert urinary system care for men and women.",
    fullDesc:
      "Our urology team offers diagnosis and treatment of disorders affecting the urinary tract in both men and women, including kidney stones, urinary infections, and prostate conditions.",
    icon: "Droplets",
    color: "#3B82F6",
    features: ["Kidney Stone Treatment", "Uroflowmetry", "Bladder Scan", "Prostate Check"],
    conditions: ["Kidney Stones", "UTI", "Prostate Enlargement", "Incontinence"],
    doctorAvailable: false,
  },
  {
    id: "oncology",
    slug: "oncology",
    name: "Oncology",
    shortDesc: "Compassionate cancer screening, diagnosis & care support.",
    fullDesc:
      "Our oncology department provides early cancer screening, diagnostic workups, and supportive care planning. We work with regional cancer centers to ensure comprehensive care pathways for all our patients.",
    icon: "Shield",
    color: "#8B5CF6",
    features: ["Cancer Screening", "Tumor Markers", "Biopsy Coordination", "Palliative Care"],
    conditions: ["Breast Cancer", "Colorectal Cancer", "Cervical Cancer", "Oral Cancer"],
    doctorAvailable: true,
  },
];
