import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import seo from "./src/configs/seo";

// https://astro.build/config
export default defineConfig({
  site: seo.url,
  prefetch: true,
  output: "static",
  integrations: [tailwind(), react(), mdx(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "id"],
  },
});
