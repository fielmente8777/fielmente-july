"use client";
import { TestimonialsPropsType } from "@/@types/@types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { TestimonialCard } from "@/components/cards";
import SwiperCarousel from "@/components/SwiperCarousel";
import { AppContext } from "@/contextApi/AppContext";
import { useContext } from "react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC<TestimonialsPropsType> = ({
  title,
  subTitle,
  cards,
  links,
}) => {
  const { setIsOpenPopupForm } = useContext(AppContext);
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-7 items-center">
        <div className=" space-y-4 md:col-span-2">
          <SectionHeadingDesc
            title={title}
            subTitle={subTitle}
            subTitleClassName="leading-tight"
          />
          <div className="md:block hidden">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpenPopupForm(true)}
                  className="text-secondary font-medium bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 w-full space-y-8">
          <div className="border border-secondary box-shadow rounded-3xl overflow-hidden bg-[#F5F5F5]">
            <SwiperCarousel
              data={cards}
              slidesPerView={1}
              spaceBetween={24}
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".pagination_testimonials" }}
              renderSlide={(item, index) => (
                <TestimonialCard key={index} {...item} />
              )}
            />
          </div>
          <div className="pagination_testimonials flex items-center justify-center"></div>
          <div className="md:hidden px-4">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpenPopupForm(true)}
                  className="text-secondary w-full font-medium bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
