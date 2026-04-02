import { Container, Section } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import AutoSliderTestimonial from "./AutoSliderTestimonial";
import { CtaBtn } from "@/components/buttons/CtaBtn";

interface MoreStoriesPropsType {
  title: string;
  subTitle: string;
  description: string;
  testimonials: {
    title: string;
    description: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
}

const MoreStories: React.FC<MoreStoriesPropsType> = ({
  title,
  subTitle,
  description,
  testimonials,
  cta,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="bg-background-black1 relative w-full xl:aspect-4/3 lg:aspect-4/3.5 md:aspect-4/5.75 sm:aspect-4/12 aspect-4/13"
    >
      <Image
        src="/testimonial.png"
        alt="testimonial"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 bg-black/50">
        <Container className="lg:h-full my-auto max-lg:py-18">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center h-full">
            <div className="flex flex-col gap-4 my-auto">
              <SectionHeading
                title={title}
                subTitle={subTitle}
                titleColor="white"
                subTitleColor="white"
                level={1}
                wrapperClassName="gap-3 max-lg:hidden"
                subTitleClassName="md:text-5xl!"
                titleWrapperClassName="rounded-full w-fit px-4 py-2  bg-white/5 backdrop-blur-xs shadow-inner shadow-white/5 border-[0.2px] border-white/70"
              />
              <SectionHeading
                title={title}
                subTitle={"What Our Customers Say"}
                titleColor="white"
                subTitleColor="white"
                level={1}
                wrapperClassName="gap-2 min-lg:hidden"
                subTitleClassName="md:text-5xl!"
                titleWrapperClassName="rounded-full w-fit px-4 py-2  bg-white/5 backdrop-blur-xs shadow-inner shadow-white/5 border-[0.2px] border-white/70"
              />
              <p
                className="text-white text-lg lg:block hidden"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
              <p className="text-white text-lg lg:hidden">
                Hotels across India use Eazotel to build better websites,
                increase direct bookings, and reduce OTA dependency.
              </p>
              <CtaBtn
                type="button"
                label={cta.label}
                href={cta.href}
                icon="arrow2"
                iconClass="text-color4"
                className="w-fit rounded-lg bg-white max-lg:hidden text-color4 font-medium"
              />
            </div>
            <div className="overflow-hidden lg:h-full grid lg:gap-4 gap-6 lg:grid-cols-2 grid-cols-1 w-full">
              <AutoSliderTestimonial testimonials={testimonials} />
              <AutoSliderTestimonial testimonials={testimonials} dir={true} />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default MoreStories;
