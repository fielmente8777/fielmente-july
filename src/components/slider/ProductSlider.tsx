"use client";
import { ProductsDataTypes } from "@/@types/@homeType";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import ProductCardNew from "../cards/ProductCardNew";
import { usePathname } from "next/navigation";

const ProductSlider: React.FC<{ cards: ProductsDataTypes["cards"] }> = ({
  cards,
}) => {
  const pathName = usePathname();
  return (
    <div className="md:hidden w-full mt-6 px-4">
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
        renderSlide={(card) => <ProductCardNew {...card} showLink={pathName === "/landing-page/" ? false : true} />}
      />
    </div>
  );
};

export default ProductSlider;
