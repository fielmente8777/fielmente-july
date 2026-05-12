import { ChooseUsPropsType } from "@/@types/@types";

const ChooseUsCard: React.FC<ChooseUsPropsType["cards"][0]> = ({
  icon,
  title,
  subTitle,
  description,
  color,
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 border border-secondary rounded-2xl">
      <div
        className={`flex items-center justify-center w-20 aspect-square rounded-full`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-secondary text-sm">{title}</p>
        <h4 className="md_font_s font-semibold text-primary">{subTitle}</h4>
      </div>
      <p className="text-light">{description}</p>
    </div>
  );
};

export default ChooseUsCard;
