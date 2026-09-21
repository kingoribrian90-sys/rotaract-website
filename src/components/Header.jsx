const links = [
  ["home", "Home"],
  ["about", "About"],
  ["board", "Board"],
  ["projects", "Projects"],
  ["events", "Events"],
  ["blog", "Blog"],
  ["contact", "Contact"],
];

function Header({
  activeSection,
  menuOpen,
  onNavigate,
  onToggleMenu,
  scrolled,
}) {
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container nav-wrap">
        <a
          href="#home"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("home");
          }}
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
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              data-section={id}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(id);
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary nav-cta mobile-only"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("contact");
            }}
          >
            Join Us
          </a>
        </nav>
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary desktop-only"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("contact");
            }}
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
