import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "id"]
  }
});