import rss from "@astrojs/rss";

import { getSortedPosts } from "utils";
import { SiteMeta } from "../siteMeta";

const postImportResult = import.meta.globEager("./post/**/*.mdx");
const posts = getSortedPosts(Object.values(postImportResult));

export const get = () =>
  rss({
    stylesheet: "/styles.xsl",
    title: SiteMeta.title,
    description: SiteMeta.description,
    site: SiteMeta.url,
    items: posts.map(({ frontmatter }) => ({
      description: frontmatter.description,
      link: `${SiteMeta.url}/post/${frontmatter.slug}/`,
      pubDate: frontmatter.pubDate,
      title: frontmatter.title,
    })),
    customData: `<language>en-us</language>`,
  });
