"use client";

import AboutSection from "../components/sections/AboutSection";
import CTASection from "../components/sections/CTASection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
