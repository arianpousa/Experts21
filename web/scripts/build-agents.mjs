#!/usr/bin/env node
// Build-time loader: reads the team from this repository and writes two generated files.
//
//   src/generated/team.json            Public data for the browser: names, roles, personalities, models.
//                                      No prompts, no knowledge documents.
//   server/generated/prompts.mjs       Private data for the Netlify Functions: each agent's system prompt,
//                                      its preloaded skills, the docs it reads, its knowledge folder,
//                                      and the project rules from CLAUDE.md.
//
// Sources (all relative to the repository root):
//   .claude/agents/*.md               agent definitions (frontmatter + system prompt)
//   .claude/skills/<name>/SKILL.md    skills preloaded by each agent
//   knowledge/<agent>/**              each agent's knowledge folder (text files)
//   docs/*.md                         research files each agent is told to read
//   CLAUDE.md                         team list (groups) and the rules every agent follows

import { readFileSync, readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB, "..");
const TEXT_EXT = new Set([".md", ".txt", ".csv", ".json", ".yaml", ".yml"]);
const MAX_KNOWLEDGE_CHARS = 150_000;

const read = (p) => readFileSync(p, "utf8");
const rel = (p) => relative(ROOT, p).split("\\").join("/");

function splitFrontmatter(text, file) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${rel(file)}: no YAML frontmatter on line 1`);
  return { fm: parseYaml(m[1]) ?? {}, body: m[2].trim() };
}

function walk(dir) {
  return readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const toList = (v) => (!v ? [] : Array.isArray(v) ? v : String(v).split(",").map((s) => s.trim()).filter(Boolean));

// ---- groups from CLAUDE.md ("- **Group:** `slug` (Name), ...")
const claudeMd = read(join(ROOT, "CLAUDE.md"));
const groupOf = {};
const groupOrder = [];
for (const line of claudeMd.split("\n")) {
  const m = line.match(/^- \*\*(.+?):\*\* (.*`.*)$/);
  if (!m || !m[2].includes("(")) continue;
  const group = m[1];
  for (const s of m[2].matchAll(/`([a-z0-9-]+)`/g)) {
    groupOf[s[1]] = group;
    if (!groupOrder.includes(group)) groupOrder.push(group);
  }
}
const rulesSection = claudeMd.match(/## Rules every agent follows[\s\S]*?(?=\n## |$)/)?.[0] ?? "";
const timeSection = claudeMd.match(/## Time-sensitive[\s\S]*?(?=\n## |$)/)?.[0] ?? "";

// ---- skills
const skillsDir = join(ROOT, ".claude", "skills");
const skills = {};
for (const name of readdirSync(skillsDir).sort()) {
  const f = join(skillsDir, name, "SKILL.md");
  if (!existsSync(f)) continue;
  skills[name] = splitFrontmatter(read(f), f).body;
}

// ---- agents
const agentsDir = join(ROOT, ".claude", "agents");
const docs = {};
const publicAgents = [];
const serverAgents = {};
for (const file of readdirSync(agentsDir).filter((f) => f.endsWith(".md")).sort()) {
  const path = join(agentsDir, file);
  const { fm, body } = splitFrontmatter(read(path), path);
  const slug = fm.name;
  if (!slug || !fm.description) throw new Error(`${rel(path)}: missing name or description`);

  const heading = body.match(/^# (A\d+) · (.+)$/m);
  const persona = body.match(/\*\*Name:\*\* (.+?)\. \*\*Voice:\*\* (.+?)\. \*\*Working style:\*\* (.+?)\.\s*$/m);
  if (!heading || !persona) throw new Error(`${rel(path)}: missing '# A## · Role' heading or 'Who you are' line`);

  const agentSkills = toList(fm.skills);
  for (const s of agentSkills) if (!skills[s]) throw new Error(`${rel(path)}: skill '${s}' not found`);

  // Research files the agent is told to read (lines like "- `docs/09-...md`: ...")
  const docPaths = [...new Set([...body.matchAll(/^- `(docs\/[^`]+\.md)`/gm)].map((m) => m[1]))];
  for (const d of docPaths) {
    const full = join(ROOT, d);
    if (!existsSync(full)) throw new Error(`${rel(path)}: referenced doc ${d} not found`);
    docs[d] ??= read(full);
  }

  // Knowledge folder: README first, then text files; other files are listed by name.
  const kDir = join(ROOT, "knowledge", slug);
  if (!existsSync(kDir)) throw new Error(`knowledge/${slug}/ not found`);
  const kFiles = walk(kDir).sort((a, b) => (a.endsWith("README.md") ? -1 : b.endsWith("README.md") ? 1 : a.localeCompare(b)));
  const knowledge = [];
  const knowledgeOther = [];
  let kChars = 0;
  for (const f of kFiles) {
    if (!TEXT_EXT.has(extname(f).toLowerCase())) { knowledgeOther.push(rel(f)); continue; }
    const content = read(f);
    if (kChars + content.length > MAX_KNOWLEDGE_CHARS) { knowledgeOther.push(`${rel(f)} (over size limit, not loaded)`); continue; }
    kChars += content.length;
    knowledge.push({ path: rel(f), content });
  }

  const [, id, role] = heading;
  const [, name, voice, style] = persona;
  publicAgents.push({
    slug, id, name, role, voice, style,
    model: fm.model ?? "sonnet",
    group: groupOf[slug] ?? "Other",
    description: fm.description,
    skills: agentSkills,
    knowledgeFiles: knowledge.map((k) => k.path.split("/").pop()).concat(knowledgeOther.map((p) => p.split("/").pop())),
  });
  serverAgents[slug] = { id, name, role, model: fm.model ?? "sonnet", body, skills: agentSkills, docs: docPaths, knowledge, knowledgeOther };
}

const byId = (a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1));
publicAgents.sort((a, b) => groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group) || byId(a, b));

if (!serverAgents.orchestrator) throw new Error("orchestrator agent not found");

// ---- write outputs
const team = { generatedAt: new Date().toISOString(), groups: groupOrder, agents: publicAgents };
mkdirSync(join(WEB, "src", "generated"), { recursive: true });
writeFileSync(join(WEB, "src", "generated", "team.json"), JSON.stringify(team, null, 2) + "\n");

const prompts = { rules: `${rulesSection}\n\n${timeSection}`.trim(), skills, docs, agents: serverAgents };
mkdirSync(join(WEB, "server", "generated"), { recursive: true });
writeFileSync(
  join(WEB, "server", "generated", "prompts.mjs"),
  `// Generated by scripts/build-agents.mjs at build time. Do not edit.\nexport default ${JSON.stringify(prompts)};\n`,
);

const size = (o) => (JSON.stringify(o).length / 1024).toFixed(0);
console.log(
  `build-agents: ${publicAgents.length} agents, ${Object.keys(skills).length} skills, ${Object.keys(docs).length} docs, ` +
  `${publicAgents.reduce((n, a) => n + a.knowledgeFiles.length, 0)} knowledge files ` +
  `(team.json ${size(team)} KB, prompts.mjs ${size(prompts)} KB)`,
);
