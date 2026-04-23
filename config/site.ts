import { clinic } from "@/data/clinic";

export const siteConfig = {
  name: clinic.name,
  url: "https://saishreepolyclinic.com",
  description: clinic.description,
  keywords: [
    "best polyclinic in Cuttack",
    "multi-specialty clinic Cuttack",
    "best doctors in Cuttack",
    "diabetes doctor Cuttack",
    "neurology clinic Odisha",
    "dental clinic Cuttack",
    "gynecologist Cuttack",
    "Sai Shree Polyclinic",
    "clinic near me Cuttack",
    "endocrinologist Odisha",
  ],
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "#",
    github: "#",
  },
};

export const metaDefaults = {
  title: {
    default: `${clinic.name} | Advanced Multi-Specialty Care in Cuttack`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: siteConfig.keywords,
  authors: [{ name: clinic.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: clinic.name,
    description: clinic.description,
    siteName: clinic.name,
  },
};
