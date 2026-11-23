---
name: review-contract
description: "Review a contract (MSA, SOW, NDA, partner, subcontract, employment or vendor agreement) against a clause checklist and produce a risk memo with redlines. Use before signing or sending any agreement."
metadata:
  id: S11
  group: "Tax, legal & compliance"
---

# S11 · Review a contract

Used by: `corporate-commercial-attorney`, `employment-law-counsel`, `ai-governance-regulatory-advisor`, `partnerships-alliances-manager`

## Input

- The contract text
- Which side we are on and the deal context

## Steps

1. Parties: legal entities and locations (affects the EXPORT/LOCAL tag).
2. Scope, deliverables, acceptance, change control.
3. Work location: services performed from Puerto Rico; on-site days limited and priced separately.
4. IP: client ownership of deliverables; firm keeps pre-existing IP and accelerators with a license to the client.
5. Data and privacy: confidentiality, HIPAA BAA, GLBA, data use for model training, retention, subprocessors (LLM providers).
6. AI terms: output accuracy disclaimers, human review, third-party model terms.
7. Liability cap, indemnities, warranties, insurance requirements.
8. Payment terms and late fees (government clients pay slowly), termination, non-solicit, governing law and venue, language (Spanish for government).
9. For each issue, rate risk H/M/L and propose redline text.

## Output

| Clause | Issue | Risk | Proposed change |
|---|---|---|---|

Summary: sign / sign with changes / do not sign.

## Checks

- Not legal advice: a licensed Puerto Rico attorney signs off.
- Quote the clause you are commenting on.
