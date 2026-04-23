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
}

export const doctors: Doctor[] = [
  {
    id: "dr-rajesh-Sahu",
    slug: "dr-rajesh-Sahu",
    name: "Dr. Sandeep Kumar Sahu",
    qualification: "MBBS, MD (Medicine), DM (Endocrinology)",
    specialty: "Endocrinology",
    specialtySlug: "endocrinology",
    experience: "12 Years",
    bio: "Dr. Sahu is a leading endocrinologist with over 12 years of experience managing complex metabolic and hormonal disorders.",
    available: "Mon, Wed, Fri",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-rajesh-Sahu.webp",
  },
  {
    id: "dr-priya-nanda",
    slug: "dr-priya-nanda",
    name: "Dr. Priya Nanda",
    qualification: "MBBS, MS (Gynecology & Obstetrics)",
    specialty: "Gynecology",
    specialtySlug: "gynecology",
    experience: "9 Years",
    bio: "Dr. Nanda is a compassionate gynecologist dedicated to women's health at every stage of life, from adolescence to menopause.",
    available: "Tue, Thu, Sat",
    languages: ["Odia", "Hindi"],
    image: "/images/doctors/dr-priya-nanda.webp",
  },
  {
    id: "dr-suresh-Das",
    slug: "dr-suresh-Das",
    name: "Dr. Manasi Das",
    qualification: "MBBS, MD (Neurology), DM",
    specialty: "Neurology",
    specialtySlug: "neurology",
    experience: "15 Years",
    bio: "A highly experienced neurologist, Dr. Das specializes in epilepsy, stroke rehabilitation, and movement disorders.",
    available: "Mon, Thu",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-suresh-Das.webp",
  },
  {
    id: "dr-anita-das",
    slug: "dr-anita-das",
    name: "Dr. Abhas Dash",
    qualification: "BDS, MDS (Conservative Dentistry)",
    specialty: "Dental",
    specialtySlug: "dental",
    experience: "8 Years",
    bio: "Dr. Das offers a gentle approach to dental care, specializing in restorative and cosmetic dentistry for all age groups.",
    available: "Mon–Sat",
    languages: ["Odia", "Hindi"],
    image: "/images/doctors/dr-anita-das.webp",
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
    available: "Tue, Wed, Fri",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-Asutosh-Rout.webp",
  },
  {
    id: "dr-meera-singh",
    slug: "dr-meera-singh",
    name: "Dr. Meera Singh",
    qualification: "MBBS, MS (General Surgery), MCh (Oncology)",
    specialty: "Oncology",
    specialtySlug: "oncology",
    experience: "11 Years",
    bio: "Dr. Singh is a skilled oncologist providing early detection screenings and coordinating comprehensive cancer care plans.",
    available: "Wed, Sat",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-meera-singh.webp",
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
    available: "Mon, Wed, Fri",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-suryakanta-parida.webp",
  },
  {
    id: "dr-ramesh-nayak",
    slug: "dr-ramesh-nayak",
    name: "Dr. Ramesh Nayak",
    qualification: "MBBS, MS, MCh (Urology)",
    specialty: "Urology",
    specialtySlug: "urology",
    experience: "16 Years",
    bio: "Dr. Nayak is a highly skilled urologist specializing in advanced minimally invasive surgeries and comprehensive urological care.",
    available: "Tue, Thu, Sat",
    languages: ["Odia", "Hindi", "English"],
    image: "/images/doctors/dr-ramesh-nayak.webp",
  },
];
