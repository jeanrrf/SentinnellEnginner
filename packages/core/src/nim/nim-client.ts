import OpenAI from "openai";
import { env } from "../config/env";

export const nimClient = new OpenAI({
  apiKey: env.nvidiaApiKey,
  baseURL: env.nvidiaBaseUrl,
});
