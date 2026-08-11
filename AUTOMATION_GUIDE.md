# SEO/GEO/AEO Automation Suite

Comprehensive automation tools for maintaining and monitoring SEO, GEO (Geographic Engine Optimization), and AEO (Answer Engine Optimization) implementations.

## Overview

This automation suite provides daily monitoring and maintenance for:
- Schema.org JSON-LD validation
- Content freshness updates
- Sitemap generation
- Performance monitoring (Core Web Vitals)
- SEO metrics tracking

## Automation Scripts

### 1. SEO Monitoring (`scripts/seo-monitoring.ts`)
**Purpose:** Validates schema markup and checks content freshness

**What it does:**
- Validates all Schema.org JSON-LD markup
- Checks content age and flags items needing updates
- Generates daily monitoring reports
- Alerts on schema errors or warnings

**Run manually:**
```bash
npm run monitor
# or
npx ts-node scripts/seo-monitoring.ts
```

**Output:**
- Console report with validation status
- JSON report saved to `monitoring-reports/seo-report-YYYY-MM-DD.json`

### 2. Content Freshness Updater (`scripts/content-freshness-updater.ts`)
**Purpose:** Updates `datePublished` and `dateModified` timestamps in schema

**What it does:**
- Updates FAQ schema timestamps
- Updates review schema timestamps
- Ensures content appears fresh to AI engines
- Maintains 83% AI citation preference for recent content

**Run manually:**
```bash
npm run update-freshness
# or
npx ts-node scripts/content-freshness-updater.ts
```

**Impact:**
- Improves AI citation likelihood (83% prefer content < 12 months old)
- Signals content freshness to search engines
- Maintains AEO optimization

### 3. Sitemap Generator (`scripts/sitemap-generator.ts`)
**Purpose:** Generates updated sitemap.xml with latest pages

**What it does:**
- Scans app directory for pages
- Updates lastmod timestamps
- Sets appropriate changefreq and priority
- Generates standards-compliant sitemap.xml

**Run manually:**
```bash
npm run generate-sitemap
# or
npx ts-node scripts/sitemap-generator.ts
```

**Output:**
- Statistics on URLs included
- Preview of sitemap structure

### 4. Performance Monitor (`scripts/performance-monitor.ts`)
**Purpose:** Tracks Core Web Vitals and Lighthouse scores

**What it does:**
- Checks LCP (Largest Contentful Paint) - target: < 2.5s
- Checks FID (First Input Delay) - target: < 100ms
- Checks CLS (Cumulative Layout Shift) - target: < 0.1
- Monitors Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- Tracks page speed metrics (TTFB, Load Time)

**Run manually:**
```bash
npm run check-performance
# or
npx ts-node scripts/performance-monitor.ts
```

**Targets:**
- Core Web Vitals: All green
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

## Master Automation Script

### Run All Tasks (`scripts/run-automation.sh`)
**Purpose:** Execute all automation tasks in sequence

**Run manually:**
```bash
npm run automate-all
# or
bash scripts/run-automation.sh
```

**Process:**
1. Schema validation & monitoring
2. Content freshness updates
3. Sitemap generation
4. Performance monitoring
5. Daily report generation

**Output:**
- Comprehensive daily report in `monitoring-reports/daily-report-YYYY-MM-DD.txt`

## GitHub Actions Automation

### Automated Daily Runs (`.github/workflows/seo-automation.yml`)
**Schedule:** Daily at 2 AM UTC

**What it does:**
1. Runs all automation scripts
2. Commits updated timestamps
3. Uploads monitoring reports as artifacts
4. Pushes changes to repository

**Manual trigger:**
- Go to Actions tab in GitHub
- Select "SEO/GEO/AEO Automation" workflow
- Click "Run workflow"

**View reports:**
- Go to Actions tab
- Click on completed workflow run
- Download "monitoring-reports" artifact

## NPM Scripts

Add these to your main `package.json`:

```json
{
  "scripts": {
    "seo:monitor": "npx ts-node scripts/seo-monitoring.ts",
    "seo:update-freshness": "npx ts-node scripts/content-freshness-updater.ts",
    "seo:generate-sitemap": "npx ts-node scripts/sitemap-generator.ts",
    "seo:check-performance": "npx ts-node scripts/performance-monitor.ts",
    "seo:automate": "bash scripts/run-automation.sh"
  }
}
```

## Cron Job Setup (Linux/Mac)

Schedule daily automation:

```bash
# Edit crontab
crontab -e

# Add this line (runs daily at 2 AM)
0 2 * * * cd /path/to/goodtoknowrealtor && bash scripts/run-automation.sh >> logs/automation.log 2>&1
```

## Vercel Cron Jobs

If deploying to Vercel, you can use Vercel Cron Jobs instead of GitHub Actions.

Update `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/seo/monitor",
      "schedule": "0 2 * * *"
    },
    {
      "path": "/api/seo/update-freshness",
      "schedule": "0 3 * * *"
    }
  ]
}
```

Create API routes:
- `src/app/api/seo/monitor/route.ts`
- `src/app/api/seo/update-freshness/route.ts`

## Monitoring Dashboard (Future Enhancement)

Consider creating a dashboard to visualize:
- Schema validation status over time
- Content freshness metrics
- Performance trends
- AI citation tracking
- Search visibility changes

## Benefits of Automation

### SEO Benefits
- Ensures schema markup stays valid
- Maintains content freshness signals
- Keeps sitemap up-to-date
- Monitors performance automatically

### GEO Benefits
- Maintains NAP consistency
- Updates geographic data automatically
- Ensures local schema accuracy

### AEO Benefits
- Fresh content timestamps (83% of AI citations prefer recent content)
- Automatic fact updating
- Maintains answer-ready format
- Monitors AI citation likelihood

### Operational Benefits
- Reduces manual maintenance time
- Catches errors early
- Provides audit trail
- Enables data-driven decisions

## Troubleshooting

### Script fails to run
```bash
# Check Node.js version (requires 18+)
node --version

# Install dependencies
npm install

# Check TypeScript
npx tsc --version
```

### GitHub Action fails
- Check Actions tab for error messages
- Verify GITHUB_TOKEN has write permissions
- Ensure workflow file syntax is correct

### Cron job not running
```bash
# Check cron service is running
sudo service cron status

# View cron logs
grep CRON /var/log/syslog

# Verify paths are absolute
which node
which npx
```

## Maintenance Schedule

**Daily (Automated):**
- Schema validation
- Content freshness updates
- Performance monitoring

**Weekly (Manual Review):**
- Review monitoring reports
- Check for schema warnings
- Verify performance targets met

**Monthly (Manual Tasks):**
- Review and update FAQ content
- Add new schema for new pages
- Update geographic service areas if expanded
- Review AI citation performance

## Future Enhancements

1. **AI Citation Tracker**
   - Monitor ChatGPT, Perplexity, Bing Chat
   - Track citation frequency
   - Alert on citation drops

2. **Search Console Integration**
   - Pull actual Google metrics
   - Track AI Overview appearances
   - Monitor keyword rankings

3. **Automated Schema Generation**
   - Generate property listing schemas
   - Create neighborhood page schemas
   - Auto-generate FAQ from user queries

4. **Performance Alerts**
   - Email/Slack notifications
   - SMS alerts for critical issues
   - Automated rollback on performance degradation

## Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Core Web Vitals](https://web.dev/vitals/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Support

For issues or questions about the automation suite:
1. Check this documentation
2. Review monitoring reports in `monitoring-reports/`
3. Check GitHub Actions logs
4. Review individual script output

---

**Last Updated:** June 7, 2026
**Automation Version:** 1.0.0
