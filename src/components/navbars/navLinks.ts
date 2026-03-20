import { NavLinksProps } from "@/@types/@types";

export const navLinks: NavLinksProps[] = [
  {
    label: "About Us",
    href: "/about-fielmente-best-hospitality-marketing-agency",
  },
  {
    label: "Industry we serve",
    href: "/industries-we-serve",
    subLinks: [
      {
        label: "Hotel Marketing",
        href: "/industries-we-serve/hotel-marketing-agency",
        subLinks: [
          {
            label: "Hotel Social Media",
            href: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
          },
          {
            label: "Hotel Ads",
            href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/",
          },
          {
            label: "Hotel SEO",
            href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
          },
        ],
      },
      {
        label: "Restaurant Marketing",
        href: "/industries-we-serve/restaurant-marketing-agency/",
        subLinks: [
          {
            label: "Restaurant Social Media",
            href: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/",
          },
        ],
      },
      {
        label: "Cloud Kitchen Marketing",
        href: "/industries-we-serve/cloud-kitchen-marketing-agency/",
        subLinks: [
          {
            label: "Cloud Kitchen Social Media",
            href: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media/",
          },
        ],
      },
    ],
  },
  // {
  //   label: "Hotel Marketing",
  //   href: "/industries-we-serve/hotel-marketing-agency",
  //   subLinks: [
  //     {
  //       label: "Hotel Social Media",
  //       href: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
  //     },
  //     {
  //       label: "Hotel Ads",
  //       href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/",
  //     },
  //     {
  //       label: "Hotel SEO",
  //       href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
  //     },
  //     // {
  //     //   label: "Hotel PR Services",
  //     //   href: "/hotelprservices",
  //     // },
  //   ],
  // },
  {
    label: "services",
    href: "/hospitality-marketing-services/",
    subLinks: [
      {
        label: " Social Media Marketing",
        href: "/hospitality-marketing-services/social-media-marketing-agency/",
      },
      {
        label: "Search Engine Optimization (SEO)",
        href: "/hospitality-marketing-services/seo-agency/",
      },
      {
        label: "Paid Ad Campaigns",
        href: "/hospitality-marketing-services/google-ads-agency/",
      },
      {
        label: "hotel OTA management",
        href: "/hotel-ota-management/",
      },
    ],
  },
  {
    label: "Resources",
    href: "",
    subLinks: [
      {
        label: "Blog",
        href: "/blogs/",
      },
      {
        label: "Success Stories",
        href: "/case-study/",
      },
      {
        label: "Our Clients",
        href: "/our-clients/",
      },
      {
        label: "Our Work",
        href: "https://www.eazotel.com/our-work",
      },
    ],
  },
  {
    label: "contact us",
    href: "/contact-us",
  },
  // {
  //   label: "blogs",
  //   href: "/blogs",
  // },
];
