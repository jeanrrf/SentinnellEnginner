# Project Discovery AI

Aplicação desktop particular para registrar reuniões com clientes, transcrever áudio via NVIDIA NIM, analisar dores, requisitos e brechas, sugerir perguntas inteligentes e gerar escopo, MVP, arquitetura e proposta pós-call.

## Decisão técnica

- Node.js + TypeScript
- Electron + React
- Fastify API local
- Socket.IO para tempo real
- Prisma + SQLite
- Qdrant local para RAG
- NVIDIA NIM Cloud API como motor de IA
- Sem Python na arquitetura principal
- Uso particular/interno, sem SaaS

## Fluxo principal

```txt
Google Meet
  -> Captura de áudio local
  -> Chunks de áudio
  -> Transcrição NVIDIA NIM
  -> SQLite
  -> Agentes de análise ao vivo
  -> Sugestões privadas
  -> Análise pós-call
  -> Escopo / MVP / arquitetura / proposta
```

## Setup planejado

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Status

Scaffold inicial em implantação neste repositório.
