#!/usr/bin/env python3
"""Audit the team of subagents and skills in this project.

Run from the project root:  python3 .claude/skills/audit-team-configuration/scripts/audit_team.py
Checks agent and skill frontmatter, skill wiring, IDs, size limits, and consistency
with docs/expert-roster.md and CLAUDE.md. Exits 1 if there are errors.
"""
import os, re, sys

ROOT = os.getcwd()
AG = os.path.join(ROOT, ".claude", "agents")
SK = os.path.join(ROOT, ".claude", "skills")
errors, warnings = [], []
NAME_RE = re.compile(r"^[a-z0-9][a-z0-9-]*$")

try:
    import yaml  # type: ignore
    def parse(text):
        return yaml.safe_load(text) or {}
except ImportError:  # minimal fallback parser for this project's frontmatter style
    import json
    def parse(text):
        data, key = {}, None
        for line in text.splitlines():
            if not line.strip():
                continue
            if line.startswith("  - ") and key:
                if not isinstance(data.get(key), list):
                    data[key] = []
                data[key].append(line[4:].strip())
            elif line.startswith("  ") and key:
                if not isinstance(data.get(key), dict):
                    data[key] = {}
                k, _, v = line.strip().partition(":")
                data[key][k.strip()] = v.strip().strip('"')
            else:
                k, _, v = line.partition(":")
                key, v = k.strip(), v.strip()
                if v.startswith('"'):
                    v = json.loads(v)
                data[key] = v if v else None
        return data

def read_fm(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---\n"):
        errors.append(f"{path}: frontmatter must start on line 1 with ---")
        return None, text
    end = text.find("\n---", 4)
    if end == -1:
        errors.append(f"{path}: frontmatter not closed")
        return None, text
    try:
        return parse(text[4:end]), text[end + 4:]
    except Exception as e:  # noqa
        errors.append(f"{path}: frontmatter does not parse ({e})")
        return None, text

# ---- skills
skills = {}
skill_ids = {}
if os.path.isdir(SK):
    for d in sorted(os.listdir(SK)):
        p = os.path.join(SK, d, "SKILL.md")
        if not os.path.isfile(p):
            continue
        fm, body = read_fm(p)
        if fm is None:
            continue
        name = fm.get("name") or d
        if name != d:
            warnings.append(f"skill {d}: name '{name}' differs from folder name")
        desc = fm.get("description") or ""
        if not desc:
            errors.append(f"skill {d}: missing description")
        elif len(desc) + len(fm.get("when_to_use") or "") > 1536:
            warnings.append(f"skill {d}: description + when_to_use over 1,536 chars (will be truncated)")
        sid = (fm.get("metadata") or {}).get("id")
        if not sid:
            warnings.append(f"skill {d}: no metadata.id")
        elif sid in skill_ids:
            errors.append(f"skill {d}: duplicate id {sid} (also {skill_ids[sid]})")
        else:
            skill_ids[sid] = d
        n_lines = (body.count("\n") + 1)
        if n_lines > 500:
            warnings.append(f"skill {d}: SKILL.md body is {n_lines} lines (keep under 500)")
        skills[name] = sid

# ---- agents
agents = {}
agent_ids = {}
skill_users = {k: [] for k in skills}
if os.path.isdir(AG):
    for fn in sorted(os.listdir(AG)):
        if not fn.endswith(".md"):
            continue
        p = os.path.join(AG, fn)
        fm, body = read_fm(p)
        if fm is None:
            continue
        name = fm.get("name")
        if not name:
            errors.append(f"agent {fn}: missing name (file would be treated as documentation)")
            continue
        if not NAME_RE.match(name) or len(name) > 256:
            errors.append(f"agent {fn}: invalid name '{name}'")
        if name in agents:
            errors.append(f"agent {fn}: duplicate name '{name}'")
        if not fm.get("description"):
            errors.append(f"agent {fn}: missing description (Claude Code skips the file)")
        sk = fm.get("skills") or []
        if isinstance(sk, str):
            sk = [x.strip() for x in sk.split(",") if x.strip()]
        if len(sk) > 32:
            warnings.append(f"agent {name}: {len(sk)} skills listed; only the first 32 are preloaded")
        for s in sk:
            if s not in skills:
                errors.append(f"agent {name}: skill '{s}' not found in .claude/skills")
            else:
                skill_users[s].append(name)
        tools = fm.get("tools") or ""
        tools_list = tools if isinstance(tools, list) else [t.strip() for t in str(tools).split(",") if t.strip()]
        if "Agent" in tools_list and name != "orchestrator":
            warnings.append(f"agent {name}: has the Agent tool; by convention only the orchestrator spawns agents")
        m = re.search(r"^# (A\d+) ", body, re.M)
        if not m:
            warnings.append(f"agent {name}: body has no '# A## · Role' heading")
        elif m.group(1) in agent_ids:
            errors.append(f"agent {name}: duplicate id {m.group(1)} (also {agent_ids[m.group(1)]})")
        else:
            agent_ids[m.group(1)] = name
        model = fm.get("model")
        if model not in ("opus", "sonnet", "haiku", "fable", "inherit") and not str(model or "").startswith("claude-"):
            warnings.append(f"agent {name}: model '{model}' missing or unrecognized")
        if not os.path.isfile(os.path.join(ROOT, "knowledge", name, "README.md")):
            warnings.append(f"agent {name}: knowledge/{name}/README.md missing")
        if f"knowledge/{name}/" not in body:
            warnings.append(f"agent {name}: prompt does not tell it to read knowledge/{name}/")
        agents[name] = fm

if len(agents) > 50:
    warnings.append(f"{len(agents)} agents: the team target is 50 or fewer")
desc_chars = sum(len(a.get("description") or "") for a in agents.values())
if desc_chars > 40000:
    warnings.append(f"agent descriptions total {desc_chars} chars; approaching Claude Code's 15,000-token limit")
for s, users in skill_users.items():
    if not users:
        warnings.append(f"skill {s}: not preloaded by any agent")

# ---- roster and CLAUDE.md consistency
def text_of(rel):
    p = os.path.join(ROOT, rel)
    return open(p, encoding="utf-8").read() if os.path.isfile(p) else None
roster = text_of("docs/expert-roster.md")
claude_md = text_of("CLAUDE.md")
if roster is None:
    warnings.append("docs/expert-roster.md not found")
else:
    for n in agents:
        if f"{n}.md" not in roster:
            warnings.append(f"roster: agent {n} missing from the implementation map")
    for s in skills:
        if f"skills/{s}/" not in roster:
            warnings.append(f"roster: skill {s} missing from the implementation map")
if claude_md is None:
    warnings.append("CLAUDE.md not found")
else:
    for n in agents:
        if f"`{n}`" not in claude_md:
            warnings.append(f"CLAUDE.md: agent {n} not listed in the team section")
brains = text_of("docs/agent-brains.md")
if brains is None:
    warnings.append("docs/agent-brains.md not found")
else:
    for n in agents:
        if f"`{n}`" not in brains:
            warnings.append(f"agent-brains.md: agent {n} missing")
orch = text_of(".claude/agents/orchestrator.md")
if orch:
    for n in agents:
        if n not in ("orchestrator", "meta-agent") and f"`{n}`" not in orch:
            warnings.append(f"orchestrator: expert {n} missing from its team table")

settings = text_of(".claude/settings.json")
try:
    import json as _json
    depth = int((_json.loads(settings or "{}").get("env") or {}).get("CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH", 0))
except Exception:
    depth = 0
if "orchestrator" in agents and depth < 2:
    warnings.append(".claude/settings.json: set env CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH to 2 or more so the orchestrator can launch experts")

print(f"Agents: {len(agents)}  Skills: {len(skills)}  Wired skill uses: {sum(len(v) for v in skill_users.values())}")
for e in errors:
    print("ERROR  ", e)
for w in warnings:
    print("WARNING", w)
if not errors and not warnings:
    print("OK: no issues found")
sys.exit(1 if errors else 0)
