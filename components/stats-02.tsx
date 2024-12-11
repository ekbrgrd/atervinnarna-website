export default function Stats02() {
  return (
    <section className="-translate-y-1/2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-600 py-3 sm:py-6 shadow-xl">
            <ul className="flex">
              <li className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-green-500 after:hidden sm:after:block last:after:hidden">
                <div className="text-4xl md:text-5xl font-quicksand font-bold text-white mb-2">7</div>
                <div className="text-xs sm:text-sm md:text-base text-green-200 font-medium">Betalande kunder</div>
              </li>
              <li className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-green-500 after:hidden sm:after:block last:after:hidden">
                <div className="text-4xl md:text-5xl font-quicksand font-bold text-white mb-2">1,5 tkr</div>
                <div className="text-xs sm:text-sm md:text-base text-green-200 font-medium">Rest kapital</div>
              </li>
              <li className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-green-500 after:hidden sm:after:block last:after:hidden">
                <div className="text-4xl md:text-5xl font-quicksand font-bold text-white mb-2">6</div>
                <div className="text-xs sm:text-sm md:text-base text-green-200 font-medium">Anställda</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
