import type { Metadata } from 'next';

/** Google Search Console verification code from Vercel env (meta tag + HTML file). */
export function getGoogleSiteVerificationCode(): string | undefined {
  const code = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return code || undefined;
}

/** Metadata verification block — only set when env var is configured. */
export function getGoogleVerificationMetadata(): Pick<Metadata, 'verification'> | undefined {
  const code = getGoogleSiteVerificationCode();
  if (!code) return undefined;

  return {
    verification: {
      google: code,
    },
  };
}

/** Body for GSC HTML file upload (`google{code}.html`). */
export function getGoogleVerificationHtmlBody(code: string): string {
  return `google-site-verification: google${code}.html`;
}
