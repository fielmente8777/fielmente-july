import { SectionWithContainer } from "@/components";
import { Metadata } from "next";
import { commonPageData } from "../cloud-kitchen-digital-marketing/component/commonpageData";
import Milestone from "../industries-we-serve/[...industry]/components/Milestone";
import GridCard from "../industries-we-serve/[...industry]/components/GridCard";
import WhyNeed from "../industries-we-serve/[...industry]/components/WhyNeed";
import WhyNeedSeo from "../industries-we-serve/[...industry]/components/WhyNeedSeo";
import Need2 from "../industries-we-serve/[...industry]/components/Need2";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import Clients from "../industries-we-serve/[...industry]/components/Clients";
import Testimonials from "../industries-we-serve/[...industry]/components/Testimonials";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency India | Restuarant Marketing Company",
  description:
    "Looking for your restaurant marketing success? Fielmente is the leading restaurant marketing agency in India and boosting your restaurant's digital presence. Contact us!",
  alternates: {
    canonical: "https://fielmente.com/food-and-beverage-marketing-solutions/",
    languages: {
      "en-US": "https://fielmente.com/food-and-beverage-marketing-solutions/",
    },
  },
  openGraph: {
    title: "Restaurant Marketing Agency India | Restuarant Marketing Company",
    description:
      "Looking for your restaurant marketing success? Fielmente is the leading restaurant marketing agency in India and boosting your restaurant's digital presence. Contact us!",
    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

function page() {
  const industry = commonPageData[1];
  return (
    <main className="bg-white pt-10">
      {industry?.banner && <GridCard {...industry.banner} />}
      {industry?.section2 && <GridCard {...industry.section2} index={1} />}
      {industry?.stats && <Milestone stats={industry.stats} />}
      {industry?.whyNeed && <WhyNeed {...industry.whyNeed} />}
      {industry?.whyNeedSeo && <WhyNeedSeo {...industry.whyNeedSeo} />}
      {industry?.need2 && <Need2 {...industry.need2} />}
      {industry?.Enquiry && (
        <SectionWithContainer>
          <div className="bg-primary2 max-w-5xl mx-auto py-16 max-md:px-4 flex flex-col items-center gap-8">
            <SectionHeading
              title={industry.Enquiry.title}
              subTitle={industry.Enquiry.description}
              titleColor="white"
              subTitleColor="white"
              titleClassName="md:text-xl font-normal"
              icon={false}
              textCenter
              wrapperClassName="gap-4"
            />
            <CtaBtn
              label={industry.Enquiry.cta.label}
              type={industry.Enquiry.cta.type}
              icon="arrow"
              iconClass="bg-transparent! text-tertiary"
              className="w-fit text-tertiary md:text-xl bg-transparent border-tertiary rounded-full"
            />
          </div>
        </SectionWithContainer>
      )}
      {industry?.clients && <Clients {...industry.clients} />}
      {industry?.testimonials && <Testimonials {...industry.testimonials} />}
    </main>
  );
}

export default page;
