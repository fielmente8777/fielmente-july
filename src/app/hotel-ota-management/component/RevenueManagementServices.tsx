"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import { RightIcon } from "./icons";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import RevenueServiceCard from "@/components/cards/RevenueServiceCard";
import { RevenueManagementServicesType } from "@/@types/@landingPageType";

const RevenueManagementServices: React.FC<RevenueManagementServicesType> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary2">
      <div className="flex flex-col w-full items-center md:gap-14 gap-6">
        <div className="max-w-2xl mx-auto text-center space-y-8 poppins">
          <h2 className="bg-[#FFE7DE] uppercase text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
            {title}
          </h2>

          <p className="md:text-[2.5rem]/[3rem] text-2xl font-medium text-white">
            {subTitle}
          </p>
        </div>
        <div className="w-full">
          <div className="w-full relative ">
            <SwiperCarousel
              data={cards}
              speed={2000}
              className="max-md:w-70 mx-auto"
              autoplay={{ delay: 2000 }}
              loop={true}
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                el: ".service-pagination",
              }}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              slidesPerView={1}
              spaceBetween={22}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },

                1024: {
                  slidesPerView: 5,
                  spaceBetween: 22,
                },
              }}
              renderSlide={(item, index) => (
                <RevenueServiceCard key={index} {...item} />
              )}
            />
            <button className="absolute max-md:hidden md:-right-8 right-[-22px] top-1/2 -translate-y-1/2 z-10 btn-next disabled:hidden ">
              <RightIcon />
            </button>
            <button className="absolute max-md:hidden md:-left-8 left-[-22px] top-1/2 -translate-y-1/2 z-10 rotate-180 btn-prev disabled:hidden ">
              <RightIcon />
            </button>
          </div>
          <div className="service-pagination flex items-center justify-center mt-6"></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default RevenueManagementServices;
