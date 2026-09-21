import { useEffect, useState } from "react";
import "../rac-mut-website/style.css";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import BoardPage from "./components/BoardPage";
import ContactPage from "./components/ContactPage";
import EventsPage from "./components/EventsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ScrollTopButton from "./components/ScrollTopButton";

const pages = {
  home: HomePage,
  about: AboutPage,
  board: BoardPage,
  projects: ProjectsPage,
  events: EventsPage,
  blog: BlogPage,
  contact: ContactPage,
};

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const initialSection = window.location.hash.slice(1);
    return pages[initialSection] ? initialSection : "home";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleHashChange = () => {
      const nextSection = window.location.hash.slice(1);
      if (pages[nextSection]) setActiveSection(nextSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.history.replaceState(null, "", `#${section}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ActivePage = pages[activeSection];

  return (
    <>
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        onNavigate={navigate}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        scrolled={scrolled}
      />
      <main>
        <ActivePage onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
      <ScrollTopButton visible={scrolled} />
    </>
  );
}

export default App;
