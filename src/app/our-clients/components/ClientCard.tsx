import Image from "next/image";
import Link from "next/link";

interface ClientCardProps {
  src: string;
  alt?: string;
  className?: string;
  [key: string]: unknown;
}
const ClientCard = ({ src, alt, className, ...props }: ClientCardProps) => {
  return (
    <div
      className="w-full relative aspect-[4/2.5] group shadow-xl shadow-primary/20 rounded-lg"
      {...props}
    >
      <Image
        src={src}
        alt={alt || "client logo"}
        fill
        sizes="100%"
        className="object-contain p-2 rounded-lg"
        style={{ backgroundColor: className }}
      />
      {/* {props.href !== undefined && props.websiteImgUrl !== undefined && (
        <Link
          href={props.href as string}
          className="group-hover:visible group-hover:opacity-100 group-hover:scale-110 group-hover:-inset-2 duration-300 ease-in-out transition-all absolute inset-0 bg-white opacity-0 invisible rounded-lg overflow-hidden"
        >
          <div className="w-full h-full relative aspect-auto flex items-center justify-center">
            <button className="px-3.5 py-1.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              View Details
            </button>
            <Image
              src={props.websiteImgUrl as string}
              alt={`${alt} website screenshot`}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        </Link>
      )} */}
    </div>
  );
};

export default ClientCard;
