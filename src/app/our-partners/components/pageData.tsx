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
        label: "Book a Demo",
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
      label: "Book a Demo",
      href: "/contact-us",
      type: btnType,
    },
  },
  ctaSection: {
    title: "Start growing with Fielmente",
    description:
      "Run your hotel operations effortlessly with our free plan. Upgrade anytime to unlock advanced automation, integrations, and revenue tools.",
    ctas: [
      {
        label: "Try Fielmente",
        href: "/contact-us",
      },
      {
        label: "Book a Demo",
        href: "/contact-us",
      },
    ],
  },
  partners: homePageData.businessPartnersData.cards,
};
