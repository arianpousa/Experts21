---
name: source-income-by-work-location
description: "Split an engagement's or a person's income into Puerto Rico-source and U.S.-source by where the work was performed. Use for every engagement with travel, and at year-end."
metadata:
  id: S09
  group: "Tax, legal & compliance"
---

# S09 · Source income by work location

Used by: `us-federal-tax-advisor`, `pr-tax-accounting-specialist`, `risk-compliance-officer`, `delivery-engagement-manager`

## Input

- Timesheets
- Travel log (dates, locations)
- Revenue/profit per engagement

## Steps

1. For each person and engagement, total hours by location: Puerto Rico, U.S. mainland, foreign.
2. Treat services performed in Puerto Rico as Puerto Rico-source and services performed in the U.S. as U.S.-source.
3. Allocate revenue and profit by hours unless the tax advisor sets another method (VERIFY the method).
4. Flag engagements with material U.S.-source income and owners close to residency limits.
5. Recommend remote delivery or separate pricing of on-site days.

## Output

| Engagement | Person | PR hours | U.S. hours | Foreign hours | PR-source $ | U.S.-source $ | Flag |
|---|---|---|---|---|---|---|---|

## Checks

- U.S.-source income is taxed federally even under a Puerto Rico decree.
- Use actual logs, not estimates, for year-end figures.
