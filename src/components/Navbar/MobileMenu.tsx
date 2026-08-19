import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-navy-950 md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Logo variant="emblem" tone="white" className="h-10 w-auto" />
            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
            >
              <X size={22} />
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              closed: {},
            }}
            className="flex flex-col gap-1 px-6 py-4"
          >
            {mainNavigation.map((item) => (
              <motion.div
                key={item.path}
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -16 },
                }}
              >
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block py-3 font-display text-2xl font-semibold ${
                      isActive ? "text-accent" : "text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          <div className="px-6 pt-4">
            <Button to="/contact" variant="primary" withArrow onClick={onClose}>
              {siteConfig.ctaPrimary}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
