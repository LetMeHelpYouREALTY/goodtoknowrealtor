# Vercel Deployment Checklist

Use this checklist before deploying to production and for monthly audits.

## Pre-Deployment Checklist

### Environment Variables
- [ ] All required variables set in Vercel dashboard for **Production** environment
- [ ] All required variables set for **Preview** environment (with different credentials)
- [ ] All required variables set for **Development** environment
- [ ] Sensitive variables marked as **Sensitive**:
  - [ ] `WORDPRESS_APP_PASSWORD`
  - [ ] `WP_APP_PASS`
  - [ ] `REVALIDATE_SECRET`
- [ ] `NEXT_PUBLIC_BASE_URL` matches production domain
- [ ] Preview environment uses separate/limited credentials (NOT production creds)
- [ ] No secrets accidentally prefixed with `NEXT_PUBLIC_`

### Security Configuration
- [ ] CSP (Content Security Policy) updated in `next.config.js` for any new integrations
- [ ] Security headers configured (X-Frame-Options, X-Content-Type-Options, etc.)
- [ ] HTTPS redirects working (non-www → www, http → https)
- [ ] Rate limiting configured for API routes
- [ ] HSTS header enabled for production
- [ ] Source maps disabled in production (check `next.config.js` webpack config)

### Code Quality
- [ ] TypeScript compiles without errors: `npm run type-check`
- [ ] Linter passes: `npm run lint`
- [ ] Code formatted: `npm run format:check`
- [ ] No console.log or debug code in production files
- [ ] No commented-out code blocks
- [ ] Tests pass (if applicable): `npm run test`

### Build Verification
- [ ] Local build succeeds: `npm run build`
- [ ] No build warnings or errors
- [ ] Bundle size reasonable (check `.next/analyze` if using `npm run analyze`)
- [ ] Image optimization configured correctly
- [ ] External domains listed in `next.config.js` images.domains

### Content Verification
- [ ] NAP (Name, Address, Phone) matches Google Business Profile
- [ ] Phone number is `702-222-1964` throughout site
- [ ] Agent name is "Dr. Jan Duffy" (NOT "Janet")
- [ ] License number S.0197614.LLC appears where required
- [ ] Brokerage name correct: Berkshire Hathaway HomeServices Nevada Properties
- [ ] Schema.org markup includes RealEstateAgent on all pages
- [ ] All internal links working
- [ ] No broken external links

### Third-Party Integrations
- [ ] RealScout widgets load correctly
- [ ] RealScout script in `<head>` of layout
- [ ] Homebot widgets working (if used)
- [ ] Google Analytics tracking ID set (if using): `NEXT_PUBLIC_GA_ID`
- [ ] Google Tag Manager ID set (if using): `NEXT_PUBLIC_GTM_ID`
- [ ] Speed Insights component in layout (`<SpeedInsights />`)
- [ ] Analytics component in layout (`<Analytics />`)

### Performance
- [ ] Images using Next.js Image component
- [ ] Images optimized (WebP/AVIF formats)
- [ ] Lazy loading configured for below-fold content
- [ ] Font loading optimized (font-display: swap)
- [ ] No render-blocking resources
- [ ] Speed Insights installed and configured

### SEO
- [ ] Metadata configured for all pages
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URLs set correctly
- [ ] Robots.txt configured (if needed)
- [ ] Sitemap.xml generated (if needed)
- [ ] 404 page exists and styled

### Accessibility
- [ ] Skip navigation links present
- [ ] ARIA labels on interactive elements
- [ ] Alt text on all images
- [ ] Semantic HTML used
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA standards

## Deployment Process

### 1. Create Production Build
```bash
# Clean build artifacts
npm run clean

# Build project
npm run build

# Start production server locally to test
npm run start
```

### 2. Test Locally
- [ ] Visit http://localhost:3000
- [ ] Test critical user flows:
  - [ ] Homepage loads
  - [ ] Navigation works
  - [ ] Contact form submits
  - [ ] Search widgets work
  - [ ] Blog page loads
  - [ ] Listings page loads
  - [ ] Area pages load
- [ ] Check browser console for errors
- [ ] Test on mobile viewport

### 3. Deploy to Preview (Feature Branch)
```bash
# Push to feature branch
git push origin feature-branch-name
```

- [ ] Preview deployment URL received
- [ ] Visit preview deployment
- [ ] Test all critical flows in preview
- [ ] Verify environment variables correct (Preview, not Production)
- [ ] Check Speed Insights showing data (may take a few minutes)
- [ ] No console errors
- [ ] CSP violations in console (if any, fix before production)

### 4. Deploy to Production
```bash
# Merge to main
git checkout main
git merge feature-branch-name
git push origin main
```

### 5. Post-Deployment Verification
**Wait 2-3 minutes for deployment to complete, then:**

- [ ] Visit production URL: https://www.goodtoknowrealtor.com
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Critical flows tested:
  - [ ] Contact form submits
  - [ ] Search widgets load
  - [ ] Blog syncs (check `/blog`)
  - [ ] Listings display
  - [ ] Area pages render
  - [ ] Mobile sticky CTA appears on mobile
- [ ] Check browser DevTools console (no errors)
- [ ] Check browser DevTools Network tab (no 404s or 500s)
- [ ] Verify security headers present:
  ```bash
  curl -I https://www.goodtoknowrealtor.com
  ```
  - [ ] `X-Frame-Options: DENY`
  - [ ] `X-Content-Type-Options: nosniff`
  - [ ] `Content-Security-Policy` present
  - [ ] `Strict-Transport-Security` present

### 6. Monitor for 15 Minutes
- [ ] Check Vercel deployment logs for errors
- [ ] Check Vercel Runtime Logs for API errors
- [ ] Monitor Speed Insights for Core Web Vitals
- [ ] Check Analytics for traffic
- [ ] No error emails/alerts received

### 7. Verify Cron Job
- [ ] Check cron job executed: `/api/blog/sync`
- [ ] Blog content updated (next scheduled run or manual trigger)
- [ ] No errors in cron execution logs

## Rollback Procedure (If Issues Found)

### Via Vercel Dashboard
1. Go to **Deployments** tab
2. Find last known good deployment
3. Click **⋮** menu → **Promote to Production**
4. Confirm promotion
5. Wait 1-2 minutes
6. Verify site working again

### Via CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# List recent deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

## Monthly Audit Checklist

Run this on the 1st of each month:

### Security Audit
- [ ] Review environment variables (any unused? any missing?)
- [ ] Check for dependency updates with security patches:
  ```bash
  npm audit
  npm outdated
  ```
- [ ] Review Vercel deployment logs for suspicious activity
- [ ] Verify sensitive variables still marked as Sensitive
- [ ] Check CSP violations in browser console (random sampling)
- [ ] Review rate limiting logs (excessive blocks?)

### Performance Audit
- [ ] Check Speed Insights dashboard
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Run Lighthouse audit on key pages
- [ ] Check bundle size trends (growing? optimize)
- [ ] Review Vercel Analytics for slow pages

### Content Audit
- [ ] NAP consistency with Google Business Profile
  - [ ] Name: Dr. Jan Duffy ✓
  - [ ] Phone: 702-222-1964 ✓
  - [ ] Address matches GBP ✓
- [ ] Schema markup validation: https://validator.schema.org/
- [ ] Google Search Console for crawl errors
- [ ] Broken link checker (internal and external)

### Functionality Testing
- [ ] Test contact form submission (receive email?)
- [ ] Test RealScout widgets (search, home value)
- [ ] Test blog sync API endpoint: `/api/blog/sync`
- [ ] Test mobile responsiveness on real device
- [ ] Test in multiple browsers (Chrome, Safari, Firefox, Edge)

### Secret Rotation (Every 90 Days)
**Last rotated:** _[Add date]_

If > 90 days since last rotation:
- [ ] Generate new WordPress Application Password
- [ ] Update `WORDPRESS_APP_PASSWORD` in Vercel (Production)
- [ ] Update `WP_APP_PASS` in Vercel (Production)
- [ ] Generate new `REVALIDATE_SECRET`
- [ ] Deploy to production
- [ ] Wait 24 hours
- [ ] Delete old WordPress Application Password
- [ ] Document rotation date

### Monitoring Setup
- [ ] Vercel Speed Insights active and reporting
- [ ] Vercel Analytics active and reporting
- [ ] Google Analytics tracking working (if configured)
- [ ] Error monitoring configured (if applicable)
- [ ] Uptime monitoring active (if configured)

## Troubleshooting Common Issues

### Build Fails
**Symptom:** Deployment fails with build error

**Solutions:**
1. Check Vercel build logs for specific error
2. Verify environment variables set for correct environment
3. Test build locally: `npm run build`
4. Check for TypeScript errors: `npm run type-check`
5. Check for missing dependencies in package.json

### Environment Variable Not Found
**Symptom:** `Error: Missing environment variable X`

**Solutions:**
1. Verify variable exists in Vercel dashboard
2. Check environment selection (Production/Preview/Development)
3. Verify variable name spelling (case-sensitive)
4. Redeploy to trigger variable pickup

### CSP Violations
**Symptom:** Console errors about blocked resources

**Solutions:**
1. Identify blocked resource in console error
2. Add domain to appropriate CSP directive in `next.config.js`
3. Common additions:
   - Script: Add to `script-src`
   - Style: Add to `style-src`
   - Image: Add to `img-src`
   - Connection: Add to `connect-src`
4. Redeploy and verify

### Widgets Not Loading
**Symptom:** RealScout/Homebot widgets blank or error

**Solutions:**
1. Check CSP includes widget domains:
   - `https://em.realscout.com`
   - `https://www.realscout.com`
   - `https://embed.homebotapp.com`
2. Verify RealScout script in `<head>` of layout
3. Check browser console for errors
4. Verify widget embed code correct

### Slow Performance
**Symptom:** Pages load slowly, poor Core Web Vitals

**Solutions:**
1. Check Speed Insights for specific metrics
2. Optimize images (use WebP/AVIF, proper sizing)
3. Remove render-blocking resources
4. Check for large bundle size: `npm run analyze`
5. Enable streaming/Suspense for slow components
6. Consider Vercel Edge Functions for critical routes

### 404 Errors
**Symptom:** Pages return 404

**Solutions:**
1. Verify file exists in correct app directory structure
2. Check dynamic route syntax: `[slug]` for params
3. Clear `.next` cache: `npm run clean && npm run build`
4. Check redirects in `next.config.js`
5. Verify deployment includes all files (check build output)

## Emergency Contacts

**Vercel Support:**
- Dashboard: https://vercel.com/support
- Status: https://www.vercel-status.com/

**Domain/DNS Issues:**
- Cloudflare Dashboard (if using)
- Domain registrar support

**WordPress/Blog Issues:**
- BHHS Nevada Properties WordPress admin
- IT support contact

## Version History

| Date | Version | Changes | Deployed By |
|------|---------|---------|-------------|
| 2026-06-06 | 1.0 | Initial deployment checklist | Claude |

---

**Remember:**
- When in doubt, deploy to Preview first
- Always test before promoting to Production
- Keep this checklist updated as project evolves
- Document any deviations from standard process
