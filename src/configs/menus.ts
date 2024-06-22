import type { Menu } from "../types";

const menu: Menu[] = [
  {
    lang: "nav.home",
    title: "Home",
    url: "/",
  },
  {
    lang: "nav.features",
    title: "Features",
    url: "/features",
  },
  {
    lang: "nav.merchant",
    title: "Merchant",
    url: "/merchant",
  },
  {
    lang: "nav.help-center",
    title: "Help Center",
    url: "/help-center",
  },
  {
    lang: "nav.consumer",
    title: "Consumer",
    url: "/consumer",
  },
  {
    lang: "nav.faq",
    title: "FAQ",
    url: "/faq",
  },
  {
    type: "separator",
  },
  {
    lang: "nav.download",
    title: "Download",
    url: "/download",
    type: "button",
  },
];

export default menu;
