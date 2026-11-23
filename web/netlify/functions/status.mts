import type { Config } from "@netlify/functions";
import { status } from "../../server/experts.mjs";

// GET /api/status: whether the API key and an optional password are configured (never returns their values).
export default async () => status();

export const config: Config = { path: "/api/status", method: "GET" };
