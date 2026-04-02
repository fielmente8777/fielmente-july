"use client";
import { usePathname } from "next/navigation";
import WebSiteFooter from "./WebSiteFooter";
import LandingFooter from "./LandingFooter";
import LandingPageFooter2 from "./LandingPageFooter2";
const Footer = () => {
  const pathName = usePathname();
  const RenderFooter = WebSiteFooter;






  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return <LandingFooter />;
    case "/resort/":
      return <LandingFooter />;
    case "/hospitality/":
      return <LandingFooter />;
    case "/dubai-restaurant/":
      return <LandingPageFooter2 />;

    case "/restaurant/":
      return <LandingPageFooter2 />;

    case "/UK/":
      return <LandingPageFooter2 />;

    default:
      return <RenderFooter />;
  }
};

export default Footer;
