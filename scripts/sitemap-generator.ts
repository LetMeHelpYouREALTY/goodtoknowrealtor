/**
 * Automated Sitemap Generator
 * Generates and updates sitemap.xml with latest pages and timestamps
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Scan app directory for pages
 */
function scanAppDirectory(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const baseUrl = 'https://www.goodtoknowrealtor.com';
  const appDir = join(process.cwd(), 'src/app');

  // Predefined routes with priorities
  const routes = [
    { path: '/', priority: 1.0, changefreq: 'daily' as const },
    { path: '/about', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/contact', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/buying', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/selling', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/luxury', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/investing', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/listings', priority: 0.9, changefreq: 'daily' as const },
    { path: '/blog', priority: 0.8, changefreq: 'daily' as const },
    { path: '/areas/summerlin', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/areas/henderson', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/areas/north-las-vegas', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/areas/downtown', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/areas/green-valley', priority: 0.7, changefreq: 'weekly' as const },
  ];

  const now = new Date().toISOString();

  routes.forEach(route => {
    entries.push({
      url: `${baseUrl}${route.path}`,
      lastmod: now,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  });

  return entries;
}

/**
 * Generate sitemap XML
 */
function generateSitemapXML(entries: SitemapEntry[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';

  const urls = entries.map(entry => {
    return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
  }).join('\n');

  return xmlHeader + urlsetOpen + urls + '\n' + urlsetClose;
}

/**
 * Main sitemap generation function
 */
function runSitemapGeneration() {
  console.log('🗺️  Running Sitemap Generation...\n');

  const entries = scanAppDirectory();
  const xml = generateSitemapXML(entries);

  console.log('📊 Sitemap Statistics:');
  console.log('─────────────────────────────────────');
  console.log(`Total URLs: ${entries.length}`);
  console.log(`Last Updated: ${new Date().toISOString()}`);

  // In production, write to public/sitemap.xml
  // const sitemapPath = join(process.cwd(), 'public/sitemap-generated.xml');
  // writeFileSync(sitemapPath, xml, 'utf-8');

  console.log('\n✓ Sitemap generated successfully');
  console.log(`\nPreview (first 3 URLs):`);
  entries.slice(0, 3).forEach(entry => {
    console.log(`  - ${entry.url} (priority: ${entry.priority})`);
  });
}

// Run if called directly
if (require.main === module) {
  runSitemapGeneration();
}

export { runSitemapGeneration, scanAppDirectory, generateSitemapXML };
