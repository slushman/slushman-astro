import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    category: z.array(z.string()),
    description: z.string(),
    draft: z.boolean().optional(),
    heroAccount: z.string().optional(),
    heroPhotographer: z.string().optional(),
    // Transform string to Date object
		pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    relatedPosts: z.array(reference('blog')).optional(),
    title: z.string(),
    videoURL: z.string().optional(),
  }),
});

const presentations = defineCollection({
  schema: z.object({
    author: z.string(),
    title: z.string(),
  }),
});

export const collections = { blog, presentations };
