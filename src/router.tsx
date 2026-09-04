import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Activities from "@/pages/Activities/Activities";
import Projects from "@/pages/Projects/Projects";
import Events from "@/pages/Events/Events";
import Initiatives from "@/pages/Initiatives/Initiatives";
import Training from "@/pages/Training/Training";
import Support from "@/pages/Support/Support";
import Partners from "@/pages/Partners/Partners";
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/evenements" element={<Events />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/formation" element={<Training />} />
        <Route path="/accompagnement" element={<Support />} />
        <Route path="/partenaires" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
