import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import LinkButton from "@/components/buttons/LinkButton";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

interface Props {
  title: string;
  subTitle: string;
  link: {
    label: string;
    href: string;
  };
  data: {
    number: string;
    description: string;
  }[];
}

const ProvenResults: React.FC<Props> = ({ title, subTitle, link, data }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FAFB]">
      <div className="bg-white p-6 rounded-[20px] grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-6">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            wrapperClassName="gap-4"
          />

          <CtaBtn
            type="button"
            icon="arrow"
            href={link.href}
            label={link.label}
            className="w-fit rounded-full bg-[#1B1B1B] text-white font-medium"
          />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className={`flex flex-col items-center xl:justify-center gap-2 ${index === 2 ? "max-xl:col-span-2" : ""}`}>
              <p
                className="text-primary lg:text-5xl text-4xl font-bold"
                dangerouslySetInnerHTML={{ __html: item.number || "" }}
              ></p>
              <p className="text-[#6B7280] max-md:text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ProvenResults;
