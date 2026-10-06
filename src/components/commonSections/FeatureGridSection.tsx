import IconCard from "@/components/cards/IconCard";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { IconKey } from "@/utils/serviceIcons";

interface FeatureGridSectionProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  items: { icon: IconKey; title: string; body: string }[];
  columns?: 2 | 3;
}

// Grid of feature cards ("What's included").
const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({ eyebrow, title, lede, items, columns = 3 }) => {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className={`grid sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-4 md:gap-5`}>
          {items.map((f) => (
            <IconCard key={f.title} icon={f.icon} title={f.title} body={f.body} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureGridSection;
