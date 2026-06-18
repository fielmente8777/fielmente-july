"use client";

import React, { createContext, useContext, useState } from "react";
import { contacts, WhatsAppEmbeddedMessage } from "../../contact";

type WhatsappPosition = "left" | "right";

type AppContextType = {
  isOpenPopupForm: boolean;
  setIsOpenPopupForm: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  showWhatsapp: boolean;
  setShowWhatsapp: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  whatsappPosition: WhatsappPosition;
  setWhatsappPosition: React.Dispatch<
    React.SetStateAction<WhatsappPosition>
  >;

  WhatsAppClick: (pathname?: string) => Promise<void>;
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

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpenPopupForm, setIsOpenPopupForm] = useState(false);

  const [isMobileNavOpen, setIsMobileNavOpen] =
    useState(false);

  const [showWhatsapp, setShowWhatsapp] =
    useState(true);

  const [whatsappPosition, setWhatsappPosition] =
    useState<WhatsappPosition>("left");

  const WhatsAppClick = async (pathname?: string) => {
    try {
      // If pathname is not passed, use current browser path
      const currentPath =
        pathname ?? window.location.pathname;

      // UK Number
      const ukNo = "+447438375533";

      // India Number
      const indNo =
        contacts.phone.length > 1
          ? contacts.phone[1]
          : contacts.phone[0];

      // Select phone based on route
      const selectedNumber = currentPath.startsWith(
        "/UK/"
      )
        ? ukNo
        : indNo;

      const payload = {
        widget: "whatsapp",

        ndid: "09166f89-8fb1-4a65-b016-7ebbd3418701",

        hid: "68017653",

        pageUrl: window.location.href,

        websiteName: window.location.hostname,

        phoneNumber: selectedNumber.replace(
          /\D/g,
          ""
        ),

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


      const whatsappUrl =
        data?.result?.doc?.whatsappUrl;

      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.error(
        "WhatsApp Click Error:",
        error
      );
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