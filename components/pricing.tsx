import PricingTables from "./pricing-tables";

export default function Pricing() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-1/3 lg:h-2/3" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-quicksand text-slate-100">Hitta abonnemangsplanen som passar dig bäst</h2>
          </div>

          <PricingTables />
        </div>
      </div>
    </section>
  );
}
