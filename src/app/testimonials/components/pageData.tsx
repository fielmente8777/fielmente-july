import { eazotelTestimonials, fielmenteTestimonials } from "@/utils/testimonialsData";

// Each review appears once on the page: Fielmente marketing reviews in the first section,
// reviews of Eazotel (our sister company's hotel software and OTA services) in the second.
export const testimonialsData = {
  bannerData: {
    title: "TESTIMONIALS",
    subTitle: "What Our Customers Say",
    description:
      "Hear directly from hoteliers who work with Fielmente on marketing and Eazotel on hotel software.",
  },
  testimonialSection: {
    title: "Testimonials",
    subtle: "What Hoteliers Say About <span>Fielmente</span>",
    description:
      "Reviews from hotels and hospitality businesses that use Fielmente for marketing, SEO and advertising.",
    testimonials: fielmenteTestimonials,
  },
  testimonialSection2: {
    title: "Eazotel Reviews",
    subTitle: "What Hoteliers Say About Eazotel",
    description:
      "Eazotel is Fielmente's sister company for hotel software, OTA listing and revenue management. These reviews are about Eazotel's services.",
    testimonials: eazotelTestimonials,
    cta: {
      label: "Book a Free Consultation Call",
      href: "",
    },
  },
  ctaData: {
    title: "Ready to grow your hotel business?",
    description:
      "Talk to Fielmente about growing your direct bookings and reducing OTA dependency.",
    cta: {
      label: "Book a Free Consultation",
      href: "",
    },
  },
};
