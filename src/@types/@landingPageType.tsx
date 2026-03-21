import { CtaBtnPropsType } from "./@types";

export interface ServicesSectionProps {
  title: string;
  subTitle: string;
  points: string[];
  services: {
    label?: string;
    src: string;
    title: string;
    description: string;
    result?: string;
    cta: CtaBtnPropsType;
  }[];
  ctaCard: {
    title: string;
    description: string;
    cta: CtaBtnPropsType;
  };
}

export interface ResultsSectionProps {
  title: string;
  heading: string;
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  cta: CtaBtnPropsType;
}

export interface GrowthSectionProps {
  title: string;
  subTitle: string;
  points: {
    title: string;
    description: string;
    src: string;
  }[];
}
