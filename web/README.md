# Experts21 Web App

A React web app for talking to your advisory team:

- **Sidebar:** every agent with its first name, role, personality (voice and working style) and model (opus / sonnet / haiku).
- **Chat window:** talk to one agent at a time, with a separate conversation per agent.
- **Ask the whole team:** Marisol, the orchestrator, picks the experts, they answer in parallel (you can open each expert's answer), and she combines them into one answer.

Your Claude API key never reaches the browser. All Claude calls run in **Netlify Functions**, which read the key from the `ANTHROPIC_API_KEY` environment variable in Netlify.

## How it works

```
Browser (React)  ──►  /api/ask, /api/route, /api/synthesize  ──►  Claude API
                      Netlify Functions (web/netlify/functions)
                      key: ANTHROPIC_API_KEY (Netlify env var)
```

**At build time,** `scripts/build-agents.mjs` reads the team from this repository and writes two files:

| Generated file | Goes to | Contains |
|---|---|---|
| `src/generated/team.json` | the browser | Names, roles, personalities, models, groups (no prompts) |
| `server/generated/prompts.mjs` | the functions only | Each agent's system prompt, preloaded skills, the `docs/` files it reads, its `knowledge/<agent>/` folder, and the rules from `CLAUDE.md` |

The sources are:
- `.claude/agents/*.md`
- `.claude/skills/*/SKILL.md`
- `knowledge/<agent>/`
- `docs/`
- `CLAUDE.md`

**To change an agent or add knowledge,** edit those files and push. Netlify rebuilds, and the app picks up the change.

**Models:** each agent runs on the model in its file. In the Claude API, `opus` → `claude-opus-5-5`, `sonnet` → `claude-sonnet-5-5`, `haiku` → `claude-haiku-5-5`.

**Refusal fallback:** for opus and sonnet agents, if a safety check declines a request, the API retries on a suitable model and the chat shows a note.

**Ask the whole team** runs in three steps. The browser drives them, so each one stays well under Netlify's 60-second limit for a function call:
1. `/api/route`: the orchestrator chooses 1 to 6 experts and writes a brief for each.
2. `/api/ask`: one call per expert, all in parallel, streamed.
3. `/api/synthesize`: the orchestrator streams the combined answer, including where the experts disagreed.

The command-line orchestrator (`claude --agent orchestrator`) can also run a cross-review round. The web app skips that round to stay within the time limit; the synthesis step compares the answers instead.

## Deploy to Netlify (step by step)

You need:
- a [Netlify](https://www.netlify.com/) account;
- this repository on GitHub;
- an Anthropic API key from the [Claude Console](https://console.anthropic.com/) (Settings → API keys).

1. **Import the repository.** In Netlify, choose **Add new project → Import an existing project → GitHub**, then pick this repository.
2. **Leave the build settings as they are.** Netlify reads `netlify.toml` at the root of the repository, which already sets:
   - base directory `web`;
   - build command `npm run build`;
   - publish directory `dist`;
   - functions directory `netlify/functions`;
   - Node 22.

   Choose the `main` branch and click **Deploy**.
3. **Add your API key.** Go to **Project configuration → Environment variables → Add a variable**:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your key (starts with `sk-ant-`)
   - Check **Contains secret values**.
   - Scopes: make sure **Functions** is included.
   - Click **Create variable**.
4. **Add a password (strongly recommended).** Anyone who finds your site's URL could otherwise spend your API credits. Add a second variable:
   - Key: `APP_PASSWORD`
   - Value: any password you choose
   - Scope: **Functions**

   The app then asks for this password once per browser session and sends it with every request.
5. **Redeploy** so the functions see the new variables: **Deploys → Trigger deploy → Deploy project**.
6. **Open the site URL** (for example `https://your-project.netlify.app`). The yellow banner disappears once the key is set. Pick an agent or **Ask the whole team** and send a question.

If you prefer the command line (Netlify CLI):

```bash
npm install -g netlify-cli
```

```bash
netlify login
```

```bash
netlify init
```

```bash
netlify env:set ANTHROPIC_API_KEY "sk-ant-..." --secret
```

```bash
netlify env:set APP_PASSWORD "choose-a-password" --secret
```

```bash
netlify deploy --build --prod
```

Run these from the repository root (where `netlify.toml` is).

## Run it locally

From the repository root:

```bash
cd web
```

```bash
npm install
```

```bash
cd ..
```

```bash
netlify dev
```

`netlify dev` runs the build-time loader, the React dev server and the functions together. It uses the environment variables from your linked Netlify project. Without a linked project, put `ANTHROPIC_API_KEY=sk-ant-...` in a `web/.env` file, which is gitignored, and never commit it.

To check the production build only (no API calls):

```bash
cd web && npm run build
```

## Costs

Every question is billed to your Anthropic API key. Each agent's system prompt carries its research, skills and knowledge folder: roughly 7,000 to 18,000 tokens *(est.)*. Prompt caching makes repeat questions to the same agent cheaper within a few minutes.

**Rough cost per question** *(est.)*:
- **One sonnet agent:** a few cents.
- **One opus agent:** about $0.05 to $0.15.
- **Ask the whole team:** one routing call + 1 to 6 experts + one synthesis, about $0.20 to $0.60.

Check real usage in the Claude Console. You can set spend limits there as well.

## Troubleshooting

| What you see | Fix |
|---|---|
| Banner: "The server has no ANTHROPIC_API_KEY yet" | Add the variable (step 3) with the Functions scope, then redeploy (step 5) |
| "The Anthropic API key on the server is invalid" | Re-create the key in the Claude Console and update the Netlify variable, then redeploy |
| "Wrong or missing password" | Reload the page and enter the `APP_PASSWORD` value |
| "The answer stopped before it finished" | The function hit Netlify's 60-second limit. Ask a narrower question, or ask the expert directly instead of the whole team |
| "Rate limited by the Anthropic API" | Wait a minute; whole-team questions make several calls at once |
| Build fails in `build-agents` | An agent, skill, doc or knowledge folder is missing or misnamed. Run `/audit-team-configuration` in Claude Code |
| "The API is not running" (locally) | Start with `netlify dev` from the repository root, not `npm run dev` |

## Files

| Path | What it is |
|---|---|
| `../netlify.toml` | Netlify build settings (base `web`) |
| `scripts/build-agents.mjs` | Build-time loader for agents, skills, docs and knowledge |
| `netlify/functions/*.mts` | API endpoints: `status`, `ask`, `route`, `synthesize` |
| `server/experts.mjs` | Shared server logic: prompts, models, streaming, validation, password check |
| `src/App.jsx`, `src/api.js`, `src/styles.css` | The React app |
