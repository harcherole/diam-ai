import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ramène la page en haut à chaque changement de route.
 */
export default function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
}
