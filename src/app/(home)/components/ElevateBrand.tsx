"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import Image from "next/image";

interface Props {
  src: string;
  /** Describes the picture; falls back to the title. */
  alt?: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

const ElevateBrand: React.FC<Props> = ({ title, description, button, src, alt }) => {
  return (
    <SectionWithContainer>
      <div className="elevate-brand">
        <div className="grid lg:grid-cols-[1.3fr_1fr] grid-cols-1 items-center max-w-304 max-md:gap-6 md:ml-auto py-8">
          <div className="text-white space-y-4 max-w-lg max-md:px-4">
            <p className="md:text-[2.1rem] text-2xl font-semibold max-w-md">
              {title}
            </p>
            <p
              className="inter-link-2"
              dangerouslySetInnerHTML={{ __html: description || "" }}
            />
            <CtaBtn
              type="button"
              label={button.label}
              href={button.href}
              icon="arrow"
              iconClass="max-lg:hidden"
              className="w-fit rounded-full bg-white text-black font-medium"
            />
          </div>
          <div className="w-full md:w-[410px]  ml-auto relative aspect-[4/3.6]">
            <Image
              src={src}
              alt={alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 410px"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ElevateBrand;
