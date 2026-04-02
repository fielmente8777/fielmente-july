import { BtnType } from "@/@types/@types";
import { casStudiesData } from "../[story]/components/caseData";

const btn: BtnType = "button";

export const caseStudyPageData = {
  bannerData: {
    title: "Case Studies",
    subTitle: "Real Results from Real Hotels",
    description:
      "See how properties like yours achieved measurable growth with Fielmente",
  },
  casStudyClientSection: {
    title: "How Hotels Are Scaling with Fielmente",
    cards: casStudiesData.map((item) => ({
      src: item.img,
      title: item.title,
      description: item.description,
      slug: item.slug,
    })),
  },
  ctaData: {
    title: "Want Results Like These?",
    description: "Let's discuss how Eazotel can transform your property.",
    cta: {
      label: "Book a Demo",
      href: "",
    },
  },
};
