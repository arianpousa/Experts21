---
name: draft-contract-or-sow
description: "Draft an MSA, SOW or NDA from the firm's standard structure, including nexus and work-location language. Use when a deal is ready for paper."
metadata:
  id: S12
  group: "Tax, legal & compliance"
---

# S12 · Draft a contract or SOW from template

Used by: `corporate-commercial-attorney`, `pricing-offer-designer`, `export-sales-lead`, `local-sales-community-lead`, `ai-solutions-architect`, `delivery-engagement-manager`

## Input

- Deal terms
- Scope and deliverables
- Price and payment terms
- Tax tag (internal)

## Steps

1. Use templates in `templates/` if they exist; otherwise use the standard structure below.
2. State the client legal entity and address, and where the operations benefited are located.
3. State that services are performed from Puerto Rico, with any on-site days listed separately.
4. Write deliverables, acceptance criteria, assumptions, client responsibilities (data access), timeline.
5. Add fees, invoicing and payment terms; IP (deliverables vs firm accelerators); data/privacy and AI terms; liability cap.
6. Mark open items in [brackets]. Do not put the internal tax tag in the client document.

## Output

Draft document with sections: Parties · Background · Services and deliverables · Work location · Timeline · Fees and payment · Client responsibilities · IP · Confidentiality and data · AI terms · Warranties and liability · Term and termination · Governing law · Signatures.

## Checks

- Run `review-contract` on your own draft before handing it over.
- Spanish version for Puerto Rico government clients.
