import type { Config } from "@netlify/functions";
import { ask, errorResponse } from "../../server/experts.mjs";

// POST /api/ask (see server/experts.mjs). The Claude API key stays on the server.
export default async (req: Request) => {
  try {
    return await ask(req);
  } catch (err) {
    return errorResponse(err);
  }
};

export const config: Config = { path: "/api/ask", method: "POST" };
