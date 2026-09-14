"use client";

import React, { createContext, useContext, useState } from "react";
import { contacts, WhatsAppEmbeddedMessage } from "../../contact";

type WhatsappPosition = "left" | "right";

type AppContextType = {
  isOpenPopupForm: boolean;
  setIsOpenPopupForm: React.Dispatch<React.SetStateAction<boolean>>;

  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;

  showWhatsapp: boolean;
  setShowWhatsapp: React.Dispatch<React.SetStateAction<boolean>>;

  whatsappPosition: WhatsappPosition;
  setWhatsappPosition: React.Dispatch<React.SetStateAction<WhatsappPosition>>;

  WhatsAppClick: (
    pathname?: string,
    button?: HTMLButtonElement,
    clickText?: string
  ) => Promise<void>;
};

export const AppContext = createContext<AppContextType>({
  isOpenPopupForm: false,
  setIsOpenPopupForm: () => {},

  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},

  showWhatsapp: true,
  setShowWhatsapp: () => {},

  whatsappPosition: "left",
  setWhatsappPosition: () => {},

  WhatsAppClick: async () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopupForm, setIsOpenPopupForm] = useState(false);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [showWhatsapp, setShowWhatsapp] = useState(true);

  const [whatsappPosition, setWhatsappPosition] =
    useState<WhatsappPosition>("left");

  const WhatsAppClick = async (
    pathname?: string,
    button?: HTMLButtonElement,
    clickText?: string,
  ) => {
    try {
      const currentPath = pathname ?? window.location.pathname;

      // -----------------------------
      // PHONE NUMBER
      // -----------------------------

      const ukNo = "+447438375533";
      const indNo = "+919501868775";

      const selectedNumber = currentPath.startsWith("/UK/") ? ukNo : indNo;

      // -----------------------------
      // GET BUTTON CLICK INFORMATION
      // -----------------------------

      const clickClasses = button?.className || "";
      const clickId = button?.id || "";
      const click_Text = clickText || button?.innerText?.trim() || "";
      const clickTarget = button?.getAttribute("target") || "";
      const clickElement = button?.outerHTML || "";

      // -----------------------------
      // API REQUEST
      // -----------------------------

      const payload = {
        widget: "whatsapp",
        ndid: "09166f89-8fb1-4a65-b016-7ebbd3418701",
        hid: "68017653",

        pageUrl: window.location.href,
        websiteName: window.location.hostname,

        phoneNumber: selectedNumber.replace(/\D/g, ""),
        message: WhatsAppEmbeddedMessage,
      };

      const response = await fetch(
        "https://gian-1eve.onrender.com/api/v1/widget/click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      const whatsappUrl = data?.result?.doc?.whatsappUrl || "";

      // -----------------------------
      // GTM DATA LAYER
      // -----------------------------

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "whatsapp_click",

        // Your own custom keys — safe to read in GA4/GTM as-is
        button_text: "WhatsApp",
        phone_number: selectedNumber,
        page_location: window.location.href,
        page_path: currentPath,
        whatsapp_url: whatsappUrl,
        click_text: click_Text,
        // GTM's RESERVED key names — this is what makes the
        // built-in Click Classes / Click ID / Click Target /
        // Click URL / Click Element variables populate.
        // Note: "Click Text" is an Auto-Event Variable type and
        // can never be populated this way, regardless of key name —
        // it only shows up on a real native "Click" auto-event.
        "gtm.elementClasses": clickClasses,
        "gtm.elementId": clickId,
        "gtm.elementTarget": clickTarget,
        "gtm.elementUrl": whatsappUrl,
        "gtm.element": clickElement,
      });

      // -----------------------------
      // OPEN WHATSAPP
      // -----------------------------

      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.error("WhatsApp Click Error:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isOpenPopupForm,
        setIsOpenPopupForm,

        isMobileNavOpen,
        setIsMobileNavOpen,

        showWhatsapp,
        setShowWhatsapp,

        whatsappPosition,
        setWhatsappPosition,

        WhatsAppClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
