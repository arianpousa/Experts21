# Expert Roster: Advisors for the Puerto Rico AI Consulting Firm

> **Date:** November 23, 2026. Built from the research in this folder (see [README.md](README.md)). Each role below is meant to become an agent. Each agent's "Docs" column lists the research files it should load as context (by number, e.g. `09` = [09-act-60-and-tax-benefits.md](09-act-60-and-tax-benefits.md)).

## How to read this

- **31 expert agents** in 8 groups, each with a one-line job description and the skills it uses.
- **38 skills**, defined once and shared. The skills section lists which agents use each one.
- IDs (`A01`, `S01`) are stable, so agent configs and skill files can reference them.
- The **Engagement Lead (A01)** is the consultant's single point of contact and routes questions to the others.

## Part 1: Expert agents

### Leadership & strategy

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A01 | **Engagement Lead (Orchestrator)** | Frames the consultant's questions, routes them to the right experts, resolves conflicts between their advice, and consolidates one recommendation. | README | S01, S02, S16, S24, S35, S38 |
| A02 | **Business Strategist** | Designs the business model (export-led core + local beachhead), phase plan and go/no-go criteria, and stress-tests the strategy against a no-decree scenario. | 01, 02, 08 | S01, S09, S10, S16, S18, S19, S28, S38 |
| A03 | **Market Research Analyst** | Sizes the local and export markets bottom-up and keeps AI-adoption and economic data (Census, IDC, Microsoft, InvestPR) current. | 01, 02 | S01, S09, S18, S19, S20 |
| A04 | **Competitive Intelligence Analyst** | Tracks local AI firms, Big 4 practices and mainland/nearshore rivals, and identifies the positioning gaps the firm can own. | 03 | S01, S19, S21 |

### Tax & incentives

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A05 | **Act 60 Incentives Specialist** | Determines decree eligibility, prepares and maintains the Chapter 3 (and founders' Chapter 2) decrees, and finds other Act 60 incentives that apply. | 09 | S01, S03, S04, S05, S06, S17 |
| A06 | **U.S. Federal Tax Advisor** | Ensures the structure delivers the federal result (IRC 933/937, corporate classification, no SE-tax trap, U.S.-source on-site work, FBAR/FATCA). | 09, 08 | S01, S03, S05, S06, S17 |
| A07 | **Puerto Rico Tax & Accounting Specialist (CPA)** | Runs Puerto Rico returns, IVU, municipal license tax, CRIM, segregated EXPORT/LOCAL books, the decree annual report and CPA certifications. | 04, 05, 09 | S01, S03, S04, S06, S07, S08, S17 |
| A08 | **Residency & Relocation Advisor** | Helps founders establish and document bona fide Puerto Rico residency, meet the Chapter 2 filing and home-purchase rules, and plan the move. | 09, 08 | S01, S03, S05 |

### Legal & compliance

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A09 | **Corporate & Commercial Attorney** | Forms the entity, handles registrations, and drafts MSAs/SOWs with nexus and work-location language, IP terms and liability caps. | 05, 09 | S01, S03, S04, S08, S11, S12, S26 |
| A10 | **Employment Law Counsel** | Keeps hiring, handbooks, pay, leave, Christmas bonus, Act 80 terminations, CFSE coverage and contractor use compliant with Puerto Rico labor law. | 06 | S01, S02, S08, S12, S13, S17 |
| A11 | **AI Governance & Regulatory Advisor** | Maps client and firm obligations under SB 68, HIPAA, GLBA/OCIF, FDA Part 11/GxP and SOC 2, and shapes the AI Governance offer. | 05, 08 | S01, S12, S14, S15, S16, S17, S31, S34 |
| A12 | **Risk & Compliance Officer** | Owns the risk register and compliance calendar, and keeps the firm audit-ready (decree conditions, sourcing, residency evidence, labor rules). | 08, 09 | S01, S03, S04, S05, S07, S13, S14, S16, S17, S37 |

### Finance

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A13 | **CFO / Financial Planner** | Builds the budget, runway, cash-flow and capital plan, models tax by EXPORT/LOCAL mix, and tracks the $3M volume threshold. | 04, 09 | S01, S03, S04, S06, S07, S09, S10, S16, S26, S36 |
| A14 | **Pricing & Offer Designer** | Sets rates and designs productized offers and packages with target margins for export versus local clients. | 04, 07 | S01, S04, S09, S10, S11, S28 |

### Sales, marketing & partnerships

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A15 | **Marketing & Brand Strategist** | Owns positioning, the bilingual brand, channel mix and the year-1 marketing plan for both the local and export motions. | 07, 03 | S01, S02, S18, S19, S20, S21, S22 |
| A16 | **Content & Thought Leadership Writer** | Produces native-quality English and Puerto Rico Spanish articles, case studies, reports, op-eds and talks. | 07 | S01, S02, S21, S22 |
| A17 | **Export Sales Lead** | Builds and closes the mainland U.S. and LatAm pipeline through account-based outbound, qualifying every deal as EXPORT. | 02, 07 | S01, S02, S04, S10, S11, S20, S21, S23, S25 |
| A18 | **Local Sales & Community Lead** | Sells to Puerto Rico enterprises and SMEs through relationships, associations and events (Caribbean AI Summit, Cámara de Comercio). | 02, 07 | S01, S02, S04, S10, S11, S20, S21, S24 |
| A19 | **Partnerships & Alliances Manager** | Builds co-sell and subcontracting relationships with Microsoft and other hyperscalers, data platforms and Big 4/IT incumbents. | 03, 07 | S01, S12, S19, S23, S24, S25 |

### Industry domain experts

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A20 | **Life Sciences & GxP Expert** | Advises on pharma and medical-device AI use cases, validation and GxP, and on which life-sciences work qualifies as EXPORT. | 01, 02 | S01, S04, S11, S14, S15, S22, S27, S28 |
| A21 | **Financial Services Expert** | Advises on banks, cooperatives and insurers: use cases, model risk management and OCIF/GLBA expectations. | 02 | S01, S11, S14, S15, S22, S27, S28, S32 |
| A22 | **Healthcare Expert** | Advises on hospitals and health plans (Medicare Advantage/Medicaid): bilingual patient and member AI, and HIPAA-compliant delivery. | 02 | S01, S02, S11, S14, S15, S22, S27, S28 |
| A23 | **Public Sector & Procurement Expert** | Guides government sales: agency needs, PRITS, RUL/RPT and SAM.gov registration, RFP responses and payment risk. | 02, 05 | S01, S02, S11, S14, S15, S17, S24, S26, S27 |
| A24 | **SME Market Specialist** | Designs and validates low-ticket, bilingual offers (WhatsApp, voice, Copilot rollouts) for Puerto Rico small businesses. | 01, 02, 07 | S01, S02, S10, S18, S20, S24, S27, S28 |

### Technical

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A25 | **AI Solutions Architect** | Turns client problems into vendor-agnostic AI solution designs, estimates and technical proposals. | 02, 07 | S01, S11, S15, S25, S28, S29, S30, S32 |
| A26 | **ML/LLM Engineering Lead** | Leads delivery of RAG, agents and model integrations with evaluations and guardrails, and builds reusable accelerators (licensable IP). | 07, 08 | S01, S15, S29, S30, S31, S33 |
| A27 | **Data Engineering Lead** | Runs data-readiness assessments and builds the data pipelines and platforms that AI use cases depend on. | 01, 03 | S01, S29, S32, S33 |
| A28 | **Cloud, MLOps & Security Engineer** | Owns cloud infrastructure, deployment, monitoring, security controls and data privacy, and the path to SOC 2. | 05, 08 | S01, S14, S29, S31, S33, S34, S37 |

### Operations & people

| ID | Role | Job description | Docs | Skills |
|---|---|---|---|---|
| A29 | **Delivery & Engagement Manager** | Runs engagements on scope, schedule and quality, delivered remotely from Puerto Rico, with SOW tax tags and work-location logs kept current. | 02, 09 | S01, S02, S04, S05, S11, S35 |
| A30 | **People & Talent Lead** | Recruits and retains AI talent (UPRM, diaspora, difficult-to-hire incentive), benchmarks pay, and plans the team build. | 06 | S01, S02, S05, S13, S24, S36 |
| A31 | **Operations & Business Continuity Manager** | Runs office, IT, vendors and admin, and plans for power, internet and hurricane disruption. | 04, 05, 08 | S01, S07, S08, S34, S35, S37 |

## Part 2: Skills

Each skill is defined once. "Used by" lists every agent that needs it, so a skill can be built once and attached to all of them.

### Cross-cutting

| ID | Skill | What it covers | Used by |
|---|---|---|---|
| S01 | **Research & source verification** | Find, cite and date sources; separate sourced facts from *(est.)* and "verify" items; keep docs current. | **All agents** |
| S02 | **Bilingual EN/ES communication** | Native-quality English and Puerto Rico Spanish for clients, staff, government and content. | A01 Engagement Lead (Orchestrator), A10 Employment Law Counsel, A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A24 SME Market Specialist, A29 Delivery & Engagement Manager, A30 People & Talent Lead |
| S38 | **Orchestration & synthesis** | Combine input from many experts, surface disagreements and produce one decision-ready recommendation. | A01 Engagement Lead (Orchestrator), A02 Business Strategist |
| S16 | **Risk assessment** | Identify, rate and mitigate risks; maintain the risk register (doc 08). | A01 Engagement Lead (Orchestrator), A02 Business Strategist, A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A13 CFO / Financial Planner |
| S17 | **Regulatory & policy change monitoring** | Watch for changes to Act 60, Puerto Rico tax, labor and AI law, and to federal enforcement (GAO, IRS, Senate). | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A10 Employment Law Counsel, A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A23 Public Sector & Procurement Expert |

### Tax, legal & compliance

| ID | Skill | What it covers | Used by |
|---|---|---|---|
| S03 | **Act 60 rules & decree compliance** | Chapter 3/Chapter 2 benefits, eligibility, base period, $3M employee rule, annual reports and fees. | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A08 Residency & Relocation Advisor, A09 Corporate & Commercial Attorney, A12 Risk & Compliance Officer, A13 CFO / Financial Planner |
| S04 | **EXPORT/LOCAL nexus tagging** | Apply the no-Puerto-Rico-nexus rule to every client, SOW and revenue line, and document the rationale. | A05 Act 60 Incentives Specialist, A07 Puerto Rico Tax & Accounting Specialist (CPA), A09 Corporate & Commercial Attorney, A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A20 Life Sciences & GxP Expert, A29 Delivery & Engagement Manager |
| S05 | **Income sourcing & bona fide residency** | Apply IRC 937 presence, tax-home and closer-connection tests; track where work is performed; keep evidence. | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A08 Residency & Relocation Advisor, A12 Risk & Compliance Officer, A29 Delivery & Engagement Manager, A30 People & Talent Lead |
| S06 | **Entity structuring & tax modeling** | Choose entity and classification; model Puerto Rico plus federal tax (933, SE tax, foreign-corporation rules). | A05 Act 60 Incentives Specialist, A06 U.S. Federal Tax Advisor, A07 Puerto Rico Tax & Accounting Specialist (CPA), A13 CFO / Financial Planner |
| S07 | **Puerto Rico tax compliance** | IVU, municipal license tax, CRIM, income tax returns, withholding, good-standing certificates. | A07 Puerto Rico Tax & Accounting Specialist (CPA), A12 Risk & Compliance Officer, A13 CFO / Financial Planner, A31 Operations & Business Continuity Manager |
| S08 | **Business registration & licensing** | Department of State, SURI, municipal registration, CRIM, Labor/CFSE and DDEC filings. | A07 Puerto Rico Tax & Accounting Specialist (CPA), A09 Corporate & Commercial Attorney, A10 Employment Law Counsel, A31 Operations & Business Continuity Manager |
| S12 | **Contract drafting & review** | MSAs, SOWs, NDAs, partner and subcontract agreements, IP and liability terms. | A09 Corporate & Commercial Attorney, A10 Employment Law Counsel, A11 AI Governance & Regulatory Advisor, A19 Partnerships & Alliances Manager |
| S13 | **Puerto Rico employment law** | Act 4-2017 rules, Christmas bonus, leave, Act 80 severance, probation, CFSE, payroll taxes. | A10 Employment Law Counsel, A12 Risk & Compliance Officer, A30 People & Talent Lead |
| S14 | **Regulatory compliance mapping** | HIPAA, GLBA/OCIF, FDA 21 CFR Part 11/GxP, SB 68, SOC 2: translate rules into controls. | A11 AI Governance & Regulatory Advisor, A12 Risk & Compliance Officer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A28 Cloud, MLOps & Security Engineer |
| S15 | **AI governance & responsible AI** | Policies, model inventories, risk tiers, review processes, auditable AI. | A11 AI Governance & Regulatory Advisor, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A25 AI Solutions Architect, A26 ML/LLM Engineering Lead |
| S26 | **Government procurement** | ASG RUL, PRITS RPT, SAM.gov/HUBZone, RFP compliance, public-sector payment terms. | A09 Corporate & Commercial Attorney, A13 CFO / Financial Planner, A23 Public Sector & Procurement Expert |

### Finance & commercial

| ID | Skill | What it covers | Used by |
|---|---|---|---|
| S09 | **Financial modeling & scenarios** | Budgets, runway, P&L by tax tag, decree vs no-decree scenarios, market sizing math. | A02 Business Strategist, A03 Market Research Analyst, A13 CFO / Financial Planner, A14 Pricing & Offer Designer |
| S10 | **Pricing & packaging** | Rate cards, fixed-fee and retainer design, margin targets by segment. | A02 Business Strategist, A13 CFO / Financial Planner, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A24 SME Market Specialist |
| S11 | **Proposal & SOW writing** | Scope, deliverables, assumptions, pricing, nexus and work-location clauses. | A09 Corporate & Commercial Attorney, A14 Pricing & Offer Designer, A17 Export Sales Lead, A18 Local Sales & Community Lead, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A25 AI Solutions Architect, A29 Delivery & Engagement Manager |
| S28 | **AI use-case discovery & ROI** | Find, prioritize and quantify the business value of AI use cases. | A02 Business Strategist, A14 Pricing & Offer Designer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A24 SME Market Specialist, A25 AI Solutions Architect |
| S36 | **Recruiting & compensation benchmarking** | Salary data, offer design, burden costs, incentive-enhanced packages. | A13 CFO / Financial Planner, A30 People & Talent Lead |

### Market, sales & marketing

| ID | Skill | What it covers | Used by |
|---|---|---|---|
| S18 | **Market sizing & demand analysis** | Bottom-up sizing; reading adoption surveys and economic data. | A02 Business Strategist, A03 Market Research Analyst, A15 Marketing & Brand Strategist, A24 SME Market Specialist |
| S19 | **Competitive analysis** | Map competitors' offers, pricing, clients and gaps; maintain doc 03. | A02 Business Strategist, A03 Market Research Analyst, A04 Competitive Intelligence Analyst, A15 Marketing & Brand Strategist, A19 Partnerships & Alliances Manager |
| S20 | **Customer segmentation & qualification** | Segments, personas, ideal-client profiles and qualification criteria. | A03 Market Research Analyst, A15 Marketing & Brand Strategist, A17 Export Sales Lead, A18 Local Sales & Community Lead, A24 SME Market Specialist |
| S21 | **Brand positioning & messaging** | Value propositions for each audience; consistent narrative. | A04 Competitive Intelligence Analyst, A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A17 Export Sales Lead, A18 Local Sales & Community Lead |
| S22 | **Content & thought leadership** | Articles, case studies, reports, talks and webinars. | A15 Marketing & Brand Strategist, A16 Content & Thought Leadership Writer, A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert |
| S23 | **Account-based outbound & pipeline management** | Target account lists, sequences, CRM hygiene, forecasting. | A17 Export Sales Lead, A19 Partnerships & Alliances Manager |
| S24 | **Relationship selling, networking & events** | Associations, conferences, community, referrals, public speaking. | A01 Engagement Lead (Orchestrator), A18 Local Sales & Community Lead, A19 Partnerships & Alliances Manager, A23 Public Sector & Procurement Expert, A24 SME Market Specialist, A30 People & Talent Lead |
| S25 | **Partner ecosystem management** | Hyperscaler and data-platform partner programs, co-sell, subcontracting with primes. | A17 Export Sales Lead, A19 Partnerships & Alliances Manager, A25 AI Solutions Architect |
| S27 | **Industry domain knowledge** | Vertical workflows, KPIs, regulations and buyer politics (life sciences, finance, healthcare, government, SMEs). | A20 Life Sciences & GxP Expert, A21 Financial Services Expert, A22 Healthcare Expert, A23 Public Sector & Procurement Expert, A24 SME Market Specialist |

### Technical delivery

| ID | Skill | What it covers | Used by |
|---|---|---|---|
| S29 | **AI solution architecture** | Reference architectures, build-vs-buy, vendor-agnostic designs, estimates. | A25 AI Solutions Architect, A26 ML/LLM Engineering Lead, A27 Data Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S30 | **LLM, RAG & agent engineering** | Prompting, retrieval, tool-using agents, integrations, bilingual NLP. | A25 AI Solutions Architect, A26 ML/LLM Engineering Lead |
| S31 | **Model evaluation & guardrails** | Eval suites, hallucination and safety testing, monitoring, red-teaming. | A11 AI Governance & Regulatory Advisor, A26 ML/LLM Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S32 | **Data readiness & data engineering** | Data audits, pipelines, quality, platforms (lakehouse, warehouse). | A21 Financial Services Expert, A25 AI Solutions Architect, A27 Data Engineering Lead |
| S33 | **Cloud, MLOps & platform engineering** | Deployment, CI/CD, observability, cost control on Azure/AWS/GCP. | A26 ML/LLM Engineering Lead, A27 Data Engineering Lead, A28 Cloud, MLOps & Security Engineer |
| S34 | **Cybersecurity & data privacy** | Security controls, access, data-leak prevention, privacy, incident response. | A11 AI Governance & Regulatory Advisor, A28 Cloud, MLOps & Security Engineer, A31 Operations & Business Continuity Manager |

### Operations

| ID | Skill | What it covers | Used by |
|---|---|---|---|
| S35 | **Project & delivery management** | Planning, status, scope control, quality, client communication. | A01 Engagement Lead (Orchestrator), A29 Delivery & Engagement Manager, A31 Operations & Business Continuity Manager |
| S37 | **Business continuity & resilience** | Power, internet, hurricane and disaster plans; remote-capable operations. | A12 Risk & Compliance Officer, A28 Cloud, MLOps & Security Engineer, A31 Operations & Business Continuity Manager |

## Part 3: Skill coverage at a glance

Skills ranked by how many agents share them. Build the most-shared skills first.

| Skill | # agents |
|---|---|
| S01 Research & source verification | 31 |
| S02 Bilingual EN/ES communication | 11 |
| S04 EXPORT/LOCAL nexus tagging | 10 |
| S11 Proposal & SOW writing | 10 |
| S03 Act 60 rules & decree compliance | 7 |
| S14 Regulatory compliance mapping | 7 |
| S15 AI governance & responsible AI | 7 |
| S17 Regulatory & policy change monitoring | 7 |
| S28 AI use-case discovery & ROI | 7 |
| S05 Income sourcing & bona fide residency | 6 |
| S10 Pricing & packaging | 6 |
| S24 Relationship selling, networking & events | 6 |
| S16 Risk assessment | 5 |
| S19 Competitive analysis | 5 |
| S20 Customer segmentation & qualification | 5 |
| S21 Brand positioning & messaging | 5 |
| S22 Content & thought leadership | 5 |
| S27 Industry domain knowledge | 5 |
| S06 Entity structuring & tax modeling | 4 |
| S07 Puerto Rico tax compliance | 4 |
| S08 Business registration & licensing | 4 |
| S09 Financial modeling & scenarios | 4 |
| S12 Contract drafting & review | 4 |
| S18 Market sizing & demand analysis | 4 |
| S29 AI solution architecture | 4 |
| S13 Puerto Rico employment law | 3 |
| S25 Partner ecosystem management | 3 |
| S26 Government procurement | 3 |
| S31 Model evaluation & guardrails | 3 |
| S32 Data readiness & data engineering | 3 |
| S33 Cloud, MLOps & platform engineering | 3 |
| S34 Cybersecurity & data privacy | 3 |
| S35 Project & delivery management | 3 |
| S37 Business continuity & resilience | 3 |
| S23 Account-based outbound & pipeline management | 2 |
| S30 LLM, RAG & agent engineering | 2 |
| S36 Recruiting & compensation benchmarking | 2 |
| S38 Orchestration & synthesis | 2 |

## Part 4: Suggested collaboration patterns

| Question type | Lead agent | Consults |
|---|---|---|
| Is this client/SOW eligible for the 4% / 2% rate? | A05 Act 60 Incentives Specialist | A07, A09, A06, A12 |
| How should we structure the entity and owner pay? | A06 U.S. Federal Tax Advisor | A05, A07, A13, A08 |
| Should we pursue this deal? | A17 Export Sales Lead / A18 Local Sales & Community Lead | A14, A25, the relevant domain expert (A20–A24), A13 |
| Write a proposal | A29 Delivery & Engagement Manager | A25, A14, A09, the relevant domain expert |
| Bid on a government RFP | A23 Public Sector & Procurement Expert | A09, A11, A25, A13 |
| Hire a senior AI engineer | A30 People & Talent Lead | A10, A05 (difficult-to-hire incentive), A13 |
| Annual compliance cycle | A12 Risk & Compliance Officer | A07, A05, A08, A10, A31 |
| Plan next year | A02 Business Strategist | A13, A03, A04, A15, A01 |
| A hurricane or grid outage is coming | A31 Operations & Business Continuity Manager | A28, A29, A01 |

## Notes

- **Tax and legal agents advise; humans decide.** Every Act 60, federal tax and legal conclusion should be confirmed by a licensed Puerto Rico attorney or CPA before acting (see the open questions in [README.md](README.md)).
- **Time-sensitive:** A05 and A08 should check whether any founder needs to file a Chapter 2 application before **December 31, 2026** to keep the 0% rate.
- **Possible consolidation** for a smaller first build: merge A03 into A04, A08 into A06, A16 into A15, A27 into A26, and A21 and A22 into one Financial Services & Healthcare expert. That gives 26 agents.