---
name: create-subagent
description: "Create a new expert subagent in .claude/agents/ wired to its skills, and register it in the roster and CLAUDE.md. Use when the team lacks a role."
metadata:
  id: S44
  group: "Coordination & team building"
---

# S44 · Create a subagent

Used by: `meta-agent`

## Input

- The gap the new agent fills
- Its responsibilities and skills

## Steps

1. Check `docs/expert-roster.md`: if an existing agent covers it, improve that agent instead.
2. Keep the team at 50 agents or fewer. Assign the next free ID (A##) and a kebab-case `name`.
3. Write `.claude/agents/<name>.md`: frontmatter `name`, `description` (when to delegate, one or two sentences), `tools` (least needed; experts do not get `Agent`), `skills` (≤ 32 slugs), `color`.
4. Body: '# A## · Role' heading, role paragraph, responsibilities, knowledge and docs to read, skills list, how you work, response format (copy the structure of an existing expert).
5. Create any missing skills with `create-skill`.
6. Add the agent to `docs/expert-roster.md` (agent table, skills' Used by, implementation map) and the team table in `CLAUDE.md`.
7. Run `audit-team-configuration` and fix every issue.

## Output

New agent file path · roster and CLAUDE.md changes · audit result.

## Checks

- Frontmatter must start on line 1; `name` and `description` are required; names cannot contain ':'.
- Unknown frontmatter fields are silently ignored: spell them exactly (`disallowedTools`, `maxTurns`).
