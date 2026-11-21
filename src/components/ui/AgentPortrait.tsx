import Image from 'next/image';

export const AGENT_HEADSHOT_SRC = '/images/dr-jan-duffy-headshot.png';
export const AGENT_HEADSHOT_ALT =
  'Dr. Jan Duffy, Las Vegas luxury REALTOR®, Berkshire Hathaway HomeServices Nevada Properties';

type AgentPortraitProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
};

const SIZE_PX = {
  sm: 64,
  md: 96,
  lg: 144,
  xl: 220,
} as const;

/**
 * Canonical Dr. Jan Duffy headshot for trust/authority placements.
 * Prefer section intros and CTA bands—not every subsection.
 */
export function AgentPortrait({
  size = 'md',
  className = '',
  priority = false,
  showCaption = false,
}: AgentPortraitProps) {
  const px = SIZE_PX[size];

  return (
    <figure className={`inline-flex flex-col items-center ${className}`}>
      <Image
        src={AGENT_HEADSHOT_SRC}
        alt={AGENT_HEADSHOT_ALT}
        width={px}
        height={px}
        priority={priority}
        className="rounded-full object-cover ring-2 ring-[#c9a962]/70 shadow-[0_0_0_4px_rgba(15,20,25,0.08)]"
      />
      {showCaption ? (
        <figcaption className="mt-3 text-center">
          <p className="font-display text-lg font-semibold text-[#0f1419]">
            Dr. Jan Duffy
          </p>
          <p className="text-sm text-gray-600">
            Good To Know REALTOR® · BHHS Nevada Properties
          </p>
          <p className="text-xs text-gray-500">License S.0197614.LLC</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
