import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

import { getSortedPosts } from "utils";
import { SiteMeta } from "../siteMeta";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => data.draft !== true);
  const sortedPosts = getSortedPosts(posts);

  return rss({
    customData: `<language>en-us</language>`,
    description: SiteMeta.description,
    items: sortedPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.pubDate,
      description: data.description,
      link: `/post/${slug}/`,
    })),
    site: SiteMeta.url,
    stylesheet: "/styles.xsl",
    title: SiteMeta.title,
  });
}
