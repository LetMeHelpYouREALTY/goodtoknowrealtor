#!/bin/bash
# Automated Self-Improvement Setup Script
# Usage: ./setup-automation.sh <project-name> <repo-owner/repo-name> <schedule-day>
#
# Example: ./setup-automation.sh "VeriCell Main" "VeriCell/main-site" "monday"

set -e

PROJECT_NAME="$1"
REPO_PATH="$2"
SCHEDULE_DAY="${3:-monday}"

if [ -z "$PROJECT_NAME" ] || [ -z "$REPO_PATH" ]; then
    echo "Usage: ./setup-automation.sh <project-name> <repo-owner/repo-name> <schedule-day>"
    echo ""
    echo "Examples:"
    echo "  ./setup-automation.sh 'VeriCell Main' 'VeriCell/main-site' 'monday'"
    echo "  ./setup-automation.sh 'VeriCell Docs' 'VeriCell/docs' 'wednesday'"
    echo ""
    echo "Schedule days: monday, tuesday, wednesday, thursday, friday, saturday, sunday"
    exit 1
fi

# Convert day to cron day-of-week (1=Monday, 7=Sunday)
case "$SCHEDULE_DAY" in
    monday)    CRON_DAY="1" ;;
    tuesday)   CRON_DAY="2" ;;
    wednesday) CRON_DAY="3" ;;
    thursday)  CRON_DAY="4" ;;
    friday)    CRON_DAY="5" ;;
    saturday)  CRON_DAY="6" ;;
    sunday)    CRON_DAY="7" ;;
    *)         CRON_DAY="1" ;;  # Default to Monday
esac

CRON_EXPR="17 9 * * $CRON_DAY"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🤖 Automated Self-Improvement Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Project Name:  $PROJECT_NAME"
echo "Repository:    $REPO_PATH"
echo "Schedule:      Every $SCHEDULE_DAY at 2:17 AM PT"
echo "Cron:          $CRON_EXPR"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Create trigger using Claude Code Remote
# (This part would be done via Claude Code session with MCP tools)

cat << EOF

✅ Setup Configuration Ready

To complete setup, run this in Claude Code:

\`\`\`javascript
const trigger = await mcp__Claude_Code_Remote__create_trigger({
  name: 'Weekly Self-Improvement - $PROJECT_NAME',
  prompt: \`Run the self-improvement workflow for $REPO_PATH:

Workflow({scriptPath: ".automation/universal-improvement-workflow.js"})

This workflow will:
1. Research latest best practices (Performance, Accessibility, SEO)
2. Auto-detect project type (Next.js, React, Vue, etc.)
3. Apply one high-impact improvement
4. Commit and push changes
5. Report results\`,

  cron_expression: '$CRON_EXPR',
  create_new_session_on_fire: true,
  notifications: {push: true, email: true}
});

console.log('Routine created:', trigger.trigger.id);
console.log('Next run:', trigger.trigger.next_run_at);
\`\`\`

Then copy the universal workflow to the project:
- Copy \`.automation/universal-improvement-workflow.js\` to $REPO_PATH
- Commit and push to the repository
- Test with manual run first

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EOF
