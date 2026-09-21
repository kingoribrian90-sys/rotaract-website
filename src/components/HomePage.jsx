import { galleryImages } from "../data/content";
import AboutPreview from "./AboutPreview";
import CorePillars from "./CorePillars";
import FeaturedProjects from "./FeaturedProjects";
import Gallery from "./Gallery";
import Hero from "./Hero";
import ImpactStats from "./ImpactStats";
import Testimonials from "./Testimonials";
import UpcomingEventsPreview from "./UpcomingEventsPreview";
import { CtaBanner, SectionHead } from "./SectionPrimitives";

function HomePage({ onNavigate }) {
  return (
    <section id="home" className="page-section">
      <Hero onNavigate={onNavigate} />
      <AboutPreview onNavigate={onNavigate} />
      <CorePillars />
      <ImpactStats />
      <FeaturedProjects />
      <UpcomingEventsPreview onNavigate={onNavigate} />
      <section className="section">
        <div className="container">
          <SectionHead
            tag="Gallery"
            title="Moments of service, growth, and fellowship"
            center
          />
          <Gallery images={galleryImages} />
        </div>
      </section>
      <Testimonials />
      <section className="section">
        <div className="container">
          <CtaBanner
            tag="Get Involved"
            title="Be Part of Something Bigger Than Yourself"
            description="Whether you want to serve, lead, connect, or grow — there is a place for you here."
            buttons={[
              { label: "Join the Club" },
              { label: "Contact Us", variant: "secondary" },
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </section>
    </section>
  );
}

export default HomePage;
