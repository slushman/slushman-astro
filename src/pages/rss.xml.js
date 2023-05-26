import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

import { getSortedPosts } from "utils";
import { SiteMeta } from "../siteMeta";

export async function get(context) {
  const posts = await getCollection("blog", ({ data }) => data.draft !== true);
  const sortedPosts = getSortedPosts(posts);

  return rss({
    customData: `<language>en-us</language>`,
    description: SiteMeta.description,
    items: sortedPosts.map(({ data, slug }) => ({
      description: data.description,
      link: `${SiteMeta.url}/post/${slug}/`,
      pubDate: data.pubDate,
      title: data.title,
    })),
    site: SiteMeta.url,
    stylesheet: "/styles.xsl",
    title: SiteMeta.title,
  });
}
