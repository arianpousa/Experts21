# Knowledge folders

Each agent has its own folder here: `knowledge/<agent-name>/`. The agent reads its folder **before every answer**, so documents placed here shape its advice. Each folder's README lists what belongs there.

## How to add a document

- Prefer Markdown or plain text. PDFs work too; a short `.md` summary next to a long PDF helps the agent.
- Name files `YYYY-MM-DD-short-title.md` so the newest version is obvious.
- Start each file with three lines: **Source:**, **Date:**, **Confidentiality:** (public / internal / client-confidential).
- Put a document in every folder that needs it, or put it in the most relevant folder and mention it in the brief.

## What never goes here

This folder is committed to git and pushed to GitHub. Do not store passwords, API keys, Social Security or tax ID numbers, bank account details, or medical records. Store client-confidential material only with the client's permission and only if the repository is private.

## Shared research

Research that every agent uses lives in `docs/`. Use `knowledge/` for material specific to one agent's job.
