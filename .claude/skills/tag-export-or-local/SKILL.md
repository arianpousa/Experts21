---
name: tag-export-or-local
description: "Decide whether a client, deal or SOW is EXPORT (eligible for the Act 60 4%/2% rate) or LOCAL (regular rates) using the no-Puerto-Rico-nexus rule, and record the reason. Use for every new client, proposal, SOW or revenue line."
metadata:
  id: S06
  group: "Tax, legal & compliance"
---

# S06 · Tag a client or SOW as EXPORT or LOCAL

Used by: `act60-incentives-specialist`, `pr-tax-accounting-specialist`, `corporate-commercial-attorney`, `risk-compliance-officer`, `cfo-financial-planner`, `pricing-offer-designer`, `export-sales-lead`, `local-sales-community-lead`, `life-sciences-gxp-expert`, `delivery-engagement-manager`

## Input

- Client legal entity and location
- Which operations benefit from the work, and where
- Subject matter
- Where the work will be performed

## Steps

1. Read `docs/09-act-60-and-tax-benefits.md` §2.3 and `docs/02-target-customers.md` (tagging rules).
2. Is the client located outside Puerto Rico? If not, the tag is LOCAL.
3. Apply the four nexus tests. Does the work: (1) relate to a business the client carries on in Puerto Rico; (2) advise on Puerto Rico law or regulations; (3) involve lobbying the Puerto Rico government; (4) concern property sold for use in Puerto Rico? Any **yes** makes it LOCAL.
4. If the SOW mixes both, split it into separately priced EXPORT and LOCAL line items.
5. Check the delivery location: mainland on-site days produce U.S.-source income even for EXPORT work. Note them for `source-income-by-work-location`.
6. Write the register entry. When unsure, tag LOCAL pending review by the Act 60 specialist or counsel.

## Output

| Client | SOW / line | Client location | Operations benefited | Nexus tests 1-4 | Tag | Delivery location | Rationale | Reviewed by |
|---|---|---|---|---|---|---|---|---|

## Checks

- Examples: Puerto Rico bank → LOCAL. Mainland pharma parent, work on its Puerto Rico plant → LOCAL. Texas logistics company, remote delivery → EXPORT.
- Never tag EXPORT to make the numbers work.
- Keep the rationale specific enough to show an auditor.
