import { casStudiesData } from "../[story]/components/caseData";

export const caseStudyPageData = {
  bannerData: {
    title: "Case Studies",
    subTitle: "Real Results from Real Hotels, Resorts and Restaurants",
    description:
      "See how hotels, resorts and restaurants like yours grew with Fielmente, with the numbers and where they came from",
  },
  casStudyClientSection: {
    title: "How Hotels Are Scaling with Fielmente",
    cards: casStudiesData.filter((item) => item.data?.length).map((item) => ({
      src: item.img,
      title: item.title,
      description: item.description,
      slug: item.slug,
      imgBg: item.imgBg,
    })),
  },
  ctaData: {
    title: "Want Results Like These?",
    description: "Let's discuss what Fielmente can do for your property's direct bookings.",
    cta: {
      label: "Book a Free Consultation",
      href: "",
    },
  },
};
