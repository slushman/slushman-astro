export const slugify = (string) => string.toLowerCase().replace(' ', '-');

export const categorySlugs = (categories) => {
  return categories.map(category => ({
    category,
    slug: slugify(category),
  }));
};

export const checkIsHome = (url) => {
  const parsedUrl = new URL(url);
  return '/' === parsedUrl.pathname;
};

export const getSortedPosts = (posts, limit, exclude = null) => {
  let sortedPosts = posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  if (exclude !== null) {
    sortedPosts = posts.filter((post) => post.slug !== exclude);
  }

  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

export const getRelatedPosts = (posts, related) => {
  const filteredPosts = posts.filter((post) => related.includes(post.slug));
  return filteredPosts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}
