import SEO from "@/components/SEO/SEO";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import InscriptionHero from "@/components/IoaiInscription/InscriptionHero";
import InscriptionForm from "@/components/IoaiInscription/InscriptionForm";
import FirstRoundInfo from "@/components/IoaiInscription/FirstRoundInfo";

export default function IoaiInscription() {
  return (
    <>
      <SEO
        title="Inscription — Sélection nationale IOAI Gabon 2027"
        description="Inscris-toi à la sélection nationale du Gabon pour l'International Olympiad in Artificial Intelligence (IOAI) 2027. Formulaire d'inscription en ligne, gratuit et ouvert aux élèves gabonais."
        path="/ioai-gabon/inscription"
        image="/assets/ioai/ioai-gabon-og.png"
        keywords={[
          "Inscription IOAI Gabon",
          "IOAI Gabon 2027",
          "Sélection nationale IA Gabon",
          "Olympiade IA Gabon inscription",
          "DIAM-AI",
        ]}
      />

      <InscriptionHero />

      <section className="py-20 md:py-24">
        <Container className="max-w-3xl">
          <InscriptionForm />
        </Container>
      </section>

      <section className="bg-surface-50 py-20 md:py-24">
        <Container>
          <SectionTitle
            kicker="Avant de t'inscrire"
            title="Ce qu'il faut savoir sur le 1er tour"
          />
          <div className="mt-12">
            <FirstRoundInfo />
          </div>
        </Container>
      </section>
    </>
  );
}
