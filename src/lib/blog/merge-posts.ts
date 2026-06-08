import type { BlogPost } from '@/types/blog';

/** Merge local evergreen posts into fetched posts without duplicating slugs. */
export function mergeEvergreenPosts(
  fetched: BlogPost[],
  evergreen: BlogPost[],
): BlogPost[] {
  const slugSet = new Set(fetched.map((post) => post.slug));
  const merged = [...fetched];

  for (const post of evergreen) {
    if (!slugSet.has(post.slug)) {
      merged.push(post);
      slugSet.add(post.slug);
    }
  }

  return merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
