import { SectionHead } from "./SectionPrimitives";

const pillars = [
  [
    "❤",
    "Service",
    "We identify real needs and respond with practical, people-centered community projects.",
  ],
  [
    "★",
    "Leadership",
    "We nurture initiative, responsibility, and the confidence to lead beyond campus.",
  ],
  [
    "🤝",
    "Fellowship",
    "We build meaningful friendships and a supportive environment where members belong.",
  ],
  [
    "↗",
    "Professional Development",
    "We create opportunities for mentorship, exposure, public speaking, and career growth.",
  ],
];

function CorePillars() {
  return (
    <section className="section bg-soft">
      <div className="container">
        <SectionHead
          tag="Our Core Pillars"
          title="What defines our club culture"
          center
        >
          Everything we do is anchored in growth, service, and shared purpose.
        </SectionHead>
        <div className="grid grid-4">
          {pillars.map(([icon, title, description]) => (
            <article className="info-card reveal visible" key={title}>
              <div className="icon-box">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CorePillars;
