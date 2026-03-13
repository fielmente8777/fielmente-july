import { SectionWithContainer } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

const ElevateBrand: React.FC<Props> = ({ title, description, button, src }) => {
  return (
    <SectionWithContainer containerClassName="elevate-brand">
      <div className="grid lg:grid-cols-[1.3fr_1fr] grid-cols-1 items-center max-w-304 ml-auto py-8">
        <div className="text-white space-y-4 max-w-lg">
          <h2 className="md:text-[2.1rem] text-2xl font-semibold max-w-md">{title}</h2>
          <p className="inter-link-2" dangerouslySetInnerHTML={{ __html: description }} />
          <LinkButton
            label={button.label}
            href={button.href}
            className="w-fit rounded-full bg-white text-black font-medium"
          />
        </div>
        <div className="w-full relative aspect-[4/3.6]">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ElevateBrand;
