import { eventPreview } from "../data/events";
import { SectionHead } from "./SectionPrimitives";

function UpcomingEventsPreview({ onNavigate }) {
  return (
    <section className="section bg-soft upcoming-preview">
      <div className="container">
        <div className="upcoming-preview-heading">
          <SectionHead tag="Upcoming Events" title="Find your next way to connect">
            Join a weekly fellowship, meet Rotaractors from nearby clubs, or ask
            us what is coming up next.
          </SectionHead>
          <button
            className="btn btn-secondary desktop-only"
            onClick={() => onNavigate("events")}
          >
            Browse all events <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="grid grid-3 upcoming-preview-grid">
          {eventPreview.map((event, index) => (
            <article className="event-card home-event-card" key={event.title}>
              <div className="home-event-topline">
                <span className="home-event-index">0{index + 1}</span>
                <span className="home-event-schedule">
                  {event.month || event.day}
                </span>
              </div>
              <h3>{event.title}</h3>
              <p className="home-event-location">
                <span aria-hidden="true">⌖</span> {event.location}
              </p>
              <button
                className="text-link home-event-link"
                onClick={() => onNavigate("contact")}
              >
                Ask about attending <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>

        <p className="upcoming-preview-note">
          Dates and venues can change. Contact the club to confirm details
          before travelling.
        </p>
        <div className="upcoming-preview-actions">
          <button
            className="btn btn-primary mobile-only"
            onClick={() => onNavigate("events")}
          >
            Browse all events
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => onNavigate("contact")}
          >
            Contact the club
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEventsPreview;
