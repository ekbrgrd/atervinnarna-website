import Link from "next/link";

export default function CtaPricing() {
  return (
    <section className="relative">
      {/* Gray background */}
      <div className="absolute inset-0 top-auto bg-slate-100 pointer-events-none -z-10 h-1/2" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-12 md:mt-16">
          <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg p-6">
            <div className="absolute top-0 left-0 ml-6 -mt-4">
              <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">Viktigt</div>
            </div>
            <div className="h4 font-quicksand text-center lg:text-left mb-4 lg:mb-0">Kampanj! Just nu är startavgiften 0 kr, och om du registrerar dig innan jul hämtar vi din julgran!</div>
            <div className="p-3 rounded bg-slate-50">
              <Link className="btn-sm text-white bg-green-600 hover:bg-green-700 group" href="/request">
                Redo att återvinna?{" "}
                <span className="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
