import { useState } from "react";
import { projectFilters, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { CtaBanner, PageHero } from "./SectionPrimitives";

function ProjectsPage({ onNavigate }) {
  const [filter, setFilter] = useState("all");
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="page-section">
      <PageHero tag="Impact Work" title="Our Projects">
        Practical service initiatives designed to meet needs, create
        opportunities, and strengthen community.
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="filter-wrap reveal visible">
            {projectFilters.map(([value, label]) => (
              <button
                key={value}
                className={`filter-btn ${filter === value ? "active" : ""}`}
                data-filter={value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-3 project-filter-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <CtaBanner
            tag="Partnerships"
            title="Support, sponsor, or collaborate with our impact work"
            description="We welcome partnerships with organizations, professionals, institutions, and community stakeholders who share our values."
            buttons={[
              { label: "Partner With Us" },
              { label: "Contact the Club", variant: "secondary" },
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </section>
    </section>
  );
}

export default ProjectsPage;
