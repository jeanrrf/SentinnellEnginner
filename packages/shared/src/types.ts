export type Speaker = "consultor" | "cliente" | "desconhecido";
export type AudioChannel = "microphone" | "system" | "mixed";

export type TranscriptSegment = {
  id?: string;
  meetingId: string;
  speaker: Speaker;
  channel: AudioChannel;
  text: string;
  startMs?: number;
  endMs?: number;
  confidence?: number;
};

export type InsightPriority = "low" | "medium" | "high";

export type Insight = {
  id?: string;
  meetingId: string;
  segmentId?: string;
  type: string;
  priority: InsightPriority;
  title: string;
  description?: string;
  question?: string;
  evidence?: string;
};

export type ProjectOutput = {
  id?: string;
  meetingId: string;
  type: string;
  title: string;
  content: string;
};
