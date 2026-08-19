import SectionKicker from "@/components/ui/SectionKicker";

interface SectionTitleProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <SectionKicker light={light}>{kicker}</SectionKicker>
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-ink-700"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
