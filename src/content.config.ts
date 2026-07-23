import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { MOODS } from "./lib/moods/moods";
import { SP_OFFSET_MS } from "./lib/journal-date/journal-date";

export const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    launch_date: z.date(),
  }),
});

// o diário — private, unlisted daily journal. Kept a separate collection so it
// never leaks into getCollection("posts") or the public index.
export const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    // Authored in São Paulo wall-clock. YAML parses the bare timestamp as UTC;
    // shift by +3h so the stored Date is the true GMT-3 instant. Dates format
    // back in America/São Paulo (see lib/journal-date), so what you write is
    // what shows. datetime precision also keeps same-day entries sorted.
    date: z.coerce.date().transform((d) => new Date(d.getTime() + SP_OFFSET_MS)),
    mood: z.enum(MOODS),
    title: z.string().optional(),
  }),
});

export const collections = { posts, journal };
