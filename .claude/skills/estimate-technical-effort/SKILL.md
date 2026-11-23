---
name: estimate-technical-effort
description: "Estimate the effort, team and timeline for a technical project using a work breakdown and three-point estimates. Use for pricing, proposals and planning."
metadata:
  id: S36
  group: "Technical delivery"
---

# S36 · Estimate effort for a technical project

Used by: `ai-solutions-architect`, `ml-llm-engineering-lead`, `data-engineering-lead`, `delivery-engagement-manager`

## Input

- Scope
- Architecture

## Steps

1. Break the work into items (discovery, data, build, evaluation, integration, deployment, change management).
2. Three-point estimate per item: optimistic, likely, pessimistic; PERT = (O + 4L + P) ÷ 6.
3. Assign roles; add a 15-25% risk buffer for unknowns (client data access is the usual one).
4. Lay out the timeline with dependencies.

## Output

| Item | Role | O | L | P | PERT hours |
|---|---|---|---|---|---|

Total, buffer, team, timeline, dependencies.

## Checks

- State assumptions that would change the estimate.
- Hand the result to `price-engagement`.
