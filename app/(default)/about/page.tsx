export const metadata = {
  title: "Om oss - Återvinnarna",
  description: "Läs mer om Återvinnarna och vårt arbete för en hållbar framtid.",
};

import Hero from "@/components/hero-about";
import Stats from "@/components/stats-02";
import Content from "./content";
import Team from "@/components/team";
import TeamMembers from "@/components/team-members";
import Clients from "@/components/clients-02";
import Cta from "@/components/cta-02";

export default function About() {
  return (
    <>
      <Hero />
      <Stats />
      <Content />
      {/* <Team /> */}
      <TeamMembers />
      {/* <Clients /> */}
      {/* <Cta /> */}
    </>
  );
}
