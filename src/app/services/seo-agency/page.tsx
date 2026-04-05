import Image from "next/image";
import Link from "next/link";

// import Form from "@/app/about-fielmente-best-hospitality-marketing-agency/components/Form";
import Container from "@/components/sectionComponants/Container";
import Section from "@/components/sectionComponants/Section";

import type { Metadata } from "next";
import ContactBtn3 from "../contactbtn/ContactBtn3";
import ContactOldSection from "@/components/commonSections/ContactOldSection";

export const metadata: Metadata = {
  title: "India's Leading Hospitality SEO Agency - Fielmente",
  description:
    "Fielmente: Your trusted hospitality SEO agency, providing targeted marketing services for hotels, restaurants, cloud kitchens, and resorts.",
  alternates: {
    canonical:
      "https://fielmente.com/hospitality-marketing-services/seo-agency/",
    languages: {
      "en-US":
        "https://fielmente.com/hospitality-marketing-services/seo-agency/",
    },
  },
  openGraph: {
    title: "India's Leading Hospitality SEO Agency - Fielmente",
    description:
      "Fielmente: Your trusted hospitality SEO agency, providing targeted marketing services for hotels, restaurants, cloud kitchens, and resorts.",
    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const CardData1 = [
  {
    title: "Hotel SEO",
    subtitle:
      "If you are looking for the best hotel advertisement company, look no further.",
    icon: "/images/HOTEL-MARKETING.webp",
    link: "/industries-we-serve/hotel-marketing-agency/hotel-seo",
    label: "Boost Rankings",
  },
  {
    title: "Cloud Kitchen SEO",
    subtitle:
      "If you are looking for the best cloud kitchen promotion, look no further.",
    icon: "/images/CLOUD-KITCHEN-MARKETING.webp",
    link: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-seo",
    label: "Increase Orders",
  },
  {
    title: "Restaurant SEO",
    subtitle:
      "If you are looking for the best restaurant advertising, look no further.",
    icon: "/images/RESTAURANT-MARKETING.webp",
    link: "/",
    label: "Attract Diners",
  },
];

const CardData2 = [
  {
    title: "Website Analysis",
    subtitle:
      "Gain insights into your previous SEO efforts and their impact on your business.",
    image: "/images/SEO-11.webp",
  },
  {
    title: "Keyword Research",
    subtitle:
      "Uncover competitive keywords that will drive quality traffic to your site.",
    image: "/images/SEO-15.webp",
  },
  {
    title: "Competitive Research",
    subtitle: "Stay ahead by understanding your competitors' moves.",
    image: "/images/SEO-10-1.webp",
  },
  {
    title: " Technical & Local SEO",
    subtitle:
      "Fine-tune the technical aspects for a seamless user experience. | Target and reach local customers searching for your restaurant or hotel.",
    image: "/images/SEO-14.webp",
  },
  {
    title: "Content Strategy",
    subtitle:
      "Engaging content that captivates your audience and boosts your rankings.",
    image: "/images/SEO-06.webp",
  },
];

const CardData3 = [
  {
    title: "Expertise",
    subtitle: "A team of seasoned professionals dedicated to your success.",
    image: "/images/monthly-remport-1-1024x588-1.webp",
    color: "#E9D175",
  },
  {
    title: "Customization",
    subtitle: "Tailored strategies to fit your unique business needs.",
    image: "/images/SearchEngineOptimization-1024x588-1.webp",
    color: "#9896FF",
  },
  {
    title: "Innovation",
    subtitle: "Staying ahead with cutting-edge SEO techniques.",
    image: "/images/adwords-and-search-engine-marketing.webp",
    color: "#E9D175",
  },
  {
    title: " Patnership",
    subtitle: "Collaborating closely for mutual growth and prosperity",
    image: "/images/GoogleAdwordsTargeting-1024x588-1.webp",
    color: "#9896FF",
  },
];

function page() {
  return (
    <section className="bg-[#1E1928] pt-10">
      <div className="bg-[#1E1928] text-white py-20">
        <div className="max_width">
          {/* Revolutionize Your Business with Fielmente   */}
          <div className="lg:grid grid-cols-2 items-center gap-4 flex flex-col-reverse">
            <div className="flex flex-col gap-8">
              <h1 className="lg:text-4xl/[2.9rem] text-2xl lg:text-start text-center">
                Revolutionize Your Business with Fielmente, the Hospitality SEO
                Agency that Unleashes True Potential!
              </h1>
              <p className="text-white lg:text-base text-base lg:text-start text-center">
                Fielmente, India’s premier Hospitality SEO Agency, where success
                awaits! Boost your online presence and skyrocket revenue with
                our cutting-edge strategies.
              </p>
              <p className="text-white lg:text-base text-base lg:text-start text-center">
                Embrace the full potential of your business with personalized
                solutions tailored for the hospitality industry. Welcome to a
                new era of growth and prosperity!
              </p>

              <div className="flex lg:justify-start justify-center">
                {/* <Link
                  href={"/"}
                  className="bg-white px-9 shadow-2xl hover:bg-black hover:text-white shadow-gray-400 font-medium py-3 rounded-full text-black lg:text-base text-base"
                >
                  Know More
                </Link> */}
                <ContactBtn3 text="Get Hospitality SEO Audit" />
              </div>
            </div>
            <div className="w-full">
              <div className="max-w-[260px] mx-auto aspect-[4/5] relative">
                <Image
                  src={"/images/SEO-01-1.webp"}
                  alt="girl"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Milestones*** */}
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 py-10 max-w-[1080px] mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                100+
              </h2>
              <p className="lg:text-base text-[.7rem] font-medium text-white text-center">
                REVIEWS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                88%
              </h2>
              <p className="lg:text-base text-[.7rem] font-medium text-white text-center">
                INCREASE IN ROAS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                70+
              </h2>
              <p className="lg:text-base text-[.7rem] font-medium text-white text-center">
                HOTELIERS TRUST US
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                90+
              </h2>
              <p className="lg:text-base text-[.7rem] font-medium text-white text-center">
                PROJECTS COMPLETED
              </p>
            </div>
          </div>

          {/* cards**** */}
          {/* <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 lg:px-20 border-t pt-6 border-b-gray-700 ">
            {CardData1.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div> */}

          {/* Why is SEO Important for Your Hospitality Business?  */}
          <div className="max_width">
            <div className="lg:grid lg:grid-cols-2 items-center mt-10 ">
              <div className="w-full">
                <div className="relative w-[460px] aspect-[4/4] lg:block hidden">
                  <Image
                    src={"/images/manwithlaptop.jpg"}
                    alt="circular-social"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                <div className="relative max-w-[460px] w-full aspect-[4/4] max-md:mx-auto lg:mt-5">
                  <Image
                    src={"/images/WD-10.webp"}
                    alt="circular-social"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div>
                <h2 className="lg:text-4xl text-3xl font-bold mt-6 lg:mt-0 lg:text-start text-center">
                  Why is SEO Important for Your Hospitality Business?
                </h2>

                <p className="lg:text-base text-base mt-8 lg:text-start text-center">
                  Discover the recipe for success as a restaurant, hotel or
                  Cloud Kitchen in the digital age with Fielmente, the top
                  hospitality SEO agency in India.
                </p>
                <p className="lg:text-base text-base mt-8 lg:text-start text-center">
                  Rule the search engine results, attract a steady stream of
                  customers, and ignite real revenue growth. Rocket your
                  business with our professional SEO services, going beyond mere
                  rankings!
                </p>

                <div className="mt-10 flex flex-col gap-3">
                  {CardData2.map((item, index) => (
                    <CardTwo key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fielmente's Social Media Marketing Approach**** */}
          <div className="lg:grid grid-cols-2 gap-6 items-center mt-5 flex flex-col-reverse">
            <div className="flex flex-col gap-8">
              <h2 className="lg:text-4xl text-3xl lg:text-start text-center">
                Driving Success Through Revenue-Focused SEO Strategies
              </h2>
              <p className="text-white lg:text-base text-base lg:text-start text-center">
                Fielmente understands it’s about RESULTS, not just rankings. Our
                hospitality SEO Agency in India drives increased organic
                traffic, ensuring substantial revenue growth. Partner with us
                for unparalleled success!
              </p>

              <div className="flex lg:justify-start justify-center">
                {/* <Link
                  href={"/"}
                  className="bg-white px-12 font-medium py-5 rounded-full text-black lg:text-base text-base"
                >
                  Get Started
                </Link> */}
                <ContactBtn3 text={"Generate Revenue From SEO"} />
              </div>
            </div>
            <div className="w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/5]">
                <Image
                  src={"/images/Girlwithpen.webp"}
                  alt="girl"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-center lg:text-4xl text-3xl  font-bold">
              {`The Clear Choice for Elevating Your Brand's Digital Presence`}
            </h2>
            <p className="text-center lg:text-base text-base mt-6">
              Why brands prefer Us? Fielmente. the leading hospitality SEO
              agency in India, as we deliver tangible and measurable results.
              Standout performance and unwavering excellence set us apart.
              Experience with us:
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10 sm:px-16">
              {CardData3.map((item, index) => (
                <CardThree {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="mt-20 py-12">
            <h2 className="text-center lg:text-4xl text-3xl font-bold">
              Join Our Circle of Thriving Brands
            </h2>
            <p className="text-center lg:text-base text-base mt-6">
              Don’t just take our word for it. Discover the stories of
              businesses like yours that have achieved remarkable success with
              Fielmente’s SEO services. Read our testimonials and see how we’ve
              transformed brands into online powerhouses in our Hospitality SEO
              Agency
            </p>
            <div className="flex justify-center mt-16">
              {/* <Link
                href={"/"}
                className="bg-white px-16 py-5 rounded-full lg:text-base text-base font-semibold duration-300 text-black"
              >
                Get Started
              </Link> */}
              <ContactBtn3 text={"View Hospitality SEO Results"} />
            </div>
            <p className="mt-32 text-center lg:text-4xl text-3xl font-semibold">
              Amplify Your Impact with Our Comprehensive Digital Marketing
              Solutions
            </p>
          </div>
        </div>
      </div>

      <Section className="py-12 bg-[#15151D] text-white">
        <Container>
          <div className="grid md:grid-cols-5 gap-10 items-center ">
            <div className="md:col-span-2 w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/4]">
                <Image
                  src={"/images/SEO-12.webp"}
                  alt="girl-with-chart"
                  fill
                  className="object-cover rounded-[4rem]"
                />
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-8">
              <div className="max-w-[700px]">
                <h2 className="lg:text-4xl text-3xl lg:text-start text-center font-bold">
                  {`Let's Ignite Your Social Media Growth Together`}
                </h2>

                <p className="text-white lg:text-base text-base mt-5 lg:text-start text-center">
                  Fielmente, the premier hospitality social marketing agency,
                  employs custom content planning, precise scheduling, and
                  strategic campaigns aligned with your business goals. We
                  ensure your brand shines brightly in the spotlight and keep
                  you informed when conversations about your business ignite.
                </p>

                <div className="mt-10 flex gap-5 items-center lg:flex-row flex-col">
                  <Image
                    src={"/images/hsdgvc.webp"}
                    alt="trust by many brands"
                    width={250}
                    height={55}
                  />
                  <p className="text-base">
                    Trusted by many brands around the globe
                  </p>
                </div>

                <div className="flex mt-5 lg:justify-start justify-center">
                  {/* <Link
                    href={"/"}
                    className="bg-white px-12 font-medium py-5 rounded-full text-black lg:text-base text-base"
                  >
                    Get Started
                  </Link> */}
                  <ContactBtn3 text={"Accelerate Growth"} />
                </div>

                <p className="text-base text-center mt-10">
                  Partner with Fielmente’s expert hospitality social media
                  marketing team to elevate your brand and dominate the digital
                  landscape. Embrace your potential today.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <div className="py-20 bg-black">
        <div className="max_width ">
          {/* <Form title={"Looking to discuss with us?"} color={"black"} /> */}
        </div>
      </div>
      <ContactOldSection />
    </section>
  );
}

const Card = ({
  title,
  subtitle,
  icon,
  link,
  label,
}: {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
  label: string;
}) => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl flex flex-col gap-3">
      <div className="flex justify-center">
        <Image src={icon} alt="icon" width={85} height={85} />
      </div>
      <h2 className="text-3xl text-center font-bold text-black">{title}</h2>
      <p className="text-black text-center ">{subtitle}</p>
      <div>
        <div className="flex justify-center mt-5">
          <Link
            href={link}
            className="bg-black px-9 font-medium py-3 rounded-2xl text-white text-xl"
          >
            {label}
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
    <div className="bg-[#333742] px-6 py-4 rounded-[3rem] flex lg:flex-row flex-col gap-6 items-start">
      <div className="relative max-w-28 w-full aspect-[4/3] lg:mx-0 mx-auto">
        <Image
          src={image}
          alt="images"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white lg:text-start text-center">
          {title}
        </h2>
        <p className="text-white text-base mt-2 lg:text-start text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const CardThree = ({
  title,
  subtitle,
  image,
  color,
}: {
  title: string;
  subtitle: string;
  image: string;
  color: string;
}) => {
  return (
    <div
      className=" px-7 py-7 rounded-[3rem] gap-6"
      style={{ background: color }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="lg:text-3xl text-2xl font-bold text-black lg:text-start text-center">
          {title}
        </h2>
        <p className="text-black text-base max-md:text-center mt-2">
          {subtitle}
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            href={"/"}
            className="hover:text-white text-xl font-semibold duration-300 text-black"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] mx-auto mt-10">
        <Image
          src={image}
          alt="circular-socail"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default page;
