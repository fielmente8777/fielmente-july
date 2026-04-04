"use client";

import { createContext, useContext, useState } from "react";

type WhatsappPosition = "left" | "right";

export const AppContext = createContext<{
  isOpenPopupForm: boolean;
  setIsOpenPopupForm: React.Dispatch<React.SetStateAction<boolean>>;

  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;

  // WhatsApp Controls
  showWhatsapp: boolean;
  setShowWhatsapp: React.Dispatch<React.SetStateAction<boolean>>;

  whatsappPosition: WhatsappPosition;
  setWhatsappPosition: React.Dispatch<React.SetStateAction<WhatsappPosition>>;
}>({
  isOpenPopupForm: false,
  setIsOpenPopupForm: () => {},

  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},

  showWhatsapp: true,
  setShowWhatsapp: () => {},

  whatsappPosition: "left",
  setWhatsappPosition: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopupForm, setIsOpenPopupForm] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [showWhatsapp, setShowWhatsapp] = useState(true);
  const [whatsappPosition, setWhatsappPosition] =
    useState<WhatsappPosition>("left");

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);