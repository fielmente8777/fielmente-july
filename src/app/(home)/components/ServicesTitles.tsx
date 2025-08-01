"use client";
import { Section } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import { Autoplay, FreeMode } from "swiper/modules";

const ServicesTitles = ({ title }: { title: string[] }) => {
  const data = title.length < 5 ? [...title, ...title, ...title] : title;
  return (
    <Section defaultPadding={false} className="bg-primary demo box-shadow">
      <SwiperCarousel
        data={data}
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
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        renderSlide={(item, index) => (
          <ul key={index} className="flex items-center justify-center gap-2 py-3 w-full relative">
            <li className="text-white text-nowrap text-xl">{item}</li>
            <span className="text-white absolute -right-[4.5px]">•</span>
          </ul>
        )}
      />
    </Section>
  );
};

export default ServicesTitles;
