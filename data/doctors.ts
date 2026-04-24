export interface Doctor {
  id: string;
  slug: string;
  name: string;
  qualification: string;
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
    specialty: "Gynecology",
    specialtySlug: "gynecology",
    experience: "9 Years",
    bio: "Dr. Nanda is a compassionate gynecologist dedicated to women's health at every stage of life, from adolescence to menopause.",
    available: "Tue, Thu, Sat",
    languages: ["Odia", "Hindi"],
    image: "/images/doctors/dr-pratha-apramita.webp",
    website: "#", // TODO: replace with real URL
  },
  {
    id: "dr-manasi-Das",
    slug: "dr-manasi-Das",
    name: "Dr. Manasi Das",
    qualification: "MBBS, MD (Neurology), DM",
    specialty: "Neurology",
    specialtySlug: "neurology",
    experience: "15 Years",
    bio: "A highly experienced neurologist, Dr. Das specializes in epilepsy, stroke rehabilitation, and movement disorders.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-manasi-Das.webp",
    website: "#", // TODO: replace with real URL
  },
  {
    id: "dr-abhash-dashs",
    slug: "dr-abhash-dash",
    name: "Dr. Abhas Dash",
    qualification: "BDS, MDS (Conservative Dentistry)",
    specialty: "Dental",
    specialtySlug: "dental",
    experience: "8 Years",
    bio: "Dr. Das offers a gentle approach to dental care, specializing in restorative and cosmetic dentistry for all age groups.",
    available: "Mon–Sat",
    languages: ["Odia", "Hindi"],
    image: "/images/doctors/dr-abhash-dash.webp",
    website: "https://www.firstsmiledentalsclinic.com/", // TODO: replace with real URL
  },
  {
    id: "dr-Asutosh-Rout",
    slug: "dr-Asutosh-Rout",
    name: "Dr. Asutosh Rout",
    qualification: "MBBS, MD (Pulmonology)",
    specialty: "Pulmonology",
    specialtySlug: "pulmonology",
    experience: "10 Years",
    bio: "Dr. Rout is an expert in managing chronic respiratory diseases including asthma, COPD, and interstitial lung conditions.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-asutosh-rout-1.webp",
    website: "https://www.drasutoshrout.com/", // TODO: replace with real URL
  },
  {
    id: "dr-nitya-nutan-misra",
    slug: "dr-nitya-nutan-misra",
    name: "Dr. Nitya Nutan Misra",
    qualification: "MBBS, MS (General Surgery), MCh (Oncology)",
    specialty: "Oncology",
    specialtySlug: "oncology",
    experience: "11 Years",
    bio: "Dr. Singh is a skilled oncologist providing early detection screenings and coordinating comprehensive cancer care plans.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-nitya-nutan-misra.webp",
    website: "#", // TODO: replace with real URL
  },
  {
    id: "dr-suryakanta-parida",
    slug: "dr-suryakanta-parida",
    name: "Dr. Suryakanta Parida",
    qualification: "MBBS, MD, DM (Gastroenterology)",
    specialty: "Gastroenterology",
    specialtySlug: "gastroenterology",
    experience: "14 Years",
    bio: "Dr. Parida is a leading gastroenterologist with expertise in diagnosing and treating complex digestive tract and liver disorders.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-Suryakanta-parida-1.webp",
    website: "#", // TODO: replace with real URL
  },
  {
    id: "dr-soumya-ranjan-behera",
    slug: "dr-soumya-ranjan-behera",
    name: "Dr. Soumya Ranjan Behera",
    qualification: "MBBS, MS, MCh (Urology)",
    specialty: "Urology",
    specialtySlug: "urology",
    experience: "16 Years",
    bio: "Dr. Nayak is a highly skilled urologist specializing in advanced minimally invasive surgeries and comprehensive urological care.",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-soumya-ranjan-behera.webp",
    website: "#", // TODO: replace with real URL
  },
  {
    id: "dr-niramaya-madhual",
    slug: "dr-niramaya-madhual",
    name: "Dr. Niramaya Madhual",
    qualification: "MBBS, MS (O&G)",
    specialty: "Gynecology & IVF",
    specialtySlug: "gynecology",
    experience: "10+ Years",
    bio: "Dr. Madhual is a highly skilled Cosmetic Gynecologist and Laparoscopic Surgeon. She is a Fellowship trained specialist in Reproductive Medicine, and serves as an IVF Head and Asst Prof (O&G).",
    available: "Everyday",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/niramaya-madhual.webp",
    website: "#", // TODO: replace with real URL
  },
];
