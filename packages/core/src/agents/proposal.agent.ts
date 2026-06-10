import { NimChatService } from "../nim/nim-chat.service";
import { BASE_SYSTEM_PROMPT } from "../prompts/base.prompt";
import { env } from "../config/env";

export class ProposalAgent {
  constructor(private readonly chat = new NimChatService()) {}

  async generate(transcript: string) {
    return this.chat.complete({
      system: BASE_SYSTEM_PROMPT,
      model: env.modelDeep,
      temperature: 0.2,
      user: `
Com base na transcrição abaixo, gere uma proposta objetiva.

Estrutura:
1. Entendimento do problema
2. Dores identificadas
3. Solução proposta
4. Módulos do MVP
5. Arquitetura sugerida
6. Pontos a validar
7. Próximos passos

Transcrição:
${transcript}
`,
    });
  }
}
