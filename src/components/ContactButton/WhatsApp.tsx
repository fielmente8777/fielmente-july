"use client";

import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { contacts } from "../../../contact";

/**
 * Floating contact buttons on every page: call above WhatsApp, stacked at bottom left.
 * The SalesIQ chat bubble (zohochatbot/Salesiq.tsx) takes the bottom right.
 * (Only the ad landing pages on lp.fielmente.com, a separate repo, put WhatsApp on the right and have no SalesIQ.)
 * The ids and classes (call-button, whatsapp-button) are used by tracking, so keep them.
 */
export default function Whatsapp() {
  const pathname = usePathname() ?? "";

  if (pathname === "/thank-you/") return null;

  const whatsappHref = pathname.startsWith("/UK/") ? contacts.whatsAppCtaOutsideIndia : contacts.WhatsAppCta;
  // This page has its own call / WhatsApp bar on phones, so the floating buttons show from tablet width up.
  const hideOnPhones = pathname === "/google-ads-for-hotels/" ? "max-md:hidden" : "";

  return (
    <div
      role="group"
      aria-label="Contact Fielmente"
      className={`fixed z-20 left-4 lg:left-10 bottom-4 flex flex-col items-start gap-3 ${hideOnPhones}`}
    >
      <a
        id="call-button"
        href={`tel:${contacts.phone_1.replace(/\s/g, "")}`}
        aria-label="Call Fielmente"
        title="Call Fielmente"
        className="call-button flex h-12 w-12 items-center justify-center rounded-full bg-[#110D3C] text-white shadow-2xl transition-colors hover:bg-[#1B2231]"
      >
        <FaPhoneAlt size={23} aria-hidden="true" />
      </a>
      <a
        id="whatsapp-button"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="whatsapp-button flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-colors hover:bg-green-600"
      >
        <FaWhatsapp size={29} aria-hidden="true" />
      </a>
    </div>
  );
}
