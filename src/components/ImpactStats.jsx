import { useEffect, useRef, useState } from "react";
import { SectionHead } from "./SectionPrimitives";

const stats = [
  ["200", "Lives Touched"],
  ["15", "Community Projects"],
  ["50", "Active Members"],
  ["10", "Club Events Annually"],
];

function ImpactStats() {
  const [values, setValues] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    let started = false;
    let frameId;
    const startCounters = () => {
      if (
        started ||
        !sectionRef.current ||
        sectionRef.current.getBoundingClientRect().top >=
          window.innerHeight - 80
      )
        return;
      started = true;
      const start = performance.now();
      const update = (time) => {
        const progress = Math.min((time - start) / 1000, 1);
        setValues(
          stats.map(([target]) => Math.floor(Number(target) * progress)),
        );
        if (progress < 1) frameId = requestAnimationFrame(update);
      };
      frameId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", startCounters);
    startCounters();
    return () => {
      window.removeEventListener("scroll", startCounters);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="section impact-section" ref={sectionRef}>
      <div className="container">
        <SectionHead
          tag="Our Impact"
          title="Measured by lives touched and opportunities created"
          center
        />
        <div className="stats-grid">
          {stats.map(([target, label], index) => (
            <div className="stat-card reveal visible" key={label}>
              <h3>
                <span className="counter" data-target={target}>
                  {values[index]}
                </span>
                +
              </h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;
