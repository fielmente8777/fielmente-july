import { ClientImages } from "@/utils/client";
import { contacts } from "../../../../contact";
import { FillLinkedinIcon, OutLineInstagramIcon } from "@/utils/icons";

export const aboutUsPageData = {
  bannerData: {
    title: "ABOUT US",
    description: [
      "Fielmente partners with hotels and resorts to enhance their digital presence, increase direct bookings, and drive sustainable revenue growth through strategic marketing, technology-led solutions, and deep industry understanding.",
    ],
    images: ["/about/banner.png"],
  },

  partnersData: {
    title: "Trusted by Leading Hospitality Brands",
    images: ClientImages,
  },

  aboutSection: {
    title: "About Us",
    subTitle: "KNOW MORE ABOUT US",
    description: [
      "Welcome to Fielmente, your trusted hospitality marketing company. I Sachin Kapoor founded Fielmente with a passion for hospitality and marketing after completing my Masters in Hospitality from WGSHA, Manipal, and gaining Sales & Marketing experience from Marriott & Hyatt in September 2020. We are a team of 15+ hospitality marketing experts who make sure about your business growth and take care about your Hospitality venture online reputation.",
      "Our strategic consulting services craft tailored marketing strategies to boost bookings, build your brand, and expand your reach, elevating your hospitality business with results-driven, creative marketing.",
    ],
    images: ["/about/founder.png"],
    links: [
      {
        label: "Linkedin Profile",
        href: contacts.socialContacts.linkedin,
        icon: <FillLinkedinIcon />,
      },
      {
        label: "Instagram Profile",
        href: contacts.socialContacts.instagram,
        icon: <OutLineInstagramIcon />,
      },
    ],
  },

  ideasSection: {
    title: "OUR IDEAS",
    subtitle: "INNOVATIVE HOSPITALITY MARKETING SOLUTIONS IN INDIA",
    description: [
      "Know About <span class='text-[#0D54EB]'>Fielmente</span>, we are your passionate F&B and hospitality marketing consultant! Since 2020, we’ve been crafting brands with creativity and problem-solving flair. Our love for innovation drives us as digital marketing consultants to ensure your successful future. Let’s embark on this exciting journey together – reach out today, and let’s kickstart your captivating branding adventure",
    ],
    images: ["/about/ideas.png"],
  },

  marketingSection: {
    title: "MORE ABOUT US",
    subtitle: "PIONEERING HOTEL & RESTAURANT MARKETING COMPANY IN INDIA",
    description: [
      "Get to know about Fielmente, your dedicated F&B and hospitality marketing consultant! Share your dreams, and we’ll listen closely, delivering clear and timely social media progress reports to keep you assured of our positive impact. Just tell us about your hotel, restaurant, cloud kitchen or resort business, and we’ll work our magic, spreading the word far and wide across all social media platforms. Let’s create an unforgettable digital journey together!",
    ],
    images: ["/about/marketing.png"],
  },

  statsData: {
    src: "/about/stats.png",
    items: [
      {
        value: "120",
        label: "Completed Projects",
      },
      {
        value: "95%",
        label: "Satisfaction Rate",
      },
      {
        value: "8+",
        label: "Years of Experience",
      },
    ],
  },

  uniqueSection: {
    title: "WHAT MAKES US <span class='text-color4'>UNIQUE?</span>",
    description: [
      "Fielmente, the premier hospitality digital marketing consultant, knows that F&B businesses have unique needs. Our personalized strategies build trust, authority, and drive extreme growth, tailored to your hotel and restaurant’s success!",
    ],
    images: [
      "/about/unique-1.jpg",
      "/about/unique-2.jpg",
      "/about/unique-3.png",
    ],
    link: {
      label: "Get Started",
      href: "#",
    },
  },

  collaborationSection: {
    src: "/home/countries.png",
    title: "GET STARTED",
    subTitle: "Let s Work Together!",
    description: [
      "Get a free consultation and let us know your restaurants and hotel business idea to turn it into an amazing digital asset.",
    ],

    action: {
      label: "Schedule a Call",
      href: "#",
    },
  },
};
