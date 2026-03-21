"use client";
import { BlogsDataTypes } from "@/@types/@homeType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import { BlogCard } from "../cards/BlogCard";

const BlogsSlider: React.FC<{ cards: BlogsDataTypes["cards"] }> = ({
  cards,
}) => {
  return (
    <div className="mt-8">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={16}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        speed={900}
        renderSlide={(card) => <BlogCard {...card} />}
      />
    </div>
  );
};

export default BlogsSlider;
