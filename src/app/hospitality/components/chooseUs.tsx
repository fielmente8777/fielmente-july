"use client";

import SwiperCarousel from "@/components/slider/SwiperCarousel";
// import required modules
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Autoplay } from "swiper/modules";

export interface ChooseCardProsData {
  title: string;
  subtitle: string;
  // Icon: React.ReactNode | string | StaticImageData;
  Icon: string;
}

const SectionHeadingDetails = {
  title: "Why Choose ",
  span: "Us?",
  description:
    "Choose us for our hospitality-focused expertise, tailored solutions, proven results, comprehensive approach, and unwavering commitment to your hotel's or resort's success.",
  // description:
  //   "We offer a range of services like Hotel Marketing, Restaurant Marketing, Cloud Kitchen Marketing, Hostel Marketing, Cafe Marketing to fuel your business growth and success.",
  Color: true,
};

// Force of 20+ Hospitality Marketing Experts

function ChooseUs() {
  const pathName = usePathname();
  const ChooseUsData = [
    {
      title: `Expertise in ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      } `,
      subtitle: `With a decade of experience in the ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      } industry, we are the perfect partner to market your hotel, resort, villa & restaurant.`,
      Icon: "/icon/ExpertiseinHospitality.png",
      // Icon: <ExpertiseIcon />,
    },
    {
      title: `Strategic Social Media Marketing for ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      } `,
      subtitle: `Our proven strategy of ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/"
              ? "Hotel"
              : "Hospitality"
      } social media management boost your brand’s exposure engage your target audience and gives you more bookings.`,
      // Icon: <SocialMediaMarketing />,
      Icon: "/icon/StrategicSocial MediaMarketing.png",
    },
    {
      title: "Optimized for Search Engines",
      subtitle: `Maximise your ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      }'s google visibility and increase organic traffic through search engine optimisation and increase more queries.`,
      // Icon: <Optimized />,
      Icon: "/icon/optseo.png",
    },
    {
      title: `Exceptional ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      } Website Development`,
      subtitle:
        "Our website development expertise provides an outstanding user experience from design to functionality.",
      // Icon: <WebSiteDevelopmentIcon width={60} height={60} />,
      Icon: "/icon/ExceptionalHospitality.png",
    },

    {
      title: `Customized ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      } Marketing Solutions`,
      subtitle:
        "A compelling reason for you to choose us is our commitment to providing tailored and customized marketing solutions.",
      // Icon: <MarketSolution />,
      Icon: "/icon/CustomizedHospitality.png",
    },
    {
      title: `Effective ${
        pathName === "/resort/"
          ? "Resort"
          : pathName === "/hospitality/"
            ? "Hospitality"
            : pathName === "/landing-page/" || pathName === "/"
              ? "Hotel"
              : "Hospitality"
      } Performance Marketing`,
      subtitle:
        "Get the best results with our impactful campaigns that bring in targeted visitors and maximize your return on investment.",
      // Icon: <HotelPerformance />,
      Icon: "/icon/graph.png",
    },
  ];

  return (
    <div>
      {/* <SectionHeading {...SectionHeadingDetails} /> */}
      <div className="flex flex-col gap-5">
        {pathName === "/" ? null : (
          <h2 className="text-center md:text-4xl font-semibold text-primary2 text-[1.4rem]/[2rem] last-word md:w-[85%] mx-auto">
            {SectionHeadingDetails.title}
          </h2>
        )}
        <p className="text-2xl max-md:text-xl text-primary2 text-center lg:w-[70%] mx-auto">
          Force of{" "}
          <b className="text-orange-primary">
            50+{" "}
            {pathName === "/resort/"
              ? "Resort"
              : pathName === "/hospitality/"
                ? "Hospitality"
                : pathName === "/landing-page/"
                  ? "Hotel"
                  : "Hospitality"}{" "}
            Marketing
          </b>{" "}
          Experts
        </p>
      </div>
      <div className="lg:block hidden">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-16">
          {ChooseUsData.map((item, index) => (
            <ChooseUsCard {...item} key={index} />
          ))}
        </div>
      </div>
      <div className="lg:hidden block py-5">
        <div>
          <SwiperCarousel
            data={ChooseUsData}
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            slidesPerView={1}
            speed={900}
            autoplay={{
              delay: 4000,
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
            }}
            className="mySwiper"
            renderSlide={(item) => <ChooseUsCard {...item} />}
          />
        </div>
      </div>
    </div>
  );
}

export const ChooseUsCard = ({ title, subtitle, Icon }: ChooseCardProsData) => {
  return (
    <div className="flex flex-col justify-start bg-white group lg:hover:-translate-y-1 lg:hover:scale-x-105 transition duration-300 ease-in-out gap-3 border border-blue-dark rounded-sm shadow-2xl p-6">
      <div className="flex items-center justify-center  ease-in-out lg:justify-start">
        <Image
          src={Icon}
          alt={title}
          width={96}
          height={96}
          className="lg:group-hover:-translate-y-2 lg:group-hover:scale-110 transition duration-300"
        />
      </div>
      <h2 className="text-primary2 helv text-[1.8rem]/[2.5rem] max-md:text-xl capitalize lg:text-start text-center">
        {title}
      </h2>
      <p className="text-lg poppins text-[#797979] lg:text-start text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default ChooseUs;
