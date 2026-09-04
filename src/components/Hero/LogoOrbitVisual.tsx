import { motion } from "framer-motion";

/**
 * Remplace l'ancien NetworkVisual : le logo DIAM-AI reste fixe et lisible
 * au centre (jamais de rotation du logo lui-même — un mark qui tourne en
 * continu se lit comme un indicateur de chargement, pas comme une marque).
 *
 * Le mouvement vient de deux anneaux orbitaux qui tournent lentement
 * autour du logo, chacun portant un petit satellite — un prolongement
 * discret du motif globe/orbite déjà présent dans le logo lui-même.
 */
export default function LogoOrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Halo respirant en fond */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(47,111,237,0.16)_0%,_transparent_70%)]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Anneaux orbitaux animés */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="168" fill="none" stroke="#5B8DEF" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="2 7" />
          <circle cx="368" cy="200" r="6" fill="#2F6FED" />
          <circle cx="368" cy="200" r="11" fill="none" stroke="#2F6FED" strokeOpacity="0.35" strokeWidth="1" />
        </motion.g>

        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="128" fill="none" stroke="#17C3B2" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="1 6" />
          <circle cx="200" cy="72" r="4.5" fill="#17C3B2" />
        </motion.g>

        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="192" fill="none" stroke="#5B8DEF" strokeOpacity="0.14" strokeWidth="1" />
          <circle cx="42" cy="278" r="3.5" fill="#5B8DEF" />
        </motion.g>
      </svg>

      {/* Logo — fixe, jamais de rotation, juste un léger flottement + respiration */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ y: [0, -8, 0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src="/assets/brand/diam-ai-emblem.png"
          alt="DIAM-AI"
          className="w-[42%] drop-shadow-[0_12px_32px_rgba(10,22,40,0.35)]"
          animate={{ scale: [1, 1.035, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
