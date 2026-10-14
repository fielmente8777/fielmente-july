// Business partner logos as a continuously scrolling strip (CSS-only, see LogoMarquee).
import { BusinessPartnersDataTypes } from "@/@types/@homeType";
import LogoMarquee from "./LogoMarquee";

interface Props {
  cards: BusinessPartnersDataTypes["cards"];
  wrapperClassName?: string;
  xlSlidesPerView?: number;
}

const BusinessPartnersSlider: React.FC<Props> = ({ cards, wrapperClassName, xlSlidesPerView = 6 }) => {
  return (
    <LogoMarquee
      wrapperClassName={`demo ${wrapperClassName ?? ""}`}
      perView={{ base: 2.5, md: 4, lg: 5, xl: xlSlidesPerView }}
      itemClassName="hover:shadow-lg shadow-slate-300 transition"
      items={(cards || []).map((c) => ({ src: c.imgSrc, alt: c.title }))}
    />
  );
};

export default BusinessPartnersSlider;
