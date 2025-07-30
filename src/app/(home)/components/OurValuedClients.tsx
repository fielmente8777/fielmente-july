"use client";
import { OurValuedClientsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import { FillStarIcon } from "@/utils/icons";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

const OurValuedClients: React.FC<OurValuedClientsPropsType> = ({
  title,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="space-y-8 md:space-y-14">
        <div className="w-full space-y-4">
          <h2 className="text-primary lg_font_s font-semibold text-center">
            {title}
          </h2>
          <ul className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <FillStarIcon />
              </li>
            ))}
          </ul>
        </div>
        <div className="demo space-y-4 rounded-3xl box-shadow overflow-clip">
          <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
          <SwiperCarousel
            data={cards || []}
            speed={5000}
            loop={true}
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            renderSlide={(item, index) => (
              <div key={index} className="w-full relative aspect-[4/2.5]">
                <Image
                  src={item?.src}
                  alt={item?.alt}
                  className="object-contain p-2 rounded-lg"
                  sizes="100%"
                  style={{ backgroundColor: item?.className }}
                  fill
                />
                {/* <div className="absolute inset-0 z-50 text-black  text-xl font-bold flex items-center justify-center ">
                      {item?.alt}
                    </div> */}
              </div>
            )}
          />
          <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurValuedClients;
