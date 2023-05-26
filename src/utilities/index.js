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

export const getSortedPosts = (posts, limit, exclude = null) => {
  let sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  if (exclude !== null) {
    sortedPosts = posts.filter((post) => post.slug !== exclude);
  }

  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

export const getCategories = (posts) => {
  const allCats = posts.map(({ data }) => data.category).flat();
  const uniqueCats = [...new Set(allCats)];
  const uniqueFullCats = categorySlugs(uniqueCats);

  return uniqueFullCats.map(({ category, slug }) => ({
    params: { category: slug },
    props: { category, slug },
  }));
};
