import { SectionWithContainer } from "@/components";
import Accordion2 from "@/components/cards/Accordion2";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

type FaqBodyType = "list" | "number" | "null";

interface FaqBody {
  type: string;
  filter?: FaqBodyType;
  header?: string;
  list?: string[];
  footer?: string;
}

interface FaqItemWithBody {
  question: string;
  body: FaqBody;
}

interface FaqItemWithAnswer {
  question: string;
  answer: string;
  items?: string[];
}

// Union of both patterns
type FaqItem = FaqItemWithBody | FaqItemWithAnswer;

export interface FaqSection {
  title: string;
  faqs: FaqItem[];
}
const FaqSection: React.FC<FaqSection> = ({ title, faqs }) => {
  return (
    <SectionWithContainer>
      <SectionHeading
        subTitle={title}
        subLevel={2}
        subTitleColor="primary2"
        textCenter
      />
      <div className="mt-10">
        {faqs.map((faq, index) => (
          <Accordion2 key={index} item={faq} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;
