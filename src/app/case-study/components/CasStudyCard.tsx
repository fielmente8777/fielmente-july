import { CtaBtn } from "@/components/buttons/CtaBtn";
import Image from "next/image";
import Link from "next/link";

interface CasStudyCardProps {
  src: string;
  title: string;
  description: string;
  slug: string;
}

const CasStudyCard: React.FC<CasStudyCardProps> = ({
  slug,
  title,
  description,
  src,
}) => {
  return (
    <div
      className="cursor-pointer flex flex-col gap-6 rounded-2xl p-6 bg-white border border-main-border"
    >
      <div className="w-full relative lg:aspect-4/2 aspect-4/3">
        <Image
          src={src}
          alt={title}
          fill
          className={`object-cover rounded-2xl`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-[#363636] uppercase">
          {slug.replace("-", " ")}
        </h2>
        <p className="text-secondary text-lg"> <span className="font-semibold">Problem:</span> {description.slice(0, 50)} ...</p>
        <CtaBtn
          type="link"
          href={`/case-study/${slug}`}
          label="Read More"
          icon="arrow2"
          iconClass="max-lg:w-6 text-white bg-transparent!"
          className="justify-between! border-none w-full max-w-40 rounded-lg mt-6 ml-auto max-lg:px-2! max-lg:py-2 bg-color4 text-white"
        />
      </div>
    </div>
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
