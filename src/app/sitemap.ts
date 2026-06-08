import { MetadataRoute } from 'next';
import { getPostsWithCache } from '@/lib/blog/cache';
import { blogCategories } from '@/lib/blog-categories';
import { NEIGHBORHOOD_SLUGS } from '@/data/neighborhoods';
import { SEO_CONFIG } from '@/lib/seo';
import {
  STATIC_SITEMAP_ROUTES,
  STATIC_BLOG_SLUGS,
  dedupeSitemapEntries,
} from '@/lib/sitemap-routes';
import { PRIMARY_AREA_SLUGS } from '@/lib/primary-areas';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SEO_CONFIG.siteUrl;
  const currentDate = new Date().toISOString();

  const posts = await getPostsWithCache();

  const staticUrls = STATIC_SITEMAP_ROUTES.map((route) => ({
    url: route.path === '/' ? baseUrl : `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPostUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified || post.date || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const staticBlogUrls = STATIC_BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const blogCategoryUrls = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const neighborhoodUrls = NEIGHBORHOOD_SLUGS.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: slug === 'summerlin' || slug === 'henderson' ? 0.8 : 0.7,
  }));

  const primaryAreaUrls = PRIMARY_AREA_SLUGS.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: slug === 'summerlin' || slug === 'henderson' ? 0.85 : 0.8,
  }));

  return dedupeSitemapEntries([
    ...staticUrls,
    ...primaryAreaUrls,
    ...neighborhoodUrls,
    ...blogCategoryUrls,
    ...blogPostUrls,
    ...staticBlogUrls,
  ]);
}
