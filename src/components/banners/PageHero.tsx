import Container from "@/components/sectionComponants/Container";
import Eyebrow from "@/components/typography/Eyebrow";
import Image from "next/image";
import { ReactNode } from "react";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  crumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  lede: string;
  actions: ReactNode;
  image?: string;
  imageAlt: string;
  /** "photo" fills a rounded frame; "illustration" sits on a white card. */
  imageMode?: "photo" | "illustration";
  /** Small white card overlapping the bottom of the image. */
  floating?: ReactNode;
}

// Dark hero used on the industries hub, industry pages and service pages.
const PageHero: React.FC<PageHeroProps> = ({
  crumbs,
  eyebrow,
  title,
  lede,
  actions,
  image,
  imageAlt,
  imageMode = "photo",
  floating,
}) => {
  return (
    <section className="relative overflow-hidden bg-primary2 pt-24 pb-14 md:pt-32 md:pb-22">
      <Image
        src="/landing-pages/google-ads/fielmente-symbol-white.png"
        alt=""
        aria-hidden="true"
        width={390}
        height={820}
        className="pointer-events-none absolute -left-24 top-10 h-130 w-auto opacity-[0.04]"
      />
      <Container className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        <div className="flex flex-col gap-5 md:gap-6">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[34px]/[1.08] md:text-[50px]/[1.05] font-bold tracking-tight text-white">{title}</h1>
          <p className="text-base/relaxed md:text-lg/relaxed text-[#C9C7DD] max-w-150">{lede}</p>
          <div className="flex flex-wrap gap-3 pt-1">{actions}</div>
        </div>
        <div className="relative">
          {!image ? null : imageMode === "illustration" ? (
            <div className="rounded-3xl bg-white p-3 md:p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[615/394] w-full overflow-hidden rounded-2xl">
                <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-3xl">
              <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
          )}
          {floating && (
            <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-auto md:w-80 rounded-2xl bg-white p-4 md:p-5 shadow-[0_18px_50px_-20px_rgba(17,13,60,0.45)]">
              {floating}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
