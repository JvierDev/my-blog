import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    pubDate: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };
