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
