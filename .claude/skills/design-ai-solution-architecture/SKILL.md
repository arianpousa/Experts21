---
name: design-ai-solution-architecture
description: "Design a vendor-agnostic AI solution (RAG, agents, ML, integrations) for a use case, with options, security and cost. Use for proposals, discovery and delivery kickoff."
metadata:
  id: S32
  group: "Technical delivery"
---

# S32 · Design an AI solution architecture

Used by: `ai-solutions-architect`, `ml-llm-engineering-lead`, `data-engineering-lead`, `cloud-mlops-security-engineer`

## Input

- Use case and requirements
- Constraints (compliance, hosting, budget, languages)

## Steps

1. Requirements: functional; non-functional (latency, scale, availability, English/Spanish, data residency, compliance: HIPAA, GLBA, Part 11).
2. Options: buy (SaaS/Copilot), configure, or build. Compare.
3. Components: data sources and ingestion, retrieval/index, models, orchestration/agents, guardrails, evaluation, monitoring, UI/integrations.
4. Hosting in the client's cloud where possible; security and access design.
5. Run-cost estimate (LLM/API tokens, infra) and main risks.
6. Draw a diagram (Mermaid or text).

## Output

Architecture document: context · requirements · options compared · chosen design + diagram · security · evaluation plan link · cost · risks.

## Checks

- Vendor-agnostic unless the client has standardized.
- Outage-tolerant design (Puerto Rico grid).
