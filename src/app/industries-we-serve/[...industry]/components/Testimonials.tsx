"use client";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";

interface TestimonialsProps {
  title: string;
  testimonial: {
    title: string;
    description: string;
  }[];
}
const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonial }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary2">
      <div className="space-y-14">
        <SectionHeadingDesc
          subTitle={title}
          subLevel={2}
          subTitleColor="white"
          subTitleClassName="span-color-4"
          wrapperClassName="md:max-w-[300px]"
        />
        <SwiperCarousel
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
            el: ".pagination",
          }}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          data={testimonial}
          swiperSlideClassName="py-4 h-full"
          renderSlide={(item) => <Card {...item} />}
        />
        <div className="pagination mt-10 flex justify-center items-center gap-1"></div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="rounded-3xl bg-[#F5F5F5] h-full">
      <div className="flex flex-col gap-5 py-8 px-7">
        <h3 className="text-black font-bold text-xl">{title}</h3>
        <p className="text-black text-lg">
          {readMore
            ? description
            : description.slice(0, 200) +
              (description.length > 200 ? "..." : "")}
          {description.length > 200 && (
            <button
              className="text-orange-primary"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
