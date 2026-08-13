# Deploy Automation to Any VeriCell Project

This guide shows how to deploy the self-improvement automation to any VeriCell project.

## Quick Deploy (3 minutes)

### 1. Copy the Workflow Script

```bash
# In the target project directory
mkdir -p .automation
cp /home/user/goodtoknowrealtor/.automation/universal-improvement-workflow.js .automation/
```

### 2. Create the Routine (via Claude Code Remote API)

```javascript
// Use this code in Claude Code session:
const trigger = await mcp__Claude_Code_Remote__create_trigger({
  name: 'Weekly Self-Improvement - [PROJECT_NAME]',
  prompt: `Run the self-improvement workflow:

Workflow({scriptPath: "/path/to/project/.automation/universal-improvement-workflow.js"})

This workflow will:
1. Research latest best practices (Performance, Accessibility, SEO)
2. Auto-detect project type (Next.js, React, Vue, etc.)
3. Apply one high-impact improvement
4. Commit and push changes
5. Report results`,
  
  cron_expression: '17 9 * * 1',  // Monday 2:17 AM PT
  create_new_session_on_fire: true,
  notifications: {push: true, email: true}
});
```

### 3. Customize Schedule (Optional)

Stagger schedules across projects:
- **Project A**: Monday (`17 9 * * 1`)
- **Project B**: Wednesday (`17 9 * * 3`)
- **Project C**: Friday (`17 9 * * 5`)

## Project Types Supported

The workflow auto-detects project type from `package.json`:

- ✅ **Next.js** - Full Next.js 15 optimization
- ✅ **React** - React best practices
- ✅ **Vue** - Vue.js optimization
- ✅ **Express** - Node/Express backend
- ✅ **Generic** - Universal web best practices

## What Gets Automated

### Research Domains (All Projects)
1. **Performance** - Bundle size, caching, optimization
2. **Accessibility** - WCAG 2.1 Level AA compliance
3. **SEO** - Schema markup, local search, AEO

### Automatic Actions
1. ✅ Research current best practices
2. ✅ Select highest-impact improvement
3. ✅ Apply code changes
4. ✅ Run build verification
5. ✅ Commit with detailed message
6. ✅ Push to remote
7. ✅ Send notification

## Deployment Checklist

- [ ] Copy `universal-improvement-workflow.js` to project
- [ ] Create Routine with project-specific schedule
- [ ] Update project's README with automation details
- [ ] Add `.automation/` to .gitignore (optional)
- [ ] Test with manual run first
- [ ] Monitor first automated run

## Manual Test Run

Before scheduling, test manually:

```javascript
Workflow({
  scriptPath: "/path/to/project/.automation/universal-improvement-workflow.js"
})
```

## Monitoring

Each project's automation will:
- Email you when complete
- Push notification with results
- Commit changes to the active branch
- Include detailed metrics in commit message

## Rollback

If an automated change causes issues:

```bash
# Revert the last automated commit
git log --grep="Co-Authored-By: Claude" -1
git revert <commit-hash>
git push
```

## Troubleshooting

### Issue: Workflow fails on first run
**Solution**: Ensure `package.json` exists and dependencies are installed

### Issue: Build fails after changes
**Solution**: The workflow won't commit if build fails. Check logs for details.

### Issue: No improvements being applied
**Solution**: Research phase might be failing. Check notification emails for errors.

## Cost Estimation

Per project, per week:
- **Research**: ~50k tokens (3 agents)
- **Application**: ~30k tokens (1 agent)
- **Total**: ~80k tokens/week per project

For 10 projects: ~800k tokens/week = ~$1-2/week

## Next Steps

1. Deploy to highest-priority projects first
2. Monitor for 2-3 weeks
3. Adjust schedules if needed
4. Expand to more projects

---

*Template created from verified automation on goodtoknowrealtor project*  
*Last Updated: 2026-08-11*
