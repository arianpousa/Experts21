import type { Config } from "@netlify/functions";
import { route, errorResponse } from "../../server/experts.mjs";

// POST /api/route (see server/experts.mjs). The Claude API key stays on the server.
export default async (req: Request) => {
  try {
    return await route(req);
  } catch (err) {
    return errorResponse(err);
  }
};

export const config: Config = { path: "/api/route", method: "POST" };
