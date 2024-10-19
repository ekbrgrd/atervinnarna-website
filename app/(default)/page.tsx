export const metadata = {
  title: "Hem - Återvinnarna",
  description: "Välkommen till Återvinnarna! Vi erbjuder en enkel och hållbar lösning för återvinning.",
};

import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features03 from "@/components/features-home-03";
import PricingSection from "@/components/pricing";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      {/* <Features /> */}
      {/* <Features02 /> */}
      <Features03 />
      {/* <Target /> */}
      <PricingSection />
      <Cta />
    </>
  );
}
