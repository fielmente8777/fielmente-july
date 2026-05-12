"use client";
import { TestimonialsPropsType } from "@/@types/@types";
import { QuotesIcon } from "@/utils/icons";
import { useState } from "react";

const TestimonialCard: React.FC<TestimonialsPropsType["cards"][0]> = ({
  title,
  description,
}) => {
  const [readMore, setReadMore] = useState(false);
  const isLong = description.length > 350;
  const displayedText =
    isLong && !readMore ? description.slice(0, 350) + "..." : description;

  return (
    <div className="grid grid-rows-[auto_4fr_.5fr] h-full gap-4 bg-[#F9FAFB] border border-[#E3E5E8] p-6 rounded-2xl">
      <span>
        <QuotesIcon />
      </span>
      <p className="text-light text-lg">
        {displayedText}
        {isLong && (
          <span
            className="text-primary cursor-pointer font-medium"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? " Show Less" : " Read More"}
          </span>
        )}
      </p>
      <div className="flex items-center gap-4">
        <div className="h-4.5 bg-[#0D54EB] w-0.5 rounded-[7px]" />
        <p className="text-primary text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
