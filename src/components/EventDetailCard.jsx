function EventDetailCard({ meta, title, venue, description, onNavigate }) {
  return (
    <article className="event-detail-card reveal visible">
      <div className="event-meta-badge">{meta}</div>
      <h3>{title}</h3>
      <p>
        <strong>Venue:</strong> {venue}
      </p>
      <p>{description}</p>
      <button
        className="btn btn-secondary small-btn"
        onClick={() => onNavigate("contact")}
      >
        RSVP / Learn More
      </button>
    </article>
  );
}

export default EventDetailCard;
