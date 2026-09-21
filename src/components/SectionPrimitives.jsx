export function PageHero({ tag, title, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-content reveal visible">
        <span className="section-tag">{tag}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}

export function SectionHead({ tag, title, children, center = false }) {
  return (
    <div className={`section-head reveal visible ${center ? "center" : ""}`}>
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function CtaBanner({ tag, title, description, buttons, onNavigate }) {
  return (
    <div className="cta-box reveal visible">
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="hero-actions center">
        {buttons.map(({ label, variant = "primary", target = "contact" }) => (
          <button
            key={label}
            className={`btn btn-${variant}`}
            onClick={() => onNavigate(target)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
