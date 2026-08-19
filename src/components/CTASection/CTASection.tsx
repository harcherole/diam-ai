import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  kicker?: string;
  title: string;
  description?: string;
  ctaLabel: string;
  ctaTo: string;
  external?: boolean;
}

export default function CTASection({
  kicker = "Passons à l'action",
  title,
  description,
  ctaLabel,
  ctaTo,
  external = false,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(23,195,178,0.14)_0%,_transparent_50%)]" />
      <Container className="relative text-center">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            — {kicker}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
          )}
          <div className="mt-8 flex justify-center">
            <Button to={ctaTo} external={external} variant="primary" withArrow>
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
