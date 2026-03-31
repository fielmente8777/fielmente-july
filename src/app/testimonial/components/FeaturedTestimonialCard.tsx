import { FeaturedTestimonialsPropsType } from '@/@types/@types'
import React from 'react'
import Image from "next/image";
const FeaturedTestimonialCard: React.FC<FeaturedTestimonialsPropsType["cards"][0]> = ({title,description,src}) => {
 return (
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 flex gap-6 items-center">

      {/* LEFT IMAGE */}
      <div className="w-1/3 h-[180px] relative flex-shrink-0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-2/3">
        <h3 className="text-sm font-semibold text-blue-500 uppercase">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <div>
            <p className="text-sm font-medium">Priya Verma</p>
            <p className="text-xs text-gray-500">
              Operations Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedTestimonialCard;
