import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*
        Fond TOUJOURS clair (jamais transparent) : la navbar peut se poser
        sur le Hero (fond bleu nuit) en haut de l'accueil, et un logo/texte
        sombre y serait invisible sur fond transparent. Seule l'intensité
        de l'ombre/bordure change au scroll.
      */}
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgba(10,22,40,0.08)]" : ""
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Logo variant="emblem" tone="color" className="h-11 w-auto" />

          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-navy-700 hover:text-navy-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" withArrow>
              {siteConfig.ctaPrimary}
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            className="rounded-full p-2 text-navy-900 hover:bg-surface-100 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
