import Image from "next/image";
import TeamMemberImage01 from "@/public/images/team-member-01.jpg";
import TeamMemberImage02 from "@/public/images/team-member-02.jpg";
import TeamMemberImage03 from "@/public/images/team-member-03.jpg";
import TeamMemberImage04 from "@/public/images/team-member-04.jpg";
import TeamMemberImage05 from "@/public/images/team-member-05.jpg";

export default function TeamMembers() {
  return (
    <section>
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
                <Image className="rounded-full" src={TeamMemberImage01} width={120} height={120} alt="Member 01" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Truls Alexandersson</h4>
              <div className="font-medium text-green-600">VD</div>
            </div>

            {/* 2nd member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={100}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage02} width={120} height={120} alt="Member 02" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Erik Bergegård</h4>
              <div className="font-medium text-green-600">Säljchef</div>
            </div>

            {/* 3rd member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={200}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage03} width={120} height={120} alt="Member 03" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Måns Oxelström</h4>
              <div className="font-medium text-green-600">Produktchef</div>
            </div>

            {/* 4th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={300}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage04} width={120} height={120} alt="Member 04" />
              </div>
              <h4 className="h4 font-quicksand text-slate-800 mb-2">Kilean Egler</h4>
              <div className="font-medium text-green-600">Ekonomichef</div>
            </div>

            {/* 5th member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={400}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={TeamMemberImage05} width={120} height={120} alt="Member 05" />
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
