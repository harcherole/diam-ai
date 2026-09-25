import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ioaiGabonFaq } from "@/data/ioaiGabon";

/**
 * Accordéon FAQ accessible : bouton natif, aria-expanded, contenu masqué
 * avec hidden (pas seulement visuellement), navigation clavier native.
 */
export default function IoaiFAQ() {
  const [openId, setOpenId] = useState<string | null>(ioaiGabonFaq[0]?.id ?? null);

  return (
    <div className="divide-y divide-navy-900/8 rounded-2xl border border-navy-900/8 bg-white">
      {ioaiGabonFaq.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              >
                <span className="text-sm font-semibold text-navy-900 sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-700">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
