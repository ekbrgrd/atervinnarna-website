export const metadata = {
  title: "Om oss - Återvinnarna",
  description: "Läs mer om Återvinnarna och vårt arbete för en hållbar framtid.",
};

import Hero from "@/components/hero-about";
import Stats from "@/components/stats-02";
import Content from "./content";
import TeamMembers from "@/components/team-members";

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
