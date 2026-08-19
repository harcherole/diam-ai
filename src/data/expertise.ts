export interface ExpertiseDomain {
  id: string;
  label: string;
}

export const expertiseDomains: ExpertiseDomain[] = [
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "deep-learning", label: "Deep Learning" },
  { id: "generative-ai", label: "Generative AI" },
  { id: "llm", label: "LLM" },
  { id: "rag", label: "RAG" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "mlops", label: "MLOps" },
  { id: "data-engineering", label: "Data Engineering" },
  { id: "cloud-azure", label: "Cloud & Azure" },
  { id: "optimisation", label: "Optimisation" },
  { id: "mathematiques", label: "Mathématiques pour l'IA" },
];
