---
name: route-question-to-experts
description: "Decide which expert agents should answer a question, what each should be asked, and in which order. Use at the start of every multi-domain question."
metadata:
  id: S43
  group: "Coordination & team building"
---

# S43 · Route a question to the right experts

Used by: `orchestrator`

## Input

- The question and any context from the consultant

## Steps

1. Restate the question and the decision it supports.
2. Identify the domains involved and match them with the routing table below.
3. Pick the smallest set that covers the question (1 to 6 experts). Add `act60-incentives-specialist` whenever tax rate, eligibility or EXPORT/LOCAL is touched, and `risk-compliance-officer` when a compliance obligation is involved.
4. Mark dependencies: who needs whose output first (for example effort estimate → price → proposal).
5. Write a self-contained brief for each expert (subagents do not see the conversation).

## Routing table

| Agent (`subagent_type`) | Role | Bring in for |
|---|---|---|
| `engagement-lead` | A01 Elena, Engagement Lead (sonnet) | Runs the engagement for the consultant: the plan, decision log, status reports and executive briefings. Hands multi-expert questions to the orchestrator. |
| `business-strategist` | A02 Rafael, Business Strategist (opus) | Designs the business model (export-led core plus local beachhead), phase plan and go/no-go criteria, and stress-tests the strategy against a no-decree scenario. |
| `market-research-analyst` | A03 Priya, Market Research Analyst (sonnet) | Sizes the local and export markets bottom-up and keeps AI-adoption and economic data (Census, IDC, Microsoft, InvestPR) current. |
| `competitive-intelligence-analyst` | A04 Diego, Competitive Intelligence Analyst (haiku) | Tracks local AI firms, Big 4 practices and mainland/nearshore rivals, and identifies the positioning gaps the firm can own. |
| `act60-incentives-specialist` | A05 Carmen, Act 60 Incentives Specialist (opus) | Determines decree eligibility, prepares and maintains the Chapter 3 (and founders' Chapter 2) decrees, and finds other Act 60 incentives that apply. |
| `us-federal-tax-advisor` | A06 Howard, U.S. Federal Tax Advisor (opus) | Ensures the structure delivers the federal result (IRC 933/937, corporate classification, no SE-tax trap, U.S.-source on-site work, FBAR/FATCA). |
| `pr-tax-accounting-specialist` | A07 Luis, Puerto Rico Tax & Accounting Specialist (CPA) (opus) | Runs Puerto Rico returns, IVU, municipal license tax, CRIM, segregated EXPORT/LOCAL books, the decree annual report and CPA certifications. |
| `residency-relocation-advisor` | A08 Sofía, Residency & Relocation Advisor (opus) | Helps founders establish and document bona fide Puerto Rico residency, meet the Chapter 2 filing and home-purchase rules, and plan the move. |
| `corporate-commercial-attorney` | A09 Gabriel, Corporate & Commercial Attorney (opus) | Forms the entity, handles registrations, and drafts MSAs/SOWs with nexus and work-location language, IP terms and liability caps. |
| `employment-law-counsel` | A10 Isabel, Employment Law Counsel (opus) | Keeps hiring, handbooks, pay, leave, Christmas bonus, Act 80 terminations, CFSE coverage and contractor use compliant with Puerto Rico labor law. |
| `ai-governance-regulatory-advisor` | A11 Naomi, AI Governance & Regulatory Advisor (opus) | Maps client and firm obligations under SB 68, HIPAA, GLBA/OCIF, FDA Part 11/GxP and SOC 2, and shapes the AI Governance offer. |
| `risk-compliance-officer` | A12 Héctor, Risk & Compliance Officer (opus) | Owns the risk register and compliance calendar, and keeps the firm audit-ready (decree conditions, sourcing, residency evidence, labor rules). |
| `cfo-financial-planner` | A13 Andrea, CFO / Financial Planner (opus) | Builds the budget, runway, cash-flow and capital plan, models tax by EXPORT/LOCAL mix, and tracks the $3M volume threshold. |
| `pricing-offer-designer` | A14 Marco, Pricing & Offer Designer (sonnet) | Sets rates and designs productized offers and packages with target margins for export versus local clients. |
| `marketing-brand-strategist` | A15 Valeria, Marketing & Brand Strategist (sonnet) | Owns positioning, the bilingual brand, channel mix and the year-1 marketing plan for both the local and export motions. |
| `content-thought-leadership-writer` | A16 Ana, Content & Thought Leadership Writer (sonnet) | Produces native-quality English and Puerto Rico Spanish articles, case studies, reports, op-eds and talks. |
| `export-sales-lead` | A17 Jake, Export Sales Lead (sonnet) | Builds and closes the mainland U.S. and LatAm pipeline through account-based outbound, qualifying every deal as EXPORT. |
| `local-sales-community-lead` | A18 Javier, Local Sales & Community Lead (sonnet) | Sells to Puerto Rico enterprises and SMEs through relationships, associations and events (Caribbean AI Summit, Cámara de Comercio). |
| `partnerships-alliances-manager` | A19 Mei, Partnerships & Alliances Manager (sonnet) | Builds co-sell and subcontracting relationships with Microsoft and other hyperscalers, data platforms and Big 4/IT incumbents. |
| `life-sciences-gxp-expert` | A20 Roberto, Life Sciences & GxP Expert (sonnet) | Advises on pharma and medical-device AI use cases, validation and GxP, and on which life-sciences work qualifies as EXPORT. |
| `financial-services-expert` | A21 Claudia, Financial Services Expert (sonnet) | Advises on banks, cooperatives and insurers: use cases, model risk management and OCIF/GLBA expectations. |
| `healthcare-expert` | A22 Lucía, Healthcare Expert (sonnet) | Advises on hospitals and health plans (Medicare Advantage/Medicaid): bilingual patient and member AI, and HIPAA-compliant delivery. |
| `public-sector-procurement-expert` | A23 Ramón, Public Sector & Procurement Expert (sonnet) | Guides government sales: agency needs, PRITS, RUL/RPT and SAM.gov registration, RFP responses and payment risk. |
| `sme-market-specialist` | A24 Yari, SME Market Specialist (sonnet) | Designs and validates low-ticket, bilingual offers (WhatsApp, voice, Copilot rollouts) for Puerto Rico small businesses. |
| `ai-solutions-architect` | A25 Kenji, AI Solutions Architect (sonnet) | Turns client problems into vendor-agnostic AI solution designs, estimates and technical proposals. |
| `ml-llm-engineering-lead` | A26 Nadia, ML/LLM Engineering Lead (sonnet) | Leads delivery of RAG, agents and model integrations with evaluations and guardrails, and builds reusable accelerators (licensable IP). |
| `data-engineering-lead` | A27 Óscar, Data Engineering Lead (sonnet) | Runs data-readiness assessments and builds the data pipelines and platforms that AI use cases depend on. |
| `cloud-mlops-security-engineer` | A28 Erik, Cloud, MLOps & Security Engineer (sonnet) | Owns cloud infrastructure, deployment, monitoring, security controls and data privacy, and the path to SOC 2. |
| `delivery-engagement-manager` | A29 Patricia, Delivery & Engagement Manager (sonnet) | Runs engagements on scope, schedule and quality, delivered remotely from Puerto Rico, with SOW tax tags and work-location logs kept current. |
| `people-talent-lead` | A30 Daniela, People & Talent Lead (sonnet) | Recruits and retains AI talent (UPRM, diaspora, difficult-to-hire incentive), benchmarks pay, and plans the team build. |
| `operations-continuity-manager` | A31 Manny, Operations & Business Continuity Manager (haiku) | Runs office, IT, vendors and admin, and plans for power, internet and hurricane disruption. |

## Common patterns

| Question type | Lead | Also consult |
|---|---|---|
| Is this client/SOW eligible for the 4% / 2% rate? | `act60-incentives-specialist` | `pr-tax-accounting-specialist`, `corporate-commercial-attorney`, `us-federal-tax-advisor`, `risk-compliance-officer` |
| How should we structure the entity and owner pay? | `us-federal-tax-advisor` | `act60-incentives-specialist`, `pr-tax-accounting-specialist`, `cfo-financial-planner`, `residency-relocation-advisor` |
| Should we pursue this deal? | `export-sales-lead` | `local-sales-community-lead`, `pricing-offer-designer`, `ai-solutions-architect`, `cfo-financial-planner` |
| Write a proposal | `delivery-engagement-manager` | `ai-solutions-architect`, `pricing-offer-designer`, `corporate-commercial-attorney` |
| Bid on a government RFP | `public-sector-procurement-expert` | `corporate-commercial-attorney`, `ai-governance-regulatory-advisor`, `ai-solutions-architect`, `cfo-financial-planner` |
| Hire a senior AI engineer | `people-talent-lead` | `employment-law-counsel`, `act60-incentives-specialist`, `cfo-financial-planner` |
| Annual compliance cycle | `risk-compliance-officer` | `pr-tax-accounting-specialist`, `act60-incentives-specialist`, `residency-relocation-advisor`, `employment-law-counsel`, `operations-continuity-manager` |
| Can we afford to hire / when do we break even? | `cfo-financial-planner` | `pricing-offer-designer`, `business-strategist` |
| Plan next year | `business-strategist` | `cfo-financial-planner`, `market-research-analyst`, `competitive-intelligence-analyst`, `marketing-brand-strategist`, `engagement-lead` |
| A hurricane or grid outage is coming | `operations-continuity-manager` | `cloud-mlops-security-engineer`, `delivery-engagement-manager`, `engagement-lead` |
| Add a new expert or method to the team | `meta-agent` |  |

## Output

Routing plan: experts chosen and why · order and dependencies · one brief per expert (question, context, what to deliver, format, docs to read).

## Checks

- Do not consult experts who add nothing.
- Prefer parallel calls when there are no dependencies.
