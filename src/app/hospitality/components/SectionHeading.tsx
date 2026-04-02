import React from "react";

export interface SectionHeadingPropsTypes {
  title?: string;
  subtitle?: string;
  description?: string;
  span?: string;
  Color?: boolean;
}

function SectionHeading({
  title,
  subtitle,
  description,
  span,
  Color,
}: SectionHeadingPropsTypes) {
  return (
    <div className="flex flex-col gap-5">
      {title && (
        <h2
          className={`text-center md:text-4xl text-[1.4rem]/[2rem] last-word ${Color && "text-[#110D3C]"
            } md:w-[85%] mx-auto`}
        >
          {title} <span className="text-orange-primary font-bold">{span}</span>
        </h2>
      )}
      {description && (
        <p
          className={`text-2xl max-md:text-base text-center lg:w-[80%] mx-auto ${Color && "text-[#797979]"
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
