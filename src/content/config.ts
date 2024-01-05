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

const project = defineCollection({
  schema: z.object({
    category: z.array(z.string()).optional(),
    cta: z.string(),
    description: z.string(),
    heroAccount: z.string().optional(),
    heroPhotographer: z.string().optional(),
    link: z.string().url(),
    name: z.string(),
  }),
});

export const collections = { blog, project };
