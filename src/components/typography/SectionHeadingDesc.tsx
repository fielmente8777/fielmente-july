import Headings from "./Headings";
import dynamic from "next/dynamic";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  description?: string;
  descriptionColor?: string;
  textcenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  smTextCenter?: boolean;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
  mdTextCenter?: boolean;
}

const SectionHeadingDesc: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  description,
  descriptionColor,
  textcenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  mdTextCenter = false,
  wrapperClassName="",
  titleClassName="",
  subTitleClassName="",
  descriptionClassName="",
}) => {
  return (
    <div className={`flex flex-col w-full gap-4 ${wrapperClassName}`}>
      {title && (
        <Headings
          level={2}
          className={`${titleClassName} ${mdTextCenter ? "md:text-center" : ""} ${textcenter ? "text-center mx-auto" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${titleColor ? `text-${titleColor}` : "text-secondary"} $ shadow-inner uppercase font-medium bg-[#FFE7DE] py-2 px-4 w-fit rounded-full`}
          heading={title}
        />
      )}
      {subTitle && (
        <Headings
          level={3}
          className={`${subTitleClassName} ${mdTextCenter ? "md:text-center" : ""} ${textcenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${subTitleColor ? `text-${subTitleColor}` : "text-primary"} lg_font_s font-medium`}
          heading={subTitle}
        />
      )}
      {description && (
        <p
          className={`${descriptionClassName} ${textcenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${descriptionColor ? `text-${descriptionColor}` : "text-light"} md:text-lg text-base`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeadingDesc;
