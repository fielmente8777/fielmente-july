import { homePageData } from "@/app/(home)/homePageData";
import { SocialLinks } from "@/components/footers/footerData";
import { ClientImages } from "@/utils/client";
import { FillLocationIcon, FillMailIcon, FillPhoneIcon } from "@/utils/icons";
import { contacts } from "../../../../contact";
import { BtnType } from "@/@types/@types";

const btnType: BtnType = "link";

export const landingPageData = [
  {
    slug: "landing-page",
    metaData: {
      title: "India's Leading Hotel Marketing Agency | Fielmente",
      description:
        "Trusted by 120+ hotels across India, UAE & UK. Increase direct bookings by 30-50% with Fielmente’s hotel marketing strategies and AI tools.",
    },

    heroSection: {
      title:
        "Grow Your Hotel’s Direct and OTA Bookings by <span>30 - 50%</span>",
      subtitle: "Trusted by 120+ Hotels & Resorts Across India, UAE & UK",
      description:
        "Worked with more than 500+ brands since 2020 across the globe we help to increase revenue through our marketing strategies and Eazotel product",
      cta: "Get A FREE Consultation!",
      images: ["/home/Frame-3.png", "/landing-pages/images.png"],
    },
    businessPartnersData: {
      title: "Our <span>Business</span> Partners",
      cards: [
        {
          imgSrc: "/partners/google-partner.png",
          title: "google-partner",
        },
        // {
        //   imgSrc: "/trello.png",
        //   title: "trello",
        // },
        {
          imgSrc: "/partners/meta-business-partner.png",
          title: "meta-business-partner",
        },
        {
          imgSrc: "/partners/zoho-corporation.png",
          title: "zoho-corporation",
        },
        {
          imgSrc: "/partners/aws.png",
          title: "aws",
        },
        {
          imgSrc: "/partners/Booking.Com.png",
          title: "Booking.Com",
        },
        {
          imgSrc: "/partners/razorpay.png",
          title: "razorpay",
        },

        {
          imgSrc: "/partners/agoda-logo.png",
          title: "agoda-logo",
        },
        {
          imgSrc: "/partners/airbnb-logo.png",
          title: "airbnb-logo",
        },
        {
          imgSrc: "/partners/goibibo-logo.png",
          title: "goibibo-logo",
        },
        {
          imgSrc: "/partners/makemytrip-logo.png",
          title: "makemytrip-logo",
        },
        {
          imgSrc: "/partners/cleartrip-logo.png",
          title: "cleartrip-logo",
        },
      ],
    },

    aboutSection: {
      title: "About Fielmente",
      subTitle:
        "Grow Your Hotel’s Direct and OTA Bookings by <span>30 - 50%</span>",
      description: [
        "Since 2020, Fielmente has helped hotels increase direct bookings and reduce OTA dependency with smart digital marketing.",
        "Let's Unlock Your Hotel's <span>Growth</span>",
      ],
      points: [
        {
          src: "/landing-pages/about1.jpg",
          list: [
            "Digital marketing strategies <span class='text-[#85A7DA]'>designed specifically for hotels, resorts, and vacation rentals — helping</span> you attract more guests and increase direct bookings.",
            "Performance Marketing On",
          ],
        },
        {
          src: "/landing-pages/about2.jpg",
          list: ["Growth-Focused Marketing", "SEO | Ads | OTA Optimization"],
        },
      ],
      stats: {
        no: "500+",
        list: [
          "Hotels & Resorts Served",
          "Hospitality brands across India, UAE & UK trust <span class='text-color4'>Fielmente</span> to grow their direct bookings.",
        ],
        growthPercentage: [
          {
            value: "40%",
            label: "Direct Booking Growth",
            progress: 4,
          },
          {
            value: "95%",
            label: "Client Retention",
            progress: 10,
          },
          {
            value: "2.4× ROAS",
            label: "Campaign Performance",
            progress: 3,
          },
        ],
      },
      cta: {
        label: "Book My Free Consultation Call",
        type: btnType,
        href: contacts.WhatsAppCta,
        target: "_blank",
      },
    },

    industriesSection: {
      title: "Industries we serve",
      subTitle: "Hospitality Industries We Help <span>Grow</span>",
      description:
        "We help hospitality brands attract more guests, increase direct bookings, and grow revenue with targeted digital marketing.",
      cards: [
        {
          imgSrc: "/home/im8.webp",
          title: "Hotel Marketing",
          desc: "Increase occupancy and direct bookings",
        },
        {
          imgSrc: "/home/im7.webp",
          title: "Resort Marketing",
          desc: "Fill weekends & off-season with targeted campaigns",
        },
        {
          imgSrc: "/home/im6.webp",
          title: "Home Stay Marketing",
          desc: "Rank locally on Google & drive direct bookings",
        },
        {
          imgSrc: "/home/im5.webp",
          title: "Airbnb Marketing",
          desc: "Attract more guests & reduce commission costs",
        },
        {
          imgSrc: "/home/im4.webp",
          title: "Villas Marketing",
          desc: "Promote luxury stays & attract high-value travelers",
        },
        {
          imgSrc: "/home/im3.webp",
          title: "Glamping Marketing",
          desc: "Boost visibility & appeal to experience-seeking guests",
        },
        {
          imgSrc: "/home/im2.webp",
          title: "Cafe Marketing",
          desc: "Enhance presence & attract coffee lovers searching nearby",
        },
        {
          imgSrc: "/home/im1.webp",
          title: "Restaurant Marketing",
          desc: "Drive attention & reach foodies looking for dining spots",
        },
      ],
    },

    readyToGrowSection: {
      title: "Contact Us",
      // subTitle: "Ready to Grow Your Hospitality Business?",
      subTitle: "Grow Your Hotel Resort Business?",
      description:
        "Join 120+ hospitality brands already growing their direct revenue. Let's build a strategy tailored to your property.",
      src: "/landing-pages/grow-Card.jpg",
      ctaS: [
        // {
        //   label: "View Case Studies",
        //   type: btnType,
        //   href: contacts.WhatsAppCta,
        //   target: "_blank",
        // },
        {
          label: "Book a Free Strategy Call",
          type: btnType,
          href: contacts.WhatsAppCta,
          target: "_blank",
        },
      ],
    },

    servicesSection: {
      title: "Our Services",
      subTitle: "Everything Your Hotel Needs to <span>Book Direct</span>",
      points: [
        "<span class='text-primary! font-medium' >120+ hotels</span> served",
        "<span class='text-primary! font-medium' >+38%</span> avg. direct revenue lift",
        "⭐ <span class='text-primary! font-medium' >4.8</span> client satisfaction",
      ],
      services: [
        {
          src: "/landing-pages/hotel-website-development.png",
          label: "MOST POPULAR",
          title: "Hotel Website Development",
          description:
            "High converting websites designed to increase direct bookings.",
          result: "+30% direct reservations within 60 days",
          cta: {
            label: "Get a Demo",
            type: btnType,
            href: contacts.WhatsAppCta,
            target: "_blank",
          },
        },
        {
          src: "/landing-pages/performance-marketing.png",
          title: "Performance Marketing",
          description: "High ROI Google & Meta ads that drive direct bookings.",
          result: "Avg. 2.4× ROAS",
          cta: {
            label: "See Case Study",
            type: btnType,
            href: contacts.WhatsAppCta,
            target: "_blank",
          },
        },
        {
          src: "/landing-pages/seo-for-hotel.png",
          title: "SEO for Hotels",
          description:
            "Rank higher on Google and attract booking ready travelers.",
          result: "Top 3 in 90 days on average",
          cta: {
            label: "Book a free SEO audit",
            type: btnType,
            href: contacts.WhatsAppCta,
            target: "_blank",
          },
        },
        {
          src: "/landing-pages/local-seo.png",
          title: "Local SEO",
          description:
            "Google Business optimisation & map pack domination for walk ins and same day bookings.",
          cta: {
            label: "Check your local rankings",
            type: btnType,
            href: contacts.WhatsAppCta,
            target: "_blank",
          },
        },
        {
          src: "/landing-pages/social-media-management.png",
          title: "Social Media Management",
          description:
            "Strategy, creation & community management across Instagram, Facebook & TikTok.",
          cta: {
            label: "See our content work",
            type: btnType,
            href: contacts.WhatsAppCta,
            target: "_blank",
          },
        },
        {
          src: "/landing-pages/ota-management.png",
          title: "OTA Management",
          description:
            "Listings, rate parity & ranking optimisation across Booking.com, Expedia & Airbnb.",
          cta: {
            label: "Audit my OTA listing",
            type: btnType,
            href: contacts.WhatsAppCta,
            target: "_blank",
          },
        },
      ],
      ctaCard: {
        title: "Not sure where to start?",
        description:
          "Free 15-minute strategy call. No sales pitch. Just clear growth advice.",
        cta: {
          label: "Book My Free Consultation Call",
          type: btnType,
          href: contacts.WhatsAppCta,
          target: "_blank",
        },
      },
    },

    productsData: {
      title: "OUR PRODUCTS",
      subTitle: "AI Tools That Grow Bookings & Enhance Guest Experience",
      description:
        "Our AI-powered hotel tools are built to increase direct bookings, cut OTA costs, and enhance guest experiences — helping you grow revenue while streamlining operations.<br/>Trusted by 120+ hotels & resorts worldwide",
      cta: {
        label: "Get a Demo",
        type: btnType,
        href: contacts.WhatsAppCta,
        target: "_blank",
      },
      cards: homePageData.productsData.cards,
    },

    resultsSection: {
      title: "Proven Results",
      heading: "Increase Direct Bookings and Reduce OTA Commission Costs.",
      stats: [
        {
          value: "95%",
          label: "Client Retention",
          description: "Hotels & Resorts choose to stay with us",
        },
        {
          value: "500<span class='text-color4'>+</span>",
          label: "Properties Served",
          description: "From boutique homestays to luxury resorts",
        },
        {
          value: "1,000<span class='text-color4'>+</span>",
          label: "Campaigns Delivered",
          description: "Driving direct bookings & revenue growth",
        },
      ],
      cta: {
        label: "Contact Us",
        type: btnType,
        href: contacts.WhatsAppCta,
        target: "_blank",
      },
    },

    growthSection: {
      title: "Boost Occupancy & Reduce OTA Costs with Fielmente",
      subTitle:
        "Let us handle your Hotel Marketing Services & grow your <span>occupancy rate by 5X</span>",
      points: [
        {
          title: "Drive Direct Bookings",
          description:
            "Increase direct reservations by 40%+ through SEO, ads & optimized booking engines",
          src: "/landing-pages/direct-booking.png",
        },
        {
          title: "Beat Competitors",
          description:
            "Rank above other hotels in your market and capture guests first.",
          src: "/landing-pages/beat-competitors.png",
        },
        {
          title: "Ongoing Optimization",
          description:
            "Daily performance tracking to maximize ROI and booking flow",
          src: "/landing-pages/ongoing-optimization.png",
        },
      ],
      cta: {
        label: "Get a Demo",
        type: btnType,
        href: contacts.WhatsAppCta,
        target: "_blank",
      },
    },

    countriesSection: {
      title: "COUNTRIES WE WORKED",
      subTitle:
        "Fielmente delivering value & impactful solutions since <span>2020</span>",
      src: "/map-base.png",
    },
    servicesTitles: [
      "SEARCH ENGINE OPTIMIZATION",
      "PERFORMANCE MARKETING",
      "WEBSITE DESIGN & DEVELOPMENT",
      "SOCIAL MEDIA MANAGEMENT",
    ],
    ourClient: {
      title: "Our <span>Clients</span>",
      clients: ClientImages,
    },
    contactSection: {
      title: "Contact Us",
      subTitle: "Get in touch with Us",
      description:
        "Get in touch with our team to discover how we can help your hotel grow online and increase revenue.",
      listOfLinks: [
        {
          links: contacts.email.map((email) => ({
            label: email,
            href: `mailto:${email}`,
            icon: <FillMailIcon />,
            title: "Email:",
          })),
        },
        {
          links: contacts.phone.map((phone) => ({
            label: phone,
            href: `tel:${phone}`,
            icon: <FillPhoneIcon />,
            title: "Phone:",
          })),
        },
        {
          links: contacts.addressesInIndia.map((address) => ({
            label: address.address,
            href: address.mapUrl,
            icon: <FillLocationIcon />,
            title: "Address:",
          })),
        },
        {
          title: "Follow Fielmente:",
          links: SocialLinks.map((link) => ({
            label: link.label,
            href: link.href,
            icon: link.icon,
          })),
        },
      ],
      images: ["/landing-pages/contact-section.jpg"],
    },
  },
];
