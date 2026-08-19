import { motion } from "framer-motion";

/**
 * Visualisation abstraite : données, réseaux neuronaux, connexions.
 * Générée en SVG (pas d'image stock), palette navy / bleu électrique / cyan.
 *
 * Animation : les nœuds scintillent (opacité + échelle, en boucle,
 * décalés les uns des autres pour un rendu organique plutôt que
 * synchronisé), les connexions respirent légèrement en opacité, et
 * l'ensemble du réseau flotte doucement comme un tout — sans jamais
 * détacher les lignes de leurs nœuds (le flottement s'applique au
 * groupe entier, pas à chaque nœud indépendamment).
 */
export default function NetworkVisual() {
  const nodes = [
    { x: 60, y: 80, r: 5, color: "#2F6FED" },
    { x: 180, y: 40, r: 4, color: "#17C3B2" },
    { x: 260, y: 120, r: 6, color: "#5B8DEF" },
    { x: 140, y: 180, r: 4, color: "#2F6FED" },
    { x: 320, y: 60, r: 4, color: "#17C3B2" },
    { x: 340, y: 200, r: 5, color: "#5B8DEF" },
    { x: 80, y: 220, r: 4, color: "#2F6FED" },
    { x: 220, y: 260, r: 5, color: "#17C3B2" },
  ];

  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [2, 3], [1, 4], [2, 5],
    [3, 6], [3, 7], [2, 7], [4, 5],
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 320" className="h-full w-full" fill="none">
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0, 5, 0] }}
          transition={{
            duration: 10,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="#5B8DEF"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 0.4, 0.22, 0.4, 0.22, 0.4],
              }}
              transition={{
                pathLength: { duration: 1.4, delay: 0.3 + i * 0.06, ease: "easeInOut" },
                opacity: {
                  duration: 4 + (i % 4),
                  delay: 0.3 + i * 0.06,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            />
          ))}

          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.color}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 1, 0.55, 1],
                scale: [0, 1, 1.22, 1, 1.15, 1],
              }}
              transition={{
                duration: 2.6 + i * 0.35,
                delay: 0.6 + i * 0.08,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          ))}
        </motion.g>
      </svg>

      {/* halo doux */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(47,111,237,0.10)_0%,_transparent_70%)]" />
    </div>
  );
}
