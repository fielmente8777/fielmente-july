"use client";
import { usePathname } from "next/navigation";
import WebSiteFooter from "./WebSiteFooter";
const Footer = () => {
  const pathName = usePathname();
  const RenderFooter = WebSiteFooter;
  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <>
      <RenderFooter />
    </>
  );
};

export default Footer;
