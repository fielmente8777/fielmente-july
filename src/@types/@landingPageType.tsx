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
    cta: {
      label: string;
      type: string;
    };
  }[];
  ctaCard: {
    title: string;
    description: string;
    cta: {
      label: string;
      type: string;
    };
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
  cta: {
    label: string;
    type: string;
  };
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