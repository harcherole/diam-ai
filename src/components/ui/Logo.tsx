import { Link } from "react-router-dom";

type Variant = "emblem" | "lockup";
type Tone = "color" | "white";

interface LogoProps {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  /** Enveloppe le logo dans un lien vers l'accueil (comportement par défaut). */
  linkToHome?: boolean;
}

const SOURCES: Record<Variant, Record<Tone, string>> = {
  emblem: {
    color: "/assets/brand/diam-ai-emblem.png",
    white: "/assets/brand/diam-ai-emblem-white.png",
  },
  lockup: {
    color: "/assets/brand/diam-ai-lockup.png",
    white: "/assets/brand/diam-ai-lockup-white.png",
  },
};

/**
 * Logo DIAM-AI — composant unique à utiliser partout où la marque apparaît
 * (navbar, footer, pages, articles) plutôt que de retaper "DIAM-AI" en texte
 * ou de référencer les images à la main.
 *
 * - `variant="emblem"` : icône seule (D + Afrique), compacte — navbar, favicon-like usages.
 * - `variant="lockup"` : icône + texte "DIAM-AI" empilés — footer, en-tête d'article, écrans larges.
 * - `tone="color"` : sur fond blanc / clair.
 * - `tone="white"` : sur fond bleu nuit / sombre.
 *
 * Exemple dans un article : `<Logo variant="lockup" tone="color" className="h-14" />`
 */
export default function Logo({
  variant = "emblem",
  tone = "color",
  className = "h-10 w-auto",
  linkToHome = true,
}: LogoProps) {
  const img = (
    <img
      src={SOURCES[variant][tone]}
      alt="DIAM-AI — Data, Intelligence Artificielle & Mathématiques"
      className={className}
    />
  );

  if (!linkToHome) return img;

  return (
    <Link to="/" aria-label="Retour à l'accueil DIAM-AI" className="inline-flex items-center">
      {img}
    </Link>
  );
}
