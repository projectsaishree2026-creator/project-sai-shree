import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import type { AppointmentInput } from "@/lib/validations";

export function buildAppointmentWhatsAppMessage(data: AppointmentInput) {
  const department = services.find((s) => s.slug === data.department)?.name ?? data.department;
  return `Hello ${clinic.name},

I would like to book an appointment.

*Name:* ${data.name}
*Phone:* ${data.phone}
*Department:* ${department}
*Doctor:* ${data.doctor || "Any available"}
*Preferred Date:* ${data.date}
${data.message ? `*Note:* ${data.message}` : ""}

Please confirm my appointment. Thank you!`;
}

export function getWhatsAppAppointmentUrl(data: AppointmentInput) {
  const message = buildAppointmentWhatsAppMessage(data);
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrl(message?: string) {
  const text = message || `Hello, I would like to know more about ${clinic.name}.`;
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
}
