"use client"
import { SectionWithContainer } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import React from "react";
import { Autoplay } from "swiper/modules";

type MilestonePropsType = {
  number: string;
  description: string;
}[];
const Milestone = ({ milestone }: { milestone: MilestonePropsType }) => {
  return (
    <SectionWithContainer>
      <div className="relative md:grid hidden grid-cols-3 overflow-hidden rounded-[56px] py-14 px-[76px]  after:content-[''] after:inset-0 after:absolute after:bg-primary after:z-[-2] before:absolute before:content-[''] before:inset-0 before:bg-[url('/home/vector1.png')] before:bg-contain before:bg-no-repeat before:bg-center before:w-full before:h-full before:z-[-1]">
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
      <div className="w-full md:hidden block relative overflow-hidden rounded-[24px] py-14 px-[76px]  after:content-[''] after:inset-0 after:absolute after:bg-primary after:z-[-2] before:absolute before:content-[''] before:inset-0 before:bg-[url('/home/vector1.png')] before:bg-contain before:bg-no-repeat before:bg-center before:w-full before:h-full before:z-[-1]">
        <SwiperCarousel
          data={milestone}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          renderSlide={(item) => (
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-white text-[2rem] font-semibold">
                {item.number}
              </h2>
              <div className="w-[80%] h-[2px] bg-secondary" />
              <p className="text-white text-[1rem] text-center w-full mx-auto">
                {item.description}
              </p>
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
};

export default Milestone;
