---
name: map-regulation-to-controls
description: "Turn a regulation or standard (HIPAA, GLBA/OCIF, FDA 21 CFR Part 11/GxP, SB 68, SOC 2) into a checklist of testable controls with evidence. Use for client projects in regulated sectors and for the firm's own compliance."
metadata:
  id: S14
  group: "Tax, legal & compliance"
---

# S14 · Map a regulation to controls

Used by: `ai-governance-regulatory-advisor`, `risk-compliance-officer`, `life-sciences-gxp-expert`, `financial-services-expert`, `healthcare-expert`, `public-sector-procurement-expert`, `cloud-mlops-security-engineer`

## Input

- Regulation or standard
- Scope (system, project or firm)

## Steps

1. Confirm the regulation applies and to whom (covered entity, business associate, vendor).
2. Extract the requirements that apply to the scope.
3. Turn each into a testable control: what, who, how often, evidence.
4. Map to SOC 2 criteria where possible so one control serves several rules.
5. Mark gaps and owners.

## Output

| Requirement | Control | Owner | Frequency | Evidence | Status |
|---|---|---|---|---|---|

## Checks

- Cite the section of the regulation for each requirement.
- SB 68 is a proposed bill until confirmed enacted (VERIFY).
