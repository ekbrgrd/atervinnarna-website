export const metadata = {
  title: "Priser - Återvinnarna",
  description: "Se våra priser för hantering av återvinning.",
};

import Hero from "@/components/hero-pricing";
import CtaPricing from "@/components/cta-pricing";
import Features from "@/components/features-pricing";
import FeaturesTable from "@/components/features-table";
import Cta from "@/components/cta-dark";

export default function Pricing() {
  return (
    <>
      <Hero />
      <CtaPricing />
      <Features />
      <FeaturesTable />
      {/* <Faqs faqs={[]} /> */}
      <Cta />
    </>
  );
}
