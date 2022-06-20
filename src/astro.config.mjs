// astro.config.mjs

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SiteMeta } from "./siteMeta";

export default defineConfig({
  site: SiteMeta.url,
  trailingSlash: "always",
  integrations: [sitemap(), robotsTxt()],
  markdown: {
    drafts: true,
    render: [
      "@astrojs/markdown-remark",
      {
        remarkPlugins: ["rehype-slug", "remark-autolink-headings"],
        rehypePlugins: [],
      },
    ],
  },
  experimental: {
    integrations: true,
  },
});

/**
 * Cloudinary account URL:
 * https://slushman.mo.cloudinary.net/
 */
