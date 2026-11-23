import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import team from "./generated/team.json";
import { askAgent, getStatus, routeQuestion, setPassword, synthesize, getSavedPassword, ApiError } from "./api.js";

const TEAM = "team";
const MAX_CONTRIBUTION_CHARS = 19_000;
const agentsBySlug = Object.fromEntries(team.agents.map((a) => [a.slug, a]));
const orchestrator = agentsBySlug.orchestrator;

const EXAMPLES = {
  [TEAM]: [
    "A mainland pharma company wants a GenAI tool for deviation reports; half the users are at its plant in Juncos, Puerto Rico. Budget $250k. Should we take it, is it EXPORT or LOCAL, and what should we charge?",
    "We have $350k in the bank and two mainland clients at $40k a month. Can we afford two senior AI engineers in San Juan in Q1 2027?",
  ],
  default: ["What should I know from you before we launch?", "What are the three biggest risks in your area for our first year?"],
};

function Markdown({ children }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

function ModelBadge({ model }) {
  return <span className={`badge badge-${model}`} title={`Runs on Claude ${model}`}>{model}</span>;
}

function Avatar({ agent, size = "md" }) {
  return <span className={`avatar avatar-${size} avatar-${agent.model}`} aria-hidden="true">{agent.name.slice(0, 1)}</span>;
}

// ------------------------------------------------------------------ sidebar

function Sidebar({ selected, onSelect, open, onClose, busy }) {
  const [filter, setFilter] = useState("");
  const q = filter.trim().toLowerCase();
  const visible = team.agents.filter(
    (a) => a.slug !== "orchestrator" && (!q || `${a.name} ${a.role} ${a.voice} ${a.group}`.toLowerCase().includes(q)),
  );
  return (
    <aside className={`sidebar ${open ? "open" : ""}`} aria-label="Experts">
      <div className="sidebar-head">
        <div className="brand">
          <span className="brand-mark">21</span>
          <div>
            <div className="brand-name">Experts21</div>
            <div className="brand-sub">Your AI consulting advisory team</div>
          </div>
        </div>
        <button className="icon-btn close-sidebar" onClick={onClose} aria-label="Close list">✕</button>
      </div>

      <button className={`team-btn ${selected === TEAM ? "active" : ""}`} onClick={() => onSelect(TEAM)}>
        <span className="team-icon" aria-hidden="true">◎</span>
        <span>
          <strong>Ask the whole team</strong>
          <small>{orchestrator.name}, the orchestrator, picks the experts and combines their answers</small>
        </span>
        {busy.has(TEAM) && <span className="dot" aria-label="working" />}
      </button>

      <input className="search" type="search" placeholder="Find an expert…" value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Find an expert" />

      <nav className="agent-list">
        {team.groups.map((group) => {
          const agents = visible.filter((a) => a.group === group);
          if (!agents.length) return null;
          return (
            <section key={group}>
              <h3>{group}</h3>
              {agents.map((a) => (
                <button key={a.slug} className={`agent ${selected === a.slug ? "active" : ""}`} onClick={() => onSelect(a.slug)} title={`${a.description}\n\nWorking style: ${a.style}`}>
                  <Avatar agent={a} />
                  <span className="agent-text">
                    <span className="agent-top">
                      <strong>{a.name}</strong>
                      <ModelBadge model={a.model} />
                      {busy.has(a.slug) && <span className="dot" aria-label="working" />}
                    </span>
                    <span className="agent-role">{a.role}</span>
                    <span className="agent-voice">{a.voice}</span>
                  </span>
                </button>
              ))}
            </section>
          );
        })}
      </nav>
    </aside>
  );
}

// ------------------------------------------------------------------ chat pieces

function Notices({ notices }) {
  if (!notices?.length) return null;
  return notices.map((n, i) => <p key={i} className="notice">{n}</p>);
}

function AgentMessage({ agent, message }) {
  return (
    <div className="msg assistant">
      <Avatar agent={agent} size="sm" />
      <div className="bubble">
        <div className="msg-author">{agent.name} <span>· {agent.role}</span></div>
        {message.content ? <Markdown>{message.content}</Markdown> : message.streaming && <p className="thinking">{agent.name} is thinking…</p>}
        <Notices notices={message.notices} />
        {message.error && <p className="error">{message.error}</p>}
      </div>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="msg user">
      <div className="bubble">{text}</div>
    </div>
  );
}

function ExpertCard({ expert }) {
  const agent = agentsBySlug[expert.agent];
  const [open, setOpen] = useState(false);
  const state = expert.error ? "failed" : expert.done ? "done" : "working";
  return (
    <div className={`expert-card ${state}`}>
      <button className="expert-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <Avatar agent={agent} size="sm" />
        <span className="expert-title">
          <strong>{agent.name}</strong> <span>{agent.role}</span>
        </span>
        <ModelBadge model={agent.model} />
        <span className={`state state-${state}`}>{state === "working" ? "answering…" : state === "done" ? "answered" : "failed"}</span>
        <span className="chev" aria-hidden="true">{open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div className="expert-body">
          <p className="brief"><strong>Brief from {orchestrator.name}:</strong> {expert.brief}</p>
          {expert.text ? <Markdown>{expert.text}</Markdown> : !expert.error && <p className="thinking">Waiting for {agent.name}…</p>}
          <Notices notices={expert.notices} />
          {expert.error && <p className="error">{expert.error}</p>}
        </div>
      )}
    </div>
  );
}

function TeamTurn({ turn }) {
  return (
    <>
      <UserMessage text={turn.question} />
      <div className="msg assistant">
        <Avatar agent={orchestrator} size="sm" />
        <div className="bubble team-bubble">
          <div className="msg-author">{orchestrator.name} <span>· Orchestrator</span></div>
          {turn.stage === "routing" && <p className="thinking">{orchestrator.name} is choosing the experts…</p>}
          {turn.plan && <p className="plan">{turn.plan}</p>}
          {turn.experts.length > 0 && (
            <div className="experts">
              {turn.experts.map((e) => <ExpertCard key={e.agent} expert={e} />)}
            </div>
          )}
          {turn.stage === "experts" && <p className="thinking">Experts are answering in parallel…</p>}
          {turn.stage === "synthesis" && !turn.answer && <p className="thinking">{orchestrator.name} is combining the answers…</p>}
          {turn.answer && (
            <div className="combined">
              <div className="combined-label">Combined answer</div>
              <Markdown>{turn.answer}</Markdown>
            </div>
          )}
          <Notices notices={turn.notices} />
          {turn.error && <p className="error">{turn.error}</p>}
        </div>
      </div>
    </>
  );
}

function Composer({ onSend, onStop, busy, placeholder }) {
  const [text, setText] = useState("");
  const send = () => {
    const t = text.trim();
    if (!t || busy) return;
    onSend(t);
    setText("");
  };
  return (
    <form className="composer" onSubmit={(e) => { e.preventDefault(); send(); }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            send();
          }
        }}
        placeholder={placeholder}
        rows={2}
        aria-label="Your question"
      />
      {busy ? (
        <button type="button" className="btn stop" onClick={onStop}>Stop</button>
      ) : (
        <button type="submit" className="btn send" disabled={!text.trim()}>Send</button>
      )}
    </form>
  );
}

function PasswordGate({ onDone }) {
  const [value, setValue] = useState("");
  return (
    <div className="gate">
      <form className="gate-card" onSubmit={(e) => { e.preventDefault(); setPassword(value); onDone(); }}>
        <h2>Experts21</h2>
        <p>This app is password-protected. Enter the password set in Netlify (<code>APP_PASSWORD</code>).</p>
        <input type="password" value={value} onChange={(e) => setValue(e.target.value)} autoFocus aria-label="Password" />
        <button className="btn send" type="submit" disabled={!value}>Continue</button>
      </form>
    </div>
  );
}

// ------------------------------------------------------------------ app

export default function App() {
  const [selected, setSelected] = useState(TEAM);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState({});
  const [teamTurns, setTeamTurns] = useState([]);
  const [busy, setBusy] = useState(() => new Set());
  const [status, setStatus] = useState(null);
  const [needPassword, setNeedPassword] = useState(false);
  const controllers = useRef({});
  const scroller = useRef(null);

  useEffect(() => {
    getStatus()
      .then((s) => {
        setStatus(s);
        if (s.passwordRequired && !getSavedPassword()) setNeedPassword(true);
      })
      .catch((e) => setStatus({ error: e.message }));
  }, []);

  const messages = chats[selected] ?? [];
  const agent = selected === TEAM ? orchestrator : agentsBySlug[selected];
  const isBusy = busy.has(selected);

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, teamTurns, selected]);

  const markBusy = (key, on) =>
    setBusy((prev) => {
      const next = new Set(prev);
      on ? next.add(key) : next.delete(key);
      return next;
    });

  const handleAuthError = (err) => {
    if (err instanceof ApiError && err.status === 401) setNeedPassword(true);
    return err.name === "AbortError" ? "Stopped." : err.message;
  };

  // ---- one agent
  async function sendToAgent(slug, text) {
    const history = [...(chats[slug] ?? []), { role: "user", content: text }];
    const index = history.length;
    setChats((prev) => ({ ...prev, [slug]: [...history, { role: "assistant", content: "", notices: [], streaming: true }] }));
    const update = (fn) =>
      setChats((prev) => ({ ...prev, [slug]: prev[slug].map((m, i) => (i === index ? fn(m) : m)) }));
    const controller = new AbortController();
    controllers.current[slug] = controller;
    markBusy(slug, true);
    try {
      const apiMessages = history.filter((m) => !m.error && m.content).map(({ role, content }) => ({ role, content }));
      await askAgent(slug, apiMessages, (ev) => {
        if (ev.type === "text") update((m) => ({ ...m, content: m.content + ev.text }));
        if (ev.type === "notice") update((m) => ({ ...m, notices: [...m.notices, ev.text] }));
      }, controller.signal);
      update((m) => ({ ...m, streaming: false }));
    } catch (err) {
      const msg = handleAuthError(err);
      update((m) => ({ ...m, streaming: false, error: msg }));
    } finally {
      markBusy(slug, false);
    }
  }

  // ---- whole team: route -> experts in parallel -> synthesis
  async function sendToTeam(question) {
    const index = teamTurns.length;
    const history = teamTurns.filter((t) => t.answer && !t.error).map((t) => ({ question: t.question, answer: t.answer.slice(0, MAX_CONTRIBUTION_CHARS) }));
    setTeamTurns((prev) => [...prev, { question, stage: "routing", plan: "", experts: [], answer: "", notices: [] }]);
    const update = (fn) => setTeamTurns((prev) => prev.map((t, i) => (i === index ? fn(t) : t)));
    const updateExpert = (slug, fn) => update((t) => ({ ...t, experts: t.experts.map((e) => (e.agent === slug ? fn(e) : e)) }));
    const controller = new AbortController();
    controllers.current[TEAM] = controller;
    markBusy(TEAM, true);
    try {
      const route = await routeQuestion(question, history, controller.signal);
      update((t) => ({
        ...t,
        stage: "experts",
        plan: route.plan,
        experts: route.experts.map((e) => ({ ...e, text: "", notices: [], done: false, error: "" })),
      }));

      const results = await Promise.allSettled(
        route.experts.map(({ agent: slug, brief }) =>
          askAgent(
            slug,
            [{
              role: "user",
              content: `Brief from ${orchestrator.name}, the orchestrator:\n\n${brief}\n\nThe consultant's original question:\n\n${question}`,
            }],
            (ev) => {
              if (ev.type === "text") updateExpert(slug, (e) => ({ ...e, text: e.text + ev.text }));
              if (ev.type === "notice") updateExpert(slug, (e) => ({ ...e, notices: [...e.notices, ev.text] }));
            },
            controller.signal,
          ).then(
            (text) => { updateExpert(slug, (e) => ({ ...e, done: true })); return { agent: slug, answer: text }; },
            (err) => { updateExpert(slug, (e) => ({ ...e, error: handleAuthError(err) })); throw err; },
          ),
        ),
      );
      if (controller.signal.aborted) throw new DOMException("Stopped", "AbortError");
      const contributions = results
        .filter((r) => r.status === "fulfilled" && r.value.answer.trim())
        .map((r) => ({ agent: r.value.agent, answer: r.value.answer.slice(0, MAX_CONTRIBUTION_CHARS) }));
      if (!contributions.length) throw new Error("None of the experts could answer. Check the errors above and try again.");
      const failed = route.experts.length - contributions.length;
      if (failed) update((t) => ({ ...t, notices: [...t.notices, `${failed} expert(s) failed; the combined answer uses the others.`] }));

      update((t) => ({ ...t, stage: "synthesis" }));
      await synthesize(question, history, contributions, (ev) => {
        if (ev.type === "text") update((t) => ({ ...t, answer: t.answer + ev.text }));
        if (ev.type === "notice") update((t) => ({ ...t, notices: [...t.notices, ev.text] }));
      }, controller.signal);
      update((t) => ({ ...t, stage: "done" }));
    } catch (err) {
      const msg = handleAuthError(err);
      update((t) => ({ ...t, stage: "done", error: msg }));
    } finally {
      markBusy(TEAM, false);
    }
  }

  const onSend = (text) => (selected === TEAM ? sendToTeam(text) : sendToAgent(selected, text));
  const onStop = () => controllers.current[selected]?.abort();
  const onSelect = (key) => {
    setSelected(key);
    setSidebarOpen(false);
  };
  const clearChat = () => (selected === TEAM ? setTeamTurns([]) : setChats((prev) => ({ ...prev, [selected]: [] })));
  const empty = selected === TEAM ? teamTurns.length === 0 : messages.length === 0;
  const examples = useMemo(() => EXAMPLES[selected === TEAM ? TEAM : "default"], [selected]);

  return (
    <div className="app">
      {needPassword && <PasswordGate onDone={() => setNeedPassword(false)} />}
      <Sidebar selected={selected} onSelect={onSelect} open={sidebarOpen} onClose={() => setSidebarOpen(false)} busy={busy} />
      {sidebarOpen && <div className="scrim" onClick={() => setSidebarOpen(false)} />}

      <main className="chat">
        <header className="chat-head">
          <button className="icon-btn open-sidebar" onClick={() => setSidebarOpen(true)} aria-label="Show experts">☰</button>
          <Avatar agent={agent} />
          <div className="chat-title">
            <div className="chat-name">
              {selected === TEAM ? "The whole team" : agent.name}
              <span className="chat-role">{selected === TEAM ? `via ${agent.name}, the orchestrator` : agent.role}</span>
              <ModelBadge model={agent.model} />
            </div>
            <div className="chat-persona">
              <span><strong>Voice:</strong> {agent.voice}</span>
              <span><strong>Working style:</strong> {agent.style}</span>
            </div>
          </div>
          {!empty && <button className="btn ghost" onClick={clearChat} disabled={isBusy}>New chat</button>}
        </header>

        {status?.error && <div className="banner">Can't reach the API: {status.error}</div>}
        {status && !status.error && !status.configured && (
          <div className="banner">The server has no <code>ANTHROPIC_API_KEY</code> yet. Add it in Netlify (Site configuration → Environment variables) and redeploy.</div>
        )}

        <div className="messages" ref={scroller} aria-live="polite">
          {empty && (
            <div className="empty">
              <Avatar agent={agent} size="lg" />
              <h2>{selected === TEAM ? "Ask the whole team" : `Ask ${agent.name}`}</h2>
              <p>{selected === TEAM
                ? `${agent.name} picks the right experts, they answer in parallel, and ${agent.name} combines their views into one answer.`
                : agent.description}</p>
              {selected !== TEAM && agentsBySlug[selected]?.knowledgeFiles?.length > 0 && (
                <p className="kb">Knowledge folder: {agentsBySlug[selected].knowledgeFiles.join(", ")}</p>
              )}
              <div className="examples">
                {examples.map((ex) => (
                  <button key={ex} className="example" onClick={() => onSend(ex)} disabled={isBusy}>{ex}</button>
                ))}
              </div>
            </div>
          )}
          {selected === TEAM
            ? teamTurns.map((t, i) => <TeamTurn key={i} turn={t} />)
            : messages.map((m, i) => (m.role === "user" ? <UserMessage key={i} text={m.content} /> : <AgentMessage key={i} agent={agent} message={m} />))}
        </div>

        <Composer
          onSend={onSend}
          onStop={onStop}
          busy={isBusy}
          placeholder={selected === TEAM ? "Ask the whole team… (Enter to send, Shift+Enter for a new line)" : `Ask ${agent.name}… (Enter to send)`}
        />
        <p className="footnote">AI advisors, not licensed professionals. Confirm tax and legal conclusions with a Puerto Rico attorney or CPA.</p>
      </main>
    </div>
  );
}
