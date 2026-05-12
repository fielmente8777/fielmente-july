"use client";
import { Section } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

interface CountiesWeWorkedProps {
  title: string;
  subTitle: string;
  cards: {
    src: string;
    alt: string;
  }[];
}

const CountiesWeWorked = ({
  title,
  subTitle,
  cards: items,
}: CountiesWeWorkedProps) => {
  return (
    <Section className="bg-[#FFF]">
      <div className="grid lg:grid-cols-11 grid-cols-1 items-center gap-1">
        <div className="lg:col-span-4 col-span-1 lg:rounded-r-3xl md:rounded-none rounded-b-3xl bg-[#f26633] md:py-12 md:px-9 max-md:p-8">
          <div className="max-w-[365px] space-y-4 poppins md:ml-auto">
            <h2 className="w-fit bg-[#FFE7DE] text-primary2 px-2 rounded-full">
              {title}
            </h2>
            <p className="md:text-4xl text-2xl text-white">{subTitle}</p>
          </div>
        </div>

        <div className="lg:col-span-7 demo col-span-1 md:px-32 px-6 md:py-11 py-6 md:w-full w-80 md:rounded-none rounded-b-2xl mx-auto bg-primary2">
          <SwiperCarousel
            data={items}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[Autoplay, FreeMode]}
            freeMode
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 48,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            }}
            loop={true}
            renderSlide={(item, index) => (
              <div key={index}>
                <div className="text-white">
                  <div className="relative w-full md:aspect-[4/2] aspect-[4/2.3]">
                    <Image
                      src={item?.src}
                      alt={item?.alt}
                      fill
                      className="rounded-lg"
                    />
                  </div>

                  {/* <p className="text-center mt-2 poppins uppercase">
                    {item?.alt}
                  </p> */}
                </div>
              </div>
            )}
            className="w-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default CountiesWeWorked;
