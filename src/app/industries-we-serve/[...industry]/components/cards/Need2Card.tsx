import { Need2Props } from "@/@types/@landingPageType";

const Need2Card: React.FC<Need2Props["cards"][0]> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary2 relative after:absolute after:-bottom-1 after:left-0 after:w-14 after:h-[2px] after:bg-tertiary">
        {title}
      </h3>
      <p className="text-gray-600 md:text-lg">{subtitle}</p>
    </div>
  );
};

export default Need2Card;
