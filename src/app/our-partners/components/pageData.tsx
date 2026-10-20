import { BtnType } from "@/@types/@types";
import { homePageData } from "@/app/(home)/homePageData";

const btnType: BtnType = "button";

export const ourPartnersPageData = {
  banner: {
    subTitle: "Partner with Fielmente",
    description:
      "Scale your hotel business with powerful tools, seamless integrations, and partners you already trust.",
    cta: [
      {
        label: "Get started",
        href: "/contact-us",
      },
      {
        label: "Book a Free Consultation",
        href: "/contact-us",
      },
    ],
  },
  builtPowerfulPartners: {
    title: "Built on <span>Powerful</span> Partners",
    description:
      "Our ecosystem includes top-tier technology and business partners to ensure reliability, performance, and growth.",
    cards: homePageData.businessPartnersData.cards,
    cta: {
      label: "Book a Free Consultation",
      href: "/contact-us",
      type: btnType,
    },
  },
  ctaSection: {
    title: "Start growing with Fielmente",
    description:
      "Tell us about your property and get a free marketing audit with a plan to grow your direct bookings.",
    ctas: [
      {
        label: "Get a Free Audit",
        href: "/contact-us",
      },
      {
        label: "Book a Free Consultation",
        href: "/contact-us",
      },
    ],
  },
  partners: homePageData.businessPartnersData.cards,
};
