"use client";
import { Container, Section } from "@/components";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Star } from "@/utils/OldFormIcons";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

interface TestimonialProps {
  title: string;
  items: { name: string; designation: string }[];
}
const Testimonial: React.FC<TestimonialProps> = ({ title, items }) => {
  return (
    <Section
    // className="bg-[url('/bg1.png')] bg-opacity-20 bg-[100%,10%] bg-center bg-no-repeat"
    >
      <Container>
        <div className="flex flex-col items-center lg:gap-12 gap-6">
          <h2
            className="lg:text-4xl text-lg tracking-wider capitalize text-center text-primary2 helv"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div className="block w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true, el: ".client-pagination" }}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="border border-[#ECC4B6] shadow-xl p-4 bg-white"
                >
                  <div className="flex flex-col items-center gap-3">
                    <h3 className="text-center text-xl text-primary2 helv">
                      {item.name}
                    </h3>
                    <span className="flex items-center gap-1">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </span>
                    <p className="text-center text-[#3B3B3B] text-base">
                      {item.designation}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="client-pagination flex items-center justify-center gap-1"></div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
