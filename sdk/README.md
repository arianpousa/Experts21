# Ask an Expert with the Claude Agent SDK

A small Node.js script that loads one Experts21 agent and its knowledge folder, asks it a question from the command line, and prints its answer. By default it asks **Carmen, the Act 60 Incentives Specialist** (`act60-incentives-specialist`).

## What the script does

1. Reads the agent's file `.claude/agents/<name>.md`: its frontmatter (description, model, tools, skills) and its system prompt.
2. Reads every text document in `knowledge/<name>/` (README first) and adds them to the system prompt. Other files, such as PDFs, are listed so the agent can open them with its Read tool.
3. Runs that agent as the main agent with the [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) (`agent` + `agents` options, the same as `claude --agent <name>`):
   - **Model:** the one set in the agent's file (opus for Carmen).
   - **Skills:** the agent's own skills are enabled.
   - **Project files:** the project's `CLAUDE.md` and `.claude/settings.json` are loaded.
4. Prints the answer, and a line with turns, time and cost.

**Safe by design:** the agent gets **read-only tools** (Read, Grep, Glob, WebSearch, WebFetch), and only those its file allows. It cannot edit files or run shell commands. Anything else is denied without prompting (`permissionMode: "dontAsk"`).

## Requirements

- Node.js 18 or later (`node --version`)
- An Anthropic API key from the [Claude Console](https://console.anthropic.com/). Running Carmen on opus is billed to that key.

## Install

From the project root:

```bash
cd sdk
```

```bash
npm install
```

## Set your API key

macOS / Linux, for the current terminal:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

Windows PowerShell:

```powershell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
```

Never commit the key or paste it into a file in this repository.

## Run

Ask Carmen (the default agent):

```bash
node ask-agent.mjs "A Texas logistics company wants a 6-week AI pilot delivered remotely from San Juan. Is this EXPORT or LOCAL?"
```

Show the agent's tool calls while it works:

```bash
node ask-agent.mjs --verbose "Should our founder file a Chapter 2 application before December 31, 2026?"
```

Ask any other agent in `.claude/agents/`:

```bash
node ask-agent.mjs --agent cfo-financial-planner "What is our break-even revenue at a $190 blended rate?"
```

Check that the agent and its knowledge folder load correctly, without calling the API or needing a key:

```bash
node ask-agent.mjs --dry-run "Any question"
```

or, the same check via npm:

```bash
npm run check
```

## Give the agent documents

Put files in `knowledge/act60-incentives-specialist/`. Use Markdown or text for content the agent should always see (for example `2026-11-20-decree-application-summary.md`); they are loaded into its prompt on every run. See `knowledge/README.md` for naming and what must never go there. The script loads up to 150,000 characters of knowledge text, and lists anything beyond that so the agent can open it when relevant.

## Troubleshooting

| Message | Fix |
|---|---|
| `ANTHROPIC_API_KEY is not set` | Run the `export` command above in the same terminal |
| `Agent file not found` | Check the name against `ls ../.claude/agents` (without `.md`) |
| `Knowledge folder not found` | Create `knowledge/<agent-name>/README.md` (the meta-agent does this for new agents) |
| `Skills not found` | Run `/audit-team-configuration` in Claude Code to find the broken reference |
| `The agent did not finish: error_max_turns` | The question needed more steps; ask something narrower, or raise `maxTurns` in `ask-agent.mjs` |
