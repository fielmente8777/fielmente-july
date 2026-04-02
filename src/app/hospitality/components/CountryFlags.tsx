"use client";
import { Container, Section } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

const CountryFlags = () => {
  const countries = [
    {
      name: "UAE",
      flag: "/flags/dubai.png",
    },
    {
      name: "UK",
      flag: "/flags/uk.png",
    },
    {
      name: "usa",
      flag: "/flags/usa.png",
    },
    {
      name: "Canada",
      flag: "/flags/canada.png",
    },
    {
      name: "Australia",
      flag: "/flags/australia.png",
    },
    {
      name: "Oman",
      flag: "/flags/oman.png",
    },
    {
      name: "sri lanka",
      flag: "/flags/srilanka.png",
    },
    {
      name: "Nepal",
      flag: "/flags/nepal.png",
    },
  ];
  return (
    <Section className="bg-[#110D3C] md:py-20">
      <Container>
        <div className="relative  w-full max-md:mb-5">
          <div className="grid md:grid-cols-7 items-center grid-cols-1 md:divide-x md:divide-[#838383] max-md:gap-6">
            <div className="flex flex-col gap-4 max-w-lg w-full md:col-span-3">
              <h2 className="text-orange-primary font-semibold md:text-[3rem]/[2.5rem] text-2xl text-center">
                Countries We Worked
              </h2>
              <p className="text-white md:text-lg text-center">
                Fielmente delivering value & impactful solutions since 2020
              </p>
            </div>
            <div className="md:ps-10 py-[1.5px] demo md:col-span-4">
              <SwiperCarousel
                data={countries}
                slidesPerView={2}
                spaceBetween={24}
                modules={[Autoplay,FreeMode]}
                freeMode={true}
                speed={4000}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                renderSlide={(item) => (
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="relative w-full aspect-[4/2.5]">
                      <Image
                        src={item.flag}
                        alt={item.name}
                        fill
                        className="object-cove"
                      />
                    </div>
                    {/* <p className="text-white uppercase font-semibold">
                      {item.name}
                    </p> */}
                  </div>
                )}
              />
            </div>
          </div>
          {/* <div className="absolute w-full max-w-sm lg:-bottom-10 -bottom-9 lg:right-[7%] h-3 items-center z-10 com">
            <div className="pagination-Portfolio flex justify-center gap-2"></div>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default CountryFlags;
