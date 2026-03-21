import { BlogsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import Link from "next/link";
import BlogsSlider from "./slider/BlogsSlider";

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
      <BlogsSlider cards={cards} />
    </SectionWithContainer>
  );
};

export default Blogs;

