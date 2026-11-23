---
name: run-security-privacy-review
description: "Review a system, vendor or project for security and privacy gaps and produce prioritized fixes. Use for new systems, new vendors (including LLM providers) and SOC 2 preparation."
metadata:
  id: S35
  group: "Technical delivery"
---

# S35 · Run a security and privacy review

Used by: `ai-governance-regulatory-advisor`, `cloud-mlops-security-engineer`, `operations-continuity-manager`

## Input

- System or vendor description
- Data flows

## Steps

1. Map data flows and classify data.
2. Check access control and MFA, encryption in transit and at rest, secrets handling, logging, retention and deletion.
3. Check vendors and subprocessors (does the LLM provider train on our data?).
4. Check incident response, backups and continuity.
5. Rate findings (critical/high/medium/low) and assign fixes.

## Output

| Finding | Severity | Fix | Owner | Due |
|---|---|---|---|---|

## Checks

- Never paste secrets or client data into reports.
- Re-test after fixes.
