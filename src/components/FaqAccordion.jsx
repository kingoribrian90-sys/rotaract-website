import { useState } from "react";

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          className={`faq-item reveal visible ${openIndex === index ? "active" : ""}`}
          key={item.question}
        >
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
