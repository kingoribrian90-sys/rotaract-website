import { lazy, Suspense, useEffect, useState } from "react";
import "../rac-mut-website/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ScrollTopButton from "./components/ScrollTopButton";
import { resolveSectionFromLocation, routes, SITE_URL } from "./data/seo";

const AboutPage = lazy(() => import("./components/AboutPage"));
const BoardPage = lazy(() => import("./components/BoardPage"));
const ProjectsPage = lazy(() => import("./components/ProjectsPage"));
const EventsPage = lazy(() => import("./components/EventsPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));

const pages = {
  home: HomePage,
  about: AboutPage,
  board: BoardPage,
  projects: ProjectsPage,
  events: EventsPage,
  blog: BlogPage,
  contact: ContactPage,
};

function updateMetaTag(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function App() {
  const [activeSection, setActiveSection] = useState(() =>
    resolveSectionFromLocation(window.location.pathname, window.location.hash),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleRouteSync = () => {
      setActiveSection(
        resolveSectionFromLocation(
          window.location.pathname,
          window.location.hash,
        ),
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handleRouteSync);
    window.addEventListener("hashchange", handleRouteSync);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteSync);
      window.removeEventListener("hashchange", handleRouteSync);
    };
  }, []);

  useEffect(() => {
    const route = routes[activeSection] || routes.home;
    const canonicalUrl = `${SITE_URL}${route.path}`;

    document.title = route.title;
    updateMetaTag('meta[name="description"]', "content", route.description);
    updateMetaTag('link[rel="canonical"]', "href", canonicalUrl);
    updateMetaTag('meta[property="og:title"]', "content", route.title);
    updateMetaTag(
      'meta[property="og:description"]',
      "content",
      route.description,
    );
    updateMetaTag('meta[property="og:url"]', "content", canonicalUrl);
    updateMetaTag('meta[name="twitter:title"]', "content", route.title);
    updateMetaTag(
      'meta[name="twitter:description"]',
      "content",
      route.description,
    );
  }, [activeSection]);

  const navigate = (section) => {
    const targetSection = pages[section] ? section : "home";
    const targetPath = routes[targetSection].path;

    setActiveSection(targetSection);
    setMenuOpen(false);
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, "", targetPath);
    }
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
        <Suspense fallback={<div className="container section">Loading...</div>}>
          <ActivePage onNavigate={navigate} />
        </Suspense>
      </main>
      <Footer onNavigate={navigate} />
      <ScrollTopButton visible={scrolled} />
    </>
  );
}

export default App;
