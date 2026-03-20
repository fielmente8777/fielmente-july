import { ClientImages } from "@/utils/client";
import {
  AiFrontDeskIcon,
  AiReservationDeskIcon,
  AiSearchOptimizationIcon,
  BookingEngineIcon,
  CmsIcon,
  ConsultIcon,
  CustomizedHotelMarketingSolutions,
  EffectiveHotelPerformanceMarketingIcon,
  ExceptionalHotelWebsiteDevelopment,
  ExecuteIcon,
  LocalSeoIcon,
  OptimizedForSearchEngines,
  OtaManagementIcon,
  PaymentGatewayIcon,
  PreOpeningMarketingIcon,
  SocialMediaIcons,
  StrategicSocialMediaMarketingForHotel,
  StrategiseIcon,
  WebsiteBuilderIcon,
  WebsiteSeoIcon,
  WhatsAppMarketingIcon,
} from "@/utils/homeIcons";
import {
  FillFaceBookIcon,
  FillLinkedinIcon,
  OutLineXIcon,
} from "@/utils/icons";
import { data } from "@/utils/testimonialsData";
import { contacts } from "../../../contact";
import { blogData } from "@/utils/blogdata";

export const homePageData = {
  bannerData: {
    imgSrc: "/Banner.png",
    title: "Trusted by 120+ Hotels & Resorts Worldwide",
    subTitle: `Increase <b>Direct Resort Bookings by up to 40%</b> Without OTAs`,
    description:
      "Boost Your Online Presence, Drive More Bookings, and Grow Your Hospitality Business with AI-Driven Digital Strategies through India’s best Hospitality Marketing Company.",
    cta: {
      label: "Get a FREE Quote",
      href: "",
    },
    milestone: [
      { number: "120+", description: "Hotels Served" },
      { number: "95%", description: "Client Retention" },
      { number: "4X", description: "Avg. Campaign ROI" },
    ],
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
      // {
      //   imgSrc: "/slack.webp",
      //   title: "slack",
      // },
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

  aboutCompanyData: {
    src: "/home/about.png",
    title: "ABOUT COMPANY",
    subTitle: `Grow Your Hotel’s Direct and OTA Bookings by <span>30 - 50%</span>`,
    description: [
      "We help hotels, resorts, and vacation rentals reduce OTA commissions and boost occupancy with AI-driven hospitality marketing strategies.",
    ],
    listData: [
      "95% client retention rate from satisfied partners",
      "Average 40% increase in direct bookings within 3 months",
      "120+ hotels & resorts served across India, UAE, UK & beyond",
    ],
    stats: [
      { number: "120+", label: "Hotels & Resorts Served" },
      { number: "5+ Years", label: "Years of Hospitality Expertise" },
      { number: "95%", label: "Client Satisfaction" },
      { number: "30-40%", label: "Increase in Direct Bookings" },
    ],
    cta: {
      label: "Book My Free Consultation Call",
      href: "",
    },
  },

  servingHospitalityData: {
    title: "INDUSTRY WE SERVE",
    subTitle:
      "Diverse Solutions for a Wide Range of <span>Hospitality Industry</span>",

    cards: [
      {
        imgSrc: "/home/im8.webp",
        title: "Hotel Marketing",
        desc: "Increase occupancy & maximize RevPAR",
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
  chooseFielmenteData: {
    title: "CHOOSE FIELMENTE",
    description:
      "Choose <i>Fielmente</i> as your Hotel digital marketing partner to transform your hospitality business with assured success and innovation. We are the best of India <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency</a>and <a href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency</a>.",
  },
  servicesData: {
    title: "OUR SERVICES",
    subTitle:
      "Transforming Hospitality Brands with Expert <a href='/industries-we-serve/hotel-marketing-agency/'>Hospitality Marketing Services</a>",
    cards: [
      {
        icon: <SocialMediaIcons />,
        title: "Social Media Management",
        description: "Turn Instagram & Facebook into booking engines.",
      },
      {
        icon: <LocalSeoIcon />,
        title: "Local SEO",
        description: "Dominate Google Maps and local hotel searches.",
      },
      {
        icon: <WebsiteSeoIcon />,
        title: "Website SEO",
        description: "Boost organic traffic and search rankings.",
      },
      {
        icon: <AiSearchOptimizationIcon />,
        title: "AI Search Optimization",
        description: "Optimize visibility for ChatGPT and Gemini searches.",
      },
      {
        icon: <PreOpeningMarketingIcon />,
        title: "Preopening Marketing",
        description: "Launch your property with strong demand generation.",
      },
      {
        icon: <OtaManagementIcon />,
        title: "OTA Management",
        description: "Reduce commissions and optimize OTA performance.",
      },
      {
        icon: <WebsiteSeoIcon />,
        title: "Website Development",
        description: "Conversion-focused hotel websites.",
      },
      {
        icon: <SocialMediaIcons />,
        title: "Sales & Marketing Automation",
        description: "Automate lead nurturing and campaigns.",
      },
      {
        icon: <SocialMediaIcons />,
        title: "Content Creation",
        description: "Professional photo, video, and storytelling.",
      },
    ],
  },

  productsData: {
    title: "OUR PRODUCTS",
    subTitle: "AI Tools That Grow Bookings & Enhance Guest Experience",
    description:
      "Our AI-powered hotel tools are built to increase direct bookings, cut OTA costs, and enhance guest experiences — helping you grow revenue while streamlining operations.<br/>Trusted by 120+ hotels & resorts worldwide",
    cards: [
      {
        icon: <CmsIcon />,
        title: `CMS`,
        description: `Easily manage hotel content, offers, and promotions. Update menus, rooms, and packages in seconds — no IT team needed.`,
      },
      {
        icon: <BookingEngineIcon />,
        title: `Booking Engine`,
        description: `Seamless booking engine designed for hotels. Boost direct reservations by 30%+ and reduce OTA commissions instantly`,
      },
      {
        icon: <AiReservationDeskIcon />,
        title: `AI Reservation Desk`,
        description: `AI-powered assistant that answers guest queries 24/7, reduces missed inquiries, and converts chats into confirmed bookings`,
      },
      {
        icon: <PaymentGatewayIcon />,
        title: `Payment Gateway`,
        description: `Secure, integrated payments for smooth guest checkout — supporting multi-currency & one-click payments`,
      },
      {
        icon: <BookingEngineIcon />,
        title: `Email Marketing`,
        description: `Automated and personalized campaigns that deliver 4× higher open rates than traditional hotel emails`,
      },
      {
        icon: <AiFrontDeskIcon />,
        title: `AI Front Desk`,
        description: `Your virtual receptionist available 24/7 — answering queries, upselling rooms, and handling guest requests instantly`,
      },
      {
        icon: <WhatsAppMarketingIcon />,
        title: `WhatsApp Marketing`,
        description: `Engage guests directly where they spend most time. From booking confirmations to offers — drive faster responses & repeat stays`,
      },
      {
        icon: <WebsiteBuilderIcon />,
        title: `Website Builder`,
        description: `All-in-one hotel website builder with integrated booking and SEO optimization — live in just 7 days`,
      },
      {
        title: `AI Concierge Desk`,
        description: `Smart concierge that recommends dining, spa, and activities — increasing ancillary revenue per guest by up to 25%.`,
      },
      {
        title: `AI Chatbot`,
        description: `Automate inquiries, FAQs, and booking queries — saving staff time and increasing conversions by 35%+`,
      },
      {
        title: `AI Voice Agent`,
        description: `Answer guest calls automatically with a friendly AI agent trained for hospitality. Reduce call handling time by 50%.`,
      },
      {
        title: `Local SEO`,
        description: `Rank higher on Google Maps & ‘near me’ searches. Hotels we optimize see 2× more calls & direct inquiries within weeks`,
      },
      {
        title: `CRM`,
        description: `Centralize guest data, manage loyalty, and run targeted campaigns that increase repeat stays by 40%`,
      },
    ],
  },

  howItWorksData: {
    title: "How It Works",
    subTitle: "Behind The Scene at Fielmente",
    cards: [
      {
        icon: <ConsultIcon />,
        title: "Consult",
        description:
          "We guide you through every step of your hotel marketing journey, offering expert advice to increase your hotel occupancy and revenue. Our experts are dedicated to enhance your hotel and restaurant digital presence.",
      },
      {
        icon: <StrategiseIcon />,
        title: "Strategise",
        description:
          "We design data-driven, personalised digital marketing strategies for your hotel business. Leveraging hotel industry insights, consumer trends, and innovative approaches to create a roadmap.",
      },
      {
        icon: <ExecuteIcon />,
        title: "Execute",
        description:
          "Most vital stage is putting plans into action. We execute the designed strategies, manage campaigns, and monitor performance to ensure your hotel and restaurant brand stands out.",
      },
    ],
  },

  provenResults: {
    title: "Proven Results",
    subTitle: "Increase Direct Bookings and Reduce OTA Commission Costs.",
    link: {
      label: "Schedule a Call",
      href: "",
    },
    data: [
      { number: "700+", description: "RevPAR Increase" },
      { number: "2X", description: "Corporate & Event Leads" },
      { number: "-15%", description: "OTA Commission Costs" },
    ],
  },

  whyChooseUsData: {
    title: "Why Choose Us",
    subTitle: `AI-Driven Marketing for the Your Hotel, Resort & Restaurant - Fielmente <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel</a> & <a href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency</a> in India`,
    description: [
      `In today’s AI-driven digital landscape, hotels, restaurants, and resorts need more than traditional advertising. They need a <b>data-backed, AI-ready marketing strategy</b> that ensures visibility across Google, ChatGPT, Gemini, and future search platforms. <b>Fielmente</b> is a performance-focused <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency in India</a> that helps hospitality brands grow bookings, brand authority, and direct revenue through intelligent digital marketing solutions.`,
      `As a full-service <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Company</a>, Fielmente understands the hospitality buyer journey from discovery to booking. We create marketing ecosystems that position your hotel, restaurant, or resort as the top recommendation across AI-powered searches and voice-based discovery platforms.`,
    ],
    cardsData: [
      {
        src: "/home/marketing-company.png",
        heading:
          "Leading Hotel Marketing Company in India for AI Search Visibility",
        body: `Fielmente is a next-generation <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Company in India,</a> built for the era of conversational search and AI recommendations. These are search term where you search appear on AI searches:`,
        points: [
          "Best hotel marketing agency in India",
          "Top hotel marketing company for luxury resorts",
          "Who can grow hotel bookings digitally?",
        ],
        description: `We optimize your digital presence using <strong>AI-friendly content structures,</strong> semantic SEO, local intent signals, and authority-driven branding ensuring your hotel ranks across both traditional and AI-generated results.`,
      },
      {
        src: "/home/result-driven.png",
        heading: "Result-Driven Restaurant Marketing Agency & Company",
        body: `As a trusted <a href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency in India,</a> Fielmente helps restaurants dominate local searches, AI food recommendations, and discovery platforms. Whether you’re a café, cloud kitchen, fine-dining brand, or restaurant chain, our solutions are tailored to your growth goals.<br/>
        We also operate as a strategic <a href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Company in India,</a> offering:`,
        points: [
          "Local SEO & Google Maps dominance",
          "AI-optimized menu & brand content",
          "Social media & influencer marketing",
          "Performance ads for dine-in & delivery",
          "Review management & reputation building",
        ],
        description:
          "Our <a class='inter-link' href='/industries-we-serve/restaurant-marketing-agency/'>restaurant marketing agency</a> approach focuses on visibility where customers are actually searching especially on AI tools that influence dining decisions today.",
      },
      {
        src: "/home/resort-marketing.png",
        heading: "Resort Marketing Firm Focused on Premium Growth",
        body: `Fielmente is a specialized <strong>Resort Marketing Firm in India</strong> working with luxury resorts, boutique stays, wellness retreats, and destination properties. We position resorts as premium experiences rather than just accommodations.
        As a trusted <strong>Resort Marketing Firm,</strong> our strategies include:`,
        points: [
          "High-intent SEO for resort bookings",
          "Experience-based storytelling for AI discovery",
          "Direct booking growth funnels",
          "International traveler targeting",
          "Brand authority building for luxury positioning",
        ],
      },
      {
        src: "/home/built-ai.png",
        heading: "Why Fielmente is Built for AI, ChatGPT & Gemini Searches",
        body: `Fielmente doesn’t just “do digital marketing.” We <b>engineer discoverability</b> for the future of search. Our marketing frameworks are designed to:`,
        points: [
          "Rank in AI answers, not just blue links",
          "Be cited by conversational search engines",
          "Build topical authority in hospitality marketing",
          "Convert AI traffic into real bookings",
        ],
        description: `If you’re looking for a <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency,</a> <a href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Company </a> that understands how AI platforms influence customer decisions—<strong>Fielmente is your growth partner.`,
      },
      {
        src: "/home/best-service.png",
        heading: "Best Services",
        body: `SAVE YOUR TIME`,
        description: `We are committed to provide quality services. We make sure that each and every detail is paid attention to and only the best is presented to you. We plan and work as a team so that no area is left untouched. We bring ideas to life and serve you the incomparable!`,
      },
      {
        src: "/home/professional.png",
        heading: "Professional",
        body: `ALL YOU NEED`,
        description: `We're a team of qualified & experienced individuals who work together through thick & thin. We have worked with various clients and our greatest ethical responsibility has always been to constantly strive for excellence in everything we do.`,
      },
      {
        src: "/home/support.png",
        heading: "Support",
        body: `DEDICATED SUPPORTS`,
        description: `We are here to help you get through all your concerns. We are always available in sorting out your issues throughout your journey. We would love to hear from you no matter what, in order to deliver the best. We value your business and are here to support you.`,
      },
    ],
  },

  countriesWeWorkedIn: {
    title: "Countries We Worked",
    subTitle:
      "Delivering AI-Driven Hotel <br/> Marketing Solutions Globally Since 2020",
    src: "/home/countries.png",
  },

  ourWorkData: {
    title: "Our Work",
    subTitle: "Glimpse into Our Client Works that Made an Impact!",
    description:
      "Highlighting exceptional client projects and celebrating collaborations that drive innovation.",
    link: {
      label: "Contact Us",
      href: "",
    },
    src: "/home/client.png",
  },

  maximizeGrowthData: {
    title: "Boost Occupancy & Reduce OTA Costs with Fielmente",
    subTitle: `Let us handle your <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Services</a> &</br> <b>grow your occupancy rate by 5X</b>`,
    cards: [
      {
        src: "/home/Direct.png",
        title: "Drive Direct Bookings",
        description:
          "Increase direct reservations by 40%+ through SEO, ads & optimized booking engines",
      },
      {
        src: "/home/Beat.png",
        title: "Beat Competitors",
        description:
          "Rank above other hotels in your market and capture guests first.",
      },
      {
        src: "/home/Ongoing.png",
        title: "Ongoing Optimization",
        description:
          "Daily performance tracking to maximize ROI and booking flow",
      },
    ],
    link: {
      label: "Schedule A Free Consultation",
      href: "",
    },
  },
  servicesTitles: [
    "SEARCH ENGINE OPTIMIZATION",
    "PERFORMANCE MARKETING",
    "WEBSITE DESIGN & DEVELOPMENT",
    "SOCIAL MEDIA MANAGEMENT",
  ],
  marketingExpertiseData: {
    title: "Force of 50+ Hospitality Marketing Experts",
    cards: [
      {
        icon: <ExecuteIcon />,
        title: `Expertise in hotel`,
        subtitle:
          "With a decade of experience in the hotel industry, we are the perfect partner to market your hotel, resort, villa & restaurant.",
      },
      {
        icon: <StrategicSocialMediaMarketingForHotel />,
        title: "Strategic Social Media Marketing",
        subtitle:
          "Our proven strategy of hotel social media management boost your brand’s exposure engage your target audience and gives you more bookings.",
      },
      {
        icon: <OptimizedForSearchEngines />,
        title: "Optimized for Search Engines",
        subtitle:
          "Maximise your hotel’s google visibility and increase organic traffic through search engine optimisation and increase more queries.",
      },
      {
        icon: <EffectiveHotelPerformanceMarketingIcon />,
        title: "Effective Hotel Performance Marketing",
        subtitle:
          "Get the best results with our impactful campaigns that bring in targeted visitors and maximize your return on investment.",
      },
      {
        icon: <CustomizedHotelMarketingSolutions />,
        title: "Customized hotel Marketing Solutions",
        subtitle:
          "A compelling reason for you to choose us is our commitment to providing tailored and customized marketing solutions.",
      },
      {
        icon: <ExceptionalHotelWebsiteDevelopment />,
        title: "Exceptional hotel Website Development",
        subtitle:
          "Our website development expertise provides an outstanding user experience from design to functionality.",
      },
    ],
  },

  blogsData: {
    title: "BLOGS",
    subTitle: "Blog Articles",
    description:
      "Stay updated with the latest insights, strategies, and trends in hotel marketing, digital growth, and hospitality performance optimization.",
    cards: [
      ...blogData.slice(0, 3).map((item) => ({
        src: item.url,
        title: item.title,
        date: "Mar 10, 2026",
        description: item.description?.slice(0, 180) + "...",
      })),
    ],
  },

  workWithHotel: {
    title:
      "Work with India’s Leading <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency</a>",
    description: [
      "Choose Fielmente – a leading Hospitality Marketing Agency, <a href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency</a>, and <a href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency</a> as your growth partner. We help hotels, resorts, and restaurants elevate their presence in the digital world with strategies designed specifically for the hospitality industry.",
      "At Fielmente, your stories are worth telling, and we craft campaigns that make your brand stand out from the rest. From hotel social media marketing and search engine optimization for hotels to paid advertising, website optimization, and complete digital strategy, our services cover every aspect of hospitality marketing. Our team brings experience from diverse domains to ensure maximum brand visibility, higher direct bookings, and measurable return on investment.",
      "Since 2020, we have completed 120+ hotel marketing projects across India, consistently achieving a 95% satisfaction rate. What began as a focused initiative has grown into one of the best restaurant and hotel marketing agencies in India, known for personalized strategies, strong brand positioning, and performance-driven results.",
      "As a specialized hospitality marketing company for hotels and restaurants, we design and execute impactful campaigns that attract guests, increase online visibility, and drive revenue. Our expertise in social media marketing, search engine optimization, performance marketing, and content strategy ensures sustainable growth through cutting-edge digital techniques.",
      "If you’re looking for a trusted <a href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agency in India</a>, partner with Fielmente to transform your hospitality business with proven strategies and innovative marketing solutions.",
    ],
  },

  ourValuedClient: {
    title: "Our Valued Hospitality Clients",
    clients: ClientImages,
  },

  testimonialsData: {
    title: "TESTIMONIALS",
    subTitle: "What Our <span>Clients</span> Say",
    cards: data,
  },

  ElevateBrand: {
    src: "/home/add.png",
    title: "Elevate your Hospitality Brand Today!",
    description:
      "Ready to transform your digital presence? Let's create magic together. Book our <a href='/'>Hospitality Marketing Services</a> now!",
    button: {
      label: "Schedule Call",
      href: "",
    },
  },

  faqsData: {
    title: "FAQS",
    subTitle: "Frequently <span>Asked</span> Questions!",
    card: {
      src: "/home/img.png",
      title: "Get A FREE Consultation!",
      description: "Let's work on boosting your hotel's profitability!",
      links: {
        label: "Book a Free  Call",
        href: "",
      },
    },
    faqs: [
      {
        question:
          "What makes Fielmente the best <a class='inter-link' href='/'>hospitality marketing agency</a> in India?",
        answer:
          "At Fielmente, we specialize in delivering tailored marketing solutions for hotels, resorts, and restaurants. Our expertise as a <a class='inter-link' href='/'>hospitality marketing agency</a> in India comes from years of working with top properties and helping them grow through digital marketing, social media, <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/>SEO</a>, and performance campaigns.",
      },
      {
        question:
          "Why should I hire a hospitality marketing firm instead of managing in-house?",
        answer:
          "A hospitality marketing firm like Fielmente brings in-depth industry experience, proven strategies, and cutting-edge tools. Unlike in-house teams, we focus exclusively on hospitality sales and marketing, ensuring your hotel or resort gets maximum bookings, brand visibility, and ROI.",
      },
      {
        question:
          "How does a hospitality digital marketing agency help hotels and resorts?",
        answer:
          "A hospitality digital marketing agency provides end-to-end online marketing services for hotels and resorts — including website optimization, <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/>hotel SEO services</a>, paid advertising, and <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>social media marketing for hotels</a>. We ensure your brand stands out in search results and attracts the right audience.",
      },
      {
        question:
          "Do you offer <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media marketing</a> services?",
        answer:
          "Yes! Fielmente is also a <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media agency</a> helping brands build strong engagement across Instagram, Facebook, and LinkedIn. From creative content calendars to ad campaigns, our <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media marketing</a> strategies are designed to boost visibility and increase direct bookings.",
      },
      {
        question:
          "What kind of hotel digital marketing services do you provide?",
        answer: `We provide a wide range of hotel digital marketing services, including: SEO services for hotels, paid advertising campaigns, content marketing, email automation, hotel digital marketing agency support for Google Ads & Meta Ads, and reputation management for hotels & resorts. Our goal as the best <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing company</a> in India is to increase direct bookings and reduce dependency on OTAs.`,
      },
      {
        question: "Do you also work with resorts?",
        answer: `Absolutely! Fielmente is a resort marketing company with proven expertise in luxury and boutique resorts. Our team designs custom strategies as a resort digital marketing agency, ensuring you attract the right travelers through SEO, social media, and targeted ad campaigns.`,
      },
      {
        question:
          "How do your <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/>hotel SEO services</a> work?",
        answer: `Our SEO services for hotels include keyword optimization, local SEO (Google Maps, GMB), content creation, and link building. By working with a hotel digital marketing company in India like Fielmente, you ensure higher visibility on Google, more direct bookings, and reduced OTA costs.`,
      },
      {
        question: `Do you provide customized <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing consultancy</a>?`,
        answer:
          "Yes, apart from being a hospitality marketing company, we also act as a hospitality marketing consultant. We audit your current marketing strategy and design customized solutions to improve your hotel’s online presence, sales funnel, and guest acquisition.",
      },
      {
        question: `What makes Fielmente different from other <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agencies</a>?`,
        answer: `Unlike generic marketing agencies for hotels, Fielmente works only in the hospitality sector. This niche focus makes us one of the top <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agencies</a> in India, offering tailored strategies for hotels, resorts, and hospitality brands to maximize revenue.`,
      },
      {
        question: "How can I get started with Fielmente?",
        answer:
          "Getting started is simple! Reach out to us for a free consultation. Whether you need a hotel digital marketing service, resort marketing agency support, or a long-term partnership with a hospitality marketing agency in India, our team is here to help.",
      },
    ],
  },

  contactUsSection: {
    title: "Contact Us",
    subTitle: "Get in touch with Us",
    links: [
      ...contacts?.phone?.map((phone) => ({
        label: phone,
        href: `tel:${phone}`,
        title: "Phone:",
      })),
      ...contacts?.email?.map((email) => ({
        label: email,
        href: `mailto:${email}`,
        title: "Email:",
      })),
      ...contacts?.addressesInIndia?.map((address) => ({
        label: address.address,
        href: address.mapUrl,
        title: "Address:",
      })),
    ],
    socialLinks: {
      title: "Follow Fielmente:",
      Link: [
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
      ],
    },
  },
};
