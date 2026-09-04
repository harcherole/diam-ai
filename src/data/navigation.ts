export interface NavItem {
  label: string;
  path: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Activités", path: "/activites" },
  { label: "Projets", path: "/projets" },
  { label: "Événements", path: "/evenements" },
  { label: "Initiatives", path: "/initiatives" },
  { label: "Partenaires", path: "/partenaires" },
  { label: "Formation", path: "/formation" },
  { label: "Contact", path: "/contact" },
];

export const footerNavigation: NavItem[] = [
  { label: "À propos", path: "/a-propos" },
  { label: "Activités", path: "/activites" },
  { label: "Projets", path: "/projets" },
  { label: "Événements", path: "/evenements" },
  { label: "Initiatives", path: "/initiatives" },
  { label: "Formation", path: "/formation" },
  { label: "Accompagnement", path: "/accompagnement" },
  { label: "Partenaires", path: "/partenaires" },
  { label: "Contact", path: "/contact" },
];
