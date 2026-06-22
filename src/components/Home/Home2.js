import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import abhiramColor from "../../Assets/abhiram.jpg";
import abhiramBW from "../../Assets/abhiram-snow.jpg";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/abhiramgorle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiram-gorle/" },
  { label: "Instagram", href: "https://www.instagram.com/abhiram_gorle/" },
  { label: "Email", href: "mailto:gorledurgaabhiram@gmail.com" },
];

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.85, delay, ease: [0.2, 0.7, 0.2, 1] },
});

function PhotoReveal() {
  const frameRef = useRef(null);
  const colorRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const top = colorRef.current;
    if (!frame || !top) return;

    const onMove = (e) => {
      const r = frame.getBoundingClientRect();
      top.style.setProperty("--mx", `${e.clientX - r.left}px`);
      top.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const onLeave = () => {
      top.style.setProperty("--mx", "-700px");
      top.style.setProperty("--my", "-700px");
    };
    frame.addEventListener("mousemove", onMove);
    frame.addEventListener("mouseleave", onLeave);
    return () => {
      frame.removeEventListener("mousemove", onMove);
      frame.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="photo-wrap" {...rv(0.12)}>
      <div className="photo-glow" />
      <div id="photo-frame" ref={frameRef}>
        <img src={abhiramBW} alt="" aria-hidden="true" id="photo-bw" />
        <img
          src={abhiramColor}
          alt="Abhiram Gorle"
          id="photo-color"
          ref={colorRef}
        />
        <div className="photo-overlay" />
        <div className="photo-badge-loc">📍 Gainesville, Florida</div>
        <div className="photo-badge-hint">hover me</div>
      </div>
    </div>
  );
}

function Home2() {
  return (
    <>
      {/* ── Marquee ───────────────────────────────────────────── */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[1, 2].map((k) => (
            <span key={k} style={{ display: "flex" }}>
              ANGULAR&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              REACT&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              PYTHON&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              NODE.JS&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              LLM ENGINEERING&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              RAG PIPELINES&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              LANGCHAIN&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              OPENAI API&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              DATA SCIENCE&nbsp;<span className="marquee-accent">✦</span>&nbsp;
              CLOUD&nbsp;<span className="marquee-accent">✦</span>&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Introduction ──────────────────────────────────────── */}
      <section id="about" className="port-section">
        <motion.div className="section-label" {...rv()}>
          01 — Introduction
        </motion.div>

        <div className="intro-grid">
          {/* Left text */}
          <div>
            <motion.h2 className="section-heading" {...rv()}>
              Let me introduce <span className="accent">myself</span>
            </motion.h2>

            <div className="intro-text">
              <motion.p {...rv(0)}>
                I fell in love with programming and I have at least learnt something, I think — and I haven't stopped since.
              </motion.p>
              <motion.p {...rv(0.06)}>
                I'm fluent in classics like{" "}
                <strong>C++, C#, Java</strong>, <strong>Python</strong> and <strong>JavaScript</strong>.
              </motion.p>
              <motion.p {...rv(0.12)}>
                My field of interest lies in building{" "}
                <span className="hl">AI &amp; LLM-powered Products</span> — from intelligent agents and RAG pipelines to full-stack apps that put machine intelligence in the hands of real users.
              </motion.p>
              <motion.p {...rv(0.18)}>
                On the frontend, I craft polished, responsive interfaces using{" "}
                <strong>Angular</strong> and <strong>React.js</strong>, backed by scalable APIs built with{" "}
                <strong>Node.js</strong> and <strong>Python</strong>.
              </motion.p>
            </div>
          </div>

          {/* Right photo */}
          <PhotoReveal />
        </div>

        {/* Social links */}
        <motion.div className="social-row" {...rv()}>
          <span className="social-row-label">Find me on —</span>
          <div className="social-chips">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="social-chip"
                data-mag=""
              >
                {s.label} <span className="social-chip-arrow">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home2;
