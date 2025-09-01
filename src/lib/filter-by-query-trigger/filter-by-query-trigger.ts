import type { CollectionEntry } from "astro:content";

export const filterByQueryTrigger = (
  post: CollectionEntry<"posts">,
  searchParams: URLSearchParams,
) => {
  if (!post.data.query_trigger) {
    return true;
  }

  return searchParams.get(post.data.query_trigger) === "true";
};
