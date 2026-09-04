import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LogoOrbitVisual from "./LogoOrbitVisual";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pattern-subtle absolute inset-0 opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(47,111,237,0.18)_0%,_transparent_45%)]" />

      <Container className="relative grid items-center gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan"
          >
            — Data · Intelligence Artificielle · Mathématiques
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.08] text-white"
          >
            Construire l'avenir avec la Data et l'Intelligence Artificielle.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/70"
          >
            DIAM-AI forme, accompagne et développe des solutions innovantes en
            Data Science et Intelligence Artificielle pour transformer les
            données en impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button to="/a-propos" variant="primary" withArrow>
              Découvrir DIAM-AI
            </Button>
            <Button to="/formation" variant="ghost">
              {siteConfig.ctaSecondaryHome}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <LogoOrbitVisual />
        </motion.div>
      </Container>
    </section>
  );
}
