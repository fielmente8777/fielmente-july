import { ServicesPropsType } from "@/@types/@types";
import Image from "next/image";

const AIPoweredServicesCard: React.FC<ServicesPropsType["cards"][0]> = ({
  imgSrc,
  title,
  description,
  imgClassName,
  imgWrapperClassName,
}) => {
  return (
    <div className="min-h-[23rem] max-md:rounded-3xl max-md:bg-white flex flex-col items-center justify-end">
      <div className="px-6 py-8   after:rounded-3xl flex flex-col gap-4 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[100%] after:z-[-1] after:bg-white">
        <div className="flex max-md:flex-col items-center justify-between gap-4">
          <div className="flex md:hidden items-center w-full">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={imgSrc}
                alt={title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          <p className="text-primary md_font_s leading-9 font-semibold md:max-w-[60%] max-md:text-center max-md:mx-auto">
            {title}
          </p>
          <div
            className={`absolute md:block hidden ${imgWrapperClassName ? imgWrapperClassName : "right-2 -top-16 z-20"}`}
          >
            <div className={`relative ${imgClassName}`}>
              <Image
                src={imgSrc}
                alt={title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-secondary w-[148px] max-md:mx-auto"></div>

        <p className="text-light text-xl pr-8">{description}</p>
      </div>
    </div>
  );
};

export default AIPoweredServicesCard;
