"use client";
import { TestimonialsDataTypes } from "@/@types/@homeType";

import SwiperCarousel from "@/components/slider/SwiperCarousel";

import { Autoplay, Navigation } from "swiper/modules";
import FeaturedTestimonialCard from "./FeaturedTestimonialCard";
import { FeaturedTestimonialsPropsType } from "@/@types/@types";

interface Props {
  cards: FeaturedTestimonialsPropsType["cards"];
}

const FeaturedTestimonialsSlider: React.FC<Props> = ({ cards }) => {
  return (
    <div className={`w-full relative testimonial-slider`}>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={20}
        speed={3000}
        loop={true}
        modules={[Autoplay, Navigation]}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        // }}
        renderSlide={(item) => <FeaturedTestimonialCard {...item} />}
      />
    </div>
  );
};

export default FeaturedTestimonialsSlider;

