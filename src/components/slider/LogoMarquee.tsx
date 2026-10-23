"use client";
// Continuously scrolling logo strip, animated with CSS only.
// Replaces Swiper's free-mode autoplay for logo rows: same look, but no JavaScript running every frame
// (the Swiper version kept the main thread busy and preloaded every logo at full screen width).
//
// A client component on purpose: Next.js then sends only the list of logos (src + name) with the page,
// instead of the full markup of 100+ logo tiles a second time (the page data is part of the HTML).
import { useEffect, useState, type CSSProperties } from "react";
import LogoMarqueeItem, { type LogoMarqueeItemData } from "./LogoMarqueeItem";

export type { LogoMarqueeItemData };

interface LogoMarqueeProps {
  items: LogoMarqueeItemData[];
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
  // The loop's second half (translateX(-50%) needs it) is added in the browser, so the page's HTML
  // lists every logo once: no duplicate images or images without alt text for SEO checks.
  const [looped, setLooped] = useState(false);
  useEffect(() => setLooped(true), []);

  if (!items?.length) return null;
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
        {items.map((item, i) => (
          <LogoMarqueeItem key={`${item.src}-${i}`} item={item} itemClassName={itemClassName} imageClassName={imageClassName} eager={i < 12} />
        ))}
        {looped &&
          items.map((item, i) => (
            <LogoMarqueeItem
              key={`${item.src}-copy-${i}`}
              item={item}
              itemClassName={itemClassName}
              imageClassName={imageClassName}
              decorative
            />
          ))}
      </ul>
    </div>
  );
};

export default LogoMarquee;
