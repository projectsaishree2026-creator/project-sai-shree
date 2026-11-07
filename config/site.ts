import { clinic } from "@/data/clinic";

/** Single source of truth for the public URL and sharing defaults. */
export const siteConfig = {
  name: clinic.name,
  /** Canonical host. The apex domain redirects here, so every absolute URL uses www. */
  url: "https://www.saishreepolyclinic.com",
  description: clinic.description,
  ogImage: "/og-image.png",
  locale: "en_IN",
};

/** Absolute URL for a site path, e.g. absoluteUrl("/doctors") */
export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
