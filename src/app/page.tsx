// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import WhySection from "@/components/sections/WhySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WhySection />
    </>
  );
}
