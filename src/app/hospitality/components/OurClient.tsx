"use client";

import { Container, Section } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
// import required modules
import { ClientImages } from "@/utils/client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Autoplay, FreeMode } from "swiper/modules";
const OurClient = ({ title }: { title?: string }) => {
  const pathName = usePathname();
  const text =
    pathName === "/hospitality/"
      ? "Hospitality"
      : pathName === "/resort/"
        ? "Resorts"
        : "Hotels";

  const objectCoverIndexes = [1, 2, 4, 5, 7, 9, 19, 25, 27, 29, 35];

  return (
    <Section className="max-w-[1540px] mx-auto w-full !pt-4">
      <Container>
        <div className="mb-8">
          {title ? (
            <h2 className="text-blue-dark text-5xl/[3rem] font-semibold text-center">
              {title}
            </h2>
          ) : (
            <h2 className="text-blue-dark text-4xl/[3rem] font-semibold text-center">
              You&apos;re in good company <br />
              <span className="text-orange-primary">
                Trusted by 500+ happy {text}
              </span>
            </h2>
          )}
        </div>
      </Container>
      <Section className="bg-[#110D3C] max-w-[1540px] mx-auto w-full">
        <Container>
          <div className="w-full h-full demo">
            <SwiperCarousel
              data={ClientImages}
              modules={[Autoplay, FreeMode]}
              freeMode={true}
              spaceBetween={15}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },

                1024: {
                  slidesPerView: 6,
                  spaceBetween: 24,
                },
              }}
              swiperSlideClassName="py-4 h-full"
              renderSlide={(item, index?: number) => (
                <div className="">
                  <div className="w-full relative aspect-[4/3.5] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md rounded-lg">
                    {/* <span className="absolute top-0 right-0 z-10 text-white">{index}</span> */}
                    <Image
                      src={item.src}
                      alt={`${item.alt}`}
                      fill
                      className={`${
                        objectCoverIndexes.includes(index || 0)
                          ? "object-cover"
                          : "object-contain"
                      } w-full h-full rounded-md p-3`}
                      style={{
                        backgroundColor: item.className,
                      }}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default OurClient;
