"use client";
import { OurWorkPropsType } from "@/@types/@types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import { AppContext } from "@/contextApi/AppContext";
import Image from "next/image";
import { useContext } from "react";
import { Autoplay } from "swiper/modules";

const OurWork: React.FC<OurWorkPropsType> = ({
  title,
  subTitle,
  description,
  imagesSrc,
  linksData,
}) => {
  const { setIsOpenPopupForm } = useContext(AppContext);
  return (
    <SectionWithContainer  sectionClassName="bg-[#F9FAFB]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:gap-8 bg-[#F9FAFB]">
        <div className="md:col-span-2">
          <SwiperCarousel
            data={imagesSrc}
            slidesPerView={1}
            spaceBetween={24}
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            renderSlide={(item, index) => (
              <div key={index} className="w-full h-full relative aspect-[4/2.2]">
                <Image
                  src={item}
                  alt="img"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          />
        </div>
        <div className="md:col-span-1">
          <div className="space-y-6">
            <SectionHeadingDesc
              title={title}
              subTitle={subTitle}
              description={description}
              wrapperClassName="text-color"
            />
            <div className="flex gap-4">
              {linksData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setIsOpenPopupForm(true)}
                  className="text-secondary bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurWork;
