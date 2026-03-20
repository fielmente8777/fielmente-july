import { SectionWithContainer } from "@/components";
import LandingPgForm from "@/components/forms/LandingPgForm";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  images: string[];
}
const Banner: React.FC<Props> = ({ title, subtitle, description, images }) => {
  return (
    <SectionWithContainer sectionClassName="relative">
      <div className="absolute inset-x-0 md:h-[35%] h-[60%] z-[-1] bg-background-black1 bottom-0"></div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pb-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-2 md:px-2.5 px-2 py-1.5 text-primary rounded-full w-fit border border-main-border">
            <Image src={images[0]} alt="hotels" width={40} height={20} />
            <p className="md:text-sm text-[10px]">{subtitle}</p>
          </div>
          <h1 className="md:text-[2.875rem] text-3xl max-md:text-center text-primary font-bold">{title}</h1>
          <p className="text-sm text-secondary max-md:text-center">{description}</p>
          <div className="flex items-center max-md:justify-center gap-4">
            <div className="flex items-center justify-center w-10 aspect-square rounded-lg border border-main-border">
              <GoogleIcon />
            </div>
            <div className="flex items-center justify-center w-10 aspect-square rounded-lg border border-main-border">
              <Star />
            </div>
          </div>
          <div className="w-full md:block hidden relative aspect-4/1.75 md:-mt-10">
            <Image src={images[1]} alt={title} fill className="object-cover" />
          </div>
        </div>
        <div className="md:max-w-xl w-full md:ml-auto">
          <LandingPgForm />
          <div className="w-full md:hidden relative aspect-4/1.75 mt-4">
            <Image src={images[1]} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
export const GoogleIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.987"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8134 1.59149C11.9009 1.46999 12.5444 1.46999 13.7129 1.59149C15.7813 1.89763 17.6987 2.85372 19.1879 4.32149C18.1816 5.27269 17.1885 6.23779 16.2089 7.21649C14.3329 5.62649 12.2389 5.25949 9.92687 6.11549C8.23087 6.89549 7.04987 8.15949 6.38387 9.90749C5.29554 9.09724 4.22137 8.26811 3.16188 7.42049C3.08824 7.38173 3.00415 7.36754 2.92188 7.37999C4.60487 4.13499 7.23488 2.20499 10.8119 1.58999"
      fill="#F44336"
    />
    <path
      opacity="0.997"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.91938 7.37997C3.00438 7.36697 3.08488 7.38047 3.16088 7.42047C4.22038 8.26809 5.29454 9.09721 6.38288 9.90747C6.21162 10.5886 6.10366 11.284 6.06038 11.985C6.09738 12.663 6.20488 13.3285 6.38288 13.9815L3.00038 16.674C1.52738 13.596 1.50038 10.498 2.91938 7.37997Z"
      fill="#FFC107"
    />
    <path
      opacity="0.999"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0281 19.935C17.9749 19.0061 16.8723 18.1349 15.7251 17.325C16.8751 16.513 17.5731 15.399 17.8191 13.983H12.1836V10.0695C15.4336 10.0425 18.6821 10.07 21.9291 10.152C22.5451 13.497 21.8336 16.513 19.7946 19.2C19.5521 19.4577 19.2953 19.703 19.0281 19.935Z"
      fill="#448AFF"
    />
    <path
      opacity="0.993"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.3825 13.983C7.6125 17.04 9.8675 18.467 13.1475 18.264C14.0682 18.1574 14.951 17.8357 15.7245 17.325C16.8725 18.137 17.9735 19.007 19.0275 19.935C17.3575 21.4357 15.2282 22.3261 12.987 22.461C12.4778 22.5017 11.9662 22.5017 11.457 22.461C7.639 22.011 4.82 20.082 3 16.674L6.3825 13.983Z"
      fill="#43A047"
    />
  </svg>
);

export const Star = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_88_21528)">
      <path
        d="M17.227 16.67L19.417 23.412L12.004 18.024L17.227 16.67ZM24 9.30999H14.835L12.005 0.588989L9.165 9.31199L0 9.29999L7.422 14.697L4.582 23.411L12.004 18.024L16.587 14.697L24 9.30999Z"
        fill="#00B975"
      />
    </g>
    <defs>
      <clipPath id="clip0_88_21528">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
