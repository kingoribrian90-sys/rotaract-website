function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div
          className="timeline-item reveal visible"
          key={`${item.year}-${item.title}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
