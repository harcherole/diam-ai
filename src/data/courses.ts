export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
}

export const courses: Course[] = [
  { id: "python", title: "Python", description: "Les fondamentaux du langage au cœur de la Data et de l'IA.", level: "Débutant" },
  { id: "data-science", title: "Data Science", description: "Manipulation, analyse et visualisation de données.", level: "Débutant" },
  { id: "machine-learning", title: "Machine Learning", description: "Algorithmes supervisés et non supervisés, évaluation de modèles.", level: "Intermédiaire" },
  { id: "deep-learning", title: "Deep Learning", description: "Réseaux de neurones, vision par ordinateur, NLP.", level: "Intermédiaire" },
  { id: "reinforcement-learning", title: "Reinforcement Learning", description: "Agents, environnements et apprentissage par renforcement.", level: "Avancé" },
  { id: "recommendation-systems", title: "Recommendation Systems", description: "Systèmes de recommandation, du filtrage collaboratif au deep learning.", level: "Avancé" },
  { id: "optimization", title: "Optimization", description: "Descente de gradient, optimisation convexe et métaheuristiques.", level: "Avancé" },
  { id: "llm", title: "LLM", description: "Fonctionnement et usage des grands modèles de langage.", level: "Avancé" },
  { id: "generative-ai", title: "Generative AI", description: "RAG, prompt engineering, applications génératives.", level: "Avancé" },
  { id: "ai-agents", title: "AI Agents", description: "Conception d'agents IA autonomes et orchestration d'outils.", level: "Avancé" },
];
