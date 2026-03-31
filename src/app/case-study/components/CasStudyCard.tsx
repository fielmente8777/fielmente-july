import Image from "next/image";
import Link from "next/link";

interface CasStudyCardProps {
  slug: string;
  img: string;
  title: string;
  description: string;
  className?: string;
}

const CasStudyCard: React.FC<CasStudyCardProps> = ({
  slug,
  img,
  title,
  description,
  className,
}) => {
  return (
    // <Link
    //   href={`/case-study/${slug}`}
    //   className="cursor-pointer flex flex-col gap-4 rounded-3xl p-6 bg-white"
    // >
    //   <div className="w-full relative aspect-[4/1.5]">
    //     <Image
    //       src={img}
    //       alt={title}
    //       fill
    //       className={`${className ? className : "object-cover"} rounded-2xl`}
    //     />
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <h2 className="text-xl font-bold text-[#363636] uppercase">
    //       {slug.replace("-", " ")}
    //     </h2>
    //     <p className="text-[#363636] text-lg">
    //       {description.slice(0, 230)} ...
    //     </p>
    //     <span className=" text-orange-primary flex items-center gap-2 text-lg">
    //       Read More{" "}
    //       <span>
    //         <ArrowUp />
    //       </span>
    //     </span>
    //   </div>
    // </Link>
    <Link
  href={`/case-study/${slug}`}
  className="group flex flex-col gap-3 rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
>
  {/* IMAGE */}
  <div className="w-full relative aspect-[4/2] overflow-hidden rounded-xl">
    <Image
      src={img || "/fallback.png"}
      alt={title}
      fill
      className="object-cover group-hover:scale-105 transition duration-300"
    />
  </div>

  {/* CONTENT */}
  <div className="flex flex-col gap-1">
    
    {/* TITLE */}
    <h2 className="text-sm font-semibold text-gray-800 leading-tight">
      {title}
    </h2>

    {/* DESCRIPTION */}
    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
      {description}
    </p>

    {/* BUTTON */}
    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600">
      Read more
      <ArrowUp />
    </span>

  </div>
</Link>
  );
};

export default CasStudyCard;

export const ArrowUp = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7064 1.29289C14.0969 1.68341 14.0969 2.31658 13.7064 2.7071L2.37312 14.0404C1.9826 14.4309 1.34943 14.4309 0.958906 14.0404C0.568386 13.6499 0.568386 13.0168 0.958906 12.6263L12.2923 1.29289C12.6828 0.90237 13.3159 0.90237 13.7064 1.29289Z"
      fill="#F26633"
    />
    <path
      d="M0 2C0 1.44772 0.44772 1 1 1H13C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15C12.4477 15 12 14.5523 12 14V3H1C0.44772 3 0 2.55228 0 2Z"
      fill="#F26633"
    />
  </svg>
);
