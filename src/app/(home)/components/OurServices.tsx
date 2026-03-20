"use client";

import { ServicesDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";

const OurServices: React.FC<ServicesDataTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2">
        <div className="">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            subTitleClassName="lg:text-[30px]"
            wrapperClassName="pr-16"
          />
          <div className="aspect-4/2.5 mt-4">
            <SwiperCarousel
              data={cards}
              onSwiper={setThumbsSwiper}
              loop={true}
              slidesPerView={1.5}
              spaceBetween={6}
              watchSlidesProgress
              slideToClickedSlide
              breakpoints={{
                768: {
                  direction: "vertical",
                  slidesPerView: cards.length,
                },
              }}
              modules={[Thumbs]}
              direction="horizontal"
              className="h-full"
              renderSlide={(sector, index) => (
                <button
                  className={`text-sm font-semibold flex items-center gap-2 px-5 py-2.5 rounded-[10px] hover:text-color4 hover:bg-[#E7F4FF] duration-300 ease-in-out transition-all  ${index === activeIndex ? "text-color4 bg-[#E7F4FF]" : "text-secondary"}`}
                >
                  <span> {sector.icon} </span> {sector.title}
                </button>
              )}
            />
          </div>
        </div>
        <div className="">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            loop
            modules={[Navigation, Thumbs, EffectFade, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={16}
            speed={1000}
            effect="fade"
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper?.realIndex)}
            navigation={{
              nextEl: ".sector-next",
              prevEl: ".sector-prev",
            }}
            renderSlide={(sector) => (
              <div className="space-y-4 bg-white py-6 px-4">
                <div className="w-full relative aspect-4/1.5 rounded-[28.66px] border-6 border-white  shadow overflow-hidden">
                  <Image
                    src="/home/im8.png"
                    alt={sector.title}
                    fill
                    className="object-cover "
                    sizes="100vw"
                  />
                </div>
                <h3 className="text-2xl">{sector.title}</h3>
                <p className="text-lg">{sector.description}</p>
                <button className="text-white bg-[#1B1B1B] rounded-full px-6 py-3 font-semibold">
                  Grow My Socials
                </button>
              </div>
            )}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurServices;
