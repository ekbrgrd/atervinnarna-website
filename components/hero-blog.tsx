export default function HeroBlog() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-quicksand text-slate-100 mb-4">Upptäck våra bästa tips om återvinning</h1>
            <p className="text-xl text-slate-400 mb-8">
              Lär dig allt om hållbarhet, källsortering och hur vår tjänst hjälper dig att bidra till en grönare framtid, direkt från ditt hem.
            </p>
            {/* Subscribe form */}
            {/*  <form>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md">
                <input
                  type="email"
                  className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 text-white placeholder-slate-500 mb-2 sm:mb-0 sm:mr-2"
                  placeholder="Din E-post…"
                  aria-label="Din E-post"
                />
                <button className="btn text-white bg-green-600 hover:bg-green-700">Prenumerera</button>
              </div>
              
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
