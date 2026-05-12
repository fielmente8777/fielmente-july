import { Section } from "@/components";
import Image from "next/image";

interface MilestoneProps {
  src: string;
  items: {
    value: string;
    label: string;
  }[];
}

const Milestone: React.FC<MilestoneProps> = ({ src, items }) => {
  return (
    <Section
      defaultPadding={false}
      className="w-full md:aspect-4/1 aspect-4/4.5 relative"
    >
      <Image
        src={src}
        alt="milestone"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 100vw" 
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
        <ul className="md:max-w-4xl md:w-full rounded-2xl glassy-card backdrop-blur-sm! flex max-md:flex-col md:items-center justify-between gap-6 md:py-10 md:px-20 px-10 py-5">
          {items.map((item, index) => (
            <li key={index} className="text-white">
              <span
                className="text-5xl font-semibold span-color-2"
                dangerouslySetInnerHTML={{ __html: item.value }}
              ></span>
              <br />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Milestone;
