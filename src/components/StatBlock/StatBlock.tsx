import type { SiteConfig } from "@/data/siteConfig";

type KeyFigure = SiteConfig["keyFigures"][number];

interface StatBlockProps {
  figure: KeyFigure;
}

/**
 * Affiche un chiffre clé UNIQUEMENT s'il est renseigné dans siteConfig.
 * Tant que `value` est `null`, un état "à venir" s'affiche — jamais de
 * chiffre inventé.
 */
export default function StatBlock({ figure }: StatBlockProps) {
  return (
    <div className="border-l-2 border-accent/30 pl-5">
      {figure.value !== null ? (
        <p className="font-display text-4xl font-bold text-white">
          {figure.value}
          {figure.suffix}
        </p>
      ) : (
        <p className="font-display text-2xl font-semibold text-white/40">
          À venir
        </p>
      )}
      <p className="mt-1 text-sm text-white/60">{figure.label}</p>
    </div>
  );
}
