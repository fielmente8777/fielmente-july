import {
  FillFaceBookIcon,
  FillLinkedinIcon,
  FillLocationIcon,
  FillMailIcon,
  FillPhoneIcon,
  OutLineXIcon,
} from "@/utils/icons";
import { contacts } from "../../../contact";
import { AiFillInstagram } from "react-icons/ai";

interface Link {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterLinksPropstype {
  logo: string;
  description: string;
  linksData: {
    title: string;
    listOfLinks: Link[];
    icon?: React.ReactNode;
  }[];
}

// Labels are read by screen readers and count as link text for search engines, so name each network.
export const SocialLinks: Link[] = [
  {
    label: "LinkedIn",
    href: contacts.socialContacts.linkedin,
    icon: <FillLinkedinIcon />,
  },
  {
    label: "Facebook",
    href: contacts.socialContacts.facebook,
    icon: <FillFaceBookIcon />,
  },
  {
    label: "Instagram",
    href: contacts.socialContacts.instagram,
    icon: <AiFillInstagram />,
  },
  {
    label: "X (Twitter)",
    href: contacts.socialContacts.twitter,
    icon: <OutLineXIcon />,
  },
];

export const footerData: FooterLinksPropstype = {
  logo: "/logo2.png",
  description: "© Fielmente Hospitality Marketing Agency",
  linksData: [
    {
      title: "Follow Fielmente",
      listOfLinks: SocialLinks,
    },
    {
      title: "Company",
      listOfLinks: [
        {
          label: "About",
          href: "/about-fielmente-best-hospitality-marketing-agency/",
        },
        {
          label: "Industries We Serve",
          href: "/industries-we-serve/",
        },
        {
          label: "Our Products",
          href: "/products/",
        },
        {
          label: "Services",
          href: "/hospitality-marketing-services/",
        },
        {
          label: "Our Work",
          href: "/our-work/",
        },
        // {
        //   label: "Career",
        //   href: "",
        // },
        {
          // Blog posts link to /blogs/ as "Blogs" in their breadcrumb.
          label: "Hotel Marketing Blog",
          href: "/blogs/",
        },
        {
          label: "Success Stories",
          href: "/case-study/",
        },
        {
          label: "Testimonials",
          href: "/testimonials/",
        },
        {
          label: "Our Clients",
          href: "/our-clients/",
        },
        {
          label: "Our Partners",
          href: "/our-partners/",
        },
        {
          label: "Contact Us",
          href: "/contact-us/",
        },
        // {
        //   label: "Our Team",
        //   href: "",
        // },
      ],
    },
    {
      title: "Top Services",
      listOfLinks: [
        {
          label: "Hotel Marketing",
          href: "/industries-we-serve/hotel-marketing-agency/",
        },
        {
          label: "Hotel Social Media Marketing",
          href: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
        },
        {
          label: "Hotel SEO",
          href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
        },
        {
          label: "Social Media Management",
          href: "/hospitality-marketing-services/social-media-marketing-agency/",
        },
        {
          label: "Search Engine Optimization (SEO)",
          href: "/hospitality-marketing-services/seo-agency/",
        },
        {
          // The header menu already has a "Performance Marketing" link (to another page).
          label: "Google Ads Management",
          href: "/hospitality-marketing-services/google-ads-agency/",
        },
        {
          label: "Restaurant Social Media Marketing",
          href: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/",
        },
        {
          label: "Restaurant Marketing",
          href: "/industries-we-serve/restaurant-marketing-agency/",
        },
        {
          label: "Cloud Kitchen Marketing",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/",
        },
        {
          label: "Cloud Kitchen SEO",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-seo/",
        },
        {
          label: "Cloud Kitchen Social Media Marketing",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media/",
        },
        {
          label: "Cloud Kitchen Ads",
          href: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-google-ads/",
        },
      ],
    },
    {
      title: "Offices",
      listOfLinks: [
        ...contacts.addressesInIndia.map((address) => ({
          label: `Gurugram office: ${address.address}`,
          href: address.mapUrl,
          icon: <FillLocationIcon />,
        })),
      ],
    },
    {
      title: "Contact",
      // "Call …" / "Email …": many pages also list the bare number and address in their content,
      // and the same link text twice on a page is flagged by SEO checkers.
      listOfLinks: [
        ...contacts.phone.map((phone) => ({
          label: `Call ${phone}`,
          href: `tel:${phone.replace(/\s+/g, "")}`,
          icon: <FillPhoneIcon />,
        })),
        ...contacts.email.map((email) => ({
          label: `Email ${email}`,
          href: `mailto:${email}`,
          icon: <FillMailIcon />,
        })),
      ],
    },
  ],
};
export const landingFooterData: FooterLinksPropstype = {
  logo: "/logo2.png",
  description: "© Fielmente Hospitality Marketing Agency",
  linksData: [
    {
      title: "Offices",
      icon: <FillLocationIcon />,
      listOfLinks: [
        ...contacts.addressesInIndia.map((address) => ({
          label: address.address,
          href: address.mapUrl,
          icon: <FillLocationIcon />,
        })),
      ],
    },
    {
      title: "Contact",
      icon: <FillPhoneIcon />,
      listOfLinks: [
        ...contacts.phone.map((phone) => ({
          label: phone,
          href: `tel:${phone}`,
          icon: <FillPhoneIcon />,
        })),
        ...contacts.email.map((email) => ({
          label: email,
          href: `mailto:${email}`,
          icon: <FillMailIcon />,
        })),
      ],
    },
  ],
};

export const policyLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy/",
  },
  {
    label: "Terms of Use",
    href: "/terms-and-conditions/",
  },
];
