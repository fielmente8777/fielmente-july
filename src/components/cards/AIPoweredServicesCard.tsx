import { ServicesPropsType } from "@/@types/@types";
import Image from "next/image";

const AIPoweredServicesCard: React.FC<ServicesPropsType["cards"][0]> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="min-h-[25rem] flex flex-col items-center justify-center">
      <div className="px-6 py-8   after:rounded-3xl flex flex-col gap-4 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[93%] after:z-[-1] after:bg-white">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-primary md_font_s leading-9 font-semibold max-w-[60%]">
            {title}
          </h3>
          <div className="absolute right-2 -top-16 z-20">
            <div className="relative w-56 aspect-[4/4]">
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
        <div className="h-[1px] bg-secondary w-[148px]"></div>

        <p className="text-light text-lg pr-8">{description}</p>
      </div>
    </div>
  );
};

export default AIPoweredServicesCard;
