import Image from "next/image";
import TeamMemberImageTruls from "@/public/images/team-member-truls.jpg";
import TeamMemberImageErik from "@/public/images/team-member-erik.jpg";
import TeamMemberImageMans from "@/public/images/team-member-mans.jpg";
import TeamMemberImageKilean from "@/public/images/team-member-kilean.jpg";
import TeamMemberImageAxel from "@/public/images/team-member-axel.jpg";

export default function TeamMembers() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-quicksand text-slate-800">Här är vi!</h2>
          </div>

          {/* Team members */}
          <div
            className="relative max-w-sm mx-auto grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 items-start sm:max-w-xl lg:max-w-none"
            data-aos-id-team
          >
            {/* 1st member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImageTruls} width={120} height={120} alt="Member truls" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Truls Alexandersson</h4>
              <div className="font-medium text-green-600">VD</div>
            </div>

            {/* 2nd member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={100}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImageErik} width={120} height={120} alt="Member erik" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Erik Bergegård</h4>
              <div className="font-medium text-green-600">Säljchef</div>
            </div>

            {/* 3rd member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={200}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImageMans} width={120} height={120} alt="Member mans" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Måns Oxelström</h4>
              <div className="font-medium text-green-600">Produktchef</div>
            </div>

            {/* 4th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={300}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImageKilean} width={120} height={120} alt="Member kilean" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Kilean Egler</h4>
              <div className="font-medium text-green-600">Ekonomichef</div>
            </div>

            {/* 5th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={400}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImageAxel} width={120} height={120} alt="Member axel" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Axel Hörgren</h4>
              <div className="font-medium text-green-600">Marknadschef</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
