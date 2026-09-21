import { eventPreview } from "../data/events";
import { SectionHead } from "./SectionPrimitives";

function UpcomingEventsPreview({ onNavigate }) {
  return (
    <section className="section bg-soft">
      <div className="container">
        <SectionHead tag="Upcoming Events" title="What's happening next">
          Stay connected with the moments that bring our club to life.
        </SectionHead>
        <div className="grid grid-3">
          {eventPreview.map((event) => (
            <article className="event-card reveal visible" key={event.title}>
              <div className="event-date">
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center top-gap">
          <button
            className="btn btn-secondary"
            onClick={() => onNavigate("events")}
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEventsPreview;
