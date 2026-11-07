import { clinic } from "@/data/clinic";
import type { Doctor } from "@/data/doctors";

/** "Everyday" in the data means every day the clinic is open (it is closed on Sunday). */
export function availabilitySentence(doc: Doctor) {
  return doc.available.toLowerCase() === "everyday"
    ? "every clinic day, Monday to Saturday"
    : doc.available;
}

/** Factual Q&A for a doctor's profile page — built only from confirmed profile data. */
export function getDoctorFaqs(doc: Doctor, conditions: string[]) {
  const list = (items: string[]) =>
    items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}` : items[0] ?? "";

  return [
    {
      q: `Where does ${doc.name} consult in Cuttack?`,
      a: `${doc.name} consults at ${clinic.name}, ${clinic.address}.`,
    },
    {
      q: `On which days is ${doc.name} available?`,
      a: `${doc.name} sees patients on ${availabilitySentence(doc)}. The clinic is open from 9 AM to 7 PM and closed on Sunday, so please book ahead to confirm your slot.`,
    },
    {
      q: `How can I book an appointment with ${doc.name}?`,
      a: `Book on WhatsApp or call ${clinic.phoneDisplay}, or use the booking form on this page. During clinic hours, appointments are confirmed within 30 minutes.`,
    },
    {
      q: `What are ${doc.name}'s qualifications and experience?`,
      a: `${doc.name} holds ${doc.qualification} and has ${doc.experience.toLowerCase()} of experience in ${doc.specialty}.`,
    },
    {
      q: `Which languages does ${doc.name} speak?`,
      a: `${doc.name} consults in ${list(doc.languages)}.`,
    },
    ...(conditions.length
      ? [
          {
            q: `What conditions does ${doc.name} treat?`,
            a: `Common reasons patients see ${doc.name} include: ${list(conditions)}.`,
          },
        ]
      : []),
  ];
}
