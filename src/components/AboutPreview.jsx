function AboutPreview({ onNavigate }) {
  return (
    <section className="section">
      <div className="container split-grid">
        <div className="section-intro reveal visible">
          <span className="section-tag">Who We Are</span>
          <h2>A club built on purpose, service, and student leadership.</h2>
        </div>
        <div className="reveal visible">
          <p className="lead">
            Rotaract is more than a club — it is a platform for students to grow
            into responsible, confident, and impact-driven leaders. At Murang'a
            University, we bring together young people who care deeply about
            service, community, mentorship, and personal excellence.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => onNavigate("about")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
