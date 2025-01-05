import { HeroSection } from "@/app/components/HeroSection";
import { FeaturesSection } from "@/app/components/FeaturesSection";
import { SimulationSection } from "@/app/components/SimulationSection";
import { HowToUseSection } from "@/app/components/HowToUseSection";
import { ExampleSection } from "@/app/components/ExampleSection";
import { CallToActionSection } from "@/app/components/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SimulationSection />
      <HowToUseSection />
      <ExampleSection />
      <CallToActionSection />
    </>
  );
}
