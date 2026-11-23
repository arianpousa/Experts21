---
name: run-ai-risk-review
description: "Review an AI use case for risk tier, data, bias, accuracy, oversight, transparency, security and regulation, and record approval conditions. Use before building and before go-live."
metadata:
  id: S34
  group: "Technical delivery"
---

# S34 · Run an AI risk and governance review

Used by: `ai-governance-regulatory-advisor`, `risk-compliance-officer`, `life-sciences-gxp-expert`, `financial-services-expert`, `healthcare-expert`, `public-sector-procurement-expert`, `ml-llm-engineering-lead`

## Input

- Use case description
- Data involved
- Who is affected

## Steps

1. Risk tier: high if it affects people's rights, health, money or legal status, or is used in regulated decisions; medium or low otherwise.
2. Data: PII/PHI, consent, minimization, retention.
3. Fairness and bias; accuracy and failure modes; human oversight.
4. Transparency: disclose AI use and AI-generated content (proposed SB 68 for government; VERIFY status).
5. Security and vendor terms; regulatory mapping (use `map-regulation-to-controls`).
6. Decision: approve / approve with conditions / reject.

## Output

Review record: tier · findings · conditions · decision · reviewer · date.

## Checks

- Document reasons; keep the record for audit.
- Not legal advice for regulatory conclusions.
