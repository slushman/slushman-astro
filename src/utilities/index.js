export const slugify = (string) => string.toLowerCase().replace(" ", "-");

export const categorySlugs = (categories) => {
  return categories.map((category) => ({
    category,
    slug: slugify(category),
  }));
};

export const checkIsHome = (url) => {
  const parsedUrl = new URL(url);
  return "/" === parsedUrl.pathname;
};

export const excludeDrafts = (posts) => {
  return posts.filter((post) => post.frontmatter?.draft !== true);
};

export const sortPosts = (posts) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const getSortedPosts = (posts, limit, exclude = null) => {
  const published = excludeDrafts(posts);
  let sortedPosts = sortPosts(published);

  if (exclude !== null) {
    sortedPosts = posts.filter((post) => post.frontmatter.slug !== exclude);
  }

  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

export const getRelatedPosts = (posts, related) => {
  const published = excludeDrafts(posts);
  const filteredPosts = published.filter((post) =>
    related.includes(post.frontmatter.slug)
  );
  return sortPosts(filteredPosts);
};

export const getCategoryPosts = (posts) => {
  const published = excludeDrafts(posts);
  const categoryPosts = published.filter(({ frontmatter }) =>
    frontmatter.category.includes(category)
  );
  return sortPosts(categoryPosts);
};

export const getCategories = (posts) => {
  const published = excludeDrafts(posts);
  const allCats = published.map((post) => post.frontmatter.category).flat();
  const uniqueCats = [...new Set(allCats)];
  const uniqueFullCats = categorySlugs(uniqueCats);

  return uniqueFullCats.map(({ category, slug }) => ({
    params: { category: slug },
    props: { category, slug },
  }));
};
