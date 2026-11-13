"use client";
import { usePathname } from "next/navigation";
import WebSiteFooter from "./WebSiteFooter";
import LandingFooter from "./LandingFooter";
import LandingPageFooter2 from "./LandingPageFooter2";
import GooglePartnerBadge from "./GooglePartnerBadge";
const Footer = () => {
  const pathName = usePathname();
  const RenderFooter = WebSiteFooter;

  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/google-ads-for-hotels/":
      return <GooglePartnerBadge />;
    case "/landing-page/":
      return <><LandingFooter /><GooglePartnerBadge /></>;
    case "/USA/":
      return <><LandingFooter /><GooglePartnerBadge /></>;
    case "/resort/":
      return <><LandingFooter /><GooglePartnerBadge /></>;
    case "/hospitality/":
      return <><LandingFooter /><GooglePartnerBadge /></>;
    case "/dubai-restaurant/":
      return <><LandingPageFooter2 /><GooglePartnerBadge /></>;

    case "/restaurant/":
      return <><LandingPageFooter2 /><GooglePartnerBadge /></>;

    case "/UK/":
      return <><LandingPageFooter2 /><GooglePartnerBadge /></>;

    default:
      return <><RenderFooter /><GooglePartnerBadge /></>;
  }
};

export default Footer;
