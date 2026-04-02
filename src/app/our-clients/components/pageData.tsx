import { BtnType } from "@/@types/@types";
import { ClientImages } from "@/utils/client";

const btnType: BtnType = "button";
const btnType2: BtnType = "link";

export const clientPageData = {
  bannerData: {
    title: "Powering hospitality businesses across India",
    subTitle: "Our Clients",
    description:
      "Helping hospitality businesses streamline operations, increase direct bookings, and grow revenue with an all-in-one platform.",
  },
  clientSection: {
    title: "Trusted by <span>leading</span> hospitality brands",
    description:
      "Built for hotels to simplify operations, grow direct bookings, and elevate guest experience.",
    cta: {
      label: "Vew All Clients",
      href: "#All-clients",
      type: btnType2,
    },
    clients: ClientImages.map((client) => ({
      imgSrc: client.src,
      title: client.alt,
      className: client.className,
    })),
  },
  brandsScaledWithUs: {
    title: "Brands That Scaled With Us",
    description:
      "From independent hotels to multi-location chains, our clients rely on Eazotel to simplify operations and maximize revenue.",
    client: ClientImages,
  },
  ctaSection: {
    title: "Ready to grow your hotel business?",
    description:
      "Join 120+ hotels already using Eazotel to drive direct bookings and streamline operations.",
    cta: {
      label: "Book a Demo",
      href: "",
      type: btnType,
    },
  },
};
