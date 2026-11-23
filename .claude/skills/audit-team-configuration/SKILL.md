---
name: audit-team-configuration
description: "Check that every agent and skill file is valid and correctly wired (frontmatter, names, skill references, IDs, roster consistency). Use after any change to .claude/agents, .claude/skills or the roster."
metadata:
  id: S46
  group: "Coordination & team building"
---

# S46 · Audit the team configuration

Used by: `meta-agent`

## Input

- None (reads the project)

## Steps

1. Run `python3 ${CLAUDE_SKILL_DIR}/scripts/audit_team.py` from the project root.
2. Read the report: errors (broken files or references) and warnings (unused skills, roster drift, size limits).
3. Fix every error; fix or justify each warning.
4. Re-run until clean.

## Output

Audit report: counts of agents and skills, errors, warnings, and what was fixed.

## Checks

- Do not delete agents or skills to silence a warning without the user's approval.
