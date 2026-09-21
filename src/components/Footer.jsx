import { socialLinks } from "../data/socialLinks";

function Footer({ onNavigate }) {
  const links = ["about", "board", "projects", "events", "blog", "contact"];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a
            href="#home"
            className="logo footer-logo"
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
          <p className="footer-text">
            A student-led community committed to service, leadership,
            fellowship, and meaningful impact.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(link);
                  }}
                >
                  {link[0].toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:rotaractorsofmurang'auniversity@gmail.com">rotaractorsofmurang'auniversity@gmail.com</a>
            </li>
            
            <li>Murang'a University Main Campus</li>
            <li>Murang'a, Kenya</li>
          </ul>
        </div>
        <div>
          <h4>Socials</h4>
          <ul className="footer-links">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Rotaract Club of Murang'a University. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
