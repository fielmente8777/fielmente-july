// Client logos as a continuously scrolling strip (CSS-only, see LogoMarquee).
import { OurValuedClientsPropsType } from "@/@types/@types";
import LogoMarquee from "./LogoMarquee";

interface Props {
  cards: OurValuedClientsPropsType["cards"];
  wrapperClassName?: string;
  lgSlidePerView?: number;
}

const ClientsSlider: React.FC<Props> = ({ cards, wrapperClassName, lgSlidePerView = 5 }) => {
  return (
    <LogoMarquee
      wrapperClassName={`demo ${wrapperClassName ?? ""}`}
      perView={{ base: 2.5, md: 3, lg: lgSlidePerView, xl: lgSlidePerView }}
      itemClassName="hover:shadow-lg shadow-slate-300 transition"
      imageClassName="p-2 border border-[#E3E5E8]"
      items={(cards || []).map((c) => ({ src: c.src, alt: c.alt, background: c.className }))}
      eagerCount={0}
    />
  );
};

export default ClientsSlider;
