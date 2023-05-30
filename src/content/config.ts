import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    category: z.array(z.string()),
    description: z.string(),
    draft: z.boolean().optional(),
    heroAccount: z.string(),
    heroPhotographer: z.string(),
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

export const collections = { blog };