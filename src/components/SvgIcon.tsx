import type { CSSProperties } from "react";

interface SvgIconProps {
  /** Path to a static .svg file in /public. */
  src: string;
  width: number;
  height: number;
  /**
   * "image": the SVG keeps its own colours.
   * "mask": the SVG is used as a shape and painted with the text colour (for icons drawn in currentColor).
   */
  mode?: "image" | "mask";
  className?: string;
}

/**
 * A decorative icon loaded from a static SVG file instead of being written into the page.
 * Large inline SVGs were most of the page weight (each one is sent twice: in the HTML and again
 * in Next.js's page data). As a file it is downloaded once and cached across pages.
 * Rendered as a <span>, so it is not an image without alt text in SEO audits.
 */
export default function SvgIcon({ src, width, height, mode = "image", className = "" }: SvgIconProps) {
  const fill = `url("${src}") center / contain no-repeat`;
  const style: CSSProperties =
    mode === "mask"
      ? { width, height, backgroundColor: "currentColor", WebkitMask: fill, mask: fill }
      : { width, height, background: fill };
  return <span aria-hidden="true" className={`block shrink-0 ${className}`} style={style} />;
}
