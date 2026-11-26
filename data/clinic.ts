import clinicData from "@/content/clinic.json";

/**
 * Clinic details (NAP etc.) are edited from the admin website editor (/admin) and stored in
 * content/clinic.json. The NAP must match the Google Business Profile exactly.
 */
export type Clinic = typeof clinicData;
export const clinic: Clinic = clinicData;

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
