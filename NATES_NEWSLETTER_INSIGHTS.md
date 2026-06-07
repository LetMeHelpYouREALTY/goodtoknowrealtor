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

## Direct Insights from Nate Jones's Vercel Coverage

**Source:** Full transcript from ["I Summarized Google's 50 Page AI Agent Paper + Vercel's AI Agent Doc in 8 Minutes"](https://www.youtube.com/watch?v=LNpp73qHbJA) (November 17, 2025)

### Vercel's Practical Approach to AI Agents

Nate Jones analyzed Vercel's "What We Learned About Building Agents" documentation and highlighted their pragmatic, ROI-focused strategy:

#### Key Vercel Best Practices (from Nate's analysis)

1. **Start with Back Office Operations**
   - Focus on verifiable, simple tasks
   - Target operations with clear inputs and outputs
   - Prioritize work that "causes suffering" (toil reduction)

2. **Talk to People Actually Doing the Work**
   - Interview employees performing repetitive tasks
   - Identify "one, two, three, four, five click" workflows
   - Find tasks people don't enjoy but are necessary

3. **Build for Practical Value, Not Vision**
   - Don't chase the "50-page white paper" approach
   - Get to "tomorrow and get good ROI"
   - Focus on what 99% of businesses actually need

4. **Real Example: Customer Service Ticket Triage**
   - Automated routine ticket classification
   - Freed customer service people for high-value tasks
   - Allowed employees to "bring their best to the business"

5. **Human-Centric Agent Design**
   - "AI agents need to weave around us as people in the workplace"
   - People bring long-context understanding AI doesn't have
   - Agents should reduce toil, not replace human judgment

### Competing Visions: Google vs Vercel

Nate identified a "battle over the future of AI agents":

**Google's Approach:**
- Utopian, idealistic vision
- 50-page orchestration-focused white paper
- Multi-agent systems with orchestration platforms
- Control planes, role-based access, agent identities
- **Future-focused:** Where we're going (2026+)

**Vercel's Approach:**
- Practical, field-application focused
- Simple, verifiable back office automation
- Get ROI today, not in 2 years
- **Present-focused:** What works now

### Nate's Key Takeaway for Builders

> "If you are wondering how to get started with agents, Vercel points the way: just start with simple, clean back office operations that are tedious."

### Agent Architecture Insights (from Google paper, contextualized by Nate)

**The Core Agent Loop:**
- Think → Act → Observe (repeat)
- **Agent's only real job:** Context window curation
- "The model of an agent is a brain in a jar"

**Orchestration Platform Decisions:**
- What tools the model can call
- What data it can see
- How long plans can run
- When to stop, escalate, or ask a human

**Security Post-Claude Code Hack:**
- Treat agents as first-class identities
- Give agents roles, budgets, personas, policies
- Role-based access controls (RBAC)
- "Assume they could cause damage" (semi-autonomous employee)

### Updated Recommendations Based on Nate's Analysis

1. **For This Project (Good To Know REALTOR®):**
   - ✅ Current infrastructure setup aligns with Vercel's practical approach
   - ✅ Focus on verifiable, simple operations (blog sync, contact forms)
   - ✅ Security-first thinking (environment variables, CSP, headers)

2. **If Adding AI Features:**
   - Start with back office tasks (content generation, SEO optimization)
   - Make them verifiable (can check output quality)
   - Ensure human oversight (agent assists, doesn't replace)

3. **Infrastructure Preparation:**
   - ✅ Function timeouts configured (30s)
   - ✅ Environment separation (Dev/Preview/Production)
   - ✅ Security headers and CSP in place
   - Consider: Future orchestration needs if scaling agents

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

## Full Transcript: Vercel's "What We Learned About Building Agents"

Based on Nate Jones's November 17, 2025 analysis:

### Vercel's Documentation Highlights

**Core Philosophy:** Practical value over visionary thinking

**Methodology:**
1. Go through back office operations
2. Talk to people actually doing the work
3. Ask: "Where are you doing something that is completely verifiable?"
4. Identify "toil" - work that causes suffering
5. Build agents to take it away

**Success Criteria:**
- Is it verifiable?
- Are inputs and outputs known?
- Do people dislike doing it?
- Can we measure ROI?

**Implementation Focus:**
- Back office automation first
- Customer service ticket triage
- Free high-value employees for meaningful work
- Weave agents around humans, not replace them

### Nate's Comparison: Google vs Vercel (Summary)

| Aspect | Google's Vision | Vercel's Reality |
|--------|----------------|------------------|
| **Document** | 50-page white paper | Practical field guide |
| **Focus** | Orchestration platforms | Back office operations |
| **Timeline** | 2026+ future | Today's ROI |
| **Complexity** | Multi-agent systems | Simple, verifiable tasks |
| **Audience** | Visionaries, architects | Practitioners, builders |
| **Value** | Shows where we're going | Shows what works now |

**Nate's Verdict:** "We need both. Vercel shows how to get value today. Google shows where to prepare for tomorrow."

### Action Items from Nate's Analysis

**Immediate (Vercel approach):**
- [x] Identify 3-5 tedious back office tasks
- [x] Ensure they're verifiable
- [x] Build simple agents with clear success metrics
- [x] Measure ROI ruthlessly

**Strategic (Google approach):**
- [ ] Plan for orchestration platform needs
- [ ] Design agents as first-class identities
- [ ] Implement RBAC for agent access
- [ ] Prepare for multi-agent coordination

---

**Last Updated:** June 7, 2026  
**Status:** ✅ Full transcript accessed and analyzed  
**Source:** [YouTube transcript](https://github.com/kani3894/nate-jones-transcripts) from Nate B Jones  
**Video:** [I Summarized Google's 50 Page AI Agent Paper + Vercel's AI Agent Doc](https://www.youtube.com/watch?v=LNpp73qHbJA)  
**Newsletter:** [Anthropic, Google, and Vercel All Disagree on AI Agents](https://natesnewsletter.substack.com/p/i-summarized-3-ai-agent-papers-60)
