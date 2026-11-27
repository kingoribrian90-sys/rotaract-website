function hasProfileUrl(url) {
  return /^https:\/\/www\.instagram\.com\/[A-Za-z0-9._]+\/?$/.test(url || "");
}

function LeaderCard({ name, role, bio, image, alt, imagePosition, Instagram }) {
  return (
    <article className="leader-card">
      <div className="leader-photo">
        <img
          src={image}
          alt={`${name}, ${alt || role}`}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          loading="lazy"
          decoding="async"
        />
        <span className="leader-photo-label">Club Leadership</span>
      </div>
      <div className="leader-info">
        <p className="leader-role">{role}</p>
        <h3>{name}</h3>
        <p className="leader-bio">{bio}</p>
        {hasProfileUrl(Instagram) && (
          <div className="leader-socials">
            <a
              href={Instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name}'s Instagram profile (opens in a new tab)`}
            >
              <span aria-hidden="true">◎</span> Instagram
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default LeaderCard;
