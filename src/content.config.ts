import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per post. The file name is the post's URL: the-ghost-jam.md -> /blog/the-ghost-jam/.
const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    /** One sentence, shown on the blog index and used as the page description. */
    description: z.string(),
    /** Publication day, written as YYYY-MM-DD. */
    date: z.coerce.date(),
    /** Drafts appear in `npm run dev` only. The production build leaves them out. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
