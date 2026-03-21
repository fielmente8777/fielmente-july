import { BlogsDataTypes } from "@/@types/@homeType";
import Image from "next/image";
import Link from "next/link";

export const BlogCard: React.FC<BlogsDataTypes["cards"][0]> = ({
  title,
  description,
  date,
  src,
  slug,
}) => {
  return (
    <Link
      href={"/" + slug}
      className="flex flex-col items-center gap-5 px-5.75 py-6 rounded-2xl border border-[#E3E5E8]"
    >
      {src && (
        <div className="w-full aspect-4/2 relative">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover rounded-2xl"
            sizes="100vw"
          />
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[#6B7280]">{date}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};
