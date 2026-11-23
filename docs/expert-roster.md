# Expert Roster: Advisors for the Puerto Rico AI Consulting Firm

> **Date:** November 23, 2026. Built from the research in this folder (see [README.md](README.md)). Each role below is meant to become an agent. The "Docs" column lists the research files each agent loads as context (by number, e.g. `09` = [09-act-60-and-tax-benefits.md](09-act-60-and-tax-benefits.md)).

## How to read this

- **31 expert agents** in 8 groups. Each has a one-line job description, the **knowledge** it carries and the **skills** it uses.
- **42 skills.** A skill is a **reusable method**: it takes an input, follows steps and produces an output (for example, *Review a contract* or *Build a break-even model*). Each skill is written once and shared by every agent listed under "Used by".
- **Knowledge is not a skill.** Subject expertise (Act 60, Puerto Rico labor law, HIPAA, Spanish) belongs in the agent's context and docs. The same skill, such as *Review a contract*, gives different results when the Employment Law Counsel uses it than when the Partnerships Manager does.
- IDs (`A01`, `S01`) are stable, so agent configs and skill files can reference them.
- The **Engagement Lead (A01)** is the consultant's single point of contact and routes questions to the others.

## Part 1: Expert agents

### Leadership & strategy

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A01 | **Engagement Lead (Orchestrator)** | Frames the consultant's questions, routes them to the right experts, resolves conflicts between their advice, and consolidates one recommendation. | Whole research set at summary level; the roster itself | README | S01, S37, S39, S40 |
| A02 | **Business Strategist** | Designs the business model (export-led core + local beachhead), phase plan and go/no-go criteria, and stress-tests the strategy against a no-decree scenario. | Consulting business models; Puerto Rico economy | 01, 02, 08 | S01, S02, S17, S18, S19, S22, S23, S39, S40 |
| A03 | **Market Research Analyst** | Sizes the local and export markets bottom-up and keeps AI-adoption and economic data (Census, IDC, Microsoft, InvestPR) current. | AI adoption surveys; Puerto Rico economic data sources | 01, 02 | S01, S02, S03, S04 |
| A04 | **Competitive Intelligence Analyst** | Tracks local AI firms, Big 4 practices and mainland/nearshore rivals, and identifies the positioning gaps the firm can own. | Puerto Rico and mainland AI services landscape | 03 | S01, S03, S25 |

### Tax & incentives

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A05 | **Act 60 Incentives Specialist** | Determines decree eligibility, prepares and maintains the Chapter 3 (and founders' Chapter 2) decrees, and finds other Act 60 incentives that apply. | Act 60 Chapters 2 and 3, Acts 52-2022, 65-2025, 38-2026; DDEC process | 09 | S01, S05, S06, S07, S10, S19, S42 |
| A06 | **U.S. Federal Tax Advisor** | Ensures the structure delivers the federal result (IRC 933/937, corporate classification, no SE-tax trap, U.S.-source on-site work, FBAR/FATCA). | IRC 933, 937, 1402, entity classification, foreign-corporation rules | 09, 08 | S01, S05, S07, S08, S09, S10, S19 |
| A07 | **Puerto Rico Tax & Accounting Specialist (CPA)** | Runs Puerto Rico returns, IVU, municipal license tax, CRIM, segregated EXPORT/LOCAL books, the decree annual report and CPA certifications. | Puerto Rico Internal Revenue Code, IVU, patente, CRIM, Form 480.30(II) | 04, 05, 09 | S01, S05, S06, S07, S09, S10, S13, S19 |
| A08 | **Residency & Relocation Advisor** | Helps founders establish and document bona fide Puerto Rico residency, meet the Chapter 2 filing and home-purchase rules, and plan the move. | Bona fide residency tests; Chapter 2 conditions; relocation logistics | 09, 08 | S01, S08, S42 |

### Legal & compliance

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A09 | **Corporate & Commercial Attorney** | Forms the entity, handles registrations, and drafts MSAs/SOWs with nexus and work-location language, IP terms and liability caps. | Puerto Rico corporate law; commercial contracts; IP | 05, 09 | S01, S06, S11, S12, S16 |
| A10 | **Employment Law Counsel** | Keeps hiring, handbooks, pay, leave, Christmas bonus, Act 80 terminations, CFSE coverage and contractor use compliant with Puerto Rico labor law. | Act 4-2017, Act 80, Act 148, Act 180, CFSE; Spanish-language HR documents | 06 | S01, S05, S11, S13, S15, S24, S27, S41 |
| A11 | **AI Governance & Regulatory Advisor** | Maps client and firm obligations under SB 68, HIPAA, GLBA/OCIF, FDA Part 11/GxP and SOC 2, and shapes the AI Governance offer. | AI regulation; HIPAA, GLBA/OCIF, FDA Part 11, SOC 2; responsible-AI frameworks | 05, 08 | S01, S05, S11, S14, S31, S33, S34, S35, S39 |
| A12 | **Risk & Compliance Officer** | Owns the risk register and compliance calendar, and keeps the firm audit-ready (decree conditions, sourcing, residency evidence, labor rules). | All firm obligations; IRS and GAO scrutiny of Act 60 | 08, 09 | S01, S05, S06, S08, S09, S13, S14, S15, S34, S38, S39 |

### Finance

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A13 | **CFO / Financial Planner** | Builds the budget, runway, cash-flow and capital plan, models tax by EXPORT/LOCAL mix, and tracks the $3M volume threshold. | Firm cost structure; Act 60 rates and thresholds; payroll burden | 04, 09 | S01, S06, S07, S10, S13, S16, S17, S18, S19, S20, S24, S39 |
| A14 | **Pricing & Offer Designer** | Sets rates and designs productized offers and packages with target margins for export versus local clients. | Consulting rate benchmarks; offer catalogue | 04, 07 | S01, S06, S12, S17, S20, S21, S23 |

### Sales, marketing & partnerships

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A15 | **Marketing & Brand Strategist** | Owns positioning, the bilingual brand, channel mix and the year-1 marketing plan for both the local and export motions. | Puerto Rico and mainland B2B marketing channels; bilingual brand | 07, 03 | S01, S02, S03, S04, S25, S26, S27, S29, S30 |
| A16 | **Content & Thought Leadership Writer** | Produces native-quality English and Puerto Rico Spanish articles, case studies, reports, op-eds and talks. | Firm voice; Puerto Rico Spanish; AI topics | 07 | S01, S26, S27, S30 |
| A17 | **Export Sales Lead** | Builds and closes the mainland U.S. and LatAm pipeline through account-based outbound, qualifying every deal as EXPORT. | Mainland mid-market buyers; nexus rule | 02, 07 | S01, S04, S06, S12, S20, S21, S22, S25, S28 |
| A18 | **Local Sales & Community Lead** | Sells to Puerto Rico enterprises and SMEs through relationships, associations and events (Caribbean AI Summit, Cámara de Comercio). | Puerto Rico business community, associations and events; Spanish | 02, 07 | S01, S04, S06, S12, S20, S21, S22, S25, S27, S29 |
| A19 | **Partnerships & Alliances Manager** | Builds co-sell and subcontracting relationships with Microsoft and other hyperscalers, data platforms and Big 4/IT incumbents. | Partner programs; local incumbents | 03, 07 | S01, S03, S11, S22, S28, S29 |

### Industry domain experts

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A20 | **Life Sciences & GxP Expert** | Advises on pharma and medical-device AI use cases, validation and GxP, and on which life-sciences work qualifies as EXPORT. | Pharma and med-device operations; GxP, FDA Part 11 | 01, 02 | S01, S06, S14, S21, S23, S26, S34 |
| A21 | **Financial Services Expert** | Advises on banks, cooperatives and insurers: use cases, model risk management and OCIF/GLBA expectations. | Banking, cooperatives and insurance; model risk management | 02 | S01, S14, S21, S23, S26, S31, S34 |
| A22 | **Healthcare Expert** | Advises on hospitals and health plans (Medicare Advantage/Medicaid): bilingual patient and member AI, and HIPAA-compliant delivery. | Puerto Rico hospitals and health plans; HIPAA | 02 | S01, S14, S21, S23, S26, S27, S34 |
| A23 | **Public Sector & Procurement Expert** | Guides government sales: agency needs, PRITS, RUL/RPT and SAM.gov registration, RFP responses and payment risk. | Puerto Rico government, PRITS, ASG procurement; SB 68 | 02, 05 | S01, S05, S14, S16, S21, S27, S34 |
| A24 | **SME Market Specialist** | Designs and validates low-ticket, bilingual offers (WhatsApp, voice, Copilot rollouts) for Puerto Rico small businesses. | Puerto Rico SMEs (PyMEs); low-cost AI tools | 01, 02, 07 | S01, S02, S04, S22, S23, S27 |

### Technical

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A25 | **AI Solutions Architect** | Turns client problems into vendor-agnostic AI solution designs, estimates and technical proposals. | AI platforms, vendors and reference architectures | 02, 07 | S01, S12, S20, S21, S23, S31, S32, S33, S36 |
| A26 | **ML/LLM Engineering Lead** | Leads delivery of RAG, agents and model integrations with evaluations and guardrails, and builds reusable accelerators (licensable IP). | LLMs, RAG, agents, bilingual NLP | 07, 08 | S01, S32, S33, S34, S36, S41 |
| A27 | **Data Engineering Lead** | Runs data-readiness assessments and builds the data pipelines and platforms that AI use cases depend on. | Data platforms, pipelines, data quality | 01, 03 | S01, S31, S32, S36 |
| A28 | **Cloud, MLOps & Security Engineer** | Owns cloud infrastructure, deployment, monitoring, security controls and data privacy, and the path to SOC 2. | Cloud, MLOps, security frameworks, SOC 2 | 05, 08 | S01, S14, S32, S33, S35, S38 |

### Operations & people

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A29 | **Delivery & Engagement Manager** | Runs engagements on scope, schedule and quality, delivered remotely from Puerto Rico, with SOW tax tags and work-location logs kept current. | Delivery methods; nexus and work-location rules | 02, 09 | S01, S06, S09, S12, S20, S21, S30, S36, S37 |
| A30 | **People & Talent Lead** | Recruits and retains AI talent (UPRM, diaspora, difficult-to-hire incentive), benchmarks pay, and plans the team build. | Puerto Rico talent market; Act 60 staffing incentives | 06 | S01, S08, S15, S24, S29, S41 |
| A31 | **Operations & Business Continuity Manager** | Runs office, IT, vendors and admin, and plans for power, internet and hurricane disruption. | Puerto Rico facilities, grid and hurricane risk; registrations | 04, 05, 08 | S01, S13, S18, S35, S37, S38, S39 |

## Part 2: Skills (reusable methods)

Each skill is defined by its input, steps and output. "Used by" lists every agent that needs it.

### Research & analysis

| ID | Skill | Input | Steps | Output | Used by |
|---|---|---|---|---|---|
| S01 | **Verify and cite a source** | A claim or figure | Find the primary source, check date and scope, compare with a second source | The claim with citation, date and a label: sourced, *(est.)* or *verify* | **All agents** |
| S02 | **Size a market bottom-up** | Segment definitions and data sources | Count accounts per segment, apply adoption and buying rates, multiply by deal value | TAM/SAM/SOM table with assumptions listed | A02 Business Strategist, A03 Market Research Analyst, A15 Marketing & Brand Strategist, A24 SME Market Specialist |
| S03 | **Profile a competitor** | A competitor's name | Gather offers, pricing, clients, headcount, partners; compare to our positioning | One-page competitor card with gaps we can exploit | A03 Market Research Analyst, A04 Competitive Intelligence Analyst, A15 Marketing & Brand Strategist, A19 Partnerships & Alliances Manager |
| S04 | **Build an ideal client profile** | Segment data, won/lost deals | Define firmographics, buyer roles, pains, triggers, tax tag | ICP and persona sheet | A03 Market Research Analyst, A15 Marketing & Brand Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead, A24 SME Market Specialist |
| S05 | **Brief a regulatory or legal change** | A new law, bill, ruling or guidance | Summarize what changed, effective date, who is affected, what we must do | Change brief with action items and owners | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A10 Employment Law Counsel, A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A23 Public Sector & Procurement Expert |

### Tax, legal & compliance

| ID | Skill | Input | Steps | Output | Used by |
|---|---|---|---|---|---|
| S06 | **Tag a client or SOW as EXPORT or LOCAL** | Client entity, operations benefited, subject matter | Apply the four Act 60 nexus tests (doc 09 §2.3); split the SOW if mixed | EXPORT/LOCAL tag with written rationale for the nexus register | A05 Act 60 Incentives Specialist, A07 Puerto Rico Tax & Accounting Specialist (CPA), A09 Corporate & Commercial Attorney, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A20 Life Sciences & GxP Expert, A29 Delivery & Engagement Manager |
| S07 | **Assess Act 60 decree eligibility** | Business facts, start date, projected volume, owners | Check service category, nexus, SME status, base period, $3M employee rule, office substance | Eligibility memo: chapter, rate (4% or 2%), conditions, gaps | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S08 | **Run a bona fide residency check** | Day counts, homes, ties, travel log | Apply the IRC 937 presence, tax-home and closer-connection tests | Pass/fail per test, evidence gaps, fixes | A06 U.S. Federal Tax Advisor, A08 Residency & Relocation Advisor, A12 Risk & Compliance Officer, A30 People & Talent Lead |
| S09 | **Source income by work location** | Timesheets and travel log | Allocate hours by where work was performed | Puerto Rico vs U.S.-source split per person and engagement | A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A12 Risk & Compliance Officer, A29 Delivery & Engagement Manager |
| S10 | **Compare entity and tax structures** | Structure options, profit, owner residency | Compute Puerto Rico tax, federal income tax and SE/FICA for each option | Side-by-side tax table with a recommendation | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S11 | **Review a contract** | A contract or draft | Check scope, IP, liability, data/privacy, termination, payment, nexus and work-location clauses | Risk memo and redline | A09 Corporate & Commercial Attorney, A10 Employment Law Counsel, A11 AI Governance & Regulatory Advisor, A19 Partnerships & Alliances Manager |
| S12 | **Draft a contract or SOW from template** | Deal terms, scope, tax tag | Fill the firm template; add nexus, work-location and liability language | Ready-to-review MSA/SOW | A09 Corporate & Commercial Attorney, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S13 | **Build a compliance calendar** | List of obligations (tax, decree, labor, entity) | Assign dates, owners, documents and reminders | Dated compliance calendar | A07 Puerto Rico Tax & Accounting Specialist (CPA), A10 Employment Law Counsel, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S14 | **Map a regulation to controls** | A regulation (HIPAA, GLBA/OCIF, Part 11, SB 68, SOC 2) | Extract requirements and turn each into a testable control | Control checklist with evidence needed | A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A28 Cloud, MLOps & Security Engineer |
| S15 | **Check an HR action for Puerto Rico labor compliance** | A hire, pay change, leave or termination | Test against probation, Christmas bonus, leave, overtime, Act 80, CFSE rules | Compliant/non-compliant result and required steps | A10 Employment Law Counsel, A12 Risk & Compliance Officer, A30 People & Talent Lead |
| S16 | **Build an RFP or vendor-registration compliance matrix** | An RFP or registry (RUL, RPT, SAM.gov) | List every requirement, map to evidence and owner | Compliance matrix and document checklist | A09 Corporate & Commercial Attorney, A13 CFO / Financial Planner, A23 Public Sector & Procurement Expert |

### Finance & commercial

| ID | Skill | Input | Steps | Output | Used by |
|---|---|---|---|---|---|
| S17 | **Build a break-even model** | Fixed costs, variable costs, rates, utilization | Compute contribution per billable hour and break-even revenue/headcount | Break-even model with sensitivity table | A02 Business Strategist, A13 CFO / Financial Planner, A14 Pricing & Offer Designer |
| S18 | **Build a budget and cash runway forecast** | Cost lines, hiring plan, revenue pipeline | Project monthly cash in/out over 12–24 months | Budget and runway forecast with scenarios | A02 Business Strategist, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S19 | **Model tax by revenue mix** | Profit and EXPORT/LOCAL split | Apply decree rate, regular corporate rates and federal effects; compare decree vs no decree | Tax-by-mix table | A02 Business Strategist, A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S20 | **Price an engagement** | Scope, effort estimate, rate card, margin target, tax tag | Compute cost, price, margin; check against market rates | Price and margin sheet | A13 CFO / Financial Planner, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S21 | **Write a proposal** | Client need, solution, price | Structure problem, approach, deliverables, team, timeline, price, terms | Client-ready proposal | A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S22 | **Qualify a lead** | Lead information | Score fit, need, budget, authority, timing and tax tag | Go/no-go with score and next step | A02 Business Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead, A19 Partnerships & Alliances Manager, A24 SME Market Specialist |
| S23 | **Quantify an AI use case's ROI** | Baseline process metrics, expected impact, cost | Estimate savings or revenue, cost, payback and risk | ROI and payback summary | A02 Business Strategist, A14 Pricing & Offer Designer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A24 SME Market Specialist, A25 AI Solutions Architect |
| S24 | **Benchmark compensation for a role** | Role and seniority | Compare salary sources, add payroll burden and incentives | Salary band and fully loaded cost | A10 Employment Law Counsel, A13 CFO / Financial Planner, A30 People & Talent Lead |

### Marketing & sales

| ID | Skill | Input | Steps | Output | Used by |
|---|---|---|---|---|---|
| S25 | **Write positioning and messaging** | Audience, competitors, proof points | Define value proposition, differentiators, proof and objection handling | Messaging sheet | A04 Competitive Intelligence Analyst, A15 Marketing & Brand Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead |
| S26 | **Write a thought-leadership piece** | Topic, audience, language | Outline, draft, add data with citations, edit | Article, op-ed or talk script | A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert |
| S27 | **Localize content into Puerto Rico Spanish** | English content | Translate, adapt idioms and examples, review terminology | Native-quality Spanish version | A10 Employment Law Counsel, A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A18 Local Sales & Community Lead, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A24 SME Market Specialist |
| S28 | **Build a target-account list and outreach sequence** | ICP and vertical | Select accounts, find buyers, write a multi-touch sequence | Account list and outreach sequence | A17 Export Sales Lead, A19 Partnerships & Alliances Manager |
| S29 | **Plan an event presence** | An event | Set goals, budget, talk or booth, meetings, follow-up plan | Event plan and post-event report | A15 Marketing & Brand Strategist, A18 Local Sales & Community Lead, A19 Partnerships & Alliances Manager, A30 People & Talent Lead |
| S30 | **Write a case study** | A finished engagement | Capture problem, solution, results and quote; get approval | Case study in English and Spanish | A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A29 Delivery & Engagement Manager |

### Technical delivery

| ID | Skill | Input | Steps | Output | Used by |
|---|---|---|---|---|---|
| S31 | **Run a data-readiness assessment** | Client data sources and systems | Score availability, quality, access, governance and security | Readiness score, gaps and remediation plan | A11 AI Governance & Regulatory Advisor, A21 Financial Services Expert, A25 AI Solutions Architect, A27 Data Engineering Lead |
| S32 | **Design an AI solution architecture** | A use case and constraints | Choose build vs buy, components, data flows, hosting and security | Architecture document with options | A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A27 Data Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S33 | **Design an evaluation suite for an AI system** | System purpose and risks | Define test sets, metrics, thresholds, red-team cases and monitoring | Evaluation plan and test set | A11 AI Governance & Regulatory Advisor, A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S34 | **Run an AI risk and governance review** | An AI use case | Assign a risk tier, check data, bias, safety, human oversight and controls | Review record with approval conditions | A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A26 ML/LLM Engineering Lead |
| S35 | **Run a security and privacy review** | A system, vendor or project | Check access, data flows, encryption, retention, incident response | Findings and remediation list | A11 AI Governance & Regulatory Advisor, A28 Cloud, MLOps & Security Engineer, A31 Operations & Business Continuity Manager |
| S36 | **Estimate effort for a technical project** | Scope and architecture | Break into work items, estimate, add risk buffer | Effort estimate and team plan | A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A27 Data Engineering Lead, A29 Delivery & Engagement Manager |

### Operations & people

| ID | Skill | Input | Steps | Output | Used by |
|---|---|---|---|---|---|
| S37 | **Create a project plan and status report** | Goals, scope, team | Plan milestones, track progress, flag risks and decisions | Project plan and weekly status report | A01 Engagement Lead (Orchestrator), A29 Delivery & Engagement Manager, A31 Operations & Business Continuity Manager |
| S38 | **Write a business continuity plan** | Critical systems and people | Identify threats (grid, hurricane, internet), set backups and run a drill | Continuity plan and drill results | A12 Risk & Compliance Officer, A28 Cloud, MLOps & Security Engineer, A31 Operations & Business Continuity Manager |
| S39 | **Assess a risk** | A risk or decision | Rate likelihood and impact, define mitigation and owner | Risk register entry | A01 Engagement Lead (Orchestrator), A02 Business Strategist, A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S40 | **Synthesize expert input into a recommendation** | Several experts' answers | Find agreement, surface conflicts, weigh trade-offs | Decision memo with recommendation | A01 Engagement Lead (Orchestrator), A02 Business Strategist |
| S41 | **Write a job description and interview loop** | Role need | Define responsibilities, requirements, interview stages and scorecards | Job description and interview kit | A10 Employment Law Counsel, A26 ML/LLM Engineering Lead, A30 People & Talent Lead |
| S42 | **Build a relocation and Chapter 2 filing checklist** | Founder's situation and target dates | List residency steps, filing documents, deadlines and fees | Dated checklist | A05 Act 60 Incentives Specialist, A08 Residency & Relocation Advisor |

## Part 3: Skill coverage at a glance

Skills ranked by how many agents share them. Build the most-shared skills first.

| Skill | # agents |
|---|---|
| S01 Verify and cite a source | 31 |
| S06 Tag a client or SOW as EXPORT or LOCAL | 10 |
| S21 Write a proposal | 9 |
| S05 Brief a regulatory or legal change | 7 |
| S14 Map a regulation to controls | 7 |
| S23 Quantify an AI use case's ROI | 7 |
| S27 Localize content into Puerto Rico Spanish | 7 |
| S34 Run an AI risk and governance review | 7 |
| S12 Draft a contract or SOW from template | 6 |
| S20 Price an engagement | 6 |
| S39 Assess a risk | 6 |
| S04 Build an ideal client profile | 5 |
| S13 Build a compliance calendar | 5 |
| S19 Model tax by revenue mix | 5 |
| S22 Qualify a lead | 5 |
| S26 Write a thought-leadership piece | 5 |
| S02 Size a market bottom-up | 4 |
| S03 Profile a competitor | 4 |
| S07 Assess Act 60 decree eligibility | 4 |
| S08 Run a bona fide residency check | 4 |
| S09 Source income by work location | 4 |
| S10 Compare entity and tax structures | 4 |
| S11 Review a contract | 4 |
| S25 Write positioning and messaging | 4 |
| S29 Plan an event presence | 4 |
| S31 Run a data-readiness assessment | 4 |
| S32 Design an AI solution architecture | 4 |
| S33 Design an evaluation suite for an AI system | 4 |
| S36 Estimate effort for a technical project | 4 |
| S15 Check an HR action for Puerto Rico labor compliance | 3 |
| S16 Build an RFP or vendor-registration compliance matrix | 3 |
| S17 Build a break-even model | 3 |
| S18 Build a budget and cash runway forecast | 3 |
| S24 Benchmark compensation for a role | 3 |
| S30 Write a case study | 3 |
| S35 Run a security and privacy review | 3 |
| S37 Create a project plan and status report | 3 |
| S38 Write a business continuity plan | 3 |
| S41 Write a job description and interview loop | 3 |
| S28 Build a target-account list and outreach sequence | 2 |
| S40 Synthesize expert input into a recommendation | 2 |
| S42 Build a relocation and Chapter 2 filing checklist | 2 |

## Part 4: Suggested collaboration patterns

| Question type | Lead agent | Consults | Key skills |
|---|---|---|---|
| Is this client/SOW eligible for the 4% / 2% rate? | A05 Act 60 Incentives Specialist | A07, A09, A06, A12 | S06, S07 |
| How should we structure the entity and owner pay? | A06 U.S. Federal Tax Advisor | A05, A07, A13, A08 | S10, S19 |
| Should we pursue this deal? | A17 Export Sales Lead / A18 Local Sales & Community Lead | A14, A25, the relevant domain expert (A20–A24), A13 | S22, S06, S20 |
| Write a proposal | A29 Delivery & Engagement Manager | A25, A14, A09, the relevant domain expert | S21, S20, S12, S36 |
| Bid on a government RFP | A23 Public Sector & Procurement Expert | A09, A11, A25, A13 | S16, S21, S14 |
| Hire a senior AI engineer | A30 People & Talent Lead | A10, A05 (difficult-to-hire incentive), A13 | S41, S24, S15 |
| Annual compliance cycle | A12 Risk & Compliance Officer | A07, A05, A08, A10, A31 | S13, S08, S09 |
| Can we afford to hire / when do we break even? | A13 CFO / Financial Planner | A14, A02 | S17, S18 |
| Plan next year | A02 Business Strategist | A13, A03, A04, A15, A01 | S02, S18, S40 |
| A hurricane or grid outage is coming | A31 Operations & Business Continuity Manager | A28, A29, A01 | S38, S37 |

## Notes

- **Tax and legal agents advise; humans decide.** Every Act 60, federal tax and legal conclusion should be confirmed by a licensed Puerto Rico attorney or CPA before acting (see the open questions in [README.md](README.md)).
- **Time-sensitive:** A05 and A08 should run S42 now to check whether any founder needs to file a Chapter 2 application before **December 31, 2026** to keep the 0% rate.
- **Possible consolidation** for a smaller first build: merge A03 into A04, A08 into A06, A16 into A15, A27 into A26, and A21 and A22 into one Financial Services & Healthcare expert. That gives 26 agents; the skills do not change.
