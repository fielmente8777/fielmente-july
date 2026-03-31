import { ClientData } from "@/utils/client";
import { CtaBtnPropsType } from "./@types";
import { JSX } from "react";

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

export interface Need2Props {
  title: string;
  description: string;
  cards: {
    title: string;
    subtitle: string;
  }[];
}

export interface ClientsProps {
  title: string;
  clients: ClientData[];
}

export interface ChooseUsType {
  title: string;
  subTitle: string;
  cards: {
    icon: JSX.Element;
    title: string;
    description: string;
    index?: number;
  }[];
}

export interface contactCardType {
  title: string;
  lists: {
    icon: JSX.Element;
    title: string;
  }[];
  links: {
    title: string;
    href: string;
  }[];
}

export interface RevenueManagementServicesType {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    icon: JSX.Element;
  }[];
}

export interface OtaAddType {
  title: string;
  subTitle: string;
  links: {
    title: string;
    href: string;
  }[];
}
