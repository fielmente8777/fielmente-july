"use client";

import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper/modules";
import SectionHeading from "./SectionHeading";
import React from "react";
import { ClientImages } from "@/utils/client";
import { usePathname } from "next/navigation";
const OurClientNew = () => {
  const pathName = usePathname();
  return (
    <div>
      <div>
        <h2 className="lg:text-4xl text-2xl font-normal helv text-primary2 text-center">
          Worked with the Best <br />{" "}
          <b className="text-orange-primary">
            {pathName === "/resort/"
              ? "Resort"
              : pathName === "/hospitality/"
                ? "Hospitality"
                : pathName === "/landing-page/"
                  ? "Hotel"
                  : "Hospitality"}{" "}
            Brands
          </b>
        </h2>
      </div>
      <div className="mt-16">
        <div>
          <Swiper
            modules={[Autoplay, Grid, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            grid={{
              rows: 1,
            }}
            pagination={{
              type: "bullets",
              clickable: true,
              el: ".client-pagination",
            }}
            // loop={true}
            speed={900}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            className="border border-[#F2B203] lg:!p-6 !p-5 shadow-inner"
          >
            {ClientImages.map((item, index) => (
              <SwiperSlide key={index} className="p-4">
                <div
                  // href={"/"}
                  className="relative w-full lg:aspect-[4/3.4] aspect-[4/4] h-[8rem] flex justify-center items-center duration-300  hover:shadow-xl shadow-2xl hover:shadow-white/35 hover:scale-[1.04] rounded-tl-[1.875rem] rounded-br-[1.875rem] overflow-hidden"
                  // style={{
                  //   backgroundColor: `${
                  //   index == 23
                  //       ? "#F7F7F7"
                  //       : index == 22
                  //         ? "#F7F7F7"
                  //         : index == 9
                  //           ? "#FF6C26"
                  //           : index == 16
                  //             ? "#F7F7F7"
                  //             : index == 21 || index == 0
                  //               ? "#1e1e1e"
                  //               : index == 25
                  //                 ? "#e6e6e6"
                  //                 : index == 18
                  //                   ? "#F7F7F7"
                  //                   : index == 25
                  //                     ? "#f7f000"
                  //                     : "white"
                  //     }`,
                  // }}
                >
                  {/* {index} */}
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    width={100}
                    height={100}
                    className={`${index == 4 || index == 5 || index == 9  || index == 19 || index == 27 || index == 29 || index == 35 ? "object-cover" : "object-contain"} w-full h-full p-3 `}
                    style={{
                      backgroundColor: item.className
                        ? item.className
                        : index == 23
                        ? "#e6e6e6"
                        : index == 22 ||
                          index == 16 ||
                          index == 18 ||
                          index == 20
                        ? "#F7F7F7"
                        : index == 21
                        ? "#21413e"
                        : index == 19 || index == 0
                        ? "#1e1e1e"
                        : index == 24
                        ? "#f3f3f3"
                        : index == 26
                        ? "#000000"
                        : index == 32 ||
                          index == 33 ||
                          index == 28 ||
                          index == 34 ||
                          index == 36
                        ? "#000000"
                        : index == 41
                        ? "#007a39"
                        : index == 29
                        ? "#a7d062"
                        : "white"
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="client-pagination mt-8 lg:flex hidden justify-center items-center gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default OurClientNew;
