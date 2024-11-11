import Image from "next/image";
import ServicesImage01 from "@/public/images/services-01.jpg";
import ServicesImage02 from "@/public/images/services-02.jpg";
import ServicesImage03 from "@/public/images/services-03.jpg";
import ServicesImage04 from "@/public/images/services-04.jpg";

export default function ServicesContent() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Sections */}
          <div className="max-w-xl mx-auto md:max-w-none space-y-20">
            {/* Overview */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-quicksand mb-4">Översikt</h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  Återvinnarna UF erbjuder en innovativ tjänst som värnar om miljön och sparar tid för kunderna. Återvinnarna tar hand om hushållssortering som
                  plast, glas och kartong, samt tar hand om det omständliga och tidskrävande momentet att åka till återvinningscentralen.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  {/* Recycling on beach */}
                  <Image className="mx-auto md:max-w-none" src={ServicesImage01} width={540} height={405} alt="Recycling person" />
                </div>
              </div>
            </div>

            {/* Box */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-quicksand mb-4">Lådan</h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  Det enda som krävs från kunden är att lägga sin sortering i den rymliga utomhuslåda som ingår i startavgiften, så kommer vi och hämtar
                  sorteringen direkt från hushållet. Utomhuslådan har dimensionerna 116x55x43 (cm), och sorteringen hämtas från en bil med släp.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  {/* Lådan bild */}
                  <Image className="mx-auto md:max-w-none" src={ServicesImage02} width={540} height={405} alt="Our recycling box" />
                </div>
              </div>
            </div>

            {/* Sustainable */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-quicksand mb-4">Hållbart</h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  I stället för att alla hushåll åker med en bil var och lämnar sorteringen hämtar vi allt med en enda bil. Utsläppen av avgaser från bilar
                  minskar därför samtidigt som vi engagerar fler att sortera.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  {/* Mushroom blog post image */}
                  <Image className="mx-auto md:max-w-none" src={ServicesImage03} width={540} height={405} alt="mushroom" />
                </div>
              </div>
            </div>

            {/* Subscription */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-quicksand mb-4">Abonnemangsbaserat</h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  Tjänsten riktar sig till hus i förorter till Stockholm, där återvinningscentralerna ligger med ett avstånd från bostaden som gör att det är
                  för jobbigt att ta sig dit till fots. Tjänsten betalas som en månadsprenumeration där startavgiften som inkluderar utomhuslådan är 499 kr.
                  Kostnaden per månad varierar beroende på antalet upphämtningar.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10" aria-hidden="true"></div>
                  {/* Home hero image */}
                  <Image className="mx-auto md:max-w-none" src={ServicesImage04} width={540} height={405} alt="Person recylcing" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="h4 font-quicksand text-slate-800 mb-4">Kontakta oss</h2>
              <p className="mb-8">
                Har du frågor eller funderingar? Vi hör gärna från dig! Du kan nå oss på{" "}
                <a href="mailto:support@atervinnarna.se" className="underline">
                  support@atervinnarna.se
                </a>
                , eller så kan du följa vår resa på våra sociala medier för att se hur vi utvecklar vår tjänst och vårt företag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
