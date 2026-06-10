# Blueprint técnico — Project Discovery AI

## Objetivo

Criar um copiloto particular para reuniões com clientes.

O sistema captura a conversa, transcreve com NVIDIA NIM, identifica dores, brechas e requisitos, sugere perguntas durante a reunião e gera escopo, MVP, arquitetura e proposta depois da call.

## Arquitetura

```txt
Electron Desktop
  -> Captura de áudio
  -> Node.js Core
  -> NVIDIA NIM Cloud API
  -> SQLite
  -> Qdrant
  -> Agentes de análise
  -> Exportação
```

## Modos

### Modo Reunião

- Transcrição quase em tempo real.
- Sugestões privadas.
- Perguntas inteligentes.
- Registro completo.

### Modo Pós-call

- Resumo fiel.
- Dores.
- Requisitos.
- Brechas.
- MVP.
- Arquitetura.
- Proposta.

## Modelos NVIDIA NIM

- ASR: Parakeet multilingual.
- Tempo real: Nemotron Nano.
- Pós-call: Nemotron Super.
- Embeddings: Nemotron Embed.
- Rerank: Nemotron Rerank.

## Decisão

Projeto interno. Não é SaaS. Não usar Python.
