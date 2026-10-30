/**
 * Branded monogram badge for client reviews.
 * Real clients' reviews never get a stock or AI-generated face: a stranger's photo
 * next to a named client's quote implies that's the client. Initials + a home mark
 * look polished and stay truthful.
 */
const PALETTES = [
  { bg: '#0f1419', fg: '#dfc07a' }, // navy / gold
  { bg: '#b45309', fg: '#fff7ed' }, // amber / cream
  { bg: '#1e3a5f', fg: '#e8d5a8' }, // deep blue / sand
  { bg: '#3f4d3a', fg: '#f1e6c8' }, // sage / parchment
];

function initialsOf(name: string): string {
  // "Jennifer & Luis Rodriguez" -> "JL"; "Sarah M." -> "SM"; "The Johnson Family" -> "JF"
  const words = name
    .split(/[\s&,.]+/)
    .filter((w) => w && !/^(the|and)$/i.test(w));
  const letters = words.map((w) => w[0]!.toUpperCase());
  return (letters.length >= 2 ? letters[0]! + letters[1]! : (letters[0] ?? '★')).slice(0, 2);
}

function paletteFor(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return PALETTES[h % PALETTES.length]!;
}

export default function ReviewAvatar({ name, size = 48 }: { name: string; size?: number }) {
  const { bg, fg } = paletteFor(name);
  const initials = initialsOf(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      role='img'
      aria-label={`${name} — client review`}
      className='flex-shrink-0 rounded-full'
    >
      <circle cx='24' cy='24' r='24' fill={bg} />
      <circle cx='24' cy='24' r='21.5' fill='none' stroke={fg} strokeOpacity='0.35' strokeWidth='1' />
      <text
        x='24'
        y='27'
        textAnchor='middle'
        fontFamily='Georgia, "Times New Roman", serif'
        fontSize={initials.length > 1 ? 16 : 18}
        fontWeight='600'
        letterSpacing='0.5'
        fill={fg}
      >
        {initials}
      </text>
      {/* small home mark */}
      <path d='M20 38.5 L24 35 L28 38.5 V42 H20 Z' fill={fg} fillOpacity='0.85' />
    </svg>
  );
}
