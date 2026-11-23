---
name: build-compliance-calendar
description: "Build or update the dated calendar of the firm's tax, decree, entity, labor and registration obligations with owners. Use at formation, at the start of each year, and when rules change."
metadata:
  id: S13
  group: "Tax, legal & compliance"
---

# S13 · Build a compliance calendar

Used by: `pr-tax-accounting-specialist`, `employment-law-counsel`, `risk-compliance-officer`, `cfo-financial-planner`, `operations-continuity-manager`

## Input

- List of the firm's obligations
- Fiscal year
- Headcount

## Steps

1. Collect obligations from `docs/05-permits-and-licenses.md`, `docs/06-staffing.md` and `docs/09-act-60-and-tax-benefits.md`.
2. Include at least: LLC annual fee ($150, Apr 15); Puerto Rico income tax return; IVU returns; municipal license (patente) declaration; CRIM personal property return; DDEC/Hacienda Act 60 annual report and CPA certification; Chapter 2 donation and report (founders); federal payroll filings; Puerto Rico withholding and W-2/499R-2; SUTA/SINOT; CFSE payroll statement (Jul 20); Christmas bonus (Nov 15 to Dec 15); good-standing certificates.
3. Give each a date, agency, owner agent and evidence to keep. Mark any date not confirmed in `docs/` as VERIFY.
4. Add reminders 30 and 7 days before each date.

## Output

| Date | Obligation | Agency | Owner | Evidence | Status |
|---|---|---|---|---|---|

## Checks

- Dates move; confirm them each year with the CPA.
- A missed Act 60 annual report can cost the decree.
