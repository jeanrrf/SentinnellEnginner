import { nimClient } from "./nim-client";
import { env } from "../config/env";

export class NimChatService {
  async complete(params: {
    system: string;
    user: string;
    model?: string;
    temperature?: number;
  }) {
    const response = await nimClient.chat.completions.create({
      model: params.model ?? env.modelDeep,
      temperature: params.temperature ?? 0.2,
      messages: [
        { role: "system", content: params.system },
        { role: "user", content: params.user },
      ],
    });

    return response.choices[0]?.message?.content ?? "";
  }
}
