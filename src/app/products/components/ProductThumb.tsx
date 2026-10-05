// Thumbnail for any product: its illustration, or a scaled-down code-built mock when it has none.
import Image from "next/image";
import type { ProductMockKind } from "../data/products";
import { productLink } from "../data/products";
import ProductMock from "./ProductMock";

export function ProductThumb({
  image,
  mock,
  sizes = "(max-width: 768px) 100vw, 33vw",
  scale = 0.62,
}: {
  image?: string;
  mock?: ProductMockKind;
  sizes?: string;
  /** Mock only: how far to shrink it (0.62 suits a card, ~0.2 a small tile). */
  scale?: number;
}) {
  if (image) return <Image src={image} alt="" fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />;
  if (!mock) return null;
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#ECEBF3]" aria-hidden="true">
      <div
        className="absolute left-0 top-0 p-4 [&>div]:shadow-none"
        style={{ width: `${100 / scale}%`, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        <ProductMock kind={mock} />
      </div>
    </div>
  );
}

/** A LinkCards item for any product (new or live), with a visual for mock-only products. */
export function productCard(slug: string) {
  const p = productLink(slug);
  if (!p) return null;
  return { ...p, visual: !p.image && p.mock ? <ProductThumb mock={p.mock} /> : undefined };
}

export const productCards = (slugs: string[]) =>
  slugs.map(productCard).filter((x): x is NonNullable<ReturnType<typeof productCard>> => Boolean(x));
