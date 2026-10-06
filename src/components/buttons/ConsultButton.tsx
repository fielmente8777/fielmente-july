"use client";
import { CtaBtn } from "./CtaBtn";

interface ConsultButtonProps {
  label?: string;
  className?: string;
}

// Opens the site's consultation popup (PopupForm in the root layout) through CtaBtn,
// so every enquiry goes through the same form as the rest of the site.
const ConsultButton: React.FC<ConsultButtonProps> = ({ label = "Get a free consultation", className = "" }) => {
  return (
    <CtaBtn
      type="button"
      label={label}
      icon="none"
      className={`min-h-12 rounded-full! border-orange-primary bg-orange-primary text-white font-semibold! hover:bg-glaucous-3 cursor-pointer ${className}`}
    />
  );
};

export default ConsultButton;
