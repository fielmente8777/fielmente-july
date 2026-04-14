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
import { notFound } from "next/navigation";
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
  const slugArray = path.industry;

  if (!slugArray || slugArray.length === 0) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const fullSlug = slugArray.join("/");

  // ✅ Level 1 (industry)
  if (slugArray.length === 1) {
    const industry = industriesData.find((ind) => ind.slug === slugArray[0]);

    if (!industry) {
      return {
        title: "Page Not Found",
        robots: { index: false, follow: false },
      };
    }

    return {
      title: industry.metaData?.title,
      description: industry.metaData?.description,
      alternates: {
        canonical: `https://fielmente.com/industries-we-serve/${industry.slug}/`,
      },
      openGraph: {
        title: industry.metaData?.title,
        description: industry.metaData?.description,
        url: `https://fielmente.com/industries-we-serve/${industry.slug}/`,
        siteName: "Fielmente",
        locale: "en_IN",
        type: "website",
        images: [
          {
            url: `https://fielmente.com/industries-we-serve/${industry.slug}-og.png`,
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
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  // ✅ Level 2+ (subpages)
  const subPage = subPageData.find((ind) => ind.slug === fullSlug);

  if (!subPage) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: subPage.metaData?.title,
    description: subPage.metaData?.description,
    alternates: {
      canonical: `https://fielmente.com/industries-we-serve/${subPage.slug}/`,
    },
    openGraph: {
      title: subPage.metaData?.title,
      description: subPage.metaData?.description,
      url: `https://fielmente.com/industries-we-serve/${subPage.slug}/`,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/fielmente_logo.png",
          width: 1200,
          height: 630,
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
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function IndustryPage({ params }: Params) {
  const data = await params;
  const slug = await data.industry;
  if (!slug || slug.length === 0) {
    notFound();
  }
  if (slug.length === 1) {
    const industry = industriesData.find((ind) => ind.slug === slug[0]);
    if (!industry) {
      notFound();
    }
    return (
      <main className="mt-10">
        {industry?.banner && <GridCard {...industry.banner} />}
        {industry?.banner2 && <Banner2 {...industry.banner2} />}
        {industry?.MarketingStrategy && (
          <MarketingStrategy {...industry.MarketingStrategy} />
        )}
        {industry?.section2 && <GridCard {...industry.section2} index={1} />}
        {industry?.stats && <Milestone stats={industry.stats} />}
        {industry?.whyNeedWebsite && (
          <WhyNeedWebsite {...industry.whyNeedWebsite} />
        )}
        {industry?.whyNeedSEO2 && (
          <WhyYouNeedGrid {...industry.whyNeedSEO2} index={1} />
        )}
        {industry?.whyNeedInfluencerMarketing && (
          <WhyYouNeedGrid {...industry.whyNeedInfluencerMarketing} />
        )}
        {industry?.powerOfSocialMedia && (
          <MarketingStrategy {...industry.powerOfSocialMedia} />
        )}
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
      notFound();
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
          <ConnectSection {...subPageSlug?.connectSection} />
        )}
        {subPageSlug?.clients && <Clients2 {...subPageSlug.clients} />}
        {subPageSlug?.whyToJoinSection && (
          <WhyToJoin {...subPageSlug.whyToJoinSection} />
        )}
        {subPageSlug?.faq && <FaqSection {...subPageSlug.faq} />}
      </main>
    );
  }
}
