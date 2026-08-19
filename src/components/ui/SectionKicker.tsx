interface SectionKickerProps {
  children: string;
  light?: boolean;
}

/**
 * Label mono-espacé au-dessus des titres de section (ex. "— FORMATION").
 * Élément récurrent de l'identité éditoriale DIAM-AI.
 */
export default function SectionKicker({ children, light = false }: SectionKickerProps) {
  return (
    <p
      className={`mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "text-cyan" : "text-accent"
      }`}
    >
      — {children}
    </p>
  );
}
