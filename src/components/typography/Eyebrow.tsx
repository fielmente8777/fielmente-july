import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

// Small orange label shown above a section title.
const Eyebrow: React.FC<EyebrowProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-xs md:text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-primary ${className}`}>
      {children}
    </p>
  );
};

export default Eyebrow;
