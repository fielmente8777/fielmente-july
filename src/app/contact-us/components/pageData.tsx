import { homePageData } from "@/app/(home)/homePageData";
import { ClientImages } from "@/utils/client";

export const contactUsPageData = {
  clients: {
    title: "Trusted by <span>120+ hotels</span> worldwide",
    clients: ClientImages,
  },
  businessPartners: homePageData.businessPartnersData.cards,
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
};
