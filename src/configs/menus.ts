import type { Menu } from "../types";

const menu: Menu[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Features",
    url: "/features",
  },
  {
    title: "Merchant",
    url: "/merchant",
  },
  {
    title: "Help Center",
    url: "/help-center",
  },
  {
    title: "Consumer",
    url: "/consumer",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    type: "separator",
  },
  {
    title: "Download",
    url: "/download",
    type: "button",
  },
];

export default menu;
