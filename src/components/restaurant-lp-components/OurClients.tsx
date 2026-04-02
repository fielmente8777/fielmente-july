"use client";
import { Container, Section } from "@/components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

interface OurClientsProps {
  title: string;
  bold: string;
  items: { src: string; alt: string }[];
}

const OurClients: React.FC<OurClientsProps> = ({ title, bold, items }) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8">
          <h2 className="lg:text-3xl text-lg tracking-wider text-center text-primary2 helv">
            {title} <b className="text-orange-primary">{bold}</b>
          </h2>
          <div className="lg:grid hidden grid-cols-6 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center relative aspect-[4/2.5] w-full rounded-md"
                style={{
                  boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.20)",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`${index === 2 || index === 4 || index === 5 ? "object-cover" : "object-contain"} px-2 py-3`}
                />
              </div>
            ))}
          </div>
          <div className="lg:hidden block mt-8">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className=""
            >
              {items.map((item, index) => (
                <SwiperSlide key={index} className="p-2">
                  <div
                    key={index}
                    className="flex justify-center items-center relative lg:aspect-[4/2.5] aspect-[4/2] w-full shadow-xl p-2"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className={`${index === 2 || index === 4 || index === 5 ? "object-cover" : "object-contain"} px-2 py-3`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurClients;
