export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  /** <title>, ≤ 60 characters */
  seoTitle: string;
  /** Meta description, 140–158 characters */
  metaDescription: string;
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
    shortDesc: "Diabetes, thyroid, PCOS and hormone disorders, managed by a DM endocrinologist.",
    seoTitle: "Diabetes & Thyroid Doctor in Cuttack | Sai Shree Polyclinic",
    metaDescription:
      "Diabetes, thyroid, PCOS and hormone care in Cuttack with Dr. Sandeep Kumar Sahu (DM Endocrinology). HbA1c and thyroid tests on site. Book your visit today.",
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
    shortDesc: "Migraine, epilepsy, stroke follow-up, Parkinson's and nerve problems.",
    seoTitle: "Neurologist in Cuttack | Sai Shree Polyclinic, Mangalabag",
    metaDescription:
      "See neurologist Dr. Manasi Das (DM Neurology, 15 yrs) in Mangalabag, Cuttack for migraine, epilepsy, stroke follow-up and nerve problems. Book today.",
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
    shortDesc: "Asthma, COPD, chronic cough and breathing problems, with spirometry on site.",
    seoTitle: "Pulmonologist & Chest Specialist in Cuttack | Sai Shree",
    metaDescription:
      "Asthma, COPD, bronchitis and breathing problems treated by chest specialist Dr. Asutosh Rout in Cuttack. Spirometry on site. Book a consultation today.",
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
    shortDesc: "Acidity, gastritis, IBS, fatty liver and digestive problems, with endoscopy.",
    seoTitle: "Gastroenterologist in Cuttack | Sai Shree Polyclinic",
    metaDescription:
      "Acidity, GERD, IBS, fatty liver and digestive problems seen by Dr. Suryakanta Parida (DM Gastro) in Mangalabag, Cuttack. Endoscopy available. Book today.",
    icon: "Zap",
    color: "#F59E0B",
    features: ["Endoscopy", "Colonoscopy", "Liver Function Test", "H. Pylori Test"],
    conditions: ["GERD", "IBS", "Liver Disease", "Peptic Ulcer"],
    doctorAvailable: true,
  },
  {
    id: "dental",
    slug: "dental",
    name: "Dental Clinic",
    shortDesc: "Root canal, fillings, cleaning, whitening and braces for the whole family.",
    seoTitle: "Dentist in Mangalabag, Cuttack | Sai Shree Polyclinic",
    metaDescription:
      "Root canal, fillings, cleaning, whitening and family dental care in Mangalabag, Cuttack with Dr. Abhas Dash (MDS Conservative Dentistry). Book a check-up.",
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
    shortDesc: "Pregnancy care, period problems, PCOS, infertility and menopause care.",
    seoTitle: "Gynaecologist in Cuttack | Sai Shree Polyclinic, Mangalabag",
    metaDescription:
      "Pregnancy and high-risk pregnancy care, PCOS, period problems, fertility and menopause with Dr. Deepa Sethi (SCB Medical College) in Mangalabag, Cuttack.",
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
    shortDesc: "Kidney stones, urine infections, prostate and bladder problems in men and women.",
    seoTitle: "Urologist in Cuttack | Sai Shree Polyclinic, Mangalabag",
    metaDescription:
      "Kidney stones, UTI, prostate and bladder problems treated by Dr. Soumya Ranjan Behera (MCh Urology, 16 yrs) in Mangalabag, Cuttack. Book a consultation.",
    icon: "Droplets",
    color: "#3B82F6",
    features: ["Kidney Stone Treatment", "Uroflowmetry", "Bladder Scan", "Prostate Check"],
    conditions: ["Kidney Stones", "UTI", "Prostate Enlargement", "Incontinence"],
    doctorAvailable: true,
  },
  {
    id: "oncology",
    slug: "oncology",
    name: "Oncology",
    shortDesc: "Cancer screening, evaluation, second opinions and care planning.",
    seoTitle: "Cancer Screening & Oncologist in Cuttack | Sai Shree",
    metaDescription:
      "Cancer screening, evaluation and care planning in Cuttack with Dr. Nitya Nutan Misra (MCh Oncology). Breast, cervical, oral and colorectal checks. Book today.",
    icon: "Shield",
    color: "#8B5CF6",
    features: ["Cancer Screening", "Tumor Markers", "Biopsy Coordination", "Palliative Care"],
    conditions: ["Breast Cancer", "Colorectal Cancer", "Cervical Cancer", "Oral Cancer"],
    doctorAvailable: true,
  },
  {
    id: "hematology",
    slug: "hematology",
    name: "Hematology",
    shortDesc: "Anaemia, thalassemia, sickle cell, bleeding and clotting problems and blood cancers.",
    seoTitle: "Hematologist (Blood Specialist) in Cuttack | Sai Shree",
    metaDescription:
      "Anaemia, thalassemia, sickle cell, bleeding disorders and blood cancers seen by Dr. Mitanjali Behera (DrNB Clinical Hematology) in Mangalabag, Cuttack.",
    icon: "Droplet",
    color: "#DC2626",
    features: ["Blood Report Review", "Thalassemia & Sickle Cell Care", "Bleeding & Clotting Evaluation", "Blood Cancer Consultation"],
    conditions: ["Anaemia", "Thalassemia", "Sickle Cell Disease", "Bleeding Disorders"],
    doctorAvailable: true,
  },
  {
    id: "orthopedics",
    slug: "orthopedics",
    name: "Orthopaedics",
    shortDesc: "Knee and joint pain, arthritis, sports injuries, fractures and back or neck pain.",
    seoTitle: "Orthopaedic Doctor in Cuttack | Sai Shree Polyclinic",
    metaDescription:
      "Knee and joint pain, arthritis, sports injuries, fractures and back pain treated by orthopaedic surgeon Dr. Jitendra Sarangi in Mangalabag, Cuttack. Book now.",
    icon: "Bone",
    color: "#EA580C",
    features: ["Joint Pain Assessment", "Sports Injury Care", "Fracture Care", "Digital X-ray"],
    conditions: ["Knee Osteoarthritis", "Back & Neck Pain", "Frozen Shoulder", "Ligament Injuries"],
    doctorAvailable: true,
  },
  {
    id: "neurosurgery",
    slug: "neurosurgery",
    name: "Neurosurgery",
    shortDesc: "Slipped disc, spine problems, head injury, brain and spinal tumours and nerve pain.",
    seoTitle: "Neurosurgeon (Brain & Spine) in Cuttack | Sai Shree",
    metaDescription:
      "Slipped disc, neck and back spine problems, head injury, brain tumours and trigeminal neuralgia: see neurosurgeon Dr. Alok Kumar Sahu in Mangalabag, Cuttack.",
    icon: "BrainCircuit",
    color: "#7C3AED",
    features: ["Spine Consultation", "Scan Review", "Head Injury Follow-up", "Surgical Opinion"],
    conditions: ["Slipped Disc", "Cervical Spondylosis", "Brain Tumours", "Trigeminal Neuralgia"],
    doctorAvailable: true,
  },
];

