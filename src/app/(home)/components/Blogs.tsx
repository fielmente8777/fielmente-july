import { BlogsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import Link from "next/link";

const Blogs: React.FC<BlogsDataTypes> = ({
  title,
  subTitle,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="mx-auto max-w-3xl space-y-4">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <p className="text-secondary text-center">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cards.map((card, index) => (
          <BlogCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Blogs;

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
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[#6B7280]">{date}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};
