import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
});

const EVENTS = [
  {
    role: "AI Software Engineer",
    org: "University of Florida",
    type: "Full-time",
    period: "May 2025 — Present",
    duration: "1 yr 2 mos",
    tags: ["Python", "LLMs", "AWS", "Machine Learning"],
  },
  {
    role: "Graduate Software Developer",
    org: "University of Florida College of Education",
    type: "Part-time",
    period: "Nov 2024 — Jan 2026",
    duration: "1 yr 3 mos",
    location: "Gainesville, FL · On-site",
    tags: ["Java", "Machine Learning", "React.js"],
  },
  {
    role: "Software Development Engineer",
    org: "ELITE Solutions",
    type: "Freelance",
    period: "Jan 2024 — Jul 2024",
    duration: "7 mos",
    location: "Visakhapatnam · Hybrid",
    tags: ["React.js", "Java", "Node.js", "AWS"],
  },
  {
    role: "Software Engineer",
    org: "AlcoveX Product Studio",
    type: "Full-time",
    period: "May 2022 — May 2024",
    duration: "2 yrs 1 mo",
    location: "Visakhapatnam · Hybrid",
    tags: ["Angular","C#",".NET","Hasura", "GraphQL", "TypeScript"],
  },
  {
    role: "QA Automation Engineer",
    org: "AlcoveX Product Studio",
    type: "Seasonal",
    period: "May 2023 — Jul 2023",
    duration: "3 mos",
    location: "Visakhapatnam · On-site",
    tags: ["Playwright", "Python", "Lambda Test"],
  },
];

function Timeline() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    const dot = dotRef.current;
    if (!track || !fill) return;

    const update = () => {
      const r = track.getBoundingClientRect();
      let p = (window.innerHeight * 0.55 - r.top) / r.height;
      p = Math.max(0, Math.min(1, p));
      fill.style.height = `${p * 100}%`;
      if (dot) {
        dot.style.top = `${p * 100}%`;
        dot.style.opacity = p > 0.002 && p < 0.999 ? "1" : "0";
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div id="exp-line" ref={trackRef}>
        <div id="exp-line-fill" ref={fillRef} />
        <div id="exp-line-dot" ref={dotRef} />
      </div>

      <div className="exp-list">
        {EVENTS.map((x, i) => (
          <motion.div
            key={i}
            className={`exp-entry ${i % 2 === 0 ? "side-left" : "side-right"}`}
            {...rv(i * 0.05)}
          >
            <span className="exp-bullet" />
            <div className="exp-card">
              <h3 className="exp-role">{x.role}</h3>
              <div className="exp-org-line">
                <span className="exp-org">{x.org}</span>
                <span className="exp-type">{x.type}</span>
              </div>
              <div className="exp-meta">{x.period} · {x.duration}</div>
              {x.location && <div className="exp-loc">📍 {x.location}</div>}
              <div className="exp-tags">
                {x.tags.map((t) => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="port-section port-section--wide">
      <motion.div className="section-label" {...rv()}>
        04 — Journey
      </motion.div>
      <motion.h2 className="section-heading" style={{ marginBottom: "56px" }} {...rv()}>
        My industrial <span className="accent">experience</span>
      </motion.h2>
      <Timeline />
    </section>
  );
}

export default Experience;
