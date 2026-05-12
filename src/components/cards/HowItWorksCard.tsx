import { howItWorksPropsType } from "@/@types/@types";

const HowItWorksCard: React.FC<howItWorksPropsType["cards"][0]> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="py-4 px-10 flex flex-col items-center  gap-6">
      <div className="bg-gradient-to-t from-primary to-secondary p-4 rounded-t-2xl rounded-br-2xl">{icon}</div>
      <div className="flex flex-col gap-4">
        <p className="text-primary md_font_s font-semibold text-center">{title}</p>
        <p className="text-light text-center">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
