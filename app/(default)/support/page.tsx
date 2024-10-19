export const metadata = {
  title: "Support - Återvinnarna",
  description: "Få svar på dina frågor och funderingar om vår återvinningstjänst.",
};

import Hero from "@/components/hero-support";
import Content from "./content";
import Faqs from "@/components/faqs";

export default function Support() {
  const faqs = [
    {
      title: "Hur fungerar er återvinningstjänst?",
      content:
        "Vi erbjuder en enkel abonnemangstjänst för upphämtning av återvinning. Du får en återvinningslåda från oss, som du kan placera på din uppfart eller där det passar bäst. När lådan är full kommer vi och hämtar den, enligt det schema du valt. Vi ser till att din återvinning tas om hand på rätt sätt.",
    },
    {
      title: "Hur ofta kan jag få återvinningen upphämtad?",
      content:
        "Vi erbjuder olika abonnemangsplaner baserat på hur ofta du vill ha upphämtning. Du kan välja mellan upphämtning en gång i månaden, varannan vecka eller varje vecka. Våra flexibla paket gör det lätt att anpassa tjänsten efter dina behov.",
    },
    {
      title: "Vad kan jag lägga i återvinningslådan?",
      content:
        "Du kan lägga papper, plast, metall, glas och kartong i våra återvinningslådor. För elektronik, batterier eller farligt avfall erbjuder vi tilläggstjänster. Kontakta oss om du har frågor kring specifika material!",
    },
    {
      title: "Vad händer om jag har mer återvinning än vad som får plats i lådan?",
      content:
        "Om du regelbundet har mer återvinning än vad som ryms i lådan, rekommenderar vi att du uppgraderar till en större låda eller lägger till en extra låda till ditt abonnemang. Du kan också boka en extra upphämtning om det behövs.",
    },
    {
      title: "Hur fungerar er prissättning?",
      content:
        "Vi har olika abonnemangsplaner beroende på hur ofta du vill att vi hämtar din återvinning. Priserna börjar från [pris] för en månatlig upphämtning och varierar beroende på vilket paket du väljer. Du kan också lägga till extra tjänster om du behöver mer än standardupphämtning.",
    },
    {
      title: "Vad händer om jag vill ändra mitt abonnemang?",
      content:
        "Om du vill ändra ditt abonnemang, till exempel frekvensen av upphämtningar eller storleken på din låda, är det enkelt att uppdatera dina preferenser. Kontakta oss så hjälper vi dig att justera abonnemanget efter dina behov.",
    },
    {
      title: "Hur gör jag om jag vill säga upp mitt abonnemang?",
      content:
        "Du kan när som helst säga upp ditt abonnemang genom att kontakta oss. Vi ber om minst 30 dagars uppsägningstid för att säkerställa att alla upphämtningar och leveranser hanteras korrekt innan avslut.",
    },
    {
      title: "Erbjuder ni upphämtning av större föremål eller elektronik?",
      content:
        "Ja, vi erbjuder tilläggstjänster för att hämta upp större föremål som möbler eller elektronik. Kontakta oss för mer information och priser kring dessa tillägg.",
    },
    {
      title: "Vad gör ni med återvinningen efter att ni hämtat den?",
      content:
        "Vi samarbetar med certifierade återvinningsstationer där allt material sorteras och behandlas på ett hållbart sätt. Vårt mål är att så mycket som möjligt återvinns och återanvänds för att minska miljöpåverkan.",
    },
    {
      title: "Vilka områden täcker ni?",
      content:
        "Vi erbjuder för närvarande vår tjänst inom Bromma, Stockholm. Om du bor utanför detta område kan du kontakta oss, så ser vi om det är möjligt att utöka vårt verksamhetsområde.",
    },
    {
      title: "Hur kontaktar jag er om jag har fler frågor?",
      content:
        "Om du har fler frågor eller behöver hjälp, är du alltid välkommen att kontakta oss via e-post på [emailadress]. Du kan också följa oss på sociala medier för uppdateringar och nyheter!",
    },
  ];

  return (
    <>
      <Hero />
      <Content />
      <Faqs faqs={faqs} />
    </>
  );
}
