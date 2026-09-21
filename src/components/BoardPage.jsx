import { boardMembers } from "../data/boardMembers";
import { PageHero } from "./SectionPrimitives";
import LeaderCard from "./LeaderCard";

function BoardPage() {
  return (
    <section id="board" className="page-section">
      <PageHero tag="Leadership Team" title="Club Leadership">
        Meet the student leaders stewarding the vision, culture, and impact of
        the Rotaract Club of Murang'a University.
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {boardMembers.map((member) => (
              <LeaderCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default BoardPage;
