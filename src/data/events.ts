export interface DiamEvent {
  id: string;
  title: string;
  /** Format ISO (YYYY-MM-DD) pour un tri et un filtrage fiables. */
  date: string;
  organizer: string;
  location: string;
  description: string;
  image: string;
  /** Lien externe (inscription, replay...) si disponible. */
  link?: string;
}

/**
 * Événements auxquels DIAM-AI / ses membres ont participé ou qu'ils ont
 * organisés. Trié par défaut du plus récent au plus ancien par le composant
 * qui consomme cette liste — pas besoin de les ranger manuellement ici.
 *
 * Pour ajouter un événement : dépose le visuel dans
 * public/assets/events/, puis ajoute une entrée ci-dessous.
 */
export const events: DiamEvent[] = [
 {
  id: "livre-mlops-azure-2026",
  title: "Sortie du livre — MLOps avec Microsoft Azure",
  date: "2026-08-29",
  organizer: "Georf Miguiama Bamba",
  location: "Disponible en ligne (Amazon)",
  description:
    "Guide pratique pour déployer des modèles de Machine Learning en production sur Microsoft Azure : MLflow, Azure DevOps, Docker et AKS — de la conception du modèle à son déploiement dans le cloud.",
  image: "/assets/events/livre-mlops-azure-amazon-2026-08-29.jpg",
  link: "https://www.amazon.fr/MLOps-sur-Azure-DevOps-Kubernetes/dp/B0HF4WGKMV/",
  },
  {
    id: "olympiade-ia-gabon-2026",
    title: "Olympiade IA Gabon 2026",
    date: "2026-08-01",
    organizer: "DIAM Club",
    location: "100% en ligne",
    description:
      "Formation & compétition IA pour les lycéens du Gabon (Seconde, Première, Terminale), en individuel ou en équipe de 2 à 3.",
    image: "/assets/events/olympiade-ia-gabon-2026-08-01.jpg",
  },
  {
    id: "conference-jeunesse-oser-rever-grand-2026",
    title: "Conférence Jeunesse — Oser Rêver Grand",
    date: "2026-07-30",
    organizer: "Conférence Jeunesse",
    location: "Gabon",
    description:
      "Intervention de Georf Miguiama Bamba, Ingénieur en IA, à la conférence jeunesse « Oser Rêver Grand ».",
    image: "/assets/events/conference-jeunesse-oser-rever-grand-2026-07-30.jpg",
  },
  {
    id: "codon-veillee-01-2026",
    title: "COD'ON Veillée 01 — Coder avec l'IA : super-pouvoir ou piège ?",
    date: "2026-07-16",
    organizer: "COD'ON",
    location: "En ligne",
    description:
      "Échange et débat autour de l'IA en développement logiciel, avec Romaric Banga (Lead Developer, Spring & GCP) et Dr Nzamba Bignoumba (Machine Learning & Healthcare).",
    image: "/assets/events/codon-veillee-01-ia-2026-07-16.jpg",
    link: "https://madeingabao.codon.ga",
  },
  {
    id: "informatique-ia-mounana-moanda-2026",
    title: "Maîtriser l'Informatique à l'ère de l'IA — Mounana, Moanda",
    date: "2026-06-20",
    organizer: "Georf Miguiama Bamba",
    location: "Mounana, Moanda et environs",
    description:
      "Initiation grand public : fonctionnement d'un ordinateur, outils gratuits, découverte de l'IA et astuces de productivité. Aucune connaissance requise.",
    image: "/assets/events/informatique-ia-mounana-moanda-2026-06-20.jpg",
  },
  {
    id: "vivatech-libreville-2026",
    title: "VivaTech Libreville Gabon 2026 — Side Event",
    date: "2026-06-19",
    organizer: "VivaTech",
    location: "Libreville, Gabon",
    description:
      "Keynote « Exploiter le potentiel de l'IA pour améliorer le système de santé », avec Dr Marcia Angue (Conseillère technique Santé et Affaires sociales).",
    image: "/assets/events/vivatech-libreville-2026-06-19.jpg",
  },
  {
    id: "archidux-ia-agroalimentaire-2026",
    title: "L'IA & l'Agroalimentaire — Opportunités, innovation et avenir du secteur",
    date: "2026-05-31",
    organizer: "Archidux Solutions",
    location: "En ligne (Google Meet)",
    description:
      "Conférence gratuite sur l'IA appliquée à l'agroalimentaire, avec Hisham Junior Guira comme modérateur.",
    image: "/assets/events/archidux-ia-agroalimentaire-2026-05-31.jpg",
  },
  {
    id: "adeni-ia-education-afrique-2026",
    title: "Intelligence Artificielle & Éducation en Afrique",
    date: "2026-04-09",
    organizer: "ADENI",
    location: "Institut Français, Djibouti",
    description:
      "Conférence gratuite sur l'IA adaptée aux réalités africaines et son potentiel pour transformer l'éducation sur le continent.",
    image: "/assets/events/adeni-ia-education-afrique-2026-04-09.jpg",
  },
  {
    id: "gabhackia-2026",
    title: "GABHACKIA — Le Hackathon Gabonais dédié à l'IA",
    date: "2026-02-25",
    organizer: "AN Data Consulting",
    location: "Libreville (présentiel) · Port-Gentil, Moanda (en ligne)",
    description:
      "Hackathon national IA : agriculture, santé, finance, énergie, environnement, transport, administration, culture. 3 jours de compétition, formation incluse.",
    image: "/assets/events/gabhackia-hackathon-ia-2026-02-25.jpg",
  },
  {
    id: "python-data-science-ia-2025",
    title: "Python pour la Data Science et l'IA",
    date: "2025-10-25",
    organizer: "D.I.A.M",
    location: "100% en ligne",
    description:
      "Formation gratuite pour élèves et étudiants : bases de Python, NumPy, Pandas, Matplotlib et analyse exploratoire de données (EDA).",
    image: "/assets/events/python-data-science-ia-2025-10-25.jpg",
  },
  {
    id: "sommet-ia-yann-lecun-2025",
    title: "Sommet pour l'Action sur l'IA — rencontre avec Yann LeCun",
    date: "2025-07-24",
    organizer: "École Polytechnique (X)",
    location: "Palaiseau, France",
    description:
      "Rencontre avec Yann LeCun, l'un des pères fondateurs du Deep Learning, à l'École Polytechnique, en marge du Sommet pour l'Action sur l'IA (IA, Science and Society).",
    image: "/assets/events/sommet-ia-yann-lecun-polytechnique-2025-07-24.jpg",
    link: "https://www.elysee.fr/sommet-pour-l-action-sur-l-ia",
  },
  {
    id: "masterclass-metiers-data-2025",
    title: "Masterclass Exclusive — Les métiers de la Data",
    date: "2025-07-26",
    organizer: "Georf Miguiama Bamba",
    location: "100% en ligne",
    description:
      "Masterclass gratuite pour nouveaux bacheliers, Licence 3/Master 1 et professionnels : panorama des métiers de la Data (Analyst, Engineer, Scientist, BI), parcours de formation et opportunités concrètes en Afrique.",
    image: "/assets/events/masterclass-metiers-data-2025-07-26.jpg",
  },
  {
    id: "forum-gabon-ia-numerique-2025",
    title: "Forum Virtuel Gabon IA & Numérique — Panel 4",
    date: "2025-10-16",
    organizer: "Gabon Data Dialogues · CyberRCE · Africa Global Data",
    location: "En ligne (Microsoft Teams)",
    description:
      "1ère édition du Forum Virtuel Gabon IA & Numérique. Panel 4 : « La donnée au service de l'économie (agriculture, tourisme, entrepreneuriat), du social, et l'importance de la cybersécurité au Gabon ».",
    image: "/assets/events/forum-gabon-ia-numerique-panel4-2025-10-16.jpg",
  },
  {
    id: "moov-hackathon-ia-panel-2024",
    title: "MOOV Hackathon IA — Panel : quel futur pour nos entreprises ?",
    date: "2024-06-19",
    organizer: "Moov Africa Gabon Telecom",
    location: "Gabon",
    description:
      "MOOV Hackathon Intelligence Artificielle 2024, organisé avec le Ministère de l'Économie Numérique et des Nouvelles Technologies de l'Information. Panel du 29 juin sur le thème « L'intelligence artificielle, quel futur pour nos entreprises ? ».",
    image: "/assets/events/moov-hackathon-ia-panel-entreprises-2024-06-19.jpg",
  },
  {
    id: "moov-hackathon-ia-comite-2024",
    title: "MOOV Hackathon IA — Comité d'organisation",
    date: "2024-06-18",
    organizer: "Moov Africa Gabon Telecom",
    location: "Libreville, Gabon",
    description:
      "Rencontre avec le comité d'organisation du MOOV Hackathon Intelligence Artificielle 2024, en amont du panel du 29 juin.",
    image: "/assets/events/moov-hackathon-ia-comite-organisation-2024-06-18.jpg",
  },
  {
    id: "face-aux-experts-datascience-2024-fev13",
    title: "Face aux Experts — Data Science : enjeux et usages",
    date: "2024-02-13",
    organizer: "Talentus Consulting",
    location: "100% en ligne",
    description:
      "Masterclass gratuite « Face aux Experts » sur les enjeux et usages de la Data Science, avec Georf Miguiama, Senior Data Scientist.",
    image: "/assets/events/face-aux-experts-datascience-2024-02-13.jpg",
  },
  {
    id: "face-aux-experts-datascience-2024-fev07",
    title: "Face aux Experts — La Data Science, quels enjeux et usages pour une organisation ?",
    date: "2024-02-07",
    organizer: "Talentus Consulting",
    location: "100% en ligne",
    description:
      "Masterclass offerte « Face aux Experts », avec Georf Miguiama, Senior Data Scientist (France), sur les enjeux et usages de la Data Science pour une organisation.",
    image: "/assets/events/face-aux-experts-datascience-2024-02-07.jpg",
  },
];
