import { boardMembers } from "../data/boardMembers";
import { CtaBanner, PageHero, SectionHead } from "./SectionPrimitives";
import LeaderCard from "./LeaderCard";

function BoardPage({ onNavigate }) {
  return (
    <section id="board" className="page-section">
      <PageHero tag="Leadership Team" title="Club Leadership">
        Meet the student leaders stewarding the vision, culture, and impact of
        the Rotaract Club of Murang'a University.
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead
            tag="Our Team"
            title="Meet the board"
          >
            The student leaders guiding our club's service, fellowship, and
            growth.
          </SectionHead>
          <div className="board-grid">
            {boardMembers.map((member) => (
              <LeaderCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <CtaBanner
            tag="Get in touch"
            title="Connect with the club leadership"
            description="Have a question, an idea, or an opportunity to work together? We'd be glad to hear from you."
            buttons={[{ label: "Contact the Club" }]}
            onNavigate={onNavigate}
          />
        </div>
      </section>
    </section>
  );
}

export default BoardPage;
