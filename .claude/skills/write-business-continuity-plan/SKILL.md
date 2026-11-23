---
name: write-business-continuity-plan
description: "Write or update the business continuity plan for power, internet, hurricane and key-person disruptions, and run a drill. Use before hurricane season (Jun 1) and after any incident."
metadata:
  id: S38
  group: "Operations & people"
---

# S38 · Write a business continuity plan

Used by: `risk-compliance-officer`, `cloud-mlops-security-engineer`, `operations-continuity-manager`

## Input

- Critical functions and systems
- Team locations

## Steps

1. List critical functions, with recovery time and data loss targets (RTO/RPO).
2. Threats: grid outages (~27-30 h/yr even without storms, per EIA), hurricanes (Jun 1 to Nov 30), internet, key person.
3. Mitigations: UPS and batteries, second ISP or satellite, cloud-only systems, remote work, generator-backed coworking, off-island backups.
4. Hurricane checklist: pre-season, 72-hour watch, during, after. Include client communication.
5. Run a drill and record results.

## Output

Continuity plan · hurricane checklist · contact tree · drill results.

## Checks

- Test it, do not just write it.
- Keep a copy accessible offline.
