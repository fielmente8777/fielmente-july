"use client";
import { GrowthSectionProps } from "@/@types/@landingPageType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import { GrowthCard } from "../cards/GrowthCard";

const GrowthSlider: React.FC<{ cards: GrowthSectionProps["points"] }> = ({
  cards,
}) => {
  return (
    <div className="lg:hidden">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        loop
        navigation={{
          nextEl: ".service-next",
          prevEl: ".service-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        speed={900}
        renderSlide={(card) => <GrowthCard {...card} />}
      />
      <div className="flex items-center justify-between w-full gap-6 mt-4">
        <button className="w-10 aspect-square rounded-full bg-color4 disabled:bg-[#494949] flex items-center justify-center service-prev rotate-180">
          <Foo />
          <span className="sr-only">Previous</span>
        </button>
        <button className="w-10 aspect-square rounded-full bg-color4 disabled:bg-[#494949] flex items-center justify-center service-next">
          <Foo />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GrowthSlider;

export const Foo = () => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.09961 16.1984L13.4996 10.7984L8.09961 5.39844"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
