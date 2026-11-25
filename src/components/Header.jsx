import { routes } from "../data/seo";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["board", "Board"],
  ["projects", "Projects"],
  ["events", "Events"],
  ["blog", "Blog"],
  ["contact", "Contact"],
];

function isModifiedClick(event) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

function Header({
  activeSection,
  menuOpen,
  onNavigate,
  onToggleMenu,
  scrolled,
}) {
  const handleLinkClick = (event, section) => {
    if (isModifiedClick(event)) return;
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container nav-wrap">
        <a
          href={routes.home.path}
          className="logo"
          onClick={(event) => handleLinkClick(event, "home")}
        >
          <div className="logo-mark">R</div>
          <div className="logo-text">
            <span>Rotaract Club</span>
            <small>Murang'a University</small>
          </div>
        </a>
        <nav className={`nav ${menuOpen ? "open" : ""}`} id="navMenu">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={routes[id].path}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              data-section={id}
              onClick={(event) => handleLinkClick(event, id)}
            >
              {label}
            </a>
          ))}
          <a
            href={routes.contact.path}
            className="btn btn-primary nav-cta mobile-only"
            onClick={(event) => handleLinkClick(event, "contact")}
          >
            Join Us
          </a>
        </nav>
        <div className="nav-actions">
          <a
            href={routes.contact.path}
            className="btn btn-primary desktop-only"
            onClick={(event) => handleLinkClick(event, "contact")}
          >
            Join Us
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
