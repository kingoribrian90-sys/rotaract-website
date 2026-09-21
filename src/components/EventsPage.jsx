import { eventGalleryImages } from "../data/content";
import { pastEvents, upcomingEvents } from "../data/events";
import EventDetailCard from "./EventDetailCard";
import Gallery from "./Gallery";
import Timeline from "./Timeline";
import { CtaBanner, PageHero, SectionHead } from "./SectionPrimitives";

function EventsPage({ onNavigate }) {
  return (
    <section id="events" className="page-section">
      <PageHero tag="Club Calendar" title="Events & Activities">
        From outreach and service to mentorship and fellowship, our calendar
        reflects an active and purpose-driven club.
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead tag="Upcoming Events" title="What's coming up" />
          <div className="grid grid-2">
            {upcomingEvents.map((event) => (
              <EventDetailCard
                key={event.title}
                {...event}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <SectionHead
            tag="Past Events"
            title="Recent highlights from club life"
          />
          <Timeline items={pastEvents} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            tag="Event Highlights"
            title="Moments worth remembering"
            center
          />
          <Gallery images={eventGalleryImages} />
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <CtaBanner
            tag="Attend With Us"
            title="Join our next event and experience the club firsthand"
            description="Whether you are a student, guest, or potential partner, our events are designed to welcome and engage."
            buttons={[
              { label: "Attend an Event" },
              { label: "Ask a Question", variant: "secondary" },
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </section>
    </section>
  );
}

export default EventsPage;
