import { PageHero, SectionHead } from "./SectionPrimitives";
import Timeline from "./Timeline";

const milestones = [
  {
    year: "2022",
    title: "Club Foundation & Membership Drive",
    description:
      "The club established a strong student base and introduced its mission to campus life.",
  },
  {
    year: "2023",
    title: "First Major Community Outreach",
    description:
      "Members organized a service campaign that built visibility and trust in the local community.",
  },
  {
    year: "2024",
    title: "Leadership & Mentorship Expansion",
    description:
      "The club broadened its focus to include professional development and student mentorship.",
  },
  {
    year: "2025",
    title: "Project Growth & Community Partnerships",
    description:
      "Rotaract strengthened partnerships and launched more structured impact-driven programs.",
  },
];

function AboutPage() {
  return (
    <section id="about" className="page-section">
      <PageHero tag="About Us" title="About Our Club">
        Building a generation of students who lead with purpose, serve with
        compassion, and grow with intention.
      </PageHero>
      <section className="section">
        <div className="container split-grid">
          <div className="section-intro reveal visible">
            <span className="section-tag">Our Story</span>
            <h2>What Rotaract means on our campus</h2>
          </div>
          <div className="reveal visible">
            <p className="lead">
              Rotaract is a global movement of young adults committed to
              service, leadership, and community impact. At Murang'a University,
              our club serves as a practical space where students can grow
              beyond academics and become active contributors to society.
            </p>
            <p>
              We believe leadership is best developed through action. That is
              why our members participate in service projects, mentorship
              initiatives, outreach programs, networking sessions, and events
              that create both personal growth and visible community value.
            </p>
            <p>
              Our club is not only about giving back — it is also about building
              capable, disciplined, and purpose-driven young professionals.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <SectionHead
            tag="Mission & Vision"
            title="The ideas that guide our work"
            center
          />
          <div className="grid grid-3">
            {[
              [
                "◎",
                "Mission",
                "To empower students through service, leadership, fellowship, and meaningful opportunities for growth and impact.",
              ],
              [
                "◉",
                "Vision",
                "To be a vibrant and respected student-led club that shapes responsible leaders and transforms communities.",
              ],
              [
                "✦",
                "Core Values",
                "Integrity, service, accountability, teamwork, empathy, excellence, and a commitment to positive change.",
              ],
            ].map(([icon, title, text]) => (
              <article className="info-card reveal visible" key={title}>
                <div className="icon-box">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-grid">
          <div className="section-intro reveal visible">
            <span className="section-tag">Why Join Us</span>
            <h2>A club that develops people, not just attendance lists</h2>
          </div>
          <div className="benefit-list">
            {[
              "Leadership development through practical responsibility and initiative.",
              "Networking opportunities with peers, mentors, and community stakeholders.",
              "Hands-on service projects that create real-world experience and impact.",
              "Improved confidence, communication, teamwork, and public engagement.",
              "Professional exposure that supports long-term personal and career growth.",
            ].map((benefit) => (
              <div className="benefit-item reveal visible" key={benefit}>
                <span>✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container split-grid">
          <div className="section-intro reveal visible">
            <span className="section-tag">Club Culture</span>
            <h2>Welcoming, growth-oriented, and purpose-driven</h2>
          </div>
          <div className="reveal visible">
            <p className="lead">
              Our culture is built on consistency, collaboration, and belonging.
            </p>
            <p>
              We value members who are willing to learn, contribute, and show up
              with intention. Whether someone joins as a first-year student
              looking for connection or as a senior looking for leadership
              exposure, they should find a space that is active, supportive, and
              meaningful.
            </p>
            <p>
              The Rotaract Club of Murang'a University is designed to be a place
              where service is practical, friendships are genuine, and growth is
              expected.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            tag="Our Journey"
            title="Milestones that shaped the club"
            center
          />
          <Timeline items={milestones} />
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
