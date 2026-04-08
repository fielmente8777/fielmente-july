import Image from "next/image";
import Link from "next/link";

// import Form from "@/app/about-fielmente-best-hospitality-marketing-agency/components/Form";
import type { Metadata } from "next";
import ContactBtn3 from "../contactbtn/ContactBtn3";
import ContactOldSection from "@/components/commonSections/ContactOldSection";

export const metadata: Metadata = {
  title: "India's Best Hospitality Social Media Marketing Agency - Fielmente",
  description:
    "Rocket your brand's online presence with Fielmente, the top hospitality social media marketing agency. Boost success with our expert!",
  alternates: {
    canonical:
      "https://fielmente.com/services/social-media-marketing-agency/",
    languages: {
      "en-US":
        "https://fielmente.com/services/social-media-marketing-agency/",
    },
  },
  openGraph: {
    title: "India's Best Hospitality Social Media Marketing Agency - Fielmente",
    description:
      "Rocket your brand's online presence with Fielmente, the top hospitality social media marketing agency. Boost success with our expert!",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const CardData1 = [
  {
    title: "Hotel Social Media",
    subtitle: "If you are looking for the best hotel seo, look no further.",
    link: "/industries-we-serve/hotel-marketing-agency/hotel-social-media",
  },
  {
    title: "Cloud Kitchen Social Media",
    subtitle:
      "If you are looking for the best cloud kitchen promotion, look no further.",
    link: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media",
  },
  {
    title: "Restaurant Social Media",
    subtitle:
      "If you are looking for the best restaurant seo, look no further.",
    link: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media",
  },
];

const CardData2 = [
  {
    title: "Social Media Calendar",
    subtitle:
      "A well-planned content calendar to make sure that your posts are always interesting and consistent.",
    image: "/images/SMM-10.webp",
  },
  {
    title: "Content Creation",
    subtitle:
      "Content creation means making content that is compelling and interesting and sticks with your audience.",
    image: "/images/SMM-13.webp",
  },
  {
    title: "Social Media Campaigns",
    subtitle:
      "Campaigns that are planned strategically to get the most engagement and sales.",
    image: "/images/SMM-14-1.webp",
  },
  {
    title: "Facebook, Twitter & Linkedin Ads",
    subtitle:
      "Targeted ads can help you reach more people and raise brand awareness, visibility of your brand, reach professionals and people who make decisions.",
    image: "/images/SMM-08.webp",
  },
];

function page() {
  return (
    <section className="bg-[#1E1928] pt-10">
      <div className="bg-[#1E1928] text-white py-20">
        <div className="max_width">
          {/* Hospitality Social Media Marketing:***** */}
          <div className="lg:grid grid-cols-2 gap-4 flex flex-col-reverse">
            <div className="flex flex-col gap-8">
              <h1 className="lg:text-4xl/[3rem] text-2xl/[1.9rem] lg:text-start text-center">
                Hospitality Social Media Marketing: Forge lasting bonds with
                customers, fueling exponential business growth!
              </h1>
              <p className="text-gray-primary lg:text-xl text-lg lg:text-start text-center">
                At Fielmente, our expertise lies in crafting hospitality social
                media marketing campaigns and content with a remarkable ROI,
                elevating brand visibility, nurturing customer relationships,
                and driving sales like never before.
              </p>

              <div className="flex lg:justify-start justify-center">
                {/* <Link
                  href={"/"}
                  className="bg-white px-12 font-medium py-3 shadow-2xl shadow-gray-500 rounded-full text-black lg:text-xl text-lg
                  hover:bg-black hover:text-white transition-all duration-300"
                >
                  Know More
                </Link> */}
                <ContactBtn3 text="Know More" />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="max-w-[260px] w-full relative mx-auto aspect-[4/4]">
                <Image
                  src={"/images/Girl.jpg"}
                  alt="girl"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 lg:px-20 border-b border-b-gray-700 pb-5">
            {CardData1.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
          {/* Why is Social Media Marketing Important for Your Business?*** */}
          <div className="grid lg:grid-cols-2 items-center mt-10">
            <div className="w-full">
              <div className="relative w-full aspect-[4/3.5]">
                <Image
                  src={"/images/social-circle.webp"}
                  alt="circular-social"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="lg:text-3xl text-2xl lg:text-start text-center font-bold">
                Why is Social Media Marketing Important for Your Business?
              </h2>

              <p className="lg:text-lg text-base lg:text-start text-center mt-8">
                Embrace the power of social media in the digital era with
                Fielmente, the leading hospitality social media marketing
                agency. Connect with your target audience, showcase your brand’s
                personality, and soar to new heights in the restaurant or hotel
                industry. With billions of active users on platforms like
                Facebook, Twitter, and Instagram, social media can be a
                game-changer for your business.
              </p>

              <div className="mt-10 flex flex-col gap-2">
                {CardData2.map((item, index) => (
                  <CardTwo key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          {/* Fielmente's Social Media Marketing Approach**** */}
          <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-6 items-center mt-5">
            <div className="flex flex-col gap-8">
              <h2 className="lg:text-4xl text-3xl lg:text-start text-center font-bold">
                {`Fielmente's Social Media Marketing Approach`}
              </h2>
              <p className="text-white text-lg lg:text-start text-center">
                Fielmente, the premier hospitality social marketing agency,
                employs custom content planning, precise scheduling, and
                strategic campaigns aligned with your business goals. We ensure
                your brand shines brightly in the spotlight and keep you
                informed when conversations about your business ignite.
              </p>

              <div className="flex lg:justify-start justify-center">
                {/* <Link
                  href={"/"}
                  className="bg-white px-8 font-medium py-3 shadow-2xl shadow-gray-500 hover:bg-black hover:text-white rounded-full text-black lg:text-xl text-lg"
                >
                  Get Started
                </Link> */}
                <ContactBtn3 text="Get Started" />
              </div>
            </div>
            <div className="w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/5]">
                <Image
                  src={"/images/Grilwithsocial.webp"}
                  alt="girl-with-social-image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center mt-5">
            <div className="md:col-span-2 w-full  md:justify-end lg:flex hidden">
              <div className="relative max-w-[400px] w-full aspect-[4/4]">
                <Image
                  src={"/images/Twowomenmeet.webp"}
                  alt="girl"
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

                <p className="text-white text-lg max-md:text-base lg:text-start text-center mt-5">
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
                  <p className="text-lg">
                    Trusted by many brands around the globe
                  </p>
                </div>

                <div className="flex mt-5 lg:justify-start justify-center">
                  {/* <Link
                    href={"/"}
                    className="bg-white px-8 font-medium py-3 shadow-2xl shadow-gray-500 hover:bg-black hover:text-white rounded-full text-black lg:text-xl text-lg"
                  >
                    Get Started
                  </Link> */}
                  <ContactBtn3 text="Get Started" />
                </div>

                <p className="text-lg text-center mt-10">
                  Partner with Fielmente’s expert hospitality social media
                  marketing team to elevate your brand and dominate the digital
                  landscape. Embrace your potential today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactOldSection />
    </section>
  );
}

const Card = ({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl">
      <h2 className="text-4xl text-center font-bold text-black">{title}</h2>
      <p className="text-black text-lg text-center">{subtitle}</p>
      <div>
        <div className="flex justify-center mt-5">
          <Link
            href={link}
            className="bg-black px-10 font-medium py-3 rounded-2xl text-white text-xl"
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
    <div className="bg-[#333742] py-4 px-6 rounded-[3rem] flex gap-6 items-start lg:flex-row flex-col">
      <div className="relative max-w-[7rem] h-[7rem] w-full aspect-[4/4] lg:mx-0 mx-auto">
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
