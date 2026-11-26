import testimonialsData from "@/content/testimonials.json";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  specialty: string;
  initials: string;
  color: string;
}

export const testimonials = testimonialsData as Testimonial[];
