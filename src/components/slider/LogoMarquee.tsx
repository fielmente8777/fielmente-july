// Continuously scrolling logo strip, animated with CSS only.
// Replaces Swiper's free-mode autoplay for logo rows: same look, but no JavaScript running every frame
// (the Swiper version kept the main thread busy and preloaded every logo at full screen width).
import Image from "next/image";
import type { CSSProperties } from "react";

export interface LogoMarqueeItem {
  src: string;
  alt: string;
  background?: string;
}

interface LogoMarqueeProps {
  items: LogoMarqueeItem[];
  /** Logos visible at once: phone, ≥768px, ≥1024px, ≥1280px. */
  perView?: { base: number; md: number; lg: number; xl: number };
  itemClassName?: string;
  imageClassName?: string;
  wrapperClassName?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  items,
  perView = { base: 2.5, md: 4, lg: 5, xl: 6 },
  itemClassName = "",
  imageClassName = "",
  wrapperClassName = "",
}) => {
  if (!items?.length) return null;
  const loop = [...items, ...items];
  const vars = {
    "--n-base": perView.base,
    "--n-md": perView.md,
    "--n-lg": perView.lg,
    "--n-xl": perView.xl,
    "--marquee-duration": `${Math.max(20, items.length * 3)}s`,
  } as CSSProperties;

  return (
    <div className={`logo-marquee w-full overflow-hidden ${wrapperClassName}`} style={vars}>
      <ul className="logo-marquee-track flex w-max">
        {loop.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className="logo-marquee-item shrink-0 px-2.5"
          >
            <div
              className={`relative w-full lg:aspect-3/1.5 aspect-4/4 rounded-xl flex justify-center items-center ${itemClassName}`}
              style={item.background ? { background: item.background } : undefined}
            >
              <Image
                src={item.src}
                fill
                loading="lazy"
                className={`object-contain w-full h-full rounded-md px-6 ${imageClassName}`}
                alt={i >= items.length ? "" : item.alt}
                sizes="(max-width: 768px) 40vw, (max-width: 1280px) 20vw, 16vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoMarquee;
