import { Icon, IconKey } from "@/utils/serviceIcons";
import { ReactNode } from "react";

interface IconCardProps {
  icon: IconKey;
  title: string;
  body: ReactNode;
}

// Feature card: orange icon tile, title and short text.
const IconCard: React.FC<IconCardProps> = ({ icon, title, body }) => {
  return (
    <div className="group h-full rounded-2xl border border-[#E4E3EC] bg-white p-6 md:p-7 hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.4)] transition-all">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
        <Icon name={icon} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-primary2">{title}</h3>
      <p className="mt-2 text-sm/relaxed md:text-[15px]/relaxed text-[#55536E]">{body}</p>
    </div>
  );
};

export default IconCard;
