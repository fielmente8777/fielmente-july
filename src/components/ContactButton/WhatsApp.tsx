"use client";

import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { isLandingPage } from "@/utils/landingPages";
import { contacts } from "../../../contact";

/**
 * Floating contact buttons on every page: call at bottom left, WhatsApp at bottom right.
 * On website pages the SalesIQ chat bubble also sits at bottom right, so WhatsApp floats just above it;
 * landing pages have no SalesIQ, so WhatsApp sits at the bottom there.
 * The ids and classes (call-button, whatsapp-button) are used by tracking, so keep them.
 */
export default function Whatsapp() {
  const pathname = usePathname() ?? "";

  if (pathname === "/thank-you/") return null;

  const landing = isLandingPage(pathname);
  const whatsappHref = pathname.startsWith("/UK/") ? contacts.whatsAppCtaOutsideIndia : contacts.WhatsAppCta;
  // This page has its own call / WhatsApp bar on phones, so the floating buttons show from tablet width up.
  const hideOnPhones = pathname === "/google-ads-for-hotels/" ? "max-md:hidden" : "";

  return (
    <>
      <a
        id="call-button"
        href={`tel:${contacts.phone_1.replace(/\s/g, "")}`}
        aria-label="Call Fielmente"
        title="Call Fielmente"
        className={`call-button fixed z-20 left-4 lg:left-10 bottom-4 lg:bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#110D3C] text-white shadow-2xl transition-colors hover:bg-[#1B2231] ${hideOnPhones}`}
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
        className={`whatsapp-button fixed z-20 ${
          landing ? "right-4 lg:right-10 bottom-4 lg:bottom-6" : "right-4 bottom-24"
        } flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-colors hover:bg-green-600 ${hideOnPhones}`}
      >
        <FaWhatsapp size={29} aria-hidden="true" />
      </a>
    </>
  );
}
