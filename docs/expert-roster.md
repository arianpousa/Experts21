# Expert Roster: Advisors for the Puerto Rico AI Consulting Firm

> **Updated:** November 23, 2026. Built from the research in this folder (see [README.md](README.md)). Every role below is implemented as a Claude Code subagent in `.claude/agents/`, and every skill as a project skill in `.claude/skills/` (see Part 5). The "Docs" column lists the research files each agent reads (by number, e.g. `09` = [09-act-60-and-tax-benefits.md](09-act-60-and-tax-benefits.md)).

## How to read this

- **33 agents**: 31 experts in 8 groups, plus an **orchestrator** (A32) that convenes the experts and a **meta agent** (A33) that builds and improves the team.
- **46 skills.** A skill is a **reusable method**: it takes an input, follows steps and produces an output (for example, *Review a contract* or *Build a break-even model*). Each skill is written once and shared by every agent listed under "Used by".
- **Knowledge is not a skill.** Subject expertise (Act 60, Puerto Rico labor law, HIPAA, Spanish) belongs in the agent's prompt and docs. The same skill gives different results in different experts' hands.
- IDs (`A01`, `S01`) are stable; agent and skill files carry them.
- Ask the **orchestrator** any question that spans domains; ask a single expert directly when you know whom you need.

## Part 1: Agents

### Coordination & meta

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A32 | **Orchestrator** | Takes any question about the firm, decides which experts to bring in, has them work together (parallel briefs, then cross-review), and returns one combined answer. | The whole team, its skills and the collaboration patterns in the roster | README, ROSTER | S01, S40, S43 |
| A33 | **Meta Agent (Team Architect)** | Creates new agents and skills, improves existing ones, and keeps the team's wiring, roster and CLAUDE.md consistent. | Claude Code subagent and skill file formats; this team's conventions and roster | ROSTER | S01, S44, S45, S46 |

### Leadership & strategy

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A01 | **Engagement Lead** | Runs the engagement for the consultant: the plan, decision log, status reports and executive briefings. Hands multi-expert questions to the orchestrator. | Whole research set at summary level; the roster itself | README, ROSTER, 08 | S01, S37, S39, S40 |
| A02 | **Business Strategist** | Designs the business model (export-led core plus local beachhead), phase plan and go/no-go criteria, and stress-tests the strategy against a no-decree scenario. | Consulting business models; Puerto Rico economy | README, 01, 02, 08, 09 | S01, S02, S17, S18, S19, S22, S23, S39, S40 |
| A03 | **Market Research Analyst** | Sizes the local and export markets bottom-up and keeps AI-adoption and economic data (Census, IDC, Microsoft, InvestPR) current. | AI adoption surveys; Puerto Rico economic data sources | 01, 02 | S01, S02, S03, S04 |
| A04 | **Competitive Intelligence Analyst** | Tracks local AI firms, Big 4 practices and mainland/nearshore rivals, and identifies the positioning gaps the firm can own. | Puerto Rico and mainland AI services landscape | 03, 07 | S01, S03, S25 |

### Tax & incentives

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A05 | **Act 60 Incentives Specialist** | Determines decree eligibility, prepares and maintains the Chapter 3 (and founders' Chapter 2) decrees, and finds other Act 60 incentives that apply. | Act 60 Chapters 2 and 3; Acts 52-2022, 65-2025 and 38-2026; the DDEC process | 09, 02, 05 | S01, S05, S06, S07, S10, S19, S42 |
| A06 | **U.S. Federal Tax Advisor** | Ensures the structure delivers the federal result (IRC 933/937, corporate classification, no SE-tax trap, U.S.-source on-site work, FBAR/FATCA). | IRC 933, 937 and 1402; entity classification; foreign-corporation rules | 09, 08 | S01, S05, S07, S08, S09, S10, S19 |
| A07 | **Puerto Rico Tax & Accounting Specialist (CPA)** | Runs Puerto Rico returns, IVU, municipal license tax, CRIM, segregated EXPORT/LOCAL books, the decree annual report and CPA certifications. | Puerto Rico Internal Revenue Code, IVU, patente, CRIM, Form 480.30(II) | 04, 05, 09 | S01, S05, S06, S07, S09, S10, S13, S19 |
| A08 | **Residency & Relocation Advisor** | Helps founders establish and document bona fide Puerto Rico residency, meet the Chapter 2 filing and home-purchase rules, and plan the move. | Bona fide residency tests; Chapter 2 conditions; relocation logistics | 09, 08 | S01, S08, S42 |

### Legal & compliance

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A09 | **Corporate & Commercial Attorney** | Forms the entity, handles registrations, and drafts MSAs/SOWs with nexus and work-location language, IP terms and liability caps. | Puerto Rico corporate law; commercial contracts; IP | 05, 09 | S01, S06, S11, S12, S16 |
| A10 | **Employment Law Counsel** | Keeps hiring, handbooks, pay, leave, Christmas bonus, Act 80 terminations, CFSE coverage and contractor use compliant with Puerto Rico labor law. | Act 4-2017, Act 80, Act 148, Act 180, CFSE; Spanish-language HR documents | 06 | S01, S05, S11, S13, S15, S24, S27, S41 |
| A11 | **AI Governance & Regulatory Advisor** | Maps client and firm obligations under SB 68, HIPAA, GLBA/OCIF, FDA Part 11/GxP and SOC 2, and shapes the AI Governance offer. | AI regulation; HIPAA, GLBA/OCIF, FDA Part 11, SOC 2; responsible-AI frameworks | 05, 08, 02 | S01, S05, S11, S14, S31, S33, S34, S35, S39 |
| A12 | **Risk & Compliance Officer** | Owns the risk register and compliance calendar, and keeps the firm audit-ready (decree conditions, sourcing, residency evidence, labor rules). | All firm obligations; IRS and GAO scrutiny of Act 60 | 08, 09, 05, 06 | S01, S05, S06, S08, S09, S13, S14, S15, S34, S38, S39 |

### Finance

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A13 | **CFO / Financial Planner** | Builds the budget, runway, cash-flow and capital plan, models tax by EXPORT/LOCAL mix, and tracks the $3M volume threshold. | Firm cost structure; Act 60 rates and thresholds; payroll burden | 04, 09, 06 | S01, S06, S07, S10, S13, S16, S17, S18, S19, S20, S24, S39 |
| A14 | **Pricing & Offer Designer** | Sets rates and designs productized offers and packages with target margins for export versus local clients. | Consulting rate benchmarks; offer catalogue | 04, 07, 02 | S01, S06, S12, S17, S20, S21, S23 |

### Sales, marketing & partnerships

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A15 | **Marketing & Brand Strategist** | Owns positioning, the bilingual brand, channel mix and the year-1 marketing plan for both the local and export motions. | Puerto Rico and mainland B2B marketing channels; bilingual brand | 07, 03, 02, 01 | S01, S02, S03, S04, S25, S26, S27, S29, S30 |
| A16 | **Content & Thought Leadership Writer** | Produces native-quality English and Puerto Rico Spanish articles, case studies, reports, op-eds and talks. | Firm voice; Puerto Rico Spanish; AI topics | 07, 01 | S01, S26, S27, S30 |
| A17 | **Export Sales Lead** | Builds and closes the mainland U.S. and LatAm pipeline through account-based outbound, qualifying every deal as EXPORT. | Mainland mid-market buyers; nexus rule | 02, 07, 09 | S01, S04, S06, S12, S20, S21, S22, S25, S28 |
| A18 | **Local Sales & Community Lead** | Sells to Puerto Rico enterprises and SMEs through relationships, associations and events (Caribbean AI Summit, Cámara de Comercio). | Puerto Rico business community, associations and events; Spanish | 02, 07, 01 | S01, S04, S06, S12, S20, S21, S22, S25, S27, S29 |
| A19 | **Partnerships & Alliances Manager** | Builds co-sell and subcontracting relationships with Microsoft and other hyperscalers, data platforms and Big 4/IT incumbents. | Partner programs; local incumbents | 03, 07 | S01, S03, S11, S22, S28, S29 |

### Industry domain experts

| ID | Role | Job description | Knowledge | Docs | Skills |
|---|---|---|---|---|---|
| A20 | **Life Sciences & GxP Expert** | Advises on pharma and medical-device AI use cases, validation and GxP, and on which life-sciences work qualifies as EXPORT. | Pharma and med-device operations; GxP, FDA Part 11 | 01, 02, 09 | S01, S06, S14, S21, S23, S26, S34 |
| A21 | **Financial Services Expert** | Advises on banks, cooperatives and insurers: use cases, model risk management and OCIF/GLBA expectations. | Banking, cooperatives and insurance; model risk management | 02, 01 | S01, S14, S21, S23, S26, S31, S34 |
| A22 | **Healthcare Expert** | Advises on hospitals and health plans (Medicare Advantage/Medicaid): bilingual patient and member AI, and HIPAA-compliant delivery. | Puerto Rico hospitals and health plans; HIPAA | 02, 01 | S01, S14, S21, S23, S26, S27, S34 |
| A23 | **Public Sector & Procurement Expert** | Guides government sales: agency needs, PRITS, RUL/RPT and SAM.gov registration, RFP responses and payment risk. | Puerto Rico government, PRITS, ASG procurement; SB 68 | 02, 05, 08 | S01, S05, S14, S16, S21, S27, S34 |
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
| A30 | **People & Talent Lead** | Recruits and retains AI talent (UPRM, diaspora, difficult-to-hire incentive), benchmarks pay, and plans the team build. | Puerto Rico talent market; Act 60 staffing incentives | 06, 04 | S01, S08, S15, S24, S29, S41 |
| A31 | **Operations & Business Continuity Manager** | Runs office, IT, vendors and admin, and plans for power, internet and hurricane disruption. | Puerto Rico facilities, grid and hurricane risk; registrations | 04, 05, 08 | S01, S13, S18, S35, S37, S38, S39 |

## Part 2: Skills (reusable methods)

Each skill is defined by its input, steps and output (full steps in each `SKILL.md`). "Used by" lists every agent that preloads it.

### Research & analysis

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S01 | **Verify and cite a source** | Verify a fact, figure, rate, deadline or legal rule and cite it with a date and a confidence label. Use whenever a claim is stated, reused or added to docs/. | Table (see SKILL.md) | **All experts and coordination agents** |
| S02 | **Size a market bottom-up** | Build a bottom-up TAM/SAM/SOM for a segment of the Puerto Rico or export AI consulting market. Use for market sizing, segment prioritization or revenue targets. | Table (see SKILL.md) | A02 Business Strategist, A03 Market Research Analyst, A15 Marketing & Brand Strategist, A24 SME Market Specialist |
| S03 | **Profile a competitor** | Build a one-page profile of a competitor (local AI firm, Big 4 practice, mainland or nearshore rival) with the gaps the firm can exploit. Use for competitive analysis, positioning or win/loss reviews. | **[Name]**: base, size, founded | A03 Market Research Analyst, A04 Competitive Intelligence Analyst, A15 Marketing & Brand Strategist, A19 Partnerships & Alliances Manager |
| S04 | **Build an ideal client profile** | Define the ideal client profile and buyer personas for a segment, including its EXPORT/LOCAL tag and disqualifiers. Use before targeting, outreach or offer design. | **ICP: [segment]** (tag: EXPORT/LOCAL) | A03 Market Research Analyst, A15 Marketing & Brand Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead, A24 SME Market Specialist |
| S05 | **Brief a regulatory or legal change** | Summarize a new law, bill, ruling, regulation or guidance and turn it into actions for the firm. Use when Act 60, Puerto Rico tax, labor, AI (SB 68) or federal rules change. | **Change:** [name, number, date]  **Effective:** [date] | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A10 Employment Law Counsel, A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A23 Public Sector & Procurement Expert |

### Tax, legal & compliance

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S06 | **Tag a client or SOW as EXPORT or LOCAL** | Decide whether a client, deal or SOW is EXPORT (eligible for the Act 60 4%/2% rate) or LOCAL (regular rates) using the no-Puerto-Rico-nexus rule, and record the reason. Use for every new client, proposal, SOW or revenue line. | Table (see SKILL.md) | A05 Act 60 Incentives Specialist, A07 Puerto Rico Tax & Accounting Specialist (CPA), A09 Corporate & Commercial Attorney, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A20 Life Sciences & GxP Expert, A29 Delivery & Engagement Manager |
| S07 | **Assess Act 60 decree eligibility** | Assess whether the firm (or a new business line) qualifies for an Act 60 Chapter 3 export-services decree, at which rate, and under what conditions. Use before forming the entity, applying, or changing the business model. | **Eligibility memo** | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S08 | **Run a bona fide residency check** | Check whether a person meets the IRC 937 bona fide Puerto Rico residency tests (presence, tax home, closer connection) and list evidence gaps. Use for founders, relocating hires and annual compliance reviews. | Table (see SKILL.md) | A06 U.S. Federal Tax Advisor, A08 Residency & Relocation Advisor, A12 Risk & Compliance Officer, A30 People & Talent Lead |
| S09 | **Source income by work location** | Split an engagement's or a person's income into Puerto Rico-source and U.S.-source by where the work was performed. Use for every engagement with travel, and at year-end. | Table (see SKILL.md) | A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A12 Risk & Compliance Officer, A29 Delivery & Engagement Manager |
| S10 | **Compare entity and tax structures** | Compare entity and owner-pay structures by total Puerto Rico + federal tax, including the self-employment-tax trap. Use when forming the entity, adding owners, or changing salary vs distributions. | Table (see SKILL.md) | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S11 | **Review a contract** | Review a contract (MSA, SOW, NDA, partner, subcontract, employment or vendor agreement) against a clause checklist and produce a risk memo with redlines. Use before signing or sending any agreement. | Table (see SKILL.md) | A09 Corporate & Commercial Attorney, A10 Employment Law Counsel, A11 AI Governance & Regulatory Advisor, A19 Partnerships & Alliances Manager |
| S12 | **Draft a contract or SOW from template** | Draft an MSA, SOW or NDA from the firm's standard structure, including nexus and work-location language. Use when a deal is ready for paper. | Draft document with sections: Parties · Background · Services and deliverables · Work location · Timeline · Fees and payment · Client responsibilities · IP · Confidentiality and data · AI terms · Warranties and liability · Term and termination · Governing law · Signatures. | A09 Corporate & Commercial Attorney, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S13 | **Build a compliance calendar** | Build or update the dated calendar of the firm's tax, decree, entity, labor and registration obligations with owners. Use at formation, at the start of each year, and when rules change. | Table (see SKILL.md) | A07 Puerto Rico Tax & Accounting Specialist (CPA), A10 Employment Law Counsel, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S14 | **Map a regulation to controls** | Turn a regulation or standard (HIPAA, GLBA/OCIF, FDA 21 CFR Part 11/GxP, SB 68, SOC 2) into a checklist of testable controls with evidence. Use for client projects in regulated sectors and for the firm's own compliance. | Table (see SKILL.md) | A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A28 Cloud, MLOps & Security Engineer |
| S15 | **Check an HR action for Puerto Rico labor compliance** | Check a hire, offer, pay change, leave, bonus, contractor engagement or termination against Puerto Rico labor law. Use before acting on any HR decision. | **Result:** compliant / compliant with steps / not compliant | A10 Employment Law Counsel, A12 Risk & Compliance Officer, A30 People & Talent Lead |
| S16 | **Build an RFP or vendor-registration compliance matrix** | Turn an RFP or a registry (ASG RUL, PRITS RPT, SAM.gov) into a matrix of every requirement, the evidence and the owner. Use before deciding to bid and while preparing the response. | Table (see SKILL.md) | A09 Corporate & Commercial Attorney, A13 CFO / Financial Planner, A23 Public Sector & Procurement Expert |

### Finance & commercial

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S17 | **Build a break-even model** | Compute the revenue, billable hours and headcount at which the firm (or a service line) breaks even, with sensitivity. Use for hiring decisions, pricing, and launch planning. | Inputs table · Break-even result (hours, revenue, headcount, months to break-even) · Sensitivity table · Assumptions. | A02 Business Strategist, A13 CFO / Financial Planner, A14 Pricing & Offer Designer |
| S18 | **Build a budget and cash runway forecast** | Build a 12-24 month budget and cash forecast with runway and scenarios. Use for fundraising, hiring plans and monthly finance reviews. | Monthly table (revenue, costs by line, net, cash balance) · Runway by scenario · Key assumptions · Decisions needed. | A02 Business Strategist, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S19 | **Model tax by revenue mix** | Compute the firm's Puerto Rico and federal tax for a given EXPORT/LOCAL profit mix, with and without the Act 60 decree. Use for budgets, pricing and strategy decisions. | Table (see SKILL.md) | A02 Business Strategist, A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S20 | **Price an engagement** | Price an engagement (time and materials, fixed fee or retainer) from scope and effort, with margin by tax tag. Use for every proposal and renewal. | Table (see SKILL.md) | A13 CFO / Financial Planner, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S21 | **Write a proposal** | Write a client-ready proposal (English or Spanish) from the need, solution and price. Use when a qualified opportunity needs a written offer. | Proposal document with the sections above. | A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S22 | **Qualify a lead** | Score a lead or opportunity for fit, need, budget, authority, timing, tax tag and risk, and decide go/no-go. Use before investing time in a proposal. | Table (see SKILL.md) | A02 Business Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead, A19 Partnerships & Alliances Manager, A24 SME Market Specialist |
| S23 | **Quantify an AI use case's ROI** | Estimate the annual benefit, cost, payback and 3-year ROI of an AI use case. Use in discovery, assessments and proposals. | Table (see SKILL.md) | A02 Business Strategist, A14 Pricing & Offer Designer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A24 SME Market Specialist, A25 AI Solutions Architect |
| S24 | **Benchmark compensation for a role** | Produce a salary band and fully loaded cost for a role in Puerto Rico, including incentives. Use for hiring plans, offers and budgets. | Table (see SKILL.md) | A10 Employment Law Counsel, A13 CFO / Financial Planner, A30 People & Talent Lead |

### Marketing & sales

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S25 | **Write positioning and messaging** | Write the value proposition, differentiators, proof points and objection handling for one audience, in English and/or Puerto Rico Spanish. Use for new segments, offers, campaigns or competitive responses. | Positioning statement · Differentiators + proof · Objections and responses · CTA · Spanish version (if requested). | A04 Competitive Intelligence Analyst, A15 Marketing & Brand Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead |
| S26 | **Write a thought-leadership piece** | Write an article, op-ed, report, LinkedIn post or talk script with cited data. Use for content marketing, speaking and media. | Final draft with title, body, sources and suggested CTA. | A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert |
| S27 | **Localize content into Puerto Rico Spanish** | Adapt English content into native-quality Puerto Rico Spanish (not literal translation). Use for proposals, marketing, HR documents, government submissions and bilingual AI products. | Spanish text + a short glossary of choices made. | A10 Employment Law Counsel, A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A18 Local Sales & Community Lead, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A24 SME Market Specialist |
| S28 | **Build a target-account list and outreach sequence** | Build a target-account list and a multi-touch outreach sequence for an ICP. Use for export account-based selling and partner co-selling. | Account table (account, why it fits, tag, buyers, trigger) · Sequence (touch, day, channel, message) · CRM fields. | A17 Export Sales Lead, A19 Partnerships & Alliances Manager |
| S29 | **Plan an event presence** | Plan the firm's presence at an event (goals, format, budget, outreach, follow-up) and report results. Use for conferences, association meetings, meetups and recruiting fairs. | Event plan (goals, format, budget, target list, materials, staffing, follow-up) · post-event report. | A15 Marketing & Brand Strategist, A18 Local Sales & Community Lead, A19 Partnerships & Alliances Manager, A30 People & Talent Lead |
| S30 | **Write a case study** | Write a client case study (challenge, solution, results, quote) in English and Spanish. Use after an engagement delivers measurable results. | Case study (300-600 words) in English and Spanish, with approval status. | A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A29 Delivery & Engagement Manager |

### Technical delivery

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S31 | **Run a data-readiness assessment** | Score a client's data readiness for AI across availability, quality, access, governance, security and documentation, and propose remediation. Use in discovery and AI Readiness Assessments. | Table (see SKILL.md) | A11 AI Governance & Regulatory Advisor, A21 Financial Services Expert, A25 AI Solutions Architect, A27 Data Engineering Lead |
| S32 | **Design an AI solution architecture** | Design a vendor-agnostic AI solution (RAG, agents, ML, integrations) for a use case, with options, security and cost. Use for proposals, discovery and delivery kickoff. | Architecture document: context · requirements · options compared · chosen design + diagram · security · evaluation plan link · cost · risks. | A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A27 Data Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S33 | **Design an evaluation suite for an AI system** | Design the tests, metrics, thresholds and monitoring that decide whether an AI system is good enough to ship and stays that way. Use for every AI system before release. | Evaluation plan: criteria · test sets · metrics and thresholds · graders · release gate · monitoring. | A11 AI Governance & Regulatory Advisor, A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S34 | **Run an AI risk and governance review** | Review an AI use case for risk tier, data, bias, accuracy, oversight, transparency, security and regulation, and record approval conditions. Use before building and before go-live. | Review record: tier · findings · conditions · decision · reviewer · date. | A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A26 ML/LLM Engineering Lead |
| S35 | **Run a security and privacy review** | Review a system, vendor or project for security and privacy gaps and produce prioritized fixes. Use for new systems, new vendors (including LLM providers) and SOC 2 preparation. | Table (see SKILL.md) | A11 AI Governance & Regulatory Advisor, A28 Cloud, MLOps & Security Engineer, A31 Operations & Business Continuity Manager |
| S36 | **Estimate effort for a technical project** | Estimate the effort, team and timeline for a technical project using a work breakdown and three-point estimates. Use for pricing, proposals and planning. | Table (see SKILL.md) | A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A27 Data Engineering Lead, A29 Delivery & Engagement Manager |

### Operations & people

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S37 | **Create a project plan and status report** | Create a project or engagement plan, and weekly status reports with decisions and risks. Use at kickoff and every week after. | Plan document · weekly status (RAG, done, next, decisions, risks) · decision log. | A01 Engagement Lead, A29 Delivery & Engagement Manager, A31 Operations & Business Continuity Manager |
| S38 | **Write a business continuity plan** | Write or update the business continuity plan for power, internet, hurricane and key-person disruptions, and run a drill. Use before hurricane season (Jun 1) and after any incident. | Continuity plan · hurricane checklist · contact tree · drill results. | A12 Risk & Compliance Officer, A28 Cloud, MLOps & Security Engineer, A31 Operations & Business Continuity Manager |
| S39 | **Assess a risk** | Assess a risk or decision: cause, consequence, likelihood, impact, mitigation, owner and trigger, and add it to the risk register. Use whenever a new risk appears or a decision carries risk. | Table (see SKILL.md) | A01 Engagement Lead, A02 Business Strategist, A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S40 | **Synthesize expert input into a recommendation** | Combine several experts' answers into one decision-ready recommendation that shows agreements, conflicts and how they were resolved. Use whenever more than one expert has contributed. | **Bottom line** (2-3 sentences) | A01 Engagement Lead, A02 Business Strategist, A32 Orchestrator |
| S41 | **Write a job description and interview loop** | Write a job description and a structured interview loop with scorecards. Use when opening any role. | Job description (EN/ES) · interview plan · scorecards. | A10 Employment Law Counsel, A26 ML/LLM Engineering Lead, A30 People & Talent Lead |
| S42 | **Build a relocation and Chapter 2 filing checklist** | Build a dated checklist for a founder relocating to Puerto Rico, including the Chapter 2 individual-investor decision and filing. Use for each founder considering a move, urgently before Dec 31, 2026. | Table (see SKILL.md) | A05 Act 60 Incentives Specialist, A08 Residency & Relocation Advisor |

### Coordination & team building

| ID | Skill | What it does | Output | Used by |
|---|---|---|---|---|
| S43 | **Route a question to the right experts** | Decide which expert agents should answer a question, what each should be asked, and in which order. Use at the start of every multi-domain question. | Routing plan: experts chosen and why · order and dependencies · one brief per expert (question, context, what to deliver, format, docs to read). | A32 Orchestrator |
| S44 | **Create a subagent** | Create a new expert subagent in .claude/agents/ wired to its skills, and register it in the roster and CLAUDE.md. Use when the team lacks a role. | New agent file path · roster and CLAUDE.md changes · audit result. | A33 Meta Agent (Team Architect) |
| S45 | **Create a skill** | Create a new reusable method as a project skill in .claude/skills/<name>/SKILL.md and wire it to the agents that use it. Use when an agent needs a repeatable method that does not exist yet. | New skill path · agents wired · roster updated · audit result. | A33 Meta Agent (Team Architect) |
| S46 | **Audit the team configuration** | Check that every agent and skill file is valid and correctly wired (frontmatter, names, skill references, IDs, roster consistency). Use after any change to .claude/agents, .claude/skills or the roster. | Audit report: counts of agents and skills, errors, warnings, and what was fixed. | A33 Meta Agent (Team Architect) |

## Part 3: Skill coverage at a glance

| Skill | # agents |
|---|---|
| S01 Verify and cite a source | 33 |
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
| S40 Synthesize expert input into a recommendation | 3 |
| S41 Write a job description and interview loop | 3 |
| S28 Build a target-account list and outreach sequence | 2 |
| S42 Build a relocation and Chapter 2 filing checklist | 2 |
| S43 Route a question to the right experts | 1 |
| S44 Create a subagent | 1 |
| S45 Create a skill | 1 |
| S46 Audit the team configuration | 1 |

## Part 4: Collaboration patterns

The orchestrator uses these as starting points (also in the `route-question-to-experts` skill).

| Question type | Lead agent | Consults | Key skills |
|---|---|---|---|
| Is this client/SOW eligible for the 4% / 2% rate? | A05 Act 60 Incentives Specialist | A07, A09, A06, A12 | S06, S07 |
| How should we structure the entity and owner pay? | A06 U.S. Federal Tax Advisor | A05, A07, A13, A08 | S10, S19 |
| Should we pursue this deal? | A17 Export Sales Lead | A18, A14, A25, A13 | S22, S06, S20 |
| Write a proposal | A29 Delivery & Engagement Manager | A25, A14, A09 | S21, S20, S12, S36 |
| Bid on a government RFP | A23 Public Sector & Procurement Expert | A09, A11, A25, A13 | S16, S21, S14 |
| Hire a senior AI engineer | A30 People & Talent Lead | A10, A05, A13 | S41, S24, S15 |
| Annual compliance cycle | A12 Risk & Compliance Officer | A07, A05, A08, A10, A31 | S13, S08, S09 |
| Can we afford to hire / when do we break even? | A13 CFO / Financial Planner | A14, A02 | S17, S18 |
| Plan next year | A02 Business Strategist | A13, A03, A04, A15, A01 | S02, S18, S40 |
| A hurricane or grid outage is coming | A31 Operations & Business Continuity Manager | A28, A29, A01 | S38, S37 |
| Add a new expert or method to the team | A33 Meta Agent (Team Architect) | - | S44, S45, S46 |

## Part 5: Implementation map

| ID | Agent file | | ID | Skill file |
|---|---|---|---|---|
| A01 | `.claude/agents/engagement-lead.md` | | S01 | `.claude/skills/verify-and-cite-source/SKILL.md` |
| A02 | `.claude/agents/business-strategist.md` | | S02 | `.claude/skills/size-market-bottom-up/SKILL.md` |
| A03 | `.claude/agents/market-research-analyst.md` | | S03 | `.claude/skills/profile-competitor/SKILL.md` |
| A04 | `.claude/agents/competitive-intelligence-analyst.md` | | S04 | `.claude/skills/build-ideal-client-profile/SKILL.md` |
| A05 | `.claude/agents/act60-incentives-specialist.md` | | S05 | `.claude/skills/brief-regulatory-change/SKILL.md` |
| A06 | `.claude/agents/us-federal-tax-advisor.md` | | S06 | `.claude/skills/tag-export-or-local/SKILL.md` |
| A07 | `.claude/agents/pr-tax-accounting-specialist.md` | | S07 | `.claude/skills/assess-act60-eligibility/SKILL.md` |
| A08 | `.claude/agents/residency-relocation-advisor.md` | | S08 | `.claude/skills/check-bona-fide-residency/SKILL.md` |
| A09 | `.claude/agents/corporate-commercial-attorney.md` | | S09 | `.claude/skills/source-income-by-work-location/SKILL.md` |
| A10 | `.claude/agents/employment-law-counsel.md` | | S10 | `.claude/skills/compare-entity-tax-structures/SKILL.md` |
| A11 | `.claude/agents/ai-governance-regulatory-advisor.md` | | S11 | `.claude/skills/review-contract/SKILL.md` |
| A12 | `.claude/agents/risk-compliance-officer.md` | | S12 | `.claude/skills/draft-contract-or-sow/SKILL.md` |
| A13 | `.claude/agents/cfo-financial-planner.md` | | S13 | `.claude/skills/build-compliance-calendar/SKILL.md` |
| A14 | `.claude/agents/pricing-offer-designer.md` | | S14 | `.claude/skills/map-regulation-to-controls/SKILL.md` |
| A15 | `.claude/agents/marketing-brand-strategist.md` | | S15 | `.claude/skills/check-pr-labor-compliance/SKILL.md` |
| A16 | `.claude/agents/content-thought-leadership-writer.md` | | S16 | `.claude/skills/build-rfp-compliance-matrix/SKILL.md` |
| A17 | `.claude/agents/export-sales-lead.md` | | S17 | `.claude/skills/build-break-even-model/SKILL.md` |
| A18 | `.claude/agents/local-sales-community-lead.md` | | S18 | `.claude/skills/build-budget-and-runway/SKILL.md` |
| A19 | `.claude/agents/partnerships-alliances-manager.md` | | S19 | `.claude/skills/model-tax-by-revenue-mix/SKILL.md` |
| A20 | `.claude/agents/life-sciences-gxp-expert.md` | | S20 | `.claude/skills/price-engagement/SKILL.md` |
| A21 | `.claude/agents/financial-services-expert.md` | | S21 | `.claude/skills/write-proposal/SKILL.md` |
| A22 | `.claude/agents/healthcare-expert.md` | | S22 | `.claude/skills/qualify-lead/SKILL.md` |
| A23 | `.claude/agents/public-sector-procurement-expert.md` | | S23 | `.claude/skills/quantify-ai-use-case-roi/SKILL.md` |
| A24 | `.claude/agents/sme-market-specialist.md` | | S24 | `.claude/skills/benchmark-compensation/SKILL.md` |
| A25 | `.claude/agents/ai-solutions-architect.md` | | S25 | `.claude/skills/write-positioning-and-messaging/SKILL.md` |
| A26 | `.claude/agents/ml-llm-engineering-lead.md` | | S26 | `.claude/skills/write-thought-leadership/SKILL.md` |
| A27 | `.claude/agents/data-engineering-lead.md` | | S27 | `.claude/skills/localize-to-pr-spanish/SKILL.md` |
| A28 | `.claude/agents/cloud-mlops-security-engineer.md` | | S28 | `.claude/skills/build-target-account-outreach/SKILL.md` |
| A29 | `.claude/agents/delivery-engagement-manager.md` | | S29 | `.claude/skills/plan-event-presence/SKILL.md` |
| A30 | `.claude/agents/people-talent-lead.md` | | S30 | `.claude/skills/write-case-study/SKILL.md` |
| A31 | `.claude/agents/operations-continuity-manager.md` | | S31 | `.claude/skills/assess-data-readiness/SKILL.md` |
| A32 | `.claude/agents/orchestrator.md` | | S32 | `.claude/skills/design-ai-solution-architecture/SKILL.md` |
| A33 | `.claude/agents/meta-agent.md` | | S33 | `.claude/skills/design-ai-evaluation-suite/SKILL.md` |
|  |  | | S34 | `.claude/skills/run-ai-risk-review/SKILL.md` |
|  |  | | S35 | `.claude/skills/run-security-privacy-review/SKILL.md` |
|  |  | | S36 | `.claude/skills/estimate-technical-effort/SKILL.md` |
|  |  | | S37 | `.claude/skills/create-project-plan-and-status/SKILL.md` |
|  |  | | S38 | `.claude/skills/write-business-continuity-plan/SKILL.md` |
|  |  | | S39 | `.claude/skills/assess-risk/SKILL.md` |
|  |  | | S40 | `.claude/skills/synthesize-expert-recommendation/SKILL.md` |
|  |  | | S41 | `.claude/skills/write-job-description-and-interview-loop/SKILL.md` |
|  |  | | S42 | `.claude/skills/build-relocation-chapter2-checklist/SKILL.md` |
|  |  | | S43 | `.claude/skills/route-question-to-experts/SKILL.md` |
|  |  | | S44 | `.claude/skills/create-subagent/SKILL.md` |
|  |  | | S45 | `.claude/skills/create-skill/SKILL.md` |
|  |  | | S46 | `.claude/skills/audit-team-configuration/SKILL.md` |

## Notes

- **Tax and legal agents advise; humans decide.** Every Act 60, federal tax and legal conclusion should be confirmed by a licensed Puerto Rico attorney or CPA before acting (see the open questions in [README.md](README.md)).
- **Time-sensitive:** `act60-incentives-specialist` and `residency-relocation-advisor` should run `build-relocation-chapter2-checklist` now for any founder who may need to file a Chapter 2 application before **December 31, 2026**.
- **Changing the team:** ask the `meta-agent`. It follows `create-subagent` / `create-skill` and runs `audit-team-configuration`.
