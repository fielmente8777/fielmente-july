import Image from "next/image";
import Link from "next/link";

import Container from "@/components/sectionComponants/Container";

// import Form from "@/app/about-fielmente-best-hospitality-marketing-agency/components/Form";
import type { Metadata } from "next";
import ContactBtn3 from "../contactbtn/ContactBtn3";
import ContactOldSection from "@/components/commonSections/ContactOldSection";

export const metadata: Metadata = {
  title: "India's Leading Hospitality Google Ads Agency - Fielmente",
  description:
    "Boost your hotel, restaurant, or resort with Fielmente, the leading hospitality Google Ads agency. Campaigns for social media and business.",
  alternates: {
    canonical:
      "https://fielmente.com/hospitality-marketing-services/google-ads-agency/",
    languages: {
      "en-US":
        "https://fielmente.com/hospitality-marketing-services/google-ads-agency/",
    },
  },
  openGraph: {
    title: "India's Leading Hospitality Google Ads Agency - Fielmente",
    description:
      "Boost your hotel, restaurant, or resort with Fielmente, the leading hospitality Google Ads agency. Campaigns for social media and business.",
  },
};
const CardData1 = [
  {
    title: "Hotel Ads",
    subtitle:
      "If you are looking for the best hotel advertisement company, look no further.",
    icon: "/images/HOTEL-MARKETING.webp",
    link: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads",
  },
  {
    title: "Cloud Kitchen Ads",
    subtitle:
      "If you are looking for the best cloud kitchen promotion, look no further.",
    icon: "/images/CLOUD-KITCHEN-MARKETING.webp",
    link: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-google-ads",
  },
  {
    title: "Restaurant Ads",
    subtitle:
      "If you are looking for the best restaurant advertising, look no further.",
    icon: "/images/RESTAURANT-MARKETING.webp",
    link: "/",
  },
];

const CardData2 = [
  {
    title: "Why Google Ads Matter for Your Business",
    subtitle:
      "Your Potential: Discover the Impact of Effective Advertising on Your Business Success",
    image: "/images/GOOGLE-ADS-08.webp",
  },
  {
    title:
      "Our Google Ads Services - Igniting Your Online Advertising Strategy",
    subtitle:
      "Precision Targeting: Drive Results with Search Advertising, Display Advertising, and Video Advertising",
    image: "/images/GOOGLE-ADS-10.webp",
  },
  {
    title: " Our Approach to Your Advertising Success",
    subtitle:
      "Strategic Mastery: From Planning to Execution, We Craft Customized Ads Strategies for Optimal Results",
    image: "/images/GOOGLE-ADS-11.webp",
  },
];

function page() {
  return (
    <section className="bg-[#1E1928] pt-10">
      <div className="bg-[#1E1928] text-white py-20">
        <div className="max_width">
          {/* Ignite Your Hospitality Growth with Leading Hospitality Google Ads Agency:***** */}
          <div className="md:grid md:grid-cols-2 gap-4 items-center flex flex-col-reverse ">
            <div className="flex flex-col gap-8 lg:mt-0 mt-6">
              <h1 className="lg:text-4xl text-2xl lg:text-start text-center">
                Ignite Your Hospitality Growth with Leading Hospitality Google
                Ads Agency
              </h1>
              <p className="text-[#FFFFFF] lg:text-lg text-base lg:text-start text-center">
                Experience the magic of Fielmente, the leading hospitality
                Google Ads agency in India.
              </p>
              <p className="text-[#FFFFFF] lg:text-lg text-base lg:text-start text-center">
                Our expertly crafted campaigns ensure your hotel, restaurant, or
                resort shines in the digital arena, delivering remarkable
                results. Trust the best in the industry, partner with
                Fielmente’s Google Ads agency, and witness your business soar to
                unprecedented heights through targeted advertising.
              </p>

              <p className="text-[#FFFFFF] text-xl lg:text-start text-center">
                Let your brand captivate, engage, and thrive with our
                specialized expertise in the hospitality sector. Unleash the
                full potential of your business – choose Fielmente today!
              </p>

              <div className="flex lg:justify-start justify-center">
                {/* <Link
                  href={"/"}
                  className="bg-white px-8 font-medium py-3 hover:bg-black hover:text-white shadow-2xl shadow-gray-primary rounded-full text-black text-lg"
                >
                  Know More
                </Link> */}
                <ContactBtn3 text="Know More" />
              </div>
            </div>
            <div className="w-full flex items-center lg:justify-end justify-center">
              <div className="relative max-w-[260px] w-full aspect-[5/5] ">
                <Image
                  src={"/images/GOOGLE-ADS-03-1.webp"}
                  alt="google-ads"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Milestones*** */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 py-16 max-w-[1080px] mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                100+
              </h2>
              <p className="lg:text-lg text-base font-medium text-white text-center">
                REVIEWS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                88%
              </h2>
              <p className="lg:text-lg text-base font-medium text-white text-center">
                INCREASE IN ROAS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                70+
              </h2>
              <p className="lg:text-lg text-base font-medium text-white text-center">
                HOTELIERS TRUST US
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                90+
              </h2>
              <p className="lg:text-lg text-base font-medium text-white text-center">
                PROJECTS COMPLETED
              </p>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 lg:px-20 border-t lg:pt-32 border-t-gray-700 ">
            {CardData1.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>

          {/* Why Does Your Business Needs Google Ads?*** */}
          <div className="mt-20">
            <h2 className="text-center lg:text-4xl text-2xl md:w-[70%] mx-auto font-bold">
              Why Does Your Business Needs Google Ads?
            </h2>
            <div className="grid lg:grid-cols-2 items-center mt-10 gap-4">
              <div className="w-full">
                <div className="relative w-full mx-auto aspect-[4/4.8]">
                  <Image
                    src={"/images/Manwithlaptop2.webp"}
                    alt="circular-social"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div>
                <p className="lg:text-lg text-base lg:text-start text-center">
                  At Fielmente, the top hospitality Google Ads agency in India,
                  we amplify your brand’s visibility and drive targeted traffic.
                  Our powerful Google Ads services fuel your business growth by
                  unleashing the full potential of online advertising.
                </p>

                <div className="mt-10 flex flex-col gap-5">
                  {CardData2.map((item, index) => (
                    <CardTwo {...item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories and Clientele - Experience the Power of Google Ads**** */}
          <div className="lg:grid grid-cols-2 gap-6 items-center flex flex-col-reverse mt-5">
            <div className="flex flex-col gap-8 ">
              <h2 className="lg:text-3xl text-2xl lg:text-start text-center">
                Success Stories and Clientele - Experience the Power of Google
                Ads
              </h2>
              <p className="text-white lg:text-lg text-base lg:text-start text-center">
                At Fielmente, we pride ourselves on success stories that
                showcase the unparalleled power of Google Ads. Our clientele has
                experienced extraordinary results, with increased brand
                visibility, targeted traffic, and amplified conversions. With
                our expertise as a top hospitality Google Ads agency, we help
                businesses across India soar to new heights, creating a trail of
                satisfied clients who have witnessed the true impact of
                effective online advertising. Partner with us and become the
                next success story in the world of digital advertising
              </p>

              <div className="flex lg:justify-start justify-center">
                {/* <Link
                  href={"/"}
                  className="bg-white px-8 hover:bg-black hover:text-white shadow-2xl shadow-gray-primary font-medium py-3 rounded-full text-black text-lg"
                >
                  Get Started
                </Link> */}
                <ContactBtn3 text="Get Started" />
              </div>
            </div>
            <div className="w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/5]">
                <Image
                  src={"/images/Shakinghand.webp"}
                  alt="shaking-hand-img"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Explore Our Comprehensive Digital Marketing Services */}
          <div className="lg:mt-20 lg:py-12 py-9">
            <h2 className="text-center lg:text-4xl text-3xl font-bold">
              Explore Our Comprehensive Digital Marketing Services
            </h2>
            <p className="text-center lg:text-lg text-lg mt-6">
              Expand Your Horizons: Discover the Full Range of Digital Marketing
              Solutions We Offer for your Hospitality Business.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Consultation - Unlocking Your Advertising Potential */}
      <div className="py-12 bg-[#15151D] text-white">
        <Container>
          <div className="grid md:grid-cols-5 gap-10 items-center ">
            <div className="md:col-span-2 w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/4] lg:block hidden">
                <Image
                  src={"/images/Girlmeet.webp"}
                  alt="girl-meet-img"
                  fill
                  className="object-cover rounded-[4rem]"
                />
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col gap-8">
              <div className="max-w-[700px] ">
                <h2 className="lg:text-3xl text-xl text-center lg:text-start font-bold">
                  Expert Consultation - Unlocking Your Advertising Potential
                </h2>

                <p className="text-white lg:text-lg text-base lg:text-start text-center mt-5">
                  Unleash Your Business’s Full Potential: Get a Website Audit
                  and Expert Advice from Our Seasoned Google Ads Professionals
                </p>

                <div className="mt-10 flex gap-5 items-center lg:flex-row flex-col">
                  <Image
                    src={"/images/hsdgvc.webp"}
                    alt="trust by many brands"
                    width={250}
                    height={55}
                  />
                  <p className="text-base lg:text-start text-center">
                    Fielmente: Hospitality Google Ads Agency Trusted by many
                    brands around the globe
                  </p>
                </div>

                <div className="flex mt-5 lg:justify-start justify-center">
                  {/* <Link
                    href={"/"}
                    className="bg-white px-8 font-medium py-3 rounded-full text-black text-base"
                  >
                    Connect With Our Experts
                  </Link> */}
                  <ContactBtn3 text="Connect With Our Experts" />
                </div>

                <p className="text-lg text-center mt-10">
                  Get Started Now: Let’s Work Together to Ignite Your Brand’s
                  Online Growth
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Form  */}
      <ContactOldSection />
    </section>
  );
}

const Card = ({
  title,
  subtitle,
  icon,
  link,
}: {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
}) => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl flex flex-col gap-3">
      <div className="flex justify-center">
        <Image src={icon} alt="icon" width={85} height={85} />
      </div>
      <h2 className="text-3xl text-center font-bold text-black">{title}</h2>
      <p className="text-black text-lg text-center">{subtitle}</p>
      <div>
        <div className="flex justify-center mt-5">
          <Link
            href={link}
            className="bg-black px-9 font-medium py-3 rounded-2xl text-white text-lg"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardTwo = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) => {
  return (
    <div className="bg-[#333742] px-4 py-10 rounded-[3rem] flex gap-6 items-center shadow-xl lg:flex-row flex-col ">
      <div className="relative max-w-28 w-full aspect-[4/3] lg:mx-0 mx-auto">
        <Image
          src={image}
          alt="images"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold text-white lg:text-start text-center">
          {title}
        </h2>
        <p className="text-white text-base mt-2 lg:text-start text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default page;
