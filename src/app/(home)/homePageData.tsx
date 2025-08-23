import { ClientImages } from "@/utils/client";
import {
  BestServicesIcon,
  CompeteEffectivelyIcon,
  ConsultIcon,
  DriveDirectBookingIcon,
  ExecuteIcon,
  ProfessionalIcon,
  RealTimeOptimizationIcon,
  StrategiseIcon,
  SupportIcon,
} from "@/utils/icons";
import { data } from "@/utils/testimonialsData";

export const homePageData = {
  bannerData: {
    imgSrc: "/banner_11zon.jpg",
    title: "Fielmente - India’s Leading",
    subTitle: `<span>Hospitality Marketing </span><i>Agency</i>`,
    description:
      "Boost Your Online Presence, Drive More Bookings, and Grow Your Hospitality Business with AI-Driven Digital Strategies.",
  },
  marketingPartnersData: {
    cards: [
      {
        imgSrc: "/google.png",
        title: "google",
      },
      {
        imgSrc: "/trello.png",
        title: "trello",
      },
      {
        imgSrc: "/razorpay.png",
        title: "razorpay",
      },
      {
        imgSrc: "/slack.webp",
        title: "slack",
      },
      {
        imgSrc: "/aws.png",
        title: "aws",
      },
    ],
  },
  aboutCompanyData: {
    title: "About Company",
    subTitle: `AI-Powered Hotel Marketing for <b>Smart Hospitality Growth!</b>`,
    description: [
      "Transforming hospitality industry businesses into thriving destinations with expert, end-to-end marketing. From social media marketing to search engine optimization and paid campaigns, Fielmente crafts compelling brand stories that attract guests and drive growth.",
      "Collaborate with Fielmente! Let's change the landscape of Hospitality together!",
    ],
    listData: [
      "Leading marketing agency for hotels and resorts",
      "120+ hospitality projects delivered since 2020 with results",
      "95% client satisfaction across all campaigns.",
    ],
    imgSrc: ["/im1.png", ""],
    linksData: [
      {
        label: "Contact Us",
        href: "",
      },
    ],
  },
  servingHospitalityData: {
    title: "Diverse Solutions for a Wide Range of <b>Hospitality Industry</b>",
    description: [
      "Choose Fielmente as your digital marketing partner to transform your hospitality business with assured success and innovation.",
    ],
    cards: [
      {
        imgSrc: "/home/im8.webp",
        title: "Hotel",
      },
      {
        imgSrc: "/home/im7.webp",
        title: "Resort",
      },
      {
        imgSrc: "/home/im6.webp",
        title: "Home Stay",
      },
      {
        imgSrc: "/home/im5.webp",
        title: "Airbnb",
      },
      {
        imgSrc: "/home/im4.webp",
        title: "Villas",
      },
      {
        imgSrc: "/home/im3.webp",
        title: "Glamping",
      },
      {
        imgSrc: "/home/im2.webp",
        title: "Cafe",
      },
      {
        imgSrc: "/home/im1.webp",
        title: "Restaurant",
      },
    ],
  },
  servicesData: {
    title: "AI-Powered Services for your <b>Modern Hospitality Brand</b>",
    links: [
      {
        label: "Explore all Services",
        href: "",
      },
    ],
    cards: [
      {
        imgClassName: "w-[20rem] aspect-square",
        imgWrapperClassName: "-top-[9rem] -right-10 z-20",
        imgSrc: "/home/sv1.webp",
        title: "Website Development",
        description:
          "We design fast, SEO-friendly websites tailed to your hospitality brand. We ensure a smooth and engaging experience from design to launch.",
      },
      {
        imgClassName: "w-[13.5rem] aspect-square",
        imgWrapperClassName: "-top-[5rem] right-1 z-20",
        imgSrc: "/home/sv2.webp",
        title: "Search Engine Optimization",
        description:
          "Boost online visibility and drive quality traffic with expert SEO using targeted keywords, and smart technical optimization for higher search rankings.",
      },
      {
        imgClassName: "w-[14rem] aspect-square",
        imgWrapperClassName: "-top-[5rem] right-1 z-20",
        imgSrc: "/home/sv3.webp",
        title: "Performance Marketing",
        description:
          "Maximize ROI with performance marketing that delivers results. From ads to conversion tracking, we optimize every campaign to drive growth.",
      },
    ],
  },
  howItWorksData: {
    title: "How It Works",
    subTitle: "Behind The Scene at Fielmente",
    description: [
      "These are the foundation of our hospitality marketing agency's approach, aimed of successfully growing your hospitality business, leading to success.",
    ],
    cards: [
      {
        icon: <ConsultIcon />,
        title: "Consult",
        description:
          "We guide you through every step of your hospitality marketing journey, offering expert advice to increase your hotel occupancy and revenue. Our experts are dedicated to enhance your hotel and restaurant digital presence.",
      },
      {
        icon: <StrategiseIcon />,
        title: "Strategise",
        description:
          "We design data-driven, personalised digital marketing strategies for your hospitality business. Leveraging hospitality industry insights, consumer trends, and innovative approaches to create a roadmap.",
      },
      {
        icon: <ExecuteIcon />,
        title: "Execute",
        description:
          "Most vital stage is putting plans into action. We execute the designed strategies, manage campaigns, and monitor performance to ensure your hotel and restaurant brand stands out.",
      },
    ],
  },
  milestone: [
    {
      number: "95%",
      description: "Achieved 95% client satisfaction",
    },
    {
      number: "500+",
      description: "Hospitality Properties We Served",
    },
    {
      number: "1k+",
      description: "Delivered over 1,000 client projects",
    },
  ],
  chooseUsData: {
    title: "Why Choose Us",
    subTitle: `AI-Driven Innovations for the <b>Hospitality Industry</b>`,
    cards: [
      {
        icon: <BestServicesIcon />,
        title: "SAVE YOUR TIME",
        subTitle: "Best Services",
        color: "#F26633",
        description:
          "We are committed to provide quality services. We make sure that each and every detail is paid attention to and only the best is presented to you. We plan and work as a team so that no area is left untouched. We bring ideas to life and serve you the incomparable!",
      },
      {
        icon: <ProfessionalIcon />,
        title: "ALL YOU NEED",
        subTitle: "Professional",
        color: "#F2B203",
        description:
          "We're a team of qualified & experienced individuals who work together through thick & thin. We have worked with various clients and our greatest ethical responsibility has always been to constantly strive for excellence in everything we do. ",
      },
      {
        icon: <SupportIcon />,
        title: "DEDICATED SUPPORTS",
        subTitle: "Support",
        color: "#110D3C",
        description:
          "We are here to help you get through all your concerns. We are always available in sorting out your issues throughout your journey. We would love to hear from you no matter what, in order to deliver the best. We value your business and are here to support you.",
      },
    ],
  },
  ourWork: {
    title: "Our Work",
    subTitle:
      "Glimpse into Our Client Works that <b>Made an</b> <i>Impact!</i>",
    description:
      "Highlighting exceptional client projects and celebrating collaborations that drive innovation and results.",
    imagesSrc: ["/ourWork/client1.webp", "/ourWork/client2.webp", "/ourWork/client3.webp"],
    linksData: [
      {
        label: "Contact Us",
        href: "",
      },
    ],
  },
  servicesTitles: [
    "WEBSITE DESIGN & DEVELOPMENT",
    "SEARCH ENGINE OPTIMIZATION",
    "SOCIAL MEDIA MANAGEMENT",
    "PERFORMANCE MARKETING",
  ],
  countriesWeWorkedIn: {
    title: "COUNTRIES WE WORKED",
    subTitle:
      "Delivering AI-Driven Hospitality Marketing <b>Solutions Globally Since 2020</b>",
    imagesSrc: ["/home/country.png"],
  },
  maximizeGrowthData: {
    title: "MAXIMIZE YOUR HOTEL GROWTH",
    subTitle:
      "Let us handle your Hotel Marketing Services &</br> <b>grow your occupancy rate by 5X</b>",
    cards: [
      {
        icon: <DriveDirectBookingIcon />,
        title: "Drive Direct Bookings",
        description:
          "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
      },
      {
        icon: <CompeteEffectivelyIcon />,
        title: "Compete Effectively",
        description:
          "Stand out from competitors in search results, capturing the attention of potential guests and gaining a competitive edge.",
      },
      {
        icon: <RealTimeOptimizationIcon />,
        title: "Real-Time Optimization",
        description:
          "Continuously monitor and optimize your campaigns to improve performance, maximize ROI, and drive more bookings.",
      },
    ],
    links: [
      {
        label: "Schedule a Call",
        href: "",
      },
    ],
  },
  ourValuedClientsData: {
    title: "Our Valued Hospitality Clients",
    cards: ClientImages,
  },
  testimonialsData: {
    title: "TESTIMONIALS",
    subTitle: "See What our <strong>Hospitality</strong> Clients have to Say!",
    cards: data,
    links: [
      {
        label: "Contact Us",
        href: "",
      },
    ],
  },
  addscardsData: {
    title: "Elevate your <b>Hospitality Brand Today!</b>",
    description:
      "Ready to transform your digital presence? Let's create magic together. Book our <b>Hospitality Marketing Services</b> now!",
    links: [
      {
        label: "Schedule Call",
        href: "",
      },
    ],
  },
  faqsData: {
    title: "Frequently Asked Questions!",
    cards: [
      {
        question:
          "What industries do you specialize in for digital marketing and website development?",
        answer:
          "We specialize in the hospitality industry—hotels, resorts, restaurants, air bnb, home stay, glamping and cafes—offering tailored digital marketing and web development solutions that drive direct bookings and enhance online presence.",
      },
      {
        question: "How long does it take to build a website with Fielmente?",
        answer:
          "Typically, our website development process takes 3–6 weeks, depending on the complexity, features required, and client feedback. We ensure timely delivery without compromising on quality.",
      },
      {
        question:
          "What makes Fielmente different from other hospitality marketing agencies?",
        answer:
          "Fielmente combines industry-specific expertise with creative storytelling and data-driven strategies. Our end-to-end solutions—from branding to SEO—are built to boost occupancy, engagement, and ROI.",
      },
    ],
  },
};
