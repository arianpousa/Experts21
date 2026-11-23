import type { Config } from "@netlify/functions";
import { synthesize, errorResponse } from "../../server/experts.mjs";

// POST /api/synthesize (see server/experts.mjs). The Claude API key stays on the server.
export default async (req: Request) => {
  try {
    return await synthesize(req);
  } catch (err) {
    return errorResponse(err);
  }
};

export const config: Config = { path: "/api/synthesize", method: "POST" };
