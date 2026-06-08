/** Luxury real estate design tokens — Dr. Jan Duffy / Good To Know REALTOR® */
export const LUXURY_THEME = {
  colors: {
    navy: '#0f1419',
    navyLight: '#1a2332',
    navyMuted: '#2a3544',
    gold: '#c9a962',
    goldLight: '#dfc07a',
    goldPale: '#e8d5a8',
    champagne: '#f5f0e8',
    ivory: '#faf8f5',
    charcoal: '#2c2c2c',
    white: '#ffffff',
  },
  fonts: {
    display: 'var(--font-serif)',
    body: 'var(--font-sans)',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
  },
  shadow: {
    card: '0 4px 24px rgba(15, 20, 25, 0.08)',
    cardHover: '0 12px 40px rgba(15, 20, 25, 0.14)',
    nav: '0 4px 30px rgba(15, 20, 25, 0.12)',
  },
} as const;

export type LuxuryTheme = typeof LUXURY_THEME;
