import { SectionWithContainer } from "@/components";
import Image from "next/image";

interface SubPageBannerProps {
  title: string;
  heading: string;
  image: string;
  description: string;
}
const SubPageBanner: React.FC<SubPageBannerProps> = ({
  title,
  heading,
  image,
  description,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-[#2CBCA5]">{title}</h1>
          <h2 className="text-black font-medium md:text-5xl text-3xl">
            {heading}
          </h2>
          <p className="md:text-lg text-secondary">{description}</p>
        </div>
        <div className="w-full relative aspect-4/2.5">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SubPageBanner;
