# Vercel Configuration Documentation

This directory contains comprehensive documentation for deploying and maintaining the Good To Know REALTOR® site on Vercel using 2026 best practices.

## 📚 Documentation Files

### 1. [VERCEL_BEST_PRACTICES.md](../VERCEL_BEST_PRACTICES.md)
**Comprehensive guide to 2026 Vercel best practices**

Topics covered:
- Environment variables security (marking sensitive, separation by environment)
- Performance & infrastructure (Fluid Compute, image optimization, Speed Insights)
- Security (CSP, headers, WAF, deployment protection)
- Middleware optimization
- Build & deployment configuration
- Monitoring & operations
- Incident response planning

**When to use:** Reference this for understanding best practices, security requirements, and optimization techniques.

### 2. [ENVIRONMENT_VARIABLES.md](../ENVIRONMENT_VARIABLES.md)
**Step-by-step guide for setting up environment variables**

Topics covered:
- Variable classification (public vs private)
- Vercel dashboard setup instructions
- Local development setup
- Security best practices
- Secret rotation procedures
- Troubleshooting common issues

**When to use:** When setting up a new environment, adding new variables, or troubleshooting variable-related issues.

### 3. [DEPLOYMENT_CHECKLIST.md](../DEPLOYMENT_CHECKLIST.md)
**Pre-deployment, deployment, and post-deployment checklists**

Topics covered:
- Pre-deployment verification (environment, security, code quality)
- Deployment process steps
- Post-deployment verification
- Rollback procedures
- Monthly audit checklist
- Troubleshooting guide

**When to use:** Before every deployment and for monthly maintenance audits.

## 🚀 Quick Start

### New Developer Setup

1. **Clone repository**
   ```bash
   git clone <repo-url>
   cd goodtoknowrealtor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your credentials
   ```
   See [ENVIRONMENT_VARIABLES.md](../ENVIRONMENT_VARIABLES.md) for detailed instructions.

4. **Start dev server**
   ```bash
   npm run dev
   ```

5. **Verify setup**
   - Visit http://localhost:3000
   - Check browser console for errors
   - Test blog loading (WordPress API connection)

### First Deployment

1. **Review checklist**
   - Read [DEPLOYMENT_CHECKLIST.md](../DEPLOYMENT_CHECKLIST.md)
   - Complete Pre-Deployment section

2. **Set up Vercel environment variables**
   - Follow [ENVIRONMENT_VARIABLES.md](../ENVIRONMENT_VARIABLES.md)
   - Mark sensitive variables as Sensitive
   - Use different credentials for Preview/Production

3. **Deploy to Preview**
   ```bash
   git checkout -b feature/my-feature
   git push origin feature/my-feature
   ```
   - Test Preview deployment thoroughly
   - Verify environment variables correct

4. **Deploy to Production**
   ```bash
   git checkout main
   git merge feature/my-feature
   git push origin main
   ```
   - Monitor deployment logs
   - Complete Post-Deployment checklist

## 🔒 Security Priorities

**Critical security requirements:**

1. **Mark sensitive variables** in Vercel dashboard:
   - `WORDPRESS_APP_PASSWORD`
   - `WP_APP_PASS`
   - `REVALIDATE_SECRET`

2. **Separate credentials per environment**:
   - Production: Full-privilege, production credentials
   - Preview: Limited-privilege, separate credentials
   - Development: Local/dev credentials only

3. **Never use `NEXT_PUBLIC_` for secrets**:
   - Only for truly public data
   - Variables with this prefix are exposed to browser

4. **Rotate secrets every 90 days**:
   - Generate new credentials
   - Update Vercel → Deploy → Wait 24h → Revoke old

5. **Review CSP regularly**:
   - Check for violations in browser console
   - Update for new third-party integrations
   - Quarterly audit recommended

## 📊 Performance Targets

Based on 2026 Vercel infrastructure:

| Metric | Target | Current |
|--------|--------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Monitor in Speed Insights |
| **FID** (First Input Delay) | < 100ms | Monitor in Speed Insights |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Monitor in Speed Insights |
| **Cold Start** | ~47ms | Automatic (Fluid Compute) |
| **Build Time** | < 2 min | Check deployment logs |

**Monitoring:**
- Vercel Speed Insights dashboard
- Vercel Analytics for usage patterns
- Browser DevTools for local testing

## 🛠 Common Tasks

### Adding a New Environment Variable

1. **Determine classification:**
   - Needs browser access? → `NEXT_PUBLIC_*`
   - Server-only? → No prefix
   - Secret/password/token? → Mark sensitive

2. **Add to all locations:**
   ```bash
   # 1. Add to .env.local.example (placeholder)
   # 2. Add to your .env.local (real value)
   # 3. Add to Vercel dashboard (all environments)
   # 4. Update ENVIRONMENT_VARIABLES.md documentation
   ```

3. **Deploy:**
   - New variables require redeploy to take effect
   - Test in Preview first

### Updating Security Headers

1. **Edit `next.config.js`:**
   - Update `headers()` function
   - Add/modify CSP directives as needed

2. **Test locally:**
   ```bash
   npm run build
   npm run start
   # Check headers in DevTools Network tab
   ```

3. **Deploy to Preview:**
   - Verify headers in Preview deployment
   - Check for CSP violations

4. **Deploy to Production:**
   - Monitor for errors
   - Check browser console on multiple pages

### Optimizing Performance

1. **Analyze bundle:**
   ```bash
   npm run analyze
   ```
   - Check for large dependencies
   - Identify optimization opportunities

2. **Check Speed Insights:**
   - Review Core Web Vitals trends
   - Identify slow pages

3. **Optimize images:**
   - Use Next.js Image component
   - Ensure WebP/AVIF formats
   - Proper sizing (deviceSizes in config)

4. **Review middleware:**
   - Keep lightweight
   - Avoid async operations
   - Restrict matcher if possible

### Rolling Back a Deployment

**Via Vercel Dashboard:**
1. Deployments tab → Find last good deployment
2. Click ⋮ menu → Promote to Production
3. Confirm and monitor

**Via CLI:**
```bash
vercel login
vercel ls
vercel rollback [deployment-url]
```

## 📅 Maintenance Schedule

### Daily
- Monitor deployment logs (if deployments happened)
- Check error alerts (if configured)

### Weekly
- Review Speed Insights dashboard
- Check for failed cron jobs
- Monitor API error rates

### Monthly
- Complete [Monthly Audit Checklist](../DEPLOYMENT_CHECKLIST.md#monthly-audit-checklist)
- Review dependency updates: `npm outdated`
- Security audit: `npm audit`
- Check CSP violations
- Verify NAP consistency with Google Business Profile

### Quarterly (Every 90 Days)
- **Rotate all secrets**
- Update dependencies (major versions)
- Review and update security headers
- Performance audit (Lighthouse, Speed Insights trends)
- Review and optimize bundle size

### Annually
- Complete security audit
- Review all documentation for accuracy
- Update best practices based on Vercel changes
- Review third-party integrations

## 🔗 External Resources

### Vercel Documentation
- [Production Checklist](https://vercel.com/docs/production-checklist)
- [Environment Variables](https://vercel.com/docs/environment-variables)
- [Sensitive Variables](https://vercel.com/docs/environment-variables/sensitive-environment-variables)
- [Security](https://vercel.com/docs/security)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)

### Next.js Documentation
- [Version 15 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-15)
- [Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

### Web Performance
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/articles/vitals)

### Security
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [Security Headers](https://securityheaders.com/)

## 🆘 Getting Help

### Issues with This Documentation
- Create an issue in the repository
- Tag with `documentation` label

### Vercel-Specific Issues
- Check [Vercel Status](https://www.vercel-status.com/)
- Vercel Support (Pro/Enterprise)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Next.js Issues
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)
- [Next.js Discord](https://nextjs.org/discord)

### WordPress/Blog Issues
- BHHS Nevada Properties IT support
- WordPress admin access required

## 📝 Contributing to Documentation

When updating these docs:

1. **Keep current:** Update based on actual deployments and issues
2. **Be specific:** Include exact commands, file paths, line numbers
3. **Test procedures:** Verify instructions work before documenting
4. **Date changes:** Note what changed and when in version history
5. **Link related docs:** Cross-reference other documentation files

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-06-06 | 1.0 | Initial documentation based on 2026 Vercel best practices |

---

**Last Updated:** June 6, 2026  
**Maintained By:** Development Team  
**Review Schedule:** Quarterly
