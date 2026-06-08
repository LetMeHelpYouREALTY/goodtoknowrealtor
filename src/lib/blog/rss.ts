import type { BlogPost } from '@/types/blog';
import { SEO_CONFIG } from '@/lib/seo';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toUTCString();
  }
  return parsed.toUTCString();
}

export function buildBlogRssFeed(posts: BlogPost[]): string {
  const channelLink = `${SEO_CONFIG.siteUrl}/blog`;
  const items = posts
    .slice(0, 50)
    .map((post) => {
      const link = `${SEO_CONFIG.siteUrl}/blog/${post.slug}`;
      const description = escapeXml(post.excerpt || post.title);
      const content = post.content
        ? `<![CDATA[${post.content}]]>`
        : `<![CDATA[${post.excerpt}]]>`;

      return `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${link}</link>
  <guid isPermaLink="true">${link}</guid>
  <pubDate>${toRfc822(post.date)}</pubDate>
  <description>${description}</description>
  <content:encoded>${content}</content:encoded>
  <author>${escapeXml(post.author)}</author>
</item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SEO_CONFIG.siteName)} — Las Vegas Real Estate Blog</title>
    <link>${channelLink}</link>
    <description>${escapeXml('Las Vegas and Henderson real estate market updates, buyer and seller guides, and neighborhood insights from Dr. Jan Duffy.')}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Good To Know REALTOR</generator>
${items}
  </channel>
</rss>`;
}
