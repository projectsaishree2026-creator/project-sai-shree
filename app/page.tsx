import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesSection } from "@/components/sections/services";
import { DoctorsSection } from "@/components/sections/doctors";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { AppointmentSection } from "@/components/sections/appointment";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <DoctorsSection />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
