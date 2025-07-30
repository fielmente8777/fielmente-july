import { SectionWithContainer } from "@/components";
import React from "react";

type MilestonePropsType = {
  number: string;
  description: string;
}[];
const Milestone = ({ milestone }: { milestone: MilestonePropsType }) => {
  return (
    <SectionWithContainer>
      <div className="relative grid grid-cols-3 overflow-hidden rounded-[56px] py-14 px-[76px]  after:content-[''] after:inset-0 after:absolute after:bg-primary after:z-[-1] before:absolute before:content-[''] before:inset-0 before:bg-[url('/images/shape.png')] before:z-[-1]">
        {milestone.map((item, index) => (
          <div className="flex items-center justify-evenly gap-6" key={index}>
            <div className={`flex flex-col items-center justify-center gap-6`}>
              <h2 className="text-white x_lg_font_s font-semibold">
                {item.number}
              </h2>
              <p className="text-white text-xl max-w-[15rem] text-center w-full mx-auto">
                {item.description}
              </p>
            </div>
            {milestone.length - 1 !== index && (
              <div className="w-px h-[60%] bg-white"></div>
            )}
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Milestone;
