import "dotenv/config";

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 4317),
  nvidiaApiKey: process.env.NVIDIA_API_KEY ?? "",
  nvidiaBaseUrl: process.env.NVIDIA_NIM_BASE_URL ?? "https://integrate.api.nvidia.com/v1",
  modelLive: process.env.NIM_MODEL_LIVE ?? "nvidia/nvidia-nemotron-nano-9b-v2",
  modelDeep: process.env.NIM_MODEL_DEEP ?? "nvidia/llama-3.3-nemotron-super-49b-v1.5",
  modelAsr: process.env.NIM_MODEL_ASR ?? "nvidia/parakeet-1.1b-rnnt-multilingual-asr",
  qdrantUrl: process.env.QDRANT_URL ?? "http://localhost:6333",
};
