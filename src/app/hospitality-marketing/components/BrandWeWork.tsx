"use client"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ClientImages } from "@/utils/client";
import Link from "next/link";
import Image from "next/image";

const BrandWeWork = () => {
    return (
        <div className="md:py-20 py-10 max_width">
        <div className="max-width">
          <div className="max-w-[610px] mx-auto flex flex-col gap-4">
            <h2 className="text-center text-black lg:text-4xl text-2xl font-bold">
              Brand We Work With
            </h2>
          </div>

          <div className="mt-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2400,
              }}
              speed={900}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              // onSlideChange={() => console.log("slide change")}
            >
              {ClientImages.map((item, index) => (
                <SwiperSlide key={index} className="py-6 mt-6">
                  <Link
                    href={"/"}
                    className="relative w-full lg:aspect-[4/3.4] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md aspect-[4/4] h-[10rem] rounded-md flex justify-center items-center"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.alt}`}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full rounded-md p-3"
                      // style={{
                      //   backgroundColor: `${
                      //     index == 23
                      //       ? "#22413f"
                      //       : index == 9
                      //       ? "#FF6C26"
                      //       : index == 21 || index == 0
                      //       ? "#1e1e1e"
                      //       : index == 20
                      //       ? "#f7f7f7"
                      //       : "white"
                      //   }`,
                      // }}
                      style={{
                        backgroundColor: `${
                          index == 23
                            ? "#22413f"
                            : index == 22
                            ? "#F7F7F7"
                            : index == 9
                            ? "#FF6C26"
                            : index == 16
                            ? "#F7F7F7"
                            : index == 21 || index == 0
                            ? "#1e1e1e"
                            : index == 18
                            ? "#F7F7F7"
                            : index == 20
                            ? "#f7f7f7"
                            : "white"
                        }`,
                      }}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
}

export default BrandWeWork;