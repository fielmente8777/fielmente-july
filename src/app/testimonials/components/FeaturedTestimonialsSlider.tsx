"use client";

import SwiperCarousel from "@/components/slider/SwiperCarousel";

import { FeaturedTestimonialsPropsType } from "@/@types/@types";
import { Navigation } from "swiper/modules";
import FeaturedTestimonialCard from "./FeaturedTestimonialCard";

interface Props {
  cards: FeaturedTestimonialsPropsType["cards"];
}

const FeaturedTestimonialsSlider: React.FC<Props> = ({ cards }) => {
  return (
    <div className={`w-full relative  mt-8 `}>
      <div className="max-w-2xl mx-auto box-shadow rounded-2xl overflow-hidden">
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={20}
          speed={3000}
          modules={[Navigation]}
          navigation={{
            nextEl: ".test-next",
            prevEl: ".test-prev",
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: false,
          // }}
          renderSlide={(item) => <FeaturedTestimonialCard {...item} />}
        />
      </div>
      <div className="flex items-center justify-between w-full max-lg:mt-8 gap-6 lg:absolute z-10 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-4xl">
        <button className="w-12 aspect-square rounded-full border border-color4 bg-color4 disabled:bg-transparent disabled:text-color4 text-white  flex items-center justify-center test-prev rotate-180">
          <Foo />
        </button>
        <button className="w-12 aspect-square rounded-full border border-color4 bg-color4 disabled:bg-transparent disabled:text-color4 text-white  flex items-center justify-center test-next">
          <Foo />
        </button>
      </div>
    </div>
  );
};

export default FeaturedTestimonialsSlider;

export const Foo = () => (
  <svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.959 25.9171L21.599 17.2771L12.959 8.63708"
      stroke="currentColor"
      strokeWidth="2.88"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
