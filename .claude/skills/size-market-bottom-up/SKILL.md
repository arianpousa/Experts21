---
name: size-market-bottom-up
description: "Build a bottom-up TAM/SAM/SOM for a segment of the Puerto Rico or export AI consulting market. Use for market sizing, segment prioritization or revenue targets."
metadata:
  id: S02
  group: "Research & analysis"
---

# S02 · Size a market bottom-up

Used by: `business-strategist`, `market-research-analyst`, `marketing-brand-strategist`, `sme-market-specialist`

## Input

- Segment definition and tax tag (EXPORT/LOCAL)
- Data on account counts, adoption and deal size

## Steps

1. Read `docs/01-market.md` §5 (sizing approach) and `docs/02-target-customers.md` (segments, deal sizes).
2. Count target accounts per segment (Census County Business Patterns, InvestPR, BDE, industry associations); cite each count.
3. Apply adoption or intent rates (Census Oct 2026: 15.7% use AI, 28.6% expect to within 6 months; IDC: 97% of larger firms raising AI spend). Use the rate that matches the population.
4. Apply the share likely to buy outside consulting, then the average annual spend per account.
5. TAM = accounts × annual spend. SAM = the part the firm can serve (geography, vertical, size). SOM = what sales capacity can win in 1 to 3 years.
6. Run low, base and high cases and show which assumption moves the result most. Use Bash/Python for the arithmetic.

## Output

| Segment | Tag | Accounts | Adoption | Buy-outside % | Avg spend | TAM | SAM | SOM (yr 3) |
|---|---|---|---|---|---|---|---|---|

Assumptions and sources listed below the table; sensitivity (low/base/high).

## Checks

- Do not mix survey populations (SME vs enterprise).
- Mark every unsourced input (est.).
- Keep EXPORT and LOCAL separate: they are taxed differently.
