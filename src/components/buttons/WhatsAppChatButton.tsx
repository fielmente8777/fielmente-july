"use client";
import { useAppContext } from "@/contextApi/AppContext";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppChatButtonProps {
  label?: string;
  /** White outline on dark sections (default), dark outline on light sections. */
  onDark?: boolean;
}

// WhatsApp button for the agency, industry and service pages. Uses WhatsAppClick from AppContext,
// like the floating WhatsApp button and CustomWhatsAppButton, so clicks are tracked the same way
// (widget click API + GTM "whatsapp_click" event).
const WhatsAppChatButton: React.FC<WhatsAppChatButtonProps> = ({ label = "Chat on WhatsApp", onDark = true }) => {
  const { WhatsAppClick } = useAppContext();

  return (
    <button
      type="button"
      onClick={(event) => WhatsAppClick(undefined, event.currentTarget, label)}
      className={`whatsapp-cta-button inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full border font-semibold transition-colors cursor-pointer ${
        onDark ? "border-white/30 text-white hover:bg-white/10" : "border-primary2/25 text-primary2 hover:bg-primary2/5"
      }`}
    >
      <FaWhatsapp aria-hidden="true" className="pointer-events-none" />
      <span className="pointer-events-none">{label}</span>
    </button>
  );
};

export default WhatsAppChatButton;
