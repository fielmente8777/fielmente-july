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
  const displayedText = isLong && !readMore
    ? description.slice(0, 350) + "..."
    : description;

  return (
    <div className="flex flex-col gap-6 px-6 py-8">
      <span>
        <QuotesIcon />
      </span>
      <p className="text-light text-xl">
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
      <h3 className="text-primary text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default TestimonialCard;
