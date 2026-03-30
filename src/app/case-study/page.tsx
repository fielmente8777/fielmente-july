import { SectionWithContainer } from "@/components/sectionComponants";
import { casStudyData } from "./caseData";
import CasStudyCard from "./components/CasStudyCard";

export default function CaseStudy() {
  return (
    <main>
      <SectionWithContainer sectionClassName="relative after:content-[''] after:inset-0 after:absolute after:bg-blue-dark after:rounded-t-[80px] text-white after:z-[-2]">
        <div className="">
          <div className="w-full h-[1px] bg-gradient-to-r from-blue-dark via-white to-blue-dark my-[40px]" />
          {/* client cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casStudyData.map((item, index) => (
              <CasStudyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
}
