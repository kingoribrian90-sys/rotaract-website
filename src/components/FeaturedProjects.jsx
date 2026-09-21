import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { SectionHead } from "./SectionPrimitives";

function FeaturedProjects() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          tag="Featured Projects"
          title="Initiatives that create visible, lasting impact"
        >
          From outreach to environmental action, our projects are designed to
          serve with intention.
        </SectionHead>
        <div className="grid grid-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
