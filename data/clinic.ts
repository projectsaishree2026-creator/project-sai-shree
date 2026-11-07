export const clinic = {
  name: "Sai Shree Polyclinic",
  tagline: "Advanced Multi-Specialty Care in Cuttack",
  description:
    "Trusted multi-specialty polyclinic offering expert care across 8+ specialties under one roof in Cuttack, Odisha.",
  /** NAP — must match Google Business Profile and every directory listing exactly. */
  address: "Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack, Odisha 753001",
  streetAddress: "Kathagola Rd, near Shreema Hospital, Mangalabag",
  phone: "7008512773",
  phoneDisplay: "+91 70085 12773",
  /** E.164 format for schema.org and tel: links */
  phoneE164: "+917008512773",
  whatsapp: "917008512773",
  email: "saishreepolyclinic@gmail.com",
  hours: "Mon–Sat: 9 AM – 7 PM",
  city: "Cuttack",
  state: "Odisha",
  pincode: "753001",
  /** Google Business Profile (found 28 Oct 2026). Pin coordinates come from the listing. */
  google: {
    placeId: "ChIJ2TOgzagTGToR7Sbpbc3FlhI",
    mapsUrl: "https://maps.google.com/?cid=1339475425292265197",
    reviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJ2TOgzagTGToR7Sbpbc3FlhI",
    writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ2TOgzagTGToR7Sbpbc3FlhI",
  },
  geo: { latitude: 20.4770033, longitude: 85.8854868 },
  /** schema.org openingHours */
  openingHours: "Mo-Sa 09:00-19:00",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Kathagola+Rd,+near+Shreema+Hospital,+Mangalabag,+Cuttack,+Odisha+753001,+Sai+Shree+Poly+Clinic&t=&z=15&ie=UTF8&iwloc=&output=embed",
  stats: {
    patients: "5000+",
    /** Live Google rating — keep in sync with the Google Business Profile (checked 28 Oct 2026: 5.0 from 7 reviews) */
    rating: "5.0",
    reviewCount: "7",
    experience: "10+",
    specialties: "8+",
  },
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
};

/** Google Maps directions to the clinic's exact listing, optionally from a starting point. */
export function directionsUrl(origin?: string) {
  const params = new URLSearchParams({
    api: "1",
    destination: `${clinic.geo.latitude},${clinic.geo.longitude}`,
    destination_place_id: clinic.google.placeId,
  });
  if (origin) params.set("origin", origin);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
