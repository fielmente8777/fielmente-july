"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { contacts } from "../../../contact";

export default function Whatsapp() {
  const pathname = usePathname();
  // const { WhatsAppClick } = useAppContext();

  const rightSidePaths = [
    "/test/",
    "/UK/",
    "/USA/",
    "/dubai-restaurant/",
    "/landing-page/",
  ];

  const selectedNumber = pathname.startsWith("/UK/")
    ? contacts.whatsAppCtaOutsideIndia
    : contacts.WhatsAppCta;

  // Hidden where the page has its own call / WhatsApp bar
  if (pathname === "/thank-you/" || pathname === "/google-ads-for-hotels/") {
    return null;
  }

  const isRightSide = rightSidePaths.some((path) => pathname.startsWith(path));

  return (
    <Link
      href={selectedNumber}
      id="whatsapp-button"
      target="_blank"
      rel="noreferrer noopener"
      className={`whatsapp-button fixed z-20 ${
        isRightSide
          ? "right-4 lg:right-10 bottom-10"
          : "left-4 lg:left-10 bottom-4"
      }`}
      // onClick={(event) => WhatsAppClick(pathname, event.currentTarget, "WhatsApp Button Clicked")}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl transition-all pointer-events-none">
        <FaWhatsapp size={29} color="white" />
      </div>

      <span className="sr-only pointer-events-none">Chat on WhatsApp</span>
    </Link>
  );
}
