import HeroSection from "@/components/sections/HeroSection";
import CardsSection from "@/components/sections/CardsSection";
import CountriesSection from "@/components/sections/CountriesSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import FaqSection from "@/components/sections/FaqSection";
import PricingSection from "@/components/sections/PricingSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CardsSection />
      <CountriesSection />
      <ReferencesSection />
      <FaqSection />
      <PricingSection />
    </div>
  );
}