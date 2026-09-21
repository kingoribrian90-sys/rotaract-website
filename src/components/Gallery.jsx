import { useEffect, useState } from "react";

function Gallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="gallery-grid">
        {images.map((item, index) => {
          const image = typeof item === "string" ? item : item.image;
          const alt = typeof item === "string" ? `Gallery image ${index + 1}` : item.alt || `Gallery image ${index + 1}`;

          return (
            <div className="gallery-item reveal visible" key={image || index}>
              <img
                src={image || "#"}
                alt={alt}
                onClick={() => setSelectedImage({ src: image, alt })}
              />
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
