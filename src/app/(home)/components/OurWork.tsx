"use client";
import { OurWorkPropsType } from "@/@types/@types";
import {
  Section,
  SectionHeadingDesc,
  SectionWithContainer,
} from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import { AppContext } from "@/contextApi/AppContext";
import Image from "next/image";
import { useContext } from "react";
import { Autoplay, FreeMode } from "swiper/modules";

const OurWork: React.FC<OurWorkPropsType> = ({
  title,
  subTitle,
  description,
  imagesSrc,
  linksData,
}) => {
  const { setIsOpenPopupForm } = useContext(AppContext);
  return (
    <Section className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#f5f5f5] after:z-[-2]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:gap-8 xl:max-w-[1420px] lg:max-w-[1024px] w-full max-md:px-4">
        <div className="md:col-span-2 md:space-y-8 space-y-4 border-y border-r max-md:border-l overflow-hidden border-secondary md:rounded-tr-[40px] max-md:rounded-3xl md:rounded-br-[40px] md:py-9 py-3">
          <div className="demo">
            <SwiperCarousel
              data={imagesSrc ?? []}
              slidesPerView={2.5}
              spaceBetween={16}
              loop={true}
              speed={5000}
              modules={[Autoplay, FreeMode]}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              renderSlide={(item, index) => (
                <div
                  key={index}
                  className="w-full h-full relative md:aspect-[4/2] aspect-[4/2.5] "
                >
                  <Image
                    src={item}
                    alt="img"
                    fill
                    className="object-top object-cover rounded-lg"
                  />
                </div>
              )}
            />
          </div>
          <div className="demo">
            <SwiperCarousel
              data={imagesSrc ?? []}
              slidesPerView={2.5}
              spaceBetween={16}
              loop={true}
              speed={5000}
              modules={[Autoplay, FreeMode]}
              freeMode={true}
              dir="rtl"
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              renderSlide={(item, index) => (
                <div
                  key={index}
                  className="w-full h-full relative md:aspect-[4/2] aspect-[4/2.5]"
                >
                  <Image
                    src={item}
                    alt="img"
                    fill
                    className="object-top object-cover rounded-lg"
                  />
                </div>
              )}
            />
          </div>
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
    </Section>
  );
};

export default OurWork;
