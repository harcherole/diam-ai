import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page introuvable" description="Cette page n'existe pas ou plus." path="/404" />
      <section className="flex min-h-[70vh] items-center bg-navy-950">
        <Container className="text-center">
          <p className="font-mono text-sm font-semibold text-cyan">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Cette page n'existe pas.
          </h1>
          <p className="mt-4 text-white/70">
            Elle a peut-être été déplacée ou n'a jamais existé.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/" variant="primary" withArrow>
              Retour à l'accueil
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
