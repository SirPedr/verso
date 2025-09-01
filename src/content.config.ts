import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    launch_date: z.date(),
    query_trigger: z.string().optional(),
  }),
});

export const collections = { posts };
