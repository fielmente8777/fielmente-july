"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/contextApi/AppContext";

export default function Whatsapp() {
  const pathname = usePathname();
  const { WhatsAppClick } = useAppContext();

  const rightSidePaths = [
    "/test/",
    // "/UK/",
    // "/USA/",
    // "/dubai-restaurant/",
    // "/landing-page/",
  ];

  if (pathname === "/thank-you/") {
    return null;
  }

  const isRightSide = rightSidePaths.some((path) => pathname.startsWith(path));

  return (
    <button
      id="whatsapp-button"
      className={`whatsapp-button fixed z-20 ${
        isRightSide
          ? "right-4 lg:right-10 bottom-10"
          : "left-4 lg:left-10 bottom-4"
      }`}
      onClick={(event) => WhatsAppClick(pathname, event.currentTarget, "WhatsApp Button Clicked")}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl transition-all pointer-events-none">
        <FaWhatsapp size={29} color="white" />
      </div>

      <span className="sr-only pointer-events-none">Chat on WhatsApp</span>
    </button>
  );
}
