// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import WhySection from "@/components/sections/WhySection";
import TestimonySection from "@/components/sections/TestimonySection";
import GallerySection from "@/components/sections/GallerySection";
import ClientsSection from "@/components/sections/ClientsSection";
import ReservationSection from "@/components/sections/ReservationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WhySection />
      <TestimonySection />
      <GallerySection />
      <ClientsSection />
      <ReservationSection />
    </>
  );
}
