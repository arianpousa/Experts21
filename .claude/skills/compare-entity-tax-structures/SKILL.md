---
name: compare-entity-tax-structures
description: "Compare entity and owner-pay structures by total Puerto Rico + federal tax, including the self-employment-tax trap. Use when forming the entity, adding owners, or changing salary vs distributions."
metadata:
  id: S10
  group: "Tax, legal & compliance"
---

# S10 · Compare entity and tax structures

Used by: `act60-incentives-specialist`, `us-federal-tax-advisor`, `pr-tax-accounting-specialist`, `cfo-financial-planner`

## Input

- Structure options
- Expected profit (EXPORT and LOCAL)
- Owners' residency status
- Planned owner salary

## Steps

1. Options usually include: Puerto Rico LLC taxed as a corporation (default), Puerto Rico corporation, Puerto Rico LLC with pass-through election, mainland entity plus Puerto Rico entity.
2. Puerto Rico tax: decree rate on EXPORT profit; regular corporate rates (18.5% normal tax + surtax, up to 37.5%; AMT) on LOCAL profit; decree distributions exempt.
3. Federal tax: bona fide resident + Puerto Rico corporation + work on island → generally excluded under IRC 933. Non-resident U.S. owners → generally taxed currently under foreign-corporation (CFC) rules.
4. Self-employment tax for pass-through: 92.35% of profit × 12.4% up to the Social Security wage base ($184,500 in 2026) + 2.9% Medicare + 0.9% above $200,000 (single).
5. Salary: taxed at regular Puerto Rico rates plus FICA; distributions of decree profit are not.
6. Check your math against the worked example in `docs/09` §2.5 ($300k profit: $12,000 as a corporation vs $43,605 pass-through). Use Bash/Python.

## Output

| Structure | PR tax | Federal income tax | SE/FICA | Total | Notes |
|---|---|---|---|---|---|

Recommendation and assumptions below.

## Checks

- Not tax advice: confirm with a licensed CPA or tax attorney.
- Show every rate used and its source.
