function ScrollTopButton({ visible }) {
  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      id="scrollTopBtn"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}

export default ScrollTopButton;
