# Vercel Best Practices Guide (2026)

## Environment Variables Security

### 1. Mark Sensitive Variables
In Vercel dashboard, mark these as **Sensitive**:
- `REVALIDATE_SECRET` - Once marked, Vercel stores it encrypted and redacts it in logs
- `WORDPRESS_APP_PASSWORD` - Authentication credentials
- `WP_APP_PASS` - Legacy auth credential
- Any API keys or tokens added in the future

**How to mark as sensitive:**
1. Go to Project Settings → Environment Variables
2. Edit each sensitive variable
3. Check "Sensitive" checkbox
4. Save changes

### 2. Separate Credentials Per Environment
**CRITICAL:** Do NOT use the same credentials across all environments.

**Production:**
- Full-privilege WordPress credentials
- Real API keys
- Production database connection strings

**Preview:**
- Limited-privilege WordPress user (read-only if possible)
- Test API keys with restricted access
- Preview/staging database

**Development:**
- Local/development credentials only
- Mock API keys or development sandbox keys

### 3. NEXT_PUBLIC_ Prefix Rules
Variables with `NEXT_PUBLIC_` are exposed to the browser and can be inspected by anyone.

**✅ Safe for NEXT_PUBLIC_:**
- `NEXT_PUBLIC_WORDPRESS_API_URL` - Public API endpoint
- `NEXT_PUBLIC_BASE_URL` - Public site URL

**❌ NEVER use NEXT_PUBLIC_ for:**
- Passwords, tokens, secrets
- API keys (unless truly public)
- Database credentials
- Anything with: "secret", "private", "password", "token", or prefixes like `sk_`, `rk_live_`

### 4. Secret Rotation Best Practices
**Frequency:** Rotate secrets every 90 days or immediately if compromised.

**Process:**
1. Create new credential in the service (WordPress, API provider, etc.)
2. Update Vercel environment variable to new value
3. Deploy and verify it works
4. Wait 24 hours for all deployments to use new credential
5. Invalidate old credential

**For automation:** Consider tools like Doppler for larger teams - provides audit logs and auto-sync.

### 5. Environment Variables Documentation
Keep `.env.local.example` up to date:
- Include all required variables
- Use placeholder values (never real credentials)
- Add comments explaining each variable's purpose
- Document which environments need which variables

## Performance & Infrastructure

### 1. Fluid Compute (2026)
Vercel's Fluid Compute automatically balances between Serverless and Edge Functions.

**Current setup:** No action needed - automatically enabled for Next.js 15 projects.

**Benefits:**
- Global edge nodes: 119 regions
- Cold start: ~47ms median
- Automatic optimization based on function behavior

### 2. Image Optimization (Next.js 15)
**Current configuration** (already optimized in `next.config.js`):
```javascript
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  minimumCacheTTL: 60,
}
```

**2026 Pricing Update:** If team created before Feb 18, 2025, opt in to new image optimization pricing in Vercel dashboard for lower costs.

### 3. Speed Insights (Next.js 15)
**IMPORTANT:** Next.js 15 removed auto-instrumentation. Manual setup required.

**Current setup:** `@vercel/speed-insights` is installed (v1.2.0).

**Verification needed:**
1. Check that Speed Insights is properly initialized in app layout
2. Monitor real-world performance metrics in Vercel dashboard
3. Set up alerts for performance regressions

## Security

### 1. Content Security Policy (CSP)
**Status:** ✅ Already configured in `next.config.js`

**Current CSP includes:**
- Script sources: RealScout, Homebot widgets
- Connect sources: API endpoints
- Image sources: Unsplash, external content
- Upgrade insecure requests

**Review quarterly** to ensure:
- All third-party integrations are listed
- No overly permissive directives (`unsafe-inline`, `unsafe-eval` only where necessary)
- CSP violations logged (consider adding `report-uri`)

### 2. Security Headers
**Status:** ✅ Already configured

Current headers:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()...`

### 3. Deployment Protection
**Recommended:** Enable in Vercel dashboard for production.

**Options:**
- Password protection for Preview deployments
- Vercel Authentication (team members only)
- IP allowlist for staging environments

### 4. Web Application Firewall (WAF)
**Available on:** Pro and Enterprise plans

**Recommended rules:**
- Rate limiting for API routes
- IP blocking for known malicious actors
- Custom rules for attack patterns

## Middleware Optimization

### Current Status
Check `middleware.ts` for:
- ✅ Avoid asynchronous fetch calls (adds latency)
- ✅ Restrict matcher to required routes only
- ✅ Keep middleware lightweight

**Example of optimized matcher:**
```typescript
export const config = {
  matcher: [
    '/api/:path*',
    '/listings/:path*',
    // Only routes that need middleware
  ],
};
```

**Avoid:**
```typescript
// This runs on EVERY page:
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
```

## Build & Deployment

### 1. Build Configuration
**Current setup** in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

**Best practices:**
- ✅ Use `npm run build` (not `vercel build` directly)
- ✅ Explicit `installCommand` for reproducible builds
- ✅ Framework auto-detection

### 2. Cron Jobs
**Current setup:**
```json
"crons": [
  {
    "path": "/api/blog/sync",
    "schedule": "0 */6 * * *"
  }
]
```

**Best practices:**
- ✅ Idempotent cron handlers (safe to retry)
- ✅ Error handling and logging
- ✅ Reasonable frequency (every 6 hours)

**Recommended additions:**
- Add timeout protection (25s max for Hobby, 60s for Pro)
- Log execution time and results
- Alert on failures

### 3. Git Integration
**Current:** Automatic deployments on push

**Best practices:**
- Production deploys: `main` branch only
- Preview deploys: All other branches and PRs
- Deployment comments on PRs for easy preview
- Required checks before merge (if applicable)

## Monitoring & Operations

### 1. Incident Response Plan
**Document:**
1. **Detection:** How to identify issues (Vercel monitoring, alerts, user reports)
2. **Communication:** Who to notify (team, stakeholders, customers)
3. **Escalation:** Primary → secondary → executive contacts
4. **Rollback:** How to revert to last known good deployment

**Rollback process:**
```bash
# Via dashboard: Deployments → [previous deployment] → Promote to Production
# Via CLI:
vercel rollback [deployment-url]
```

### 2. Deployment Strategy
**Current:** Automatic production deploys from `main`

**Recommended workflow:**
1. Feature branch → Automatic Preview deployment
2. PR review with Preview URL
3. Merge to `main` → Automatic Production deployment
4. Monitor for 15 minutes post-deploy
5. Rollback if issues detected

### 3. Performance Monitoring
**Check regularly:**
- Speed Insights dashboard
- Web Vitals (LCP, FID, CLS)
- Function execution times
- Image optimization usage

**Set alerts for:**
- LCP > 2.5s
- Function errors > 1%
- Deployment failures

## Compliance Checklist

Use this before each major release:

### Pre-Deployment
- [ ] All environment variables set for production
- [ ] Sensitive variables marked as sensitive
- [ ] Preview environment uses separate credentials
- [ ] Security headers configured
- [ ] CSP updated for any new third-party integrations
- [ ] Speed Insights verified working
- [ ] Build succeeds locally and in Preview

### Post-Deployment
- [ ] Production deployment successful
- [ ] Speed Insights showing data
- [ ] No CSP violations in console
- [ ] All widgets loading (RealScout, Homebot)
- [ ] Forms submitting correctly
- [ ] Cron job executed successfully (check logs)
- [ ] Core Web Vitals within targets

### Monthly Audit
- [ ] Review environment variables (any unused?)
- [ ] Check for dependency updates
- [ ] Review deployment logs for errors
- [ ] Verify NAP consistency with Google Business Profile
- [ ] CSP policy still accurate
- [ ] Review Speed Insights trends
- [ ] Check WAF logs (if applicable)

## Additional Resources

- [Vercel Production Checklist](https://vercel.com/docs/production-checklist)
- [Vercel Sensitive Environment Variables](https://vercel.com/docs/environment-variables/sensitive-environment-variables)
- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-15)
- [Vercel Security Best Practices](https://vercel.com/docs/security)

## 2026 Updates Summary

1. **Fluid Compute:** Automatically enabled - no action needed
2. **Image Optimization:** New pricing available - check if eligible
3. **Speed Insights:** Manual setup required for Next.js 15 - verify installation
4. **Cold starts:** Improved to 47ms median globally
5. **Edge network:** 119 regions worldwide
