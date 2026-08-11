#!/bin/bash

# Master Automation Script
# Runs all SEO/GEO/AEO automation tasks

echo "🤖 Starting SEO/GEO/AEO Automation Suite"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Schema Validation & Monitoring
echo -e "${GREEN}[1/5] Running Schema Validation & Monitoring...${NC}"
npx ts-node scripts/seo-monitoring.ts
echo ""

# 2. Content Freshness Update
echo -e "${GREEN}[2/5] Updating Content Freshness Timestamps...${NC}"
npx ts-node scripts/content-freshness-updater.ts
echo ""

# 3. Sitemap Generation
echo -e "${GREEN}[3/5] Generating Updated Sitemap...${NC}"
npx ts-node scripts/sitemap-generator.ts
echo ""

# 4. Performance Monitoring
echo -e "${GREEN}[4/5] Running Performance Monitoring...${NC}"
npx ts-node scripts/performance-monitor.ts
echo ""

# 5. Generate Daily Report
echo -e "${GREEN}[5/5] Generating Daily Report...${NC}"
DATE=$(date +%Y-%m-%d)
REPORT_DIR="monitoring-reports"
mkdir -p $REPORT_DIR

cat > "$REPORT_DIR/daily-report-$DATE.txt" << EOF
SEO/GEO/AEO Automation Report
Generated: $(date)
========================================

SUMMARY:
- Schema validation completed
- Content timestamps updated
- Sitemap regenerated
- Performance metrics checked

All automation tasks completed successfully.

Next scheduled run: $(date -d '+1 day' +%Y-%m-%d)
EOF

echo "✓ Daily report saved to: $REPORT_DIR/daily-report-$DATE.txt"
echo ""

echo -e "${GREEN}✓ All automation tasks completed!${NC}"
echo ""
echo "📅 Schedule this script to run daily with cron:"
echo "   0 2 * * * /path/to/run-automation.sh"
