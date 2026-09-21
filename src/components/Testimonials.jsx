import { useEffect, useState } from "react";
import { testimonials } from "../data/content";

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section bg-soft">
      <div className="container">
        <div className="testimonial-slider reveal visible">
          <div className="testimonial active" key={current}>
            <p>"{testimonials[current].quote}"</p>
            <h4>— {testimonials[current].name}</h4>
            <span>{testimonials[current].role}</span>
          </div>
          <div className="testimonial-controls">
            <button
              className="slider-btn"
              id="prevTestimonial"
              aria-label="Previous testimonial"
              onClick={() =>
                setCurrent(
                  (current - 1 + testimonials.length) % testimonials.length,
                )
              }
            >
              ←
            </button>
            <button
              className="slider-btn"
              id="nextTestimonial"
              aria-label="Next testimonial"
              onClick={() => setCurrent((current + 1) % testimonials.length)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
