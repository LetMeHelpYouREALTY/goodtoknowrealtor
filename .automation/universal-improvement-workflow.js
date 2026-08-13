export const meta = {
  name: 'universal-self-improvement',
  description: 'Universal continuous improvement workflow for any web project',
  phases: [
    { title: 'Research', detail: 'Parallel search for latest best practices' },
    { title: 'Apply', detail: 'Implement top priority improvement' },
  ],
};

// Detect project type from package.json
const projectType = await (async () => {
  try {
    const pkg = JSON.parse(await agent('Read package.json and return just the JSON content', {effort: 'low'}));
    if (pkg.dependencies?.next) return 'nextjs';
    if (pkg.dependencies?.react) return 'react';
    if (pkg.dependencies?.vue) return 'vue';
    if (pkg.dependencies?.express) return 'express';
    return 'generic';
  } catch {
    return 'generic';
  }
})();

// Research domains adapt to project type
const RESEARCH_DOMAINS = [
  {
    id: 'performance',
    query: projectType === 'nextjs'
      ? 'Next.js performance optimization best practices 2026'
      : `${projectType} performance optimization best practices 2026`,
    keywords: ['bundle size', 'Core Web Vitals', 'caching', 'optimization'],
  },
  {
    id: 'accessibility',
    query: 'WCAG 2.1 Level AA web accessibility best practices 2026',
    keywords: ['ARIA', 'color contrast', 'keyboard navigation', 'screen readers'],
  },
  {
    id: 'seo',
    query: 'SEO best practices local search 2026',
    keywords: ['schema markup', 'AEO', 'local SEO', 'meta tags'],
  },
];

// ========================================
// PHASE 1: Research Best Practices
// ========================================
phase('Research');
log(`Starting research for ${projectType} project...`);

const researchResults = await parallel(
  RESEARCH_DOMAINS.map(domain => () =>
    agent(
      `Research current best practices for ${domain.id}:

Query: ${domain.query}
Focus areas: ${domain.keywords.join(', ')}
Project type: ${projectType}

Return 3-5 specific, actionable recommendations that:
1. Are verified by authoritative sources (include source URLs)
2. Can be implemented in a ${projectType} project
3. Have high impact with reasonable effort
4. Are current as of 2026

For each recommendation, provide:
- Title (brief, specific)
- Description (what to do)
- Impact (high/medium/low)
- Effort (low/medium/high)
- Why it matters
- Source URL

Format as markdown with clear sections.`,
      {
        label: `Research ${domain.id}`,
        phase: 'Research',
        effort: 'low',
      }
    )
  )
);

const validResults = researchResults.filter(Boolean);
log(`Research complete. Received ${validResults.length}/${RESEARCH_DOMAINS.length} reports.`);

// If all research failed, return early
if (validResults.length === 0) {
  log('ERROR: All research agents failed. Stopping workflow.');
  return {
    success: false,
    error: 'All research agents failed to return results',
    cycle: {
      domainsResearched: RESEARCH_DOMAINS.length,
      successfulResearch: 0,
      projectType,
    },
  };
}

// ========================================
// PHASE 2: Apply One Improvement
// ========================================
phase('Apply');
log('Selecting and applying top priority improvement...');

const application = await agent(
  `Based on this research, apply ONE high-impact improvement to the ${projectType} codebase:

${validResults.join('\n\n---\n\n')}

TASK:
1. Choose the highest-impact, lowest-effort recommendation
2. Read the relevant file(s)
3. Make the specific code change
4. Verify it builds successfully (run build command if available)
5. Commit the change with a descriptive message

Return a summary of:
- What was changed
- Which file(s) were modified
- Build status (success/failure)
- Commit hash (if committed)

Be specific and show the actual changes made.`,
  {
    label: 'Apply improvement',
    phase: 'Apply',
    effort: 'medium',
  }
);

// ========================================
// Return Results
// ========================================
log('Improvement cycle complete.');

return {
  success: Boolean(application),
  cycle: {
    projectType,
    domainsResearched: RESEARCH_DOMAINS.length,
    successfulResearch: validResults.length,
    applied: application ? 'yes' : 'no',
  },
  research: validResults.map((r, i) => ({
    domain: RESEARCH_DOMAINS[i]?.id || 'unknown',
    summary: r.substring(0, 200) + '...',
  })),
  application: application ? application.substring(0, 500) + '...' : 'No application',
};
