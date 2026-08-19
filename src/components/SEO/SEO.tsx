import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_NAME = "DIAM-AI";
const SITE_URL = "https://diam-ai.com"; // à remplacer une fois le domaine connecté
const DEFAULT_IMAGE = "/og-image.jpg";

/**
 * Composant SEO générique, posé en tête de chaque page.
 *
 * Prêt pour le multilingue futur : `lang` est isolé ici (actuellement "fr").
 * Le jour où l'anglais sera ajouté, il suffira de passer `lang` en prop
 * depuis un contexte de langue, sans toucher aux pages qui consomment SEO.
 */
export default function SEO({ title, description, path = "/", image = DEFAULT_IMAGE }: SEOProps) {
  const lang = "fr";
  const fullTitle = `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
