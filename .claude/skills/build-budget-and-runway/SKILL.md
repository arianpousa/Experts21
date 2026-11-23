---
name: build-budget-and-runway
description: "Build a 12-24 month budget and cash forecast with runway and scenarios. Use for fundraising, hiring plans and monthly finance reviews."
metadata:
  id: S18
  group: "Finance & commercial"
---

# S18 · Build a budget and cash runway forecast

Used by: `business-strategist`, `cfo-financial-planner`, `operations-continuity-manager`

## Input

- Cost lines
- Hiring plan
- Pipeline with probabilities
- Starting cash

## Steps

1. Costs from `docs/04` (people, office, cloud/AI, insurance, accounting, marketing, travel, resilience).
2. Payroll burden per hire: FICA 7.65%, FUTA 0.6% on $7k, SUTA ≤ 5.4% on $7k, SINOT 0.3% on $9k, health insurance (est.), Christmas bonus.
3. Revenue: weighted pipeline by month; collections lag (30-45 days private, longer for government).
4. Monthly cash in, cash out, ending balance; runway in months.
5. Scenarios: base, slow sales (−30%), and loss of decree.
6. Do the arithmetic with Bash/Python.

## Output

Monthly table (revenue, costs by line, net, cash balance) · Runway by scenario · Key assumptions · Decisions needed.

## Checks

- Keep tax and decree costs explicit.
- Flag the month cash falls below 3 months of costs.
