import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CtaBanner } from "@/components/cta-banner";
import { GalleryPreview } from "@/components/gallery-preview";
import { HeroSection } from "@/components/hero-section";
import { ServicesPreview } from "@/components/services-preview";
import { TestimonialSection } from "@/components/testimonial-section";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseSection />
      <GalleryPreview />
      <TestimonialSection />
      <ContactSection />
      <CtaBanner />
    </>
  );
}
