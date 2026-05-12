import { FeaturedTestimonialsPropsType } from "@/@types/@types";
import React, { useState } from "react";
import Image from "next/image";
const FeaturedTestimonialCard: React.FC<
  FeaturedTestimonialsPropsType["cards"][0]
> = ({ title, description, src }) => {
  const [readMore, setReadMore] = useState(false);
  const isLong = description.length > 200;
  const displayedText =
    isLong && !readMore ? description.slice(0, 200) + "..." : description;
  return (
    <div className=" w-full bg-white rounded-2xl p-6 grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
      {/* LEFT IMAGE */}
      <div className="w-full relative aspect-square">
        <Image
          src={"/hotel.png"}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-4 justify-between h-full">
        {/* <p className="text-sm font-semibold text-blue-500 uppercase">
          {title}
        </p> */}

        <p className="text-secondary">
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
        <div>
          {/* <p className="text-sm font-medium">Priya Verma</p> */}
          <p className="text-xl text-primary">{title}</p>
        </div>
      </div>
    </div>
  );
};
export default FeaturedTestimonialCard;
