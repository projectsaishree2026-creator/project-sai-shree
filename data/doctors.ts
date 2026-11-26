import doctorsData from "@/content/doctors.json";

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
  /** One sentence (~110–130 characters) so every doctor card is the same height. */
  bio: string;
  /** Optional extra detail (credentials, training) shown only on the profile page. */
  about?: string;
  available: string;
  /** Consultation languages. Leave empty until confirmed — the UI hides it. */
  languages: string[];
  image: string;
  /** Optional personal/profile website. If absent the "Visit Website" button is hidden. */
  website?: string;
}

export const doctors = doctorsData as Doctor[];

/** Doctors who practise in the department with the given service slug. */
export function getDoctorsForService(serviceSlug: string) {
  return doctors.filter((d) => d.specialtySlug === serviceSlug);
}
