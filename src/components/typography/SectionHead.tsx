import { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import SectionTitle from "./SectionTitle";

interface SectionHeadProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  light?: boolean;
  center?: boolean;
}

// Eyebrow + title + optional intro, used at the top of most sections on the agency, industry and service pages.
const SectionHead: React.FC<SectionHeadProps> = ({ eyebrow, title, lede, light = false, center = false }) => {
  return (
    <div className={`flex flex-col gap-3 max-w-190 mb-8 md:mb-12 ${center ? "mx-auto text-center items-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <SectionTitle light={light}>{title}</SectionTitle>
      {lede && (
        <p className={`text-[15px]/relaxed md:text-base/relaxed ${light ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{lede}</p>
      )}
    </div>
  );
};

export default SectionHead;
