import { HeroSection } from "@/app/components/HeroSection";
import { FeaturesSection } from "@/app/components/FeaturesSection";
import { SimulationSection } from "@/app/components/SimulationSection";
import { HowToUseSection } from "@/app/components/HowToUseSection";
import { CallToActionSection } from "@/app/components/CallToActionSection";
import { InvestmentChart } from "./components/InvestmentChart";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SimulationSection />
      <HowToUseSection />
      <InvestmentChart />
      <CallToActionSection />
    </>
  );
}
