import { Icon, IconKey } from "@/utils/serviceIcons";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface IconLinkCardProps {
  icon: IconKey;
  title: string;
  body: string;
  href: string;
  /** Visible border, for cards on a white background. */
  bordered?: boolean;
}

// Linked service card: icon, title, one line and an arrow. Used in service lists on white or grey sections.
const IconLinkCard: React.FC<IconLinkCardProps> = ({ icon, title, body, href, bordered = false }) => {
  return (
    <Link
      href={href}
      className={`group flex h-full items-start gap-4 rounded-2xl border ${bordered ? "border-[#E4E3EC]" : "border-transparent"} bg-white p-5 md:p-6 hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
        <Icon name={icon} size={20} />
      </span>
      <span className="flex flex-1 flex-col gap-1.5">
        <span className="text-[17px] font-bold text-primary2">{title}</span>
        <span className="text-sm/relaxed text-[#55536E]">{body}</span>
      </span>
      <LuArrowRight className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
};

export default IconLinkCard;
