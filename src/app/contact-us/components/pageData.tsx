import { homePageData } from "@/app/(home)/homePageData";
import { ClientImages } from "@/utils/client";

export const contactUsPageData = {
  clients: {
    title: "Trusted by <span>120+ hotels</span> worldwide",
    clients: ClientImages,
  },
  businessPartners: homePageData.businessPartnersData.cards,
};
