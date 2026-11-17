import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { blogDescription, getPosts, postPath } from "../data/posts";
import { profile } from "../data/profile";

// Each item carries the post's title, description, date, and link. Readers follow the link for the text.
export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('The feed needs absolute URLs: set "site" in astro.config.mjs.');

  const posts = await getPosts();
  return rss({
    title: profile.name,
    description: blogDescription,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postPath(post),
    })),
  });
};
