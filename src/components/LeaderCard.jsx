function LeaderCard({ name, role, bio, image, alt, Instagram }) {
  return (
    <article className="leader-card reveal visible">
      <img src={image} alt={alt || role} />
      <div className="leader-info">
        <h3>{name}</h3>
        <span>{role}</span>
        <p>{bio}</p>
        <div className="leader-socials">
          
          <a href={Instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          
        </div>
      </div>
    </article>
  );
}

export default LeaderCard;
