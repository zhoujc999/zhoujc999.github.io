import { getCollection, type CollectionEntry } from "astro:content";
import { profile } from "./profile";

export type Post = CollectionEntry<"posts">;

/** Describes the blog on its index page and in the RSS feed. */
export const blogDescription = `Posts by ${profile.name}.`;

/** Site-relative path of the feed. */
export const feedPath = "/rss.xml";

/** Site-relative path of a post's page. */
export function postPath(post: Post): string {
  return `/blog/${post.id}/`;
}

/** Every post to show, newest first. Drafts are included by the dev server only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
