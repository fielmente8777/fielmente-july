"use client";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay, FreeMode } from "swiper/modules";
import { QuotesIcon } from "../../../utils/icons";

interface TestimonialsDataTypes {
  title: string;
  description: string;
}

const AutoSliderTestimonial: React.FC<{
  testimonials: TestimonialsDataTypes[];
  dir?: boolean;
  speed?: number;
}> = ({ testimonials, dir = false, speed = 5000 }) => {
  return (
    <div className="w-full overflow-hidden demo ">
      <SwiperCarousel
        data={testimonials}
        slidesPerView={1}
        spaceBetween={16}
        modules={[Autoplay, FreeMode]}
        loop
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: dir,
        }}
        speed={speed}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            direction: "horizontal",
          },
          1024: {
            slidesPerView: 2.8,
            direction: "vertical",
          },
          1280: {
            slidesPerView: 3,
            direction: "vertical",
          },
        }}
        className="h-full"
        renderSlide={(card) => <FloteCard {...card} />}
      />
    </div>
  );
};

export default AutoSliderTestimonial;

export const FloteCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-4 bg-[#0d0f12] p-6 border-[0.1px] shadow-inner backdrop-blur-xs border-main-border/35 rounded-2xl overflow-hidden h-auto text-white">
      <span>
        <QuotesIcon />
      </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Foo key={index} />
        ))}
      </div>
      <p className="text-lg line-clamp-6">{description.slice(0, 210)}</p>
      <div className="w-full h-[0.1px] bg-white/50 my-2"></div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export const Foo = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0004 15.6845L8.63687 18.25C8.49203 18.3615 8.33853 18.4131 8.17637 18.4047C8.0142 18.3964 7.86903 18.3499 7.74087 18.2652C7.6127 18.1807 7.51395 18.0625 7.44462 17.9105C7.37545 17.7587 7.37287 17.5949 7.43687 17.4192L8.72737 13.2077L5.47737 10.8827C5.3222 10.7814 5.22445 10.6497 5.18412 10.4875C5.14378 10.3253 5.15053 10.1718 5.20437 10.027C5.2582 9.88216 5.34762 9.75807 5.47262 9.65474C5.59762 9.55157 5.74795 9.49999 5.92362 9.49999H9.96587L11.2811 5.16149C11.3453 4.98599 11.4425 4.85016 11.5726 4.75399C11.7026 4.65782 11.8452 4.60974 12.0004 4.60974C12.1555 4.60974 12.2981 4.65782 12.4281 4.75399C12.5583 4.85016 12.6554 4.98599 12.7196 5.16149L14.0349 9.49999H18.0771C18.2528 9.49999 18.4031 9.55157 18.5281 9.65474C18.6531 9.75807 18.7425 9.88216 18.7964 10.027C18.8502 10.1718 18.857 10.3253 18.8166 10.4875C18.7763 10.6497 18.6785 10.7814 18.5234 10.8827L15.2734 13.2077L16.5639 17.4192C16.6279 17.5949 16.6253 17.7587 16.5561 17.9105C16.4868 18.0625 16.388 18.1807 16.2599 18.2652C16.1317 18.3499 15.9865 18.3964 15.8244 18.4047C15.6622 18.4131 15.5087 18.3615 15.3639 18.25L12.0004 15.6845Z"
      fill="#FFBE19"
    />
  </svg>
);
