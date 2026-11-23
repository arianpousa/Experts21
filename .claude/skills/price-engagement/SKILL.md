---
name: price-engagement
description: "Price an engagement (time and materials, fixed fee or retainer) from scope and effort, with margin by tax tag. Use for every proposal and renewal."
metadata:
  id: S20
  group: "Finance & commercial"
---

# S20 · Price an engagement

Used by: `cfo-financial-planner`, `pricing-offer-designer`, `export-sales-lead`, `local-sales-community-lead`, `ai-solutions-architect`, `delivery-engagement-manager`

## Input

- Scope
- Effort estimate by role (from `estimate-technical-effort`)
- Rate card
- Tax tag
- Margin target

## Steps

1. Loaded cost per hour per role = (salary × (1 + burden)) ÷ (1,800 × utilization).
2. Cost = hours × loaded cost + pass-through costs (LLM/API, cloud, travel).
3. Price options: T&M at rate card; fixed fee = cost ÷ (1 − margin) + 15-25% risk buffer; retainer for managed services.
4. Check against market rates (planning ranges in `docs/04`: ~$175-275/h export, ~$100-175/h local, est.) and competitor pricing.
5. Show gross margin and after-tax margin given the tag.

## Output

| Option | Price | Cost | Gross margin | After-tax margin | Notes |
|---|---|---|---|---|---|

Recommended option and why.

## Checks

- Mark rate assumptions (est.).
- Price on-site days separately.
