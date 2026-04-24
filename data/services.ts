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
      "Our Endocrinology Department at Sai Shree Polyclinic, Cuttack offers expert diagnosis and advanced treatment for a wide range of hormonal and metabolic disorders. Led by experienced specialists, we provide comprehensive care for patients across Cuttack, Bhubaneswar, and all of Odisha, ensuring accurate evaluation and long-term health management. We specialize in managing conditions such as diabetes mellitus, thyroid disorders (hypothyroidism, hyperthyroidism), PCOS (polycystic ovary syndrome), adrenal disorders, and metabolic syndromes. Using modern diagnostic techniques and evidence-based treatment protocols, our approach focuses on personalized care tailored to each patient’s needs.Patients searching for the best endocrinology care in Cuttack or Bhubaneswar can rely on our clinic for continuous monitoring, lifestyle guidance, and medication management to achieve optimal hormonal balance and improved quality of life.At Sai Shree Polyclinic, we combine advanced medical expertise with compassionate care, making us a trusted choice for endocrine treatment in Odisha. Whether you need diabetes control, thyroid treatment, or hormonal evaluation, our team is dedicated to delivering effective and patient-friendly solutions. Book your appointment today with our endocrinology specialists in Cuttack and take the first step toward better hormonal health.",
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
      "Our Neurology Department at Sai Shree Polyclinic, Cuttack, led by experienced specialists including Dr. Manasi Das, provides advanced diagnosis and treatment for complex conditions affecting the brain, spinal cord, and nervous system. We serve patients across Cuttack, Bhubaneswar, and all of Odisha, offering expert neurological care with a patient-focused approach.We specialize in managing a wide range of neurological conditions such as headache disorders (including migraines), epilepsy, stroke, nerve disorders, movement disorders, and neurological emergencies. Using advanced neurological assessments, modern diagnostic tools, and evidence-based treatment protocols, we ensure accurate diagnosis and effective long-term management.Patients searching for the best neurologist in Cuttack or Bhubaneswar can trust our clinic for comprehensive care, including early stroke intervention, epilepsy management, and chronic neurological condition treatment. Our goal is to provide timely, precise, and compassionate care to improve patient outcomes and quality of life.At Sai Shree Polyclinic, we combine specialized neurological expertise with modern infrastructure, making us a trusted destination for neurology treatment in Odisha. Whether you are experiencing persistent headaches, seizures, or neurological symptoms, our team is here to guide you with the right care and treatment.Book your appointment today with our neurology specialist in Cuttack and get expert care for your neurological health.",
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
      "Our Pulmonology Department at Sai Shree Polyclinic, Cuttack provides expert care for a wide range of lung and respiratory conditions, serving patients across Cuttack, Bhubaneswar, and all of Odisha. With a focus on accurate diagnosis and effective treatment, our specialists ensure comprehensive respiratory care in a modern clinical environment.We offer advanced services including spirometry testing, nebulization therapy, and management of chronic respiratory diseases such as asthma, COPD (chronic obstructive pulmonary disease), bronchitis, lung infections, and allergic respiratory conditions. Our approach combines latest diagnostic technology with evidence-based treatment plans to help patients breathe better and live healthier lives.Patients looking for the best pulmonologist in Cuttack or Bhubaneswar can rely on our clinic for personalized care, regular monitoring, and long-term management of respiratory conditions. We emphasize early diagnosis, preventive care, and patient education to reduce complications and improve overall lung health.At Sai Shree Polyclinic, we are committed to delivering high-quality respiratory care with compassion and precision, making us a trusted choice for pulmonology treatment in Odisha. Whether you need lung function testing or ongoing care for chronic breathing issues, our team is here to support you at every step.Book your appointment today with our pulmonology specialists in Cuttack and take control of your respiratory health.",
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
      "Our Gastroenterology Department at Sai Shree Polyclinic, Cuttack offers advanced diagnosis and comprehensive treatment for a wide range of digestive system and gastrointestinal disorders. We serve patients across Cuttack, Bhubaneswar, and throughout Odisha, providing expert care in a modern, patient-friendly clinical setting.Our team specializes in managing conditions such as acid reflux (GERD), gastritis, liver diseases, irritable bowel syndrome (IBS), ulcers, constipation, and other chronic digestive disorders. We provide advanced services including endoscopic procedures, liver function assessments, and detailed gastrointestinal evaluations to ensure accurate diagnosis and effective treatment.Patients searching for the best gastroenterologist in Cuttack or Bhubaneswar can trust our clinic for personalized care, early diagnosis, and long-term management of digestive health issues. Our approach focuses on evidence-based treatment, dietary guidance, and preventive care to improve overall digestive wellness.At Sai Shree Polyclinic, we combine modern technology with expert medical care, making us a reliable destination for gastroenterology treatment in Odisha. Whether you are experiencing persistent stomach pain, liver concerns, or digestive discomfort, our team is here to provide the right diagnosis and treatment.Book your appointment today with our gastroenterology specialists in Cuttack and take the first step toward better digestive health.",
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
      "Our Dental Clinic at Sai Shree Polyclinic, Cuttack provides complete oral care with a focus on preventive, restorative, and cosmetic dentistry, serving patients across Cuttack, Bhubaneswar, and all of Odisha. We are committed to helping you maintain a healthy, confident, and bright smile through advanced dental treatments in a safe and hygienic environment.We offer a wide range of services including routine dental check-ups, professional cleaning (scaling), fillings, root canal treatment (RCT), tooth extraction, crowns, bridges, and dental prosthetics. Our clinic also provides cosmetic dental procedures such as teeth whitening and smile enhancement, ensuring both functional and aesthetic results.Patients searching for the best dentist in Cuttack or Bhubaneswar can rely on our clinic for personalized treatment plans, pain-free procedures, and long-term oral health care. We use modern dental technology and high-quality materials to ensure precise diagnosis and effective treatment outcomes.At Sai Shree Polyclinic, we prioritize patient comfort, hygiene, and quality care, making us a trusted destination for dental treatment in Odisha. Whether you need routine dental care or advanced procedures, our team is dedicated to keeping your smile healthy and beautiful.Book your dental appointment today in Cuttack and take the first step toward better oral health and a confident smile.",
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
      "Our Gynecology Department at Sai Shree Polyclinic, Cuttack offers comprehensive and compassionate women’s healthcare services, catering to patients across Cuttack, Bhubaneswar, and all of Odisha. We provide a safe, private, and comfortable environment where women can receive expert medical care at every stage of life.Our services include antenatal (pregnancy) care, menstrual disorder management, PCOS (polycystic ovary syndrome) treatment, infertility evaluation, and menopause care. We focus on early diagnosis, personalized treatment plans, and continuous monitoring to ensure the best possible outcomes for women’s health.Patients searching for the best gynecologist in Cuttack or Bhubaneswar can trust our clinic for professional guidance, preventive care, and advanced treatment options. Our approach combines modern medical practices with a patient-friendly approach, ensuring comfort, privacy, and effective care.At Sai Shree Polyclinic, we are dedicated to supporting women’s health with expert consultation, accurate diagnosis, and holistic care, making us a trusted choice for gynecology services in Odisha. Whether you need routine check-ups, pregnancy care, or treatment for hormonal and reproductive issues, our team is here to help.Book your appointment today with our gynecology specialists in Cuttack and take a confident step toward better women’s health.",
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
      "Our Urology Department at Sai Shree Polyclinic, Cuttack provides expert diagnosis and advanced treatment for a wide range of urinary tract and urological conditions in both men and women. We serve patients across Cuttack, Bhubaneswar, and throughout Odisha, offering reliable care in a modern and patient-friendly clinical environment.We specialize in managing conditions such as kidney stones, urinary tract infections (UTIs), prostate disorders, bladder issues, and male urological conditions. Our services include accurate diagnostic evaluations, preventive care, and personalized treatment plans to ensure effective and long-term relief.Patients searching for the best urologist in Cuttack or Bhubaneswar can trust our clinic for comprehensive care, including early detection and management of urinary problems. We focus on minimizing discomfort, preventing recurrence, and improving overall urinary health through evidence-based medical practices.At Sai Shree Polyclinic, we combine advanced diagnostic techniques with compassionate care, making us a trusted destination for urology treatment in Odisha. Whether you are dealing with kidney stones, urinary infections, or prostate-related concerns, our team is here to provide expert guidance and treatment.Book your appointment today with our urology specialists in Cuttack and get effective care for your urinary health.",
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
      "Our Oncology Department at Sai Shree Polyclinic, Cuttack focuses on early cancer detection, diagnostic evaluation, and supportive care planning, serving patients across Cuttack, Bhubaneswar, and all of Odisha. We are committed to helping patients identify cancer at an early stage and guiding them through the right treatment pathway with care and clarity.We offer cancer screening services, detailed diagnostic workups, and personalized care planning for various types of cancers. Our team works closely with leading regional cancer centers to ensure that patients receive timely referrals, advanced treatment options, and coordinated care when required.Patients searching for cancer screening in Cuttack or oncology consultation in Bhubaneswar can rely on our clinic for accurate assessment, early detection strategies, and continuous medical support. We emphasize preventive screening, early diagnosis, and patient counseling, which are crucial for improving treatment outcomes.At Sai Shree Polyclinic, we provide compassionate, patient-centered oncology support, helping individuals and families navigate their cancer journey with confidence. Whether you need screening, initial evaluation, or guidance for further treatment, our team is here to assist you at every step.Book your appointment today for cancer screening in Cuttack and take a proactive step toward your health and well-being.",
    icon: "Shield",
    color: "#8B5CF6",
    features: ["Cancer Screening", "Tumor Markers", "Biopsy Coordination", "Palliative Care"],
    conditions: ["Breast Cancer", "Colorectal Cancer", "Cervical Cancer", "Oral Cancer"],
    doctorAvailable: true,
  },
];
