import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string) {
  return phone.replace(/(\d{5})(\d{5})/, "$1 $2");
}

export function getWhatsAppUrl(phone: string, message?: string) {
  const encoded = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ""}`;
}

export function getCallUrl(phone: string) {
  return `tel:+91${phone}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
