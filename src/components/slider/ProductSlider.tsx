"use client";
import { ProductsDataTypes } from "@/@types/@homeType";
import ProductCard from "@/components/cards/ProductCard";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const ProductSlider: React.FC<{ cards: ProductsDataTypes["cards"] }> = ({
  cards,
}) => {
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
        renderSlide={(card) => <ProductCard {...card} />}
      />
    </div>
  );
};

export default ProductSlider;
