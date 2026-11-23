---
name: design-ai-evaluation-suite
description: "Design the tests, metrics, thresholds and monitoring that decide whether an AI system is good enough to ship and stays that way. Use for every AI system before release."
metadata:
  id: S33
  group: "Technical delivery"
---

# S33 · Design an evaluation suite for an AI system

Used by: `ai-governance-regulatory-advisor`, `ai-solutions-architect`, `ml-llm-engineering-lead`, `cloud-mlops-security-engineer`

## Input

- System purpose
- Risks
- Sample data

## Steps

1. Define success criteria with the client.
2. Build test sets: representative, edge cases, adversarial/red-team, English and Spanish.
3. Metrics: task accuracy, groundedness/hallucination rate, refusal correctness, safety, latency, cost per task.
4. Graders: rules, human review, LLM-as-judge (calibrated against humans).
5. Release thresholds, regression runs on every change, and production monitoring.

## Output

Evaluation plan: criteria · test sets · metrics and thresholds · graders · release gate · monitoring.

## Checks

- High-risk use cases need human review in the loop.
- Keep test data access within client approvals.
