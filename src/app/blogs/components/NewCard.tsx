import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  src: string | StaticImageData | undefined;
  title: string;
  read: string;
  slug: string;
  description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  src,
  title,
  read,
  slug,
}) => {
  return (
    <Link
      href={"/" + slug}
      className="
        flex
        w-full
        gap-3
        rounded-[9px]
        border
        border-[#DEE2E7]
        bg-white
        p-3
      "
    >
      {/* Image */}
      {src && (
        <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-[5px]">
          <Image
            src={src}
            alt={title}
            fill
            sizes="84px"
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="line-clamp-2 text-[15px] font-medium leading-[1.25] text-[#202838]">
          {title}
        </p>

        <p className="mt-2 text-[13px] leading-4 text-[#7C8492]">{read}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
