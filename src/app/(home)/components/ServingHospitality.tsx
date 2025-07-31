"use client";
import { ServingHospitalityPropsType } from "@/@types/@types";
import { Section, SectionHeadingDesc } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const ServingHospitality: React.FC<ServingHospitalityPropsType> = ({
  title,
  cards,
  description,
}) => {
  return (
    <Section className="box-shadow rounded-3xl relative overflow-hidden after:content-[''] after:inset-0 after:absolute after:bg-[#f5f5f5] after:z-[-2] before:content-[''] before:right-0 before:top-0 before:bg-[url('/home/waves.png')] before:bg-contain before:bg-no-repeat before:w-[153px] before:h-[30px] before:z-[-1] before:absolute">
      <div className="md:space-y-14 space-y-8">
        <SectionHeadingDesc
          subTitle={title}
          textcenter
          wrapperClassName="max-w-5xl mx-auto text-color"
        />
        <div className="">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={2}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 2,
              },
            }}
            loop={true}    
            modules={[Autoplay,Pagination]}
            pagination={{ clickable: true, el: ".pagination_serving" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            renderSlide={(item, index) => (
              <div key={index} className="w-full relative aspect-[4/5]">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                  <h3 className="text-white text-center lg_font_s font-medium">{item.title}</h3>
                </div>
              </div>
            )}
          />
          <div className="pagination_serving flex justify-center mt-8"></div>
        </div>
        <p className="text-light text-center text-xl max-w-4xl mx-auto">{description}</p>
      </div>
    </Section>
  );
};

export default ServingHospitality;
