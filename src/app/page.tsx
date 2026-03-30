// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
    </>
  );
}
