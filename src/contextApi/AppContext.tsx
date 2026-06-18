"use client";

import { createContext, useContext, useState } from "react";
import { contacts, WhatsAppEmbeddedMessage } from "../../contact";

type WhatsappPosition = "left" | "right";

export const AppContext = createContext({
  isOpenPopupForm: false,
  setIsOpenPopupForm: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,

  isMobileNavOpen: false,
  setIsMobileNavOpen: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,

  showWhatsapp: true,
  setShowWhatsapp: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,

  whatsappPosition: "left" as WhatsappPosition,
  setWhatsappPosition: (() => {}) as React.Dispatch<
    React.SetStateAction<WhatsappPosition>
  >,

  WhatsAppClick: async (_pathname?: string) => {},
});

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpenPopupForm, setIsOpenPopupForm] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [showWhatsapp, setShowWhatsapp] = useState(true);

  const [whatsappPosition, setWhatsappPosition] =
    useState<WhatsappPosition>("left");

  const WhatsAppClick = async (pathname = "/") => {
    try {
      const ukNo = "+447438375533";

      const indNo =
        contacts.phone.length > 1
          ? contacts.phone[1]
          : contacts.phone[0];

      const selectedNumber = pathname.startsWith("/UK/")
        ? ukNo
        : indNo;

      const payload = {
        widget: "whatsapp",
        ndid: "09166f89-8fb1-4a65-b016-7ebbd3418701",
        hid: "68017653",

        pageUrl: window.location.href,
        websiteName: window.location.hostname,

        phoneNumber: selectedNumber.replace(/\D/g, ""),

        message: WhatsAppEmbeddedMessage,
      };

      const res = await fetch(
        "https://gian-1eve.onrender.com/api/v1/widget/click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();


      const whatsappUrl = data?.result?.doc?.whatsappUrl;

      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
    } catch (err) {
      console.error(err);
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

export const useAppContext = () => useContext(AppContext);