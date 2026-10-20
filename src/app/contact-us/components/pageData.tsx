import { homePageData } from "@/app/(home)/homePageData";
import { ClientImages } from "@/utils/client";

export const contactUsPageData = {
  clients: {
    title: "Trusted by <span>500+ hotels</span> worldwide",
    clients: ClientImages,
  },
  businessPartners: homePageData.businessPartnersData.cards,
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
};
