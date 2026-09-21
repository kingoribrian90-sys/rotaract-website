function ProjectCard({
  category,
  image,
  alt,
  tag,
  title,
  description,
  date,
  link = "#",
}) {
  return (
    <article
      className="project-card filter-item reveal visible"
      data-category={category}
    >
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="card-body">
        <span className="pill">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {date && <small>{date}</small>}
        <a href={link} className="text-link">
          Read More →
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
