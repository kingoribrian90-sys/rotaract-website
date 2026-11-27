import { useEffect, useRef, useState } from "react";

function Gallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!selectedImage) return undefined;

    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      } else if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedImage]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((item, index) => {
          const image = typeof item === "string" ? item : item.image;
          const alt = typeof item === "string" ? `Gallery image ${index + 1}` : item.alt || `Gallery image ${index + 1}`;

          return (
            <button
              type="button"
              className="gallery-item reveal visible"
              key={image || index}
              aria-label={`Open image preview: ${alt}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedImage({ src: image, alt });
              }}
            >
              {image && image !== "#" && (
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </button>
          );
        })}
      </div>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="gallery-lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              ref={closeButtonRef}
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} decoding="async" />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
