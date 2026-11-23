---
name: create-skill
description: "Create a new reusable method as a project skill in .claude/skills/<name>/SKILL.md and wire it to the agents that use it. Use when an agent needs a repeatable method that does not exist yet."
metadata:
  id: S45
  group: "Coordination & team building"
---

# S45 · Create a skill

Used by: `meta-agent`

## Input

- The method: input, steps, output
- Which agents will use it

## Steps

1. Test it is a method, not knowledge: it must take an input, follow steps and produce an output. Knowledge goes in agent prompts or `docs/`.
2. Search existing skills (`ls .claude/skills`) to avoid duplicates; extend one instead if close.
3. Name: verb-object kebab case (for example `build-break-even-model`). Assign the next free ID (S##).
4. Write `SKILL.md`: frontmatter `name`, `description` (what it does + when to use it, key use first, well under 1,536 characters), `metadata: {id: S##, group: ...}`; body sections Input, Steps, Output, Checks. Keep it under 500 lines; put long reference material in supporting files.
5. Add the slug to each using agent's `skills:` frontmatter list (≤ 32 per agent) and to its Skills section.
6. Update `docs/expert-roster.md` and run `audit-team-configuration`.

## Output

New skill path · agents wired · roster updated · audit result.

## Checks

- One skill, written once, shared by many agents.
- Concise: preloaded skills cost context in every agent that loads them.
