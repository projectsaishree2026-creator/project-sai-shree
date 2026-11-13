export interface Doctor {
  id: string;
  slug: string;
  name: string;
  /** Degrees as printed by the doctor. Omit until confirmed — never guess. */
  qualification?: string;
  /** Role noun used in titles and schema, e.g. "Neurologist" */
  role: string;
  /** <title>, ≤ 60 characters */
  seoTitle: string;
  /** Meta description, 140–158 characters */
  metaDescription: string;
  specialty: string;
  specialtySlug: string;
  /** e.g. "12 Years". Omit until confirmed — the UI hides it. */
  experience?: string;
  bio: string;
  available: string;
  /** Consultation languages. Leave empty until confirmed — the UI hides it. */
  languages: string[];
  image: string;
  /** Optional personal/profile website. If absent the "Visit Website" button is hidden. */
  website?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-sandeep-kumar-sahu",
    slug: "dr-sandeep-kumar-sahu",
    name: "Dr. Sandeep Kumar Sahu",
    qualification: "MBBS, MD (Medicine), DM (Endocrinology)",
    role: "Endocrinologist",
    seoTitle: "Dr. Sandeep Kumar Sahu, Endocrinologist in Cuttack",
    metaDescription:
      "Dr. Sandeep Kumar Sahu (MD, DM Endocrinology) treats diabetes, thyroid and hormone disorders at Sai Shree Polyclinic, Cuttack. 12 yrs experience. Book now.",
    specialty: "Endocrinology",
    specialtySlug: "endocrinology",
    experience: "12 Years",
    bio: "Dr. Sahu is a leading endocrinologist with over 12 years of experience managing complex metabolic and hormonal disorders.",
    available: "Mon, Wed, Fri",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-sandeep-kumar-Sahu-1.webp",
    website: "https://www.drsandeepkumarsahu.com/",
  },
  {
    id: "dr-deepa-sethi",
    slug: "dr-deepa-sethi",
    name: "Dr. Deepa Sethi",
    role: "Gynaecologist & Obstetrician",
    seoTitle: "Dr. Deepa Sethi, Gynaecologist in Cuttack | Sai Shree",
    metaDescription:
      "Dr. Deepa Sethi, Asst. Professor of O&G at SCB Medical College, offers pregnancy, PCOS and fertility care at Sai Shree Polyclinic, Mangalabag, Cuttack. Book.",
    specialty: "Gynecology",
    specialtySlug: "gynecology",
    bio: "Dr. Sethi is an Obstetrician & Gynaecologist and Assistant Professor in the Department of O&G at SCB Medical College & Hospital, Cuttack, and a former Senior Resident at AIIMS. She sees women for pregnancy and high-risk pregnancy care, PCOS, fertility concerns, period problems and menopause.",
    available: "By appointment",
    languages: [],
    image: "/images/doctors/dr-deepa-sethi.webp",
    // TODO: temporary preview URL — replace with the doctor's real domain
    website: "https://drdeepasethi.vercel.app/",
  },
  {
    id: "dr-manasi-Das",
    slug: "dr-manasi-das",
    name: "Dr. Manasi Das",
    qualification: "MBBS, MD (Neurology), DM",
    role: "Neurologist",
    seoTitle: "Dr. Manasi Das, Neurologist in Cuttack | Sai Shree",
    metaDescription:
      "Dr. Manasi Das (MD, DM Neurology) treats migraine, epilepsy, stroke after-care and movement disorders at Sai Shree Polyclinic, Cuttack. 15 yrs. Book a visit.",
    specialty: "Neurology",
    specialtySlug: "neurology",
    experience: "15 Years",
    bio: "A highly experienced neurologist, Dr. Das specializes in epilepsy, stroke rehabilitation, and movement disorders.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-manasi-Das.webp",
    website: "https://www.drmanasidas.com/",
  },
  {
    id: "dr-abhash-dashs",
    slug: "dr-abhas-dash",
    name: "Dr. Abhas Dash",
    qualification: "BDS, MDS (Conservative Dentistry)",
    role: "Dentist",
    seoTitle: "Dr. Abhas Dash, Dentist in Cuttack | Sai Shree Polyclinic",
    metaDescription:
      "Dr. Abhas Dash (BDS, MDS Conservative Dentistry) provides root canal, fillings and cosmetic dental care at Sai Shree Polyclinic, Cuttack. Mon–Sat. Book now.",
    specialty: "Dental",
    specialtySlug: "dental",
    experience: "8 Years",
    bio: "Dr. Dash offers a gentle approach to dental care, specializing in restorative and cosmetic dentistry for all age groups.",
    available: "Mon–Sat",
    languages: ["Odia", "Hindi"],
    image: "/images/doctors/dr-abhash-dash.webp",
    website: "https://www.firstsmiledentalsclinic.com/",
  },
  {
    id: "dr-Asutosh-Rout",
    slug: "dr-asutosh-rout",
    name: "Dr. Asutosh Rout",
    qualification: "MBBS, MD (Pulmonology)",
    role: "Pulmonologist",
    seoTitle: "Dr. Asutosh Rout, Pulmonologist in Cuttack | Sai Shree",
    metaDescription:
      "Dr. Asutosh Rout (MD Pulmonology) treats asthma, COPD and chronic lung conditions at Sai Shree Polyclinic, Cuttack. 10 yrs experience. Spirometry on site.",
    specialty: "Pulmonology",
    specialtySlug: "pulmonology",
    experience: "10 Years",
    bio: "Dr. Rout is an expert in managing chronic respiratory diseases including asthma, COPD, and interstitial lung conditions.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-asutosh-rout-1.webp",
    website: "https://www.drasutoshrout.com/",
  },
  {
    id: "dr-nitya-nutan-misra",
    slug: "dr-nitya-nutan-misra",
    name: "Dr. Nitya Nutan Misra",
    qualification: "MBBS, MS (General Surgery), MCh (Oncology)",
    role: "Oncologist",
    seoTitle: "Dr. Nitya Nutan Misra, Oncologist in Cuttack | Sai Shree",
    metaDescription:
      "Dr. Nitya Nutan Misra (MS, MCh Oncology) offers cancer screening, evaluation and care planning at Sai Shree Polyclinic, Cuttack. 11 yrs experience. Book now.",
    specialty: "Oncology",
    specialtySlug: "oncology",
    experience: "11 Years",
    bio: "Dr. Misra is a skilled oncologist providing early detection screenings and coordinating comprehensive cancer care plans.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-nitya-nutan-misra.webp",
  },
  {
    id: "dr-suryakanta-parida",
    slug: "dr-suryakanta-parida",
    name: "Dr. Suryakanta Parida",
    qualification: "MBBS, MD, DM (Gastroenterology)",
    role: "Gastroenterologist",
    seoTitle: "Dr. Suryakanta Parida, Gastroenterologist in Cuttack",
    metaDescription:
      "Dr. Suryakanta Parida (MD, DM Gastroenterology) treats acidity, IBS, liver and digestive disorders at Sai Shree Polyclinic, Cuttack. 14 yrs. Book now.",
    specialty: "Gastroenterology",
    specialtySlug: "gastroenterology",
    experience: "14 Years",
    bio: "Dr. Parida is a leading gastroenterologist with expertise in diagnosing and treating complex digestive tract and liver disorders.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-Suryakanta-parida-1.webp",
    website: "https://www.drsuryakantaparida.com/",
  },
  {
    id: "dr-soumya-ranjan-behera",
    slug: "dr-soumya-ranjan-behera",
    name: "Dr. Soumya Ranjan Behera",
    qualification: "MBBS, MS, MCh (Urology)",
    role: "Urologist",
    seoTitle: "Dr. Soumya Ranjan Behera, Urologist in Cuttack",
    metaDescription:
      "Dr. Soumya Ranjan Behera (MS, MCh Urology) treats kidney stones, prostate, UTI and bladder problems at Sai Shree Polyclinic, Cuttack. 16 yrs experience. Book.",
    specialty: "Urology",
    specialtySlug: "urology",
    experience: "16 Years",
    bio: "Dr. Behera is a highly skilled urologist specializing in advanced minimally invasive surgeries and comprehensive urological care.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-soumya-ranjan-behera.webp",
  },
  {
    id: "dr-mitanjali-behera",
    slug: "dr-mitanjali-behera",
    name: "Dr. Mitanjali Behera",
    qualification: "MBBS, MD (Medicine), DrNB (Clinical Hematology)",
    role: "Hematologist",
    seoTitle: "Dr. Mitanjali Behera, Hematologist in Cuttack",
    metaDescription:
      "Dr. Mitanjali Behera (MD, DrNB Clinical Hematology) treats anaemia, thalassemia, sickle cell, bleeding disorders and blood cancers at Sai Shree, Cuttack.",
    specialty: "Hematology",
    specialtySlug: "hematology",
    bio: "Dr. Behera is a Consultant Hematologist at SCB Medical College & Hospital, Cuttack, with an MD in Medicine and a DrNB in Clinical Hematology. She sees adults with anaemia, thalassemia, sickle cell disease, bleeding and clotting problems, abnormal blood counts and blood cancers.",
    available: "By appointment",
    languages: [],
    image: "/images/doctors/dr-mitanjali-behera.webp",
    // TODO: temporary preview URL — replace with the doctor's real domain
    website: "https://drmitanjalibehera.vercel.app/",
  },
  {
    id: "dr-jitendra-sarangi",
    slug: "dr-jitendra-sarangi",
    name: "Dr. Jitendra Sarangi",
    qualification: "MS (Orthopedics), DNB, MNAMS, FIOA (Arthroscopy & Arthroplasty)",
    role: "Orthopaedic Surgeon",
    seoTitle: "Dr. Jitendra Sarangi, Orthopaedic Surgeon in Cuttack",
    metaDescription:
      "Dr. Jitendra Sarangi (MS Ortho, DNB, FIOA) treats knee and joint pain, arthritis, sports injuries, fractures and back pain at Sai Shree Polyclinic, Cuttack.",
    specialty: "Orthopaedics",
    specialtySlug: "orthopedics",
    bio: "Dr. Sarangi is an orthopaedic surgeon trained at SCB Medical College, Cuttack, a former Senior Resident in Orthopaedics at SCB MCH and a former Lecturer at SVNIRTAR, Olatpur. He treats joint pain and arthritis, sports and ligament injuries, fractures and back and neck pain, with fellowship training in arthroscopy and joint replacement.",
    available: "Mon–Sat",
    languages: [],
    image: "/images/doctors/dr-jitendra-sarangi.webp",
    // TODO: temporary preview URL — replace with the doctor's real domain
    website: "https://dr-jitendra-sarangi-ruddy.vercel.app/",
  },
  {
    id: "dr-alok-kumar-sahu",
    slug: "dr-alok-kumar-sahu",
    name: "Dr. Alok Kumar Sahu",
    role: "Neurosurgeon",
    seoTitle: "Dr. Alok Kumar Sahu, Neurosurgeon in Cuttack | Sai Shree",
    metaDescription:
      "Dr. Alok Kumar Sahu, neurosurgeon, sees patients with slipped disc, spine problems, head injury, brain tumours and nerve pain at Sai Shree, Mangalabag, Cuttack.",
    specialty: "Neurosurgery",
    specialtySlug: "neurosurgery",
    bio: "Dr. Sahu is a neurosurgeon who sees patients with brain, spine and nerve conditions, including slipped disc, cervical and lumbar spine problems, head injury, brain and spinal tumours, hydrocephalus and trigeminal neuralgia.",
    available: "By appointment",
    languages: [],
    image: "/images/doctors/dr-alok-kumar-sahu.webp",
    // TODO: temporary preview URL — replace with the doctor's real domain
    website: "https://dr-alok-kumar-sahoo-umber.vercel.app/",
  },
];

/** Doctors who practise in the department with the given service slug. */
export function getDoctorsForService(serviceSlug: string) {
  return doctors.filter((d) => d.specialtySlug === serviceSlug);
}
