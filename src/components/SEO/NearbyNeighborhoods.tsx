import Link from 'next/link';
import { getNearbyNeighborhoods } from '@/data/internalLinks';

/** Hub-and-spoke links for a neighborhood page: nearby neighborhoods + the area hub. */
export default function NearbyNeighborhoods({ name }: { name: string }) {
  const { label, hub, links } = getNearbyNeighborhoods(name);

  return (
    <section aria-labelledby='nearby-heading' className='max-w-6xl mx-auto px-4 py-10'>
      <h2 id='nearby-heading' className='text-2xl font-semibold text-gray-900 mb-2'>
        Neighborhoods near {name}
      </h2>
      <p className='text-gray-700 mb-5'>
        Comparing {label} options? Browse{' '}
        <Link href={hub.href} className='text-amber-800 font-semibold underline'>
          {hub.anchor}
        </Link>{' '}
        or check these nearby communities.
      </p>
      <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='block rounded-lg border border-gray-200 px-4 py-3 font-medium text-amber-800 hover:border-amber-700 transition-colors'
            >
              {link.anchor}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
