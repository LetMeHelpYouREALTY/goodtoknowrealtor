import { getPostsWithCache } from '@/lib/blog/cache';
import { buildBlogRssFeed } from '@/lib/blog/rss';

export const revalidate = 21600;

export async function GET() {
  const posts = await getPostsWithCache();

  return new Response(buildBlogRssFeed(posts), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
