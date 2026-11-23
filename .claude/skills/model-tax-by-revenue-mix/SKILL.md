---
name: model-tax-by-revenue-mix
description: "Compute the firm's Puerto Rico and federal tax for a given EXPORT/LOCAL profit mix, with and without the Act 60 decree. Use for budgets, pricing and strategy decisions."
metadata:
  id: S19
  group: "Finance & commercial"
---

# S19 · Model tax by revenue mix

Used by: `business-strategist`, `act60-incentives-specialist`, `us-federal-tax-advisor`, `pr-tax-accounting-specialist`, `cfo-financial-planner`

## Input

- Profit (or revenue and costs) split EXPORT vs LOCAL
- Decree status and rate
- Owners' residency

## Steps

1. Allocate expenses between decree and non-decree books (method from the CPA; default: in proportion to revenue, VERIFY).
2. EXPORT profit × decree rate (2% new SME for 5 years, else 4%).
3. LOCAL profit × regular corporate rates (18.5% normal tax + graduated surtax up to 37.5%; check AMT). Mark the exact computation for the CPA.
4. Distributions of decree profit: 0% Puerto Rico tax. Federal: generally none for bona fide resident owners on Puerto Rico-source income; non-resident owners taxed under foreign-corporation rules.
5. Compare with the no-decree case. Report the effective rate.

## Output

| Case | EXPORT profit | LOCAL profit | PR tax | Federal (owners) | Total | Effective rate |
|---|---|---|---|---|---|---|

## Checks

- Not tax advice; the CPA confirms.
- On-site mainland work is U.S.-source: exclude it from the Puerto Rico-source total.
