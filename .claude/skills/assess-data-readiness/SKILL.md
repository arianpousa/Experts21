---
name: assess-data-readiness
description: "Score a client's data readiness for AI across availability, quality, access, governance, security and documentation, and propose remediation. Use in discovery and AI Readiness Assessments."
metadata:
  id: S31
  group: "Technical delivery"
---

# S31 · Run a data-readiness assessment

Used by: `ai-governance-regulatory-advisor`, `financial-services-expert`, `ai-solutions-architect`, `data-engineering-lead`

## Input

- Client data sources and systems
- Target use cases

## Steps

1. Inventory the data sources the use cases need.
2. Score 1-5: availability; quality; accessibility/integration; governance and ownership; security and data-leak prevention (the top barrier IDC found in Puerto Rico); documentation/metadata; history/volume; language (English/Spanish mix).
3. Judge fitness for each use case.
4. Write a remediation plan with effort and order.

## Output

| Dimension | Score | Evidence | Gap | Fix |
|---|---|---|---|---|

Readiness by use case · remediation plan.

## Checks

- Do not move client data outside approved systems.
- Base scores on evidence.
