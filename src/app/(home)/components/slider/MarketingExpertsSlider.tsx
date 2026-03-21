"use client";
import { MarketingExpertiseDataTypes } from "@/@types/@homeType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import { MarketingCard } from "../../../../components/cards/MarketingCard";

const MarketingExpertsSlider: React.FC<{
  cards: MarketingExpertiseDataTypes["cards"];
}> = ({ cards }) => {
  return (
    <div className="md:hidden w-full pl-4 mt-6">
      <SwiperCarousel
        data={cards}
        slidesPerView={1.18}
        spaceBetween={16}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        renderSlide={(card) => <MarketingCard {...card} />}
      />
    </div>
  );
};

export default MarketingExpertsSlider;
