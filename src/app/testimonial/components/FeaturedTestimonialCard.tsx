import { FeaturedTestimonialsPropsType } from '@/@types/@types'
import React from 'react'
import Image from "next/image";
const FeaturedTestimonialCard: React.FC<FeaturedTestimonialsPropsType["cards"][0]> = ({title,description,src}) => {
  return (
    <div className='flex items-center gap-6 p-6 rounded-2xl shadow-md bg-white'>
        <div className='w-[200px] h-[150px] relative flex-shrink-0'>
      <Image
        src={src}
        alt={title}
        fill
          className="object-cover rounded-xl"
      />
</div>

      {/* RIGHT → CONTENT */}
      <div className="flex flex-col justify-between">

        {/* BRAND / TITLE */}
        <h3 className="text-sm font-semibold text-blue-500 uppercase">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-md">
          {description}
        </p>

        {/* USER INFO (OPTIONAL but matches Figma) */}
        <div className="flex items-center gap-3 mt-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
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
