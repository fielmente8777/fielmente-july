import { CtaBtnPropsType } from "./@types";

export interface SectionCardType {
  title: string;
  image: string;
  description: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface WhyNeedProps {
    title: string;
    description: string;
    cards: {
        src: string;
        title: string;
    }[];
    cta: CtaBtnPropsType;
} 

export interface WhyNeedSeoProps {
    title: string;
    description: string;
    cards: {
        src: string;
        title: string;
        subtitle: string;
    }[];
    cta: {
        label: string;
        type: "button";
    };
    image: string;
}