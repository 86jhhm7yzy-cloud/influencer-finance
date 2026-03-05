import HeroSection from "@/components/sections/HeroSection";
import CardsSection from "@/components/sections/CardsSection";
import CountriesSection from "@/components/sections/CountriesSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import FaqSection from "@/components/sections/FaqSection";
import PricingSection from "@/components/sections/PricingSection";

export default function HomePage() {
  return (
    <div>
      <div id="hero"><HeroSection /></div>
      <div id="cards"><CardsSection /></div>
      <div id="countries"><CountriesSection /></div>
      <div id="references"><ReferencesSection /></div>
      <div id="faq" style={{ scrollMarginTop: "80px" }}><FaqSection /></div>
      <div id="pricing" style={{ scrollMarginTop: "80px" }}><PricingSection /></div>
    </div>
  );
}