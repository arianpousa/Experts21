---
name: build-break-even-model
description: "Compute the revenue, billable hours and headcount at which the firm (or a service line) breaks even, with sensitivity. Use for hiring decisions, pricing, and launch planning."
metadata:
  id: S17
  group: "Finance & commercial"
---

# S17 · Build a break-even model

Used by: `business-strategist`, `cfo-financial-planner`, `pricing-offer-designer`

## Input

- Fixed costs (monthly/annual)
- Variable cost per billable hour
- Billing rates by tag
- Utilization

## Steps

1. Start from `docs/04-startup-and-operating-costs.md` §3 (≈ $755k/yr for 5 people) unless given newer numbers.
2. Contribution per billable hour = blended rate − variable cost per hour.
3. Break-even hours = fixed costs ÷ contribution per hour; break-even revenue = hours × blended rate.
4. Convert to billable headcount at the assumed utilization (default 1,800 hours/yr × 65%).
5. Sensitivity: rate ±20%; utilization 50% / 65% / 75%; EXPORT share 50% / 70%.
6. Do the arithmetic with Bash/Python and show inputs.

## Output

Inputs table · Break-even result (hours, revenue, headcount, months to break-even) · Sensitivity table · Assumptions.

## Checks

- Label estimated inputs (est.).
- Break-even is pre-tax; note the tax effect separately with `model-tax-by-revenue-mix`.
