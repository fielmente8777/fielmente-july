"use client";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { ClientData } from "@/utils/client";
import ClientCard from "./ClientCard";
import { Autoplay, Grid, Pagination } from "swiper/modules";

const ClientSliderGrid: React.FC<{ clients: ClientData[] }> = ({ clients }) => {
  return (
    <div className="mt-10 lg:mt-16">
      <SwiperCarousel
        data={[...clients]}
        loop
        slidesPerView={6}
        spaceBetween={16}
        modules={[Autoplay, Pagination, Grid]}
        grid={{
          rows: 6,
          fill: "row",
        }}
        breakpoints={{
          768: {
            spaceBetween: 26,
          },
          1024: {
            spaceBetween: 26,
          },
          1280: {
            spaceBetween: 36,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        renderSlide={(card) => <ClientCard {...card} />}
      />
    </div>
  );
};

export default ClientSliderGrid;
