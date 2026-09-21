function BlogCard({ tag, title, excerpt, date }) {
  return (
    <article className="blog-card reveal visible">
      <div className="blog-card-image"></div>
      <div className="blog-card-content">
        <span className="blog-tag">{tag}</span>
        <h3>{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <a href="#" className="blog-read-more">
            Read More →
          </a>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
