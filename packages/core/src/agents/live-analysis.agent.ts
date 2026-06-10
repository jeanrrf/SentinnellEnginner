import { NimChatService } from "../nim/nim-chat.service";
import { BASE_SYSTEM_PROMPT } from "../prompts/base.prompt";
import { env } from "../config/env";

export class LiveAnalysisAgent {
  constructor(private readonly chat = new NimChatService()) {}

  async analyzeSegment(input: { speaker: string; text: string }) {
    const user = `
Analise este trecho de reunião e retorne JSON.

Fala de: ${input.speaker}
Trecho: ${input.text}

Detecte:
- dor
- brecha
- pergunta sugerida
- requisito possível
- oportunidade

Formato:
{
  "insights": [
    {
      "type": "gap | pain | suggested_question | requirement | opportunity",
      "priority": "low | medium | high",
      "title": "curto",
      "description": "direto",
      "question": "se houver"
    }
  ]
}
`;

    return this.chat.complete({
      system: BASE_SYSTEM_PROMPT,
      user,
      model: env.modelLive,
      temperature: 0.1,
    });
  }
}
