import studentsCollaborating from "../assets/fun-projects/students-collaborating.jpg";
import fun1 from "../assets/fun-projects/fun-1.jpg";
import fun5 from "../assets/fun-projects/fun-5.jpg";

function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content reveal visible">
          <span className="eyebrow">
            Leadership • Service • Fellowship • Growth
          </span>
          <h1>Young Leaders Creating Impact in Murang'a and Beyond.</h1>
          <p>
            The Rotaract Club of Murang'a University is a community of
            purpose-driven students committed to service, leadership
            development, professional growth, and meaningful change on campus
            and in society.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate("projects")}
            >
              Explore Our Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onNavigate("contact")}
            >
              Join the Club
            </button>
          </div>
          <div className="hero-badges">
            <span>Community Service</span>
            <span>Youth Empowerment</span>
            <span>Campus Leadership</span>
          </div>
        </div>
        <div className="hero-visual reveal visible">
          <div className="hero-card hero-card-main">
            <img src={studentsCollaborating} alt="Students collaborating" />
          </div>
          <div className="hero-card hero-card-small top">
            <img src={fun1} alt="Community activity" />
          </div>
          <div className="hero-card hero-card-small bottom">
            <img src={fun5} alt="Youth leadership event" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
