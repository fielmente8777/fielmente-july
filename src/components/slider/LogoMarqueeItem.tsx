import Image from "next/image";
import logoThumbs from "@/utils/logoThumbs.json";

// Small WebP copies made by scripts/make-logo-thumbs.mjs (runs before each build).
const thumbs = logoThumbs as Record<string, string>;

export interface LogoMarqueeItemData {
  src: string;
  alt: string;
  background?: string;
}

interface Props {
  item: LogoMarqueeItemData;
  itemClassName?: string;
  imageClassName?: string;
  /** The second, looping copy of the strip: hidden from screen readers and search engines. */
  decorative?: boolean;
}

/** One logo tile of LogoMarquee. Shared by the server-rendered strip and its client-side copy. */
const LogoMarqueeItem: React.FC<Props> = ({ item, itemClassName = "", imageClassName = "", decorative = false }) => (
  <li aria-hidden={decorative || undefined} className="logo-marquee-item">
    <div
      className={`logo-tile ${itemClassName}`}
      style={item.background ? { background: item.background } : undefined}
    >
      {/* The pre-made small copy is used as-is (no optimiser URL or srcset per logo, which kept the HTML
          large with 100+ logos per page). Logos without a copy fall back to the optimiser. */}
      {thumbs[item.src] ? (
        // eslint-disable-next-line @next/next/no-img-element -- pre-sized static file, no optimiser needed
        <img src={thumbs[item.src]} width={240} height={160} loading="lazy" decoding="async" className={`logo-tile-img ${imageClassName}`} alt={decorative ? "" : item.alt} />
      ) : (
        <Image src={item.src} width={240} height={160} loading="lazy" className={`logo-tile-img ${imageClassName}`} alt={decorative ? "" : item.alt} />
      )}
    </div>
  </li>
);

export default LogoMarqueeItem;
