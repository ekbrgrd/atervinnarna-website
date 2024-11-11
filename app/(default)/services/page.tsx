export const metadata = {
  title: "Vår tjänst - Återvinnarna",
  description: "Läs mer om vår tjänst och vårt arbete för en hållbar framtid.",
};

import Hero from "@/components/hero-services";
import Content from "./content";
import Cta from "@/components/cta";

export default function About() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <Content />
      {/* <Team /> */}
      {/* <TeamMembers /> */}
      {/* <Clients /> */}
      <Cta />
    </>
  );
}
