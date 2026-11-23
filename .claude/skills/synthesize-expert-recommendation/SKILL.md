---
name: synthesize-expert-recommendation
description: "Combine several experts' answers into one decision-ready recommendation that shows agreements, conflicts and how they were resolved. Use whenever more than one expert has contributed."
metadata:
  id: S40
  group: "Operations & people"
---

# S40 · Synthesize expert input into a recommendation

Used by: `engagement-lead`, `business-strategist`, `orchestrator`

## Input

- Each expert's answer (with assumptions and sources)
- The original question

## Steps

1. List each expert's position, key assumptions and confidence.
2. Mark where they agree.
3. Resolve conflicts with evidence. Priority when they truly conflict: legal and tax compliance > risk to the decree or residency > economics > preference.
4. State trade-offs and what would change the recommendation.
5. Collect items that need a licensed professional, and open questions.
6. Write next steps with owner agent and date.

## Output

**Bottom line** (2-3 sentences)
**Recommendation**
**Why** (by domain)
**Disagreements and how they were resolved**
**Risks**
**Confirm with a licensed professional**
**Next steps** (owner, date)
**Experts consulted**

## Checks

- Never invent an expert's view; quote or summarize what they actually said.
- Keep sourced vs estimated labels from the inputs.
