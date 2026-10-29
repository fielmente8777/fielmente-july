"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { contacts } from "../../../contact";

export default function Whatsapp() {
  const pathname = usePathname();
  // const { WhatsAppClick } = useAppContext();

  const rightSidePaths = [
    "/test/",
    "/UK/",
    "/USA/",
    "/dubai-restaurant/",
  ];

  const selectedNumber = pathname.startsWith("/UK/")
    ? contacts.whatsAppCtaOutsideIndia
    : contacts.WhatsAppCta;

  // Hidden where the page has its own call / WhatsApp bar
  if (pathname === "/thank-you/" || pathname === "/google-ads-for-hotels/") {
    return null;
  }

  const isRightSide = rightSidePaths.some((path) => pathname.startsWith(path));
  const isLandingPage =
    pathname === "/landing-page" || pathname.startsWith("/landing-page/");

  const whatsappButton = (
    <Link
      href={selectedNumber}
      id="whatsapp-button"
      target="_blank"
      rel="noreferrer noopener"
      className={`whatsapp-button rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-primary ${
        isLandingPage
          ? ""
          : `fixed z-20 ${
              isRightSide
                ? "right-4 lg:right-10 bottom-10"
                : "left-4 lg:left-10 bottom-4"
            }`
      }`}
      // onClick={(event) => WhatsAppClick(pathname, event.currentTarget, "WhatsApp Button Clicked")}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl transition-all pointer-events-none">
        <FaWhatsapp size={29} color="white" aria-hidden="true" />
      </div>

      <span className="sr-only pointer-events-none">Chat on WhatsApp</span>
    </Link>
  );

  if (isLandingPage) {
    return (
      <div
        role="group"
        aria-label="Contact Fielmente"
        className="fixed z-20 left-4 lg:left-10 flex flex-col items-start gap-3"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={`tel:${contacts.phone_1.replace(/[^\d+]/g, "")}`}
          id="call-button"
          aria-label="Call Fielmente"
          title="Call Fielmente"
          className="call-button w-12 h-12 rounded-full bg-primary2 hover:bg-primary text-white flex items-center justify-center shadow-2xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-primary"
        >
          <FaPhoneAlt size={23} aria-hidden="true" />
        </a>
        {whatsappButton}
      </div>
    );
  }

  return whatsappButton;
}
