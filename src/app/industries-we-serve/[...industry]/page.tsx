import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Banner2 from "./components/Banner2";
import BenefitsSection from "./components/BenefitsSection";
import Clients from "./components/Clients";
import Clients2 from "./components/Clients2";
import ConnectSection from "./components/ConnectSection";
import EnquirySection from "./components/EnquirySection";
import FaqSection from "./components/FaqSection";
import GridCard from "./components/GridCard";
import MarketingStrategy from "./components/MarketingStrategy";
import Milestone from "./components/Milestone";
import Need2 from "./components/Need2";
import SubPageBanner from "./components/SubPageBanner";
import Testimonials from "./components/Testimonials";
import WhyNeed from "./components/WhyNeed";
import WhyNeedSeo from "./components/WhyNeedSeo";
import WhyNeedWebsite from "./components/WhyNeedWebsite";
import WhyToJoin from "./components/WhyToJoin";
import WhyYouNeedGrid from "./components/WhyYouNeedGrid";
import { subPageData } from "./components/subPageData";
import { industriesData } from "./pageData";
interface Params {
  params: Promise<{
    industry: string[];
  }>;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateStaticParams() {
  const industries = await industriesData;
  const subPages = await subPageData;
  const paths = industries.map((industry) => industry.slug);
  const subPaths = subPages.map((industry) => industry.slug);

  const allPaths = [...paths, ...subPaths];
  return allPaths.map((path) => ({
    industry: typeof path === "string" ? path.split("/") : path,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const path = await params;
  const slug = await path.industry[0];
  const industry = industriesData.find((ind) => ind.slug === slug);
  const subPage = subPageData.find(
    (ind) => ind.slug.split("/").join("/") === slug
  );
  if (industry) {
    return {
      title: industry?.metaData?.title,
      description: industry?.metaData?.description,
      alternate: {
        canonical: `https://fielmente.com/industries-we-serve/${industry?.slug}/`,
      },
      openGraph: {
        title: industry?.metaData?.title,
        description: industry?.metaData?.description,
        url: `https://fielmente.com/industries-we-serve/${industry?.slug}/`,
        siteName: "Fielmente",
        locale: "en_IN",
        type: "website",
        images: [
          {
            url: `https://fielmente.com/industries-we-serve/${industry?.slug}-og.png`,
            width: 1200,
          },
        ],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
    };
  } else if (subPage) {
    return {
      title: subPage?.metaData?.title,
      description: subPage?.metaData?.description,
      alternate: {
        canonical: `https://fielmente.com/industries-we-serve/${subPage?.slug}/`,
        languages:{
          "en_US": `https://fielmente.com/industries-we-serve/${subPage?.slug}/`,
        }
      },
      openGraph: {
        title: subPage?.metaData?.title,
        description: subPage?.metaData?.description,
        url: `https://fielmente.com/industries-we-serve/${subPage?.slug}/`,
        siteName: "Fielmente",
        locale: "en_IN",
        type: "website",
        
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
    };
  } else {
    return {
      title: "Industry Not Found - Fielmente",
      description:
        "The industry you are looking for does not exist. Please check the URL and try again.",
      robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      },
    };
  }
}

export default async function IndustryPage({ params }: Params) {
  const data = await params;
  const slug = await data.industry;
  if (!slug) {
    return (
      <main className="mt-10">
        <h1>Industry Not Found</h1>
      </main>
    );
  }

  if (slug.length === 1) {
    const industry = industriesData.find((ind) => ind.slug === slug[0]);

    return (
      <main className="mt-10">
        {industry?.banner && <GridCard {...industry.banner} />}
        {industry?.banner2 && <Banner2 {...industry.banner2} />}
        {industry?.MarketingStrategy && <MarketingStrategy {...industry.MarketingStrategy} />}
        {industry?.section2 && <GridCard {...industry.section2} index={1} />}
        {industry?.stats && <Milestone stats={industry.stats} />}
        {industry?.whyNeedWebsite && <WhyNeedWebsite {...industry.whyNeedWebsite} />}
        {industry?.whyNeedSEO2 && <WhyYouNeedGrid {...industry.whyNeedSEO2} index={1} />}
        {industry?.whyNeedInfluencerMarketing && <WhyYouNeedGrid {...industry.whyNeedInfluencerMarketing} />}
        {industry?.powerOfSocialMedia && <MarketingStrategy {...industry.powerOfSocialMedia} />}
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
        {industry?.enquiry2 && <EnquirySection {...industry.enquiry2} />}
      </main>
    );
  }
  if (slug.length > 1) {
    const subPageSlug = subPageData.find(
      (ind) => ind.slug.split("/").join("/") === slug.join("/")
    );
    if (!subPageSlug) {
      return (
        <main className="mt-10">
          <h1>Sub Page Not Found</h1>
        </main>
      );
    }
    return (
      <main className="mt-10">
        {subPageSlug?.banner && <SubPageBanner {...subPageSlug?.banner} />}
        <div className="max_width h-px bg-[#D1D5DB] my-4" />
        {subPageSlug?.benefitsSection && (
          <BenefitsSection {...subPageSlug?.benefitsSection} />
        )}
        <div className="max_width h-px bg-[#D1D5DB] my-4" />
        {subPageSlug?.connectSection && (
          <ConnectSection {...subPageSlug?.connectSection}/>
        )}
        {subPageSlug?.clients && <Clients2 {...subPageSlug.clients} />}
        {subPageSlug?.whyToJoinSection && (
          <WhyToJoin {...subPageSlug.whyToJoinSection} />
        )}
        {subPageSlug?.faq && (
          <FaqSection {...subPageSlug.faq} />
        )}
      </main>
    );
  }
}
  