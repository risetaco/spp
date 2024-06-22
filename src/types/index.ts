import { ui, defaultLang } from "../i18n/ui";

type Menu = {
  lang?: keyof (typeof ui)[typeof defaultLang];
  title?: string;
  url?: string;
  type?: "link" | "button" | "separator";
};

type Benefit = {
  title: string;
  description: string;
  icon: string;
};

type GetStarted = {
  title: string;
  description: string;
  url: string;
  icon: string;
  cta?: string;
};

type Footer = {
  logo: string;
  socials: {
    name?: string;
    url: string;
    logo?: string;
    alt?: string;
  }[];
  download: {
    name?: string;
    url: string;
    logo?: string;
    alt?: string;
  }[];
  links: {
    title: string;
    items: {
      name: string;
      url: string;
    }[];
  }[];
};

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export type { Menu, Benefit, GetStarted, Footer, Feature, FAQ };
