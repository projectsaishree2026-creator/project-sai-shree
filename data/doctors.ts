export interface Doctor {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  /** Role noun used in titles and schema, e.g. "Neurologist" */
  role: string;
  /** <title>, ≤ 60 characters */
  seoTitle: string;
  /** Meta description, 140–158 characters */
  metaDescription: string;
  specialty: string;
  specialtySlug: string;
  experience: string;
  bio: string;
  available: string;
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
    id: "dr-pratha-apramita",
    slug: "dr-pratha-apramita",
    name: "Dr. Pratha Apramita",
    qualification: "MBBS, MS (Gynecology & Obstetrics)",
    role: "Gynaecologist",
    seoTitle: "Dr. Pratha Apramita, Gynaecologist in Cuttack",
    metaDescription:
      "Dr. Pratha Apramita (MS Obstetrics & Gynaecology) offers pregnancy, PCOS and women's health care at Sai Shree Polyclinic, Cuttack. Tue, Thu & Sat. Book now.",
    specialty: "Gynecology",
    specialtySlug: "gynecology",
    experience: "9 Years",
    bio: "Dr. Apramita is a compassionate gynecologist dedicated to women's health at every stage of life, from adolescence to menopause.",
    available: "Tue, Thu, Sat",
    languages: ["Odia", "Hindi"],
    image: "/images/doctors/dr-pratha-apramita.webp",
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
    id: "dr-niramaya-madhual",
    slug: "dr-niramaya-madhual",
    name: "Dr. Niramaya Madhual",
    qualification: "MBBS, MS (O&G)",
    role: "Gynaecologist & IVF Specialist",
    seoTitle: "Dr. Niramaya Madhual, Gynaecologist & IVF in Cuttack",
    metaDescription:
      "Dr. Niramaya Madhual (MS O&G), laparoscopic surgeon with a fellowship in reproductive medicine, sees patients at Sai Shree Polyclinic, Cuttack. Book now.",
    specialty: "Gynecology & IVF",
    specialtySlug: "gynecology",
    experience: "10+ Years",
    bio: "Dr. Madhual is a highly skilled Cosmetic Gynecologist and Laparoscopic Surgeon. She is a Fellowship trained specialist in Reproductive Medicine, and serves as an IVF Head and Asst Prof (O&G).",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/niramaya-madhual.webp",
  },
];

/** Doctors who practise in the department with the given service slug. */
export function getDoctorsForService(serviceSlug: string) {
  return doctors.filter((d) => d.specialtySlug === serviceSlug);
}
