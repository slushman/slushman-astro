import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    drafts: true
  },
  site: "https://www.slushman.com",
  trailingSlash: "always"
});