# Insights from Nate's Newsletter on Vercel & AI Infrastructure

## About Nate's Newsletter

**Source:** [Nate's Substack](https://natesnewsletter.substack.com/)  
**Focus:** Daily newsletters on AI strategy, news, and implementation for practitioners and leaders  
**Audience:** Hundreds of thousands of subscribers past the hype and ready to build

## Key Topics Related to Vercel (Based on Available Search Results)

### 1. Competing Visions: Anthropic, Google, and Vercel on AI Agents

**Article:** [Anthropic, Google, and Vercel All Disagree on AI Agents](https://natesnewsletter.substack.com/p/i-summarized-3-ai-agent-papers-60)

**Context:** This article covered competing versions of the AI agent future published by Google and Vercel that came out within 24 hours of Anthropic admitting an agentic orchestration platform was used to make Claude into a super-hacker.

**Key Insight:** The post provided an actionable summary on where the industry stands on AI agents, cutting through more than 60 pages of documentation across three different papers from Anthropic, Google, and Vercel.

**Note:** Full article content unavailable due to subscription access restrictions.

### 2. Infrastructure Layers That Matter

**Article:** [Most of What You're Building Will Be Replaced by a Better Model. Here Are the Five Layers Between You and Irrelevance](https://natesnewsletter.substack.com/p/most-of-what-youre-building-will)

**Key Companies Mentioned:** Vercel, Replit, and Notion identified as companies that have "found the escape hatch" separating them from wrapper companies that will die.

**Implication:** Vercel's infrastructure approach provides defensible value beyond simple AI wrappers.

### 3. AI Agent Infrastructure Control Layer

**Article:** [AI Agent Infrastructure Control Layer: Runtime, Identity, Payments](https://natesnewsletter.substack.com/p/agent-infrastructure-control-layer)

**Focus:** Infrastructure decisions that determine whether models' outputs are allowed to act in the world.

**Related Companies:** Cloudflare, Auth0, and others sit between models and production systems.

**Relevance to Vercel:** Vercel's infrastructure plays a role in the control layer for agentic applications.

## What We Learned About Vercel from Related Sources

### Vercel's Agentic Infrastructure (2026)

**Source:** Search results referencing Vercel announcements and Nate's Newsletter coverage

#### Key Infrastructure Components

1. **Agent Abstraction Layer (AI SDK 6)**
   - Define an agent once with its tools, behavior, and approval requirements
   - Reuse across every surface of your app
   - SDK handles model abstraction
   - Gateway handles provider routing
   - Workflows handle durability

2. **Long-Lived Execution Requirements**
   - Multi-step orchestration
   - Model routing
   - Cost controls
   - Sandboxed code execution
   - Abuse resistance

3. **Growth Metrics (2026)**
   - Agentic workloads carried 59% of all token volume (as of May 2026)
   - Up 2x over six months
   - Vercel ARR: $100M (early 2024) → $340M run rate (Feb 2026)
   - AI SDK downloads: 446,012 → 3M+ weekly

#### Open Agents Platform

**What It Is:** An open-source app that enables creation and execution of background coding agents

**Architecture:**
- Web interface layer
- Agent workflow layer
- Sandboxed execution environment

**Key Insight:** Vercel provides a complete stack for developers to run independent coding workflows without relying on local machines.

#### Deployment Trends

**Finding:** Vercel projects deployed by coding agents are 20x more likely to call AI inference providers than those deployed by humans.

**Implication:** Agents are writing software that uses AI while building agents (recursive AI development).

## Infrastructure Best Practices Derived

### 1. Platform Thinking

**Lesson from Vercel's Approach:**
- Don't build AI wrappers; build infrastructure layers
- Create reusable primitives (AI SDK, Gateway, Workflows)
- Enable long-term defensibility through platform effects

### 2. Agent-Native Architecture

**Requirements for Production Agent Workloads:**
- Durable execution (workflows that survive restarts)
- Multi-step orchestration capabilities
- Provider abstraction and routing
- Cost controls and monitoring
- Security (sandboxing, abuse prevention)

### 3. Unified Infrastructure

**Vercel's Strategy:**
- Unify all AI primitives into single, secure platform
- Similar approach to how they handled serverless
- Reduce complexity through abstraction layers

### 4. Future-Proofing

**Key Consideration:**
- Infrastructure wins over models in the long run
- Build for agentic workloads, not just traditional apps
- Plan for recursive AI development (agents building agents)

## Limitations of This Summary

**Important Notes:**

1. **Access Restrictions:** Nate's Newsletter content is subscription-based. Full articles could not be accessed directly due to paywall restrictions (HTTP 403 errors).

2. **Incomplete Information:** This summary is based on:
   - Search result snippets
   - Article titles and descriptions
   - Related third-party coverage
   - Vercel's public announcements

3. **Recommendation:** For complete insights from Nate's Newsletter:
   - Subscribe at [natesnewsletter.substack.com](https://natesnewsletter.substack.com/)
   - 7-day free trial available for archive access
   - Daily newsletters with actionable AI strategy

## How This Relates to Our Project

### Current State
Our documentation already covers:
- ✅ Environment variable security
- ✅ Performance optimization (Fluid Compute, Speed Insights)
- ✅ Security headers and CSP
- ✅ Deployment best practices

### Potential Enhancements Based on Nate's Insights

1. **Agent-Ready Infrastructure**
   - Consider how our Vercel setup handles long-running operations
   - Plan for potential AI-driven features (chatbots, automated content)
   - Review function timeouts for agent workloads

2. **Platform Approach**
   - Build reusable patterns for common operations
   - Abstract third-party integrations (RealScout, WordPress)
   - Create internal primitives for future features

3. **Cost Controls**
   - Monitor API usage patterns
   - Set budgets for AI services (if added)
   - Track token usage and costs

## Additional Resources

### From Nate's Newsletter Coverage
- [Former Vercel executive on infrastructure vs models](https://tech.eu/2026/05/18/former-vercel-executive-says-voice-agents-will-be-won-on-infrastructure-not-models/)
- [Vercel Releases Open Agents](https://www.infoq.com/news/2026/04/vercel-open-agents/)
- [Vercel in 2026: The $9.3B Bet](https://humanxai.events/vercel-in-2026-the-93-billion-bet-on-ai-native-infrastructure)

### Official Vercel Resources
- [Agentic Infrastructure Blog](https://vercel.com/blog/agentic-infrastructure) (access restricted)
- [How to Build AI Agents with Vercel](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk)
- [AI Agents on Vercel](https://vercel.com/kb/guide/ai-agents)

### Nate's Newsletter
- **Main site:** https://natesnewsletter.substack.com/
- **Archive:** https://natesnewsletter.substack.com/archive
- **About:** Daily AI strategy for practitioners
- **Access:** Subscription-based with free trial

## Action Items

### For This Project

1. **Review Current Setup**
   - [x] Verify environment variables follow security best practices
   - [x] Confirm function timeouts appropriate
   - [x] Check security headers and CSP

2. **Monitor Industry Trends**
   - [ ] Subscribe to Nate's Newsletter for ongoing insights
   - [ ] Follow Vercel blog for infrastructure updates
   - [ ] Stay current on AI SDK developments

3. **Plan for Future**
   - [ ] Consider agent-ready architecture for future features
   - [ ] Build platform primitives, not one-off solutions
   - [ ] Design for long-term infrastructure wins

## Summary

While full access to Nate's Newsletter content was restricted, available information indicates that:

1. **Vercel's approach focuses on infrastructure layers** that provide long-term defensibility
2. **Agent workloads are the future** and require different architecture than traditional apps
3. **Platform thinking beats feature thinking** - build reusable primitives
4. **Infrastructure wins over models** in the long run

Our current Vercel setup documentation aligns with these principles by focusing on:
- Secure, scalable infrastructure
- Reusable patterns and configurations
- Long-term maintenance and operational excellence

---

**Last Updated:** June 6, 2026  
**Status:** Partial insights due to subscription access restrictions  
**Recommendation:** Subscribe to Nate's Newsletter for complete coverage
