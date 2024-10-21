"use client";

import Link from "next/link";
/* import { useState } from "react";
 */
export default function PricingTables() {
  /*   const [annual, setAnnual] = useState<boolean>(true);
   */
  return (
    <div>
      {/* Pricing toggle */}
      {/* <div className="flex justify-center items-center space-x-4 sm:space-x-7 mb-16">
        <div className="text-sm text-slate-500 font-medium text-right min-w-[8rem]">2 hämtningar/vecka</div>
        <div className="form-switch shrink-0">
          <input type="checkbox" id="toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
          <label className="bg-slate-700" htmlFor="toggle">
            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
            <span className="sr-only">Pay annually</span>
          </label>
        </div>
        <div className="text-sm text-slate-500 font-medium min-w-[8rem]">
          4 hämtningar/vecka <span className="text-emerald-500">(-25%)</span>
        </div>
      </div> */}

      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">
        {/* Pricing table 1 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Återvinningsstart</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-quicksand text-slate-800">199 kr{/* {annual ? "49" : "55"} */}</span>
              <span className="font-medium text-slate-400">/månad</span>
            </div>
            <div className="text-slate-500">Perfekt för hushåll som vill börja göra skillnad.</div>
          </div>
          <div className="font-medium mb-3">I paketet ingår:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Upphämtning 1 ggr/månad</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Påminnelse via e-post inför upphämtning</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Extra upphämtning vid behov mot avgift</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <Link className="btn-sm text-white bg-green-600 hover:bg-green-700 w-full group" href="/request">
              Kom igång{" "}
              <span className="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </Link>
          </div>
        </div>

        {/* Pricing table 2 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">Populärast</div>
          </div>
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Miljömedveten</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-quicksand text-slate-800">349 kr</span>
              <span className="font-medium text-slate-400">/månad</span>
            </div>
            <div className="text-slate-500">För dig som vill ha mer frekvent upphämtning, med extra fördelar.</div>
          </div>
          <div className="font-medium mb-3">Allt från Återvinningsstart, plus:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Upphämtning 2 ggr/månad</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Påminnelse via SMS inför upphämtning</span>
            </li>

            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Prioriterad kundsupport</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <Link className="btn-sm text-white bg-green-600 hover:bg-green-700 w-full group" href="/request">
              Kom igång{" "}
              <span className="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </Link>
          </div>
        </div>

        {/* Pricing table 3 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Grön livsstil</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-quicksand text-slate-800">599 kr</span>
              <span className="font-medium text-slate-400">/månad</span>
            </div>
            <div className="text-slate-500">Maximal service för den miljömedvetna som vill ha allt.</div>
          </div>
          <div className="font-medium mb-3">Allt från Miljömedveten, plus:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Upphämtning 4 ggr/månad</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Personlig rådgivning för hållbarhet och återvinning</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Miljöcertifikat att dela (t.ex. i sociala medier eller på arbetsplatsen)</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <Link className="btn-sm text-white bg-green-600 hover:bg-green-700 w-full group" href="/request">
              Kom igång{" "}
              <span className="tracking-normal text-green-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
