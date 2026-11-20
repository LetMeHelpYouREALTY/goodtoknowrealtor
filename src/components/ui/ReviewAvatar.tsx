import { useId } from 'react';

/**
 * Luxury monogram badge for client reviews.
 * Real clients' reviews never get a stock or AI-generated face: a stranger's photo
 * next to a named client's quote implies that's the client. A restrained navy-and-gold
 * monogram (serif initials, fine double ring) matches the site's luxury styling and
 * stays truthful.
 */
function initialsOf(name: string): string {
  // "Jennifer & Luis Rodriguez" -> "JL"; "Sarah M." -> "SM"; "The Johnson Family" -> "JF"
  const words = name.split(/[\s&,.]+/).filter((w) => w && !/^(the|and)$/i.test(w));
  const letters = words.map((w) => w[0]!.toUpperCase());
  return letters.length >= 2 ? letters[0]! + letters[1]! : (letters[0] ?? '');
}

export default function ReviewAvatar({ name, size = 48 }: { name: string; size?: number }) {
  const id = useId().replace(/:/g, '');
  const initials = initialsOf(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 64 64'
      role='img'
      aria-label={`${name}, client`}
      className='flex-shrink-0 rounded-full'
    >
      <defs>
        <radialGradient id={`bg-${id}`} cx='35%' cy='30%' r='75%'>
          <stop offset='0%' stopColor='#1c2a3d' />
          <stop offset='100%' stopColor='#0b1118' />
        </radialGradient>
        <linearGradient id={`gold-${id}`} x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor='#f3e2b3' />
          <stop offset='45%' stopColor='#c9a962' />
          <stop offset='100%' stopColor='#9c7a3c' />
        </linearGradient>
      </defs>
      <circle cx='32' cy='32' r='32' fill={`url(#bg-${id})`} />
      <circle cx='32' cy='32' r='29.5' fill='none' stroke={`url(#gold-${id})`} strokeWidth='1.25' />
      <circle cx='32' cy='32' r='27' fill='none' stroke={`url(#gold-${id})`} strokeOpacity='0.45' strokeWidth='0.5' />
      <text
        x='32'
        y='32'
        dominantBaseline='central'
        textAnchor='middle'
        fontFamily='var(--font-serif), "Cormorant Garamond", Georgia, serif'
        fontSize={initials.length > 1 ? 24 : 28}
        fontWeight='500'
        letterSpacing='1'
        fill={`url(#gold-${id})`}
      >
        {initials}
      </text>
    </svg>
  );
}
