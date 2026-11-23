# How to Talk to Your Experts

Ready-to-use prompts for the advisory team in `.claude/`. Type them into Claude Code started from this project folder. The full roster of agents and skills is in [expert-roster.md](expert-roster.md).

There are three ways to ask:

| You want | Ask | What happens |
|---|---|---|
| One combined answer from several experts | The **orchestrator** | It picks the experts, runs them in parallel, has them check each other's work, and returns one answer |
| One expert's view | That **agent** by name | Only that expert answers |
| Everyone's view | The **orchestrator**, explicitly asking for the whole team | It consults every relevant expert, in batches |

---

## 1. Multi-expert prompts through the orchestrator

Each prompt is written so that several domains are involved. The orchestrator decides who to bring in; the "likely experts" column shows what to expect.

### Example 1: Should we take this deal?

```text
Use the orchestrator: A mainland pharmaceutical company wants us to build a GenAI tool that
summarizes deviation reports. Half the users are at their New Jersey headquarters and half
at their plant in Juncos, Puerto Rico. Budget is about $250k over 4 months. Should we take
it, is it EXPORT or LOCAL, how should we structure the SOW, and what should we charge?
```

Likely experts: `act60-incentives-specialist`, `life-sciences-gxp-expert`, `corporate-commercial-attorney`, `pricing-offer-designer`, `ai-solutions-architect`.
Why it's a good test: the Puerto Rico plant pulls part of the work into LOCAL, so the experts must agree on how to split the SOW, validate the tool for GxP, and price both halves.

### Example 2: Can we afford our first hires?

```text
Use the orchestrator: We have $350k in the bank and two signed clients worth $40k a month
combined, both on the mainland. We want to hire two senior AI engineers in San Juan in
Q1 2027. Can we afford it, what should we pay them, what does Puerto Rico labor law require
of us, and how does this affect our Act 60 decree?
```

Likely experts: `cfo-financial-planner`, `people-talent-lead`, `employment-law-counsel`, `act60-incentives-specialist`.
Why it's a good test: it combines a runway model, salary benchmarks, Christmas bonus and probation rules, the $3M employee threshold, and the difficult-to-hire incentive.

### Example 3: Bid on a government RFP?

```text
Use the orchestrator: A Puerto Rico government agency has published an RFP for an AI
chatbot that answers citizen questions in Spanish and English. Proposals are due in
3 weeks. Should we bid? What registrations and documents do we need, what are the
regulatory and payment risks, and what would a credible technical approach look like?
```

Likely experts: `public-sector-procurement-expert`, `corporate-commercial-attorney`, `ai-governance-regulatory-advisor`, `ai-solutions-architect`, `cfo-financial-planner`.
Why it's a good test: it needs RUL/RPT registrations, the proposed Puerto Rico AI law (SB 68), a bilingual design, and a judgment on government payment risk.

### Example 4: Founder relocation, before the deadline

```text
Use the orchestrator: I live in Florida and plan to move to San Juan in March 2027 to run
the firm. I have a $2M stock portfolio. Should I file a Chapter 2 application before
December 31, 2026, how should the company be set up so I avoid federal tax on its profits,
and what do I need to do in my first year to stay a bona fide resident?
```

Likely experts: `act60-incentives-specialist`, `us-federal-tax-advisor`, `residency-relocation-advisor`, `pr-tax-accounting-specialist`, `risk-compliance-officer`.
Why it's a good test: it is time-sensitive (0% vs 4%, decided by the filing date) and the three tax experts have to agree on one structure.

**Tips for better answers**
- Give real numbers, dates and locations. The experts start with no conversation history, so the orchestrator can only brief them with what you write.
- Say what decision you are making ("should we bid?"), not only the topic.
- Ask for a file when you want one: "...and save the result as a memo." It goes to `deliverables/<topic>/`.
- Add "show me where the experts disagreed" if you want to see the cross-review in detail.

---

## 2. Asking one specific agent

Use this when you know exactly whose view you need. It's faster and cheaper than the orchestrator.

**By @-mention** (type `@` and pick from the list, or type it out):

```text
@agent-act60-incentives-specialist Is a Texas logistics client we serve remotely from
San Juan EXPORT or LOCAL? Use the tag-export-or-local method and show the register entry.
```

**By name, in plain language:**

```text
Ask the employment-law-counsel what we owe a salaried engineer hired in January 2027
if we let them go after 8 months.
```

**For a whole session with one expert**, start Claude Code like this:

```bash
claude --agent cfo-financial-planner
```

Every message in that session then goes to the CFO.

**Run one skill (method) directly, without an agent:**

```text
/build-break-even-model fixed costs $755k/yr, blended rate $190/h, 65% utilization
```

Agent names are listed in `CLAUDE.md` and [expert-roster.md](expert-roster.md). Skill names are the folders in `.claude/skills/`.

---

## 3. Asking the whole team

By default the orchestrator uses the smallest set of experts that covers the question. To hear from everyone, say so explicitly:

```text
Use the orchestrator and consult the whole team: We are deciding whether to launch in
January 2027 or wait until July 2027. Get a view from every expert whose domain is
affected, run a cross-review on the points where they disagree, and give me one
recommendation with each expert's position summarized in a table.
```

A lighter version that still covers every domain asks for one expert per group:

```text
Use the orchestrator: ask one lead expert from each group (strategy, tax, legal, finance,
sales and marketing, industry, technical, operations) for the single biggest risk to our
first year, then combine them into a ranked top-5 list with owners.
```

Good to know:
- A whole-team question takes longer and uses many more tokens. Use it for big decisions.
- Claude Code runs at most 20 subagents at once, so with 31 experts the orchestrator works in batches.
- To start a session where every message goes through the orchestrator:

```bash
claude --agent orchestrator
```

---

## If something doesn't work

- **The orchestrator answers without consulting experts.** It will say so in its answer. Check that `.claude/settings.json` still sets `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` to `2`, or start with `claude --agent orchestrator`.
- **An expert is missing or a skill didn't load.** Run `/audit-team-configuration`.
- **You need a new kind of expert or method.** Ask: `Use the meta-agent to add a <role> expert who <does what>.`
