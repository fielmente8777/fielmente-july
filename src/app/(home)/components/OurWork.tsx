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
    <SectionWithContainer  sectionClassName="relative before:content-[''] before:inset-0 before:absolute before:bg-[url('/home/bg.png')] before:bg-cover before:bg-no-repeat md:before:w-[621px] md:before:h-[560px] before:h-[210px] before:bg-center before:opacity-10 before:z-[-1] after:content-[''] after:inset-0 after:absolute after:bg-[#f5f5f5] after:z-[-2]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:gap-8">
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
            <div className="flex gap-4 max-md:px-4">
              {linksData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setIsOpenPopupForm(true)}
                  className="text-secondary md:w-fit w-full bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
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
