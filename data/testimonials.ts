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

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sunita Rath",
    location: "Cuttack",
    rating: 5,
    review:
      "Dr. Nanda is exceptional. She took time to explain everything about my pregnancy. The clinic is very clean and well-maintained. I feel safe here.",
    specialty: "Gynecology",
    initials: "SR",
    color: "#EC4899",
  },
  {
    id: "2",
    name: "Ramesh Mohanty",
    location: "Bhubaneswar",
    rating: 5,
    review:
      "I've been managing my diabetes for 3 years with Dr. Sahu. My sugar levels are finally under control. The staff is warm and professional.",
    specialty: "Endocrinology",
    initials: "RM",
    color: "#0EA5E9",
  },
  {
    id: "3",
    name: "Kavita Panda",
    location: "Cuttack",
    rating: 5,
    review:
      "Got my mother treated for chronic COPD here. Dr. Rout is very thorough and explained everything clearly. The nebulization facility is excellent.",
    specialty: "Pulmonology",
    initials: "KP",
    color: "#06B6D4",
  },
  {
    id: "4",
    name: "Sanjay Behera",
    location: "Cuttack",
    rating: 5,
    review:
      "Best dental clinic in Cuttack! Dr. Das did my root canal and I felt zero pain. Very hygienic setup. Highly recommend for all dental needs.",
    specialty: "Dental",
    initials: "SB",
    color: "#10B981",
  },
  {
    id: "5",
    name: "Priti Mishra",
    location: "Kendrapara",
    rating: 5,
    review:
      "Dr. Das helped my son with his epilepsy treatment. The seizures have reduced significantly. The polyclinic has all facilities under one roof.",
    specialty: "Neurology",
    initials: "PM",
    color: "#6366F1",
  },
  {
    id: "6",
    name: "Debabrata Nayak",
    location: "Cuttack",
    rating: 5,
    review:
      "Excellent multi-specialty clinic. No need to travel to Bhubaneswar anymore. Everything from cardio checkup to dental is available here. Saved time and money.",
    specialty: "General",
    initials: "DN",
    color: "#F59E0B",
  },
];
