import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  className?: string;
}

// Section title with the brand's orange full stop.
const SectionTitle: React.FC<SectionTitleProps> = ({ children, as: Tag = "h2", light = false, className = "" }) => {
  return (
    <Tag
      className={`text-[28px]/[1.15] md:text-[40px]/[1.12] font-bold tracking-tight ${light ? "text-white" : "text-primary2"} ${className}`}
    >
      {children}
      <span className="text-orange-primary">.</span>
    </Tag>
  );
};

export default SectionTitle;
