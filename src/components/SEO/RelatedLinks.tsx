'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRelatedLinks } from '@/data/internalLinks';

/**
 * "Keep exploring" block rendered above the footer on every page.
 * Server-rendered on first load (client components SSR), so crawlers see the links.
 * Neighborhood pages render NearbyNeighborhoods instead, so this skips /areas/[neighborhood].
 */
export default function RelatedLinks() {
  const pathname = usePathname() || '/';
  const PRIMARY_AREAS = ['summerlin', 'henderson', 'green-valley', 'north-las-vegas', 'downtown'];
  const areaMatch = pathname.match(/^\/areas\/([^/]+)$/);
  const isNeighborhood = !!areaMatch?.[1] && !PRIMARY_AREAS.includes(areaMatch[1]);
  const links = isNeighborhood ? [] : getRelatedLinks(pathname);
  if (links.length === 0) return null;

  return (
    <nav aria-labelledby='related-links-heading' className='bg-[#f7f4ee] border-t border-[#e8dcc4]'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <h2 id='related-links-heading' className='text-xl font-semibold text-gray-900 mb-5'>
          Keep exploring
        </h2>
        <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='block rounded-lg bg-white border border-[#e8dcc4] px-4 py-3 hover:border-amber-700 transition-colors'
              >
                <span className='block font-semibold text-amber-800'>{link.anchor}</span>
                {link.blurb && <span className='block text-sm text-gray-700'>{link.blurb}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
