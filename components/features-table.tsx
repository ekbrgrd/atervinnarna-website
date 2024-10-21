import Link from "next/link";
import Tooltip from "@/components/utils/tooltip";

export default function FeaturesTable() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-quicksand text-slate-800">Jämför planerna i detalj</h2>
          </div>

          {/* Tables */}
          <div className="space-y-4 mb-12">
            {/* Table (Tidy Essential) */}
            <div className="overflow-x-auto" data-aos="fade-up">
              <table className="table-auto w-full border-b border-slate-200">
                {/* Table header */}
                <thead>
                  <tr className="text-base sm:text-lg text-slate-800">
                    <th className="text-xl md:text-2xl whitespace-nowrap font-bold font-quicksand text-left pr-2 py-4 min-w-[10rem] md:min-w-[24rem]"></th>
                    <th className="text-bold text-center px-2 py-4">Återvinningsstart</th>
                    <th className="text-bold text-center px-2 py-4">Miljömedveten</th>
                    <th className="text-bold text-center px-2 py-4">Grön livsstil</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Månadsavgift</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Betalas via Swish.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">199kr/mån</td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">349kr/mån</td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">599kr/mån</td>
                  </tr>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Upphämtningar per månad</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Hur ofta vi kommer och hämtar er återvinning.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">1</td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">2</td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">4</td>
                  </tr>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Pris per upphämtning</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Hur ofta vi kommer och hämtar er återvinning.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">199 kr</td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">175 kr</td>
                    <td className="text-sm px-2 py-4 text-center italic text-slate-800">149 kr</td>
                  </tr>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>E-post påminnelse</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Vi skickar en påminnelse via e-post inför varje upphämtning.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                  </tr>{" "}
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>SMS påminnelse</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Vi skickar en påminnelse via SMS inför varje upphämtning. Valfritt.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      {/* <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg> */}
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                  </tr>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Prioriterad kundsupport</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Vi kommer att prioritera frågor och funderingar.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      {/* <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg> */}
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                  </tr>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Personlig rådgivning</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">Tips för hållbarhet och återvinningsoptimering.</div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      {/* <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg> */}
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      {/* <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg> */}
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                  </tr>
                  {/* Row */}
                  <tr className="border-t first:border-t-2 border-slate-200">
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div>Miljöcertifikat</div>
                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">
                            Ett personligt certifikat att dela på sociala medier som bevis på din insatts för miljön.
                          </div>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      {/* <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg> */}
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      {/* <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg> */}
                    </td>
                    <td className="text-sm px-2 py-4 text-center font-medium">
                      <svg className="w-3 h-3 fill-current text-emerald-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link className="btn text-white bg-green-600 hover:bg-green-700 group" href="/request">
              Kom igång{" "}
              <span className="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
