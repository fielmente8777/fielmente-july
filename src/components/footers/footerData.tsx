import {
  FillFaceBookIcon,
  FillLinkedinIcon,
  FillLocationIcon,
  FillMailIcon,
  FillPhoneIcon,
  OutLineXIcon
} from "@/utils/icons";
import { contacts } from "../../../contact";

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

export const SocialLinks: Link[] = [
  {
    label: Object.keys(contacts.socialContacts)[2],
    href: contacts.socialContacts.linkedin,
    icon: <FillLinkedinIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[0],
    href: contacts.socialContacts.facebook,
    icon: <FillFaceBookIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[2],
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
          href: "",
        },
        {
          label: "Industries We Serve",
          href: "",
        },
        {
          label: "Services",
          href: "",
        },
        {
          label: "Our Work",
          href: "",
        },
        {
          label: "Career",
          href: "",
        },
        {
          label: "Blogs",
          href: "",
        },
        {
          label: "Success Stories",
          href: "",
        },
        {
          label: "Contact Us",
          href: "",
        },
        {
          label: "Our Team",
          href: "",
        },
      ],
    },
    {
      title: "Top Services",
      listOfLinks: [
        {
          label: "Hotel Marketing ",
          href: "",
        },
        {
          label: "Hotel Social Media",
          href: "",
        },
        {
          label: "Hotel SEO",
          href: "",
        },
        {
          label: "Resort Marketing",
          href: "",
        },
        {
          label: "Resort Social Media",
          href: "",
        },
        {
          label: "Resort SEO",
          href: "",
        },
        {
          label: "Restaurant Social Media",
          href: "",
        },
        {
          label: "Restaurant Marketing",
          href: "",
        },
        {
          label: "Restaurant SEO",
          href: "",
        },
      ],
    },
    {
      title: "Offices",
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
    href: "/terms-of-use/",
  },
];
