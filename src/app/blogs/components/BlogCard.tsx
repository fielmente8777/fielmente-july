import { ArrowBtn } from "@/utils/icons";
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
  description,
  read,
  slug,
}) => {
  return (
    <div className={`flex flex-col gap-6 ${!src ? "h-fit": "h-full"} border border-main-border rounded-2xl p-6`}>
      {src && (
        <div className="w-full relative aspect-4/2.25 rounded-lg overflow-hidden">
          <Image
            src={src ?? ""}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between mt-2.5">
          <p className="text-[#6B7280]">{read}</p>
          <Link
            href={"/" + slug}
            className="text-secondary text-lg font-medium flex items-center gap-3"
          >
            Read More
            <span>
              <span className="bg-color4 flex items-center justify-center text-white rounded-full">
                <ArrowBtn />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
