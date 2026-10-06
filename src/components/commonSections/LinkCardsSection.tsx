import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { Icon, IconKey } from "@/utils/serviceIcons";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export interface LinkCardItem {
  title: string;
  body: string;
  href: string;
  icon?: IconKey;
  image?: string;
}

interface LinkCardsSectionProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  items: LinkCardItem[];
  tint?: boolean;
}

// Three-column cards linking to related products, services or pages.
const LinkCardsSection: React.FC<LinkCardsSectionProps> = ({ eyebrow, title, lede, items, tint = false }) => {
  return (
    <section className={`py-14 md:py-22 ${tint ? "bg-[#F5F5F9]" : ""}`}>
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E3EC] bg-white hover:border-primary2/40 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all"
            >
              {it.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F5F9]">
                  <Image
                    src={it.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                {it.icon && !it.image && (
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                    <Icon name={it.icon} size={20} />
                  </span>
                )}
                <span className="text-lg font-bold text-primary2">{it.title}</span>
                <span className="text-sm/relaxed text-[#55536E]">{it.body}</span>
                <span className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-sapphireBlue">
                  Learn more <LuArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LinkCardsSection;
