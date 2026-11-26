import servicesData from "@/content/services.json";

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

export const services = servicesData as Service[];

