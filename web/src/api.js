// Browser-side calls to the Netlify Functions. No API key ever lives here.

const PASSWORD_KEY = "experts21-password";

export function getSavedPassword() {
  try {
    return sessionStorage.getItem(PASSWORD_KEY) ?? "";
  } catch {
    return "";
  }
}

export function savePassword(value) {
  try {
    sessionStorage.setItem(PASSWORD_KEY, value);
  } catch {
    // Storage blocked: the password is kept in memory for this page only.
  }
}

let password = getSavedPassword();
export const setPassword = (value) => {
  password = value;
  savePassword(value);
};

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function headers() {
  const h = { "content-type": "application/json" };
  if (password) h["x-app-password"] = password;
  return h;
}

async function failure(res) {
  let message = `Request failed (${res.status}).`;
  try {
    message = (await res.json()).error ?? message;
  } catch {
    if (res.status === 404) message = "The API is not running. Locally, start the app with `netlify dev`.";
  }
  return new ApiError(res.status, message);
}

export async function getStatus() {
  const res = await fetch("/api/status");
  if (!res.ok) throw await failure(res);
  return res.json();
}

export async function routeQuestion(question, history, signal) {
  const res = await fetch("/api/route", { method: "POST", headers: headers(), body: JSON.stringify({ question, history }), signal });
  if (!res.ok) throw await failure(res);
  return res.json();
}

// POST to a streaming endpoint and call onEvent for each NDJSON event.
// Resolves with the full text when the server sends "done"; rejects on error.
export async function streamEvents(path, body, onEvent, signal) {
  const res = await fetch(path, { method: "POST", headers: headers(), body: JSON.stringify(body), signal });
  if (!res.ok) throw await failure(res);
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let text = "";
  let done = false;
  for (;;) {
    const { value, done: finished } = await reader.read();
    if (finished) break;
    buffer += decoder.decode(value, { stream: true });
    let nl;
    while ((nl = buffer.indexOf("\n")) >= 0) {
      const line = buffer.slice(0, nl).trim();
      buffer = buffer.slice(nl + 1);
      if (!line) continue;
      const event = JSON.parse(line);
      if (event.type === "text") text += event.text;
      if (event.type === "done") done = true;
      if (event.type === "error") throw new ApiError(502, event.error);
      onEvent(event);
    }
  }
  if (!done) throw new ApiError(504, "The answer stopped before it finished (the server time limit is 60 seconds). Try a narrower question.");
  return text;
}

export const askAgent = (agent, messages, onEvent, signal) => streamEvents("/api/ask", { agent, messages }, onEvent, signal);

export const synthesize = (question, history, contributions, onEvent, signal) =>
  streamEvents("/api/synthesize", { question, history, contributions }, onEvent, signal);
