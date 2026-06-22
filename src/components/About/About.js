import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.85, delay, ease: [0.2, 0.7, 0.2, 1] },
});

const HOBBIES = [
  { num: "01", title: "Playing Chess", sub: "Tactics, traps & long endgames" },
  { num: "02", title: "Writing Movie Scripts", sub: "Stories, dialogue & structure" },
  { num: "03", title: "Photography", sub: "Chasing light & quiet moments" },
];

const SKILLS = [
  { n: "Python", a: "Py", lvl: 95 },
  { n: "Angular", a: "NG", lvl: 93 },
  { n: "JavaScript", a: "JS", lvl: 90 },
  { n: "React.js", a: "Re", lvl: 88 },
  { n: "Machine Learning", a: "ML", lvl: 86 },
  { n: "PyTorch / TF", a: "PT", lvl: 82 },
  { n: "AWS / Cloud", a: "AWS", lvl: 84 },
  { n: "Node.js / Flask", a: "Nd", lvl: 83 },
];

const TOOLS = [
  { n: "VS Code", a: "</>" },
  { n: "Docker", a: "Dk" },
  { n: "Terraform", a: "Tf" },
  { n: "Postman", a: "{ }" },
  { n: "CI / CD", a: "CI" },
];

function SkillBar({ lvl }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div className="skill-bar-track" ref={ref}>
      <div
        className="skill-bar-fill"
        style={{ width: inView ? `${lvl}%` : "0%" }}
      />
    </div>
  );
}

function About() {
  return (
    <>
      {/* ── Know who I am ─────────────────────────────────────── */}
      <section className="port-section">
        <motion.div className="section-label" {...rv()}>
          02 — Background
        </motion.div>
        <motion.h2 className="section-heading" {...rv()}>
          Know who <span className="accent">I am</span>
        </motion.h2>

        <div className="bg-grid">
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.75, color: "#b7a89f" }}>
            <motion.p style={{ margin: 0 }} {...rv()}>
              Hi everyone, I am <strong style={{ color: "#f4ece8", fontWeight: 600 }}>Abhiram Gorle</strong> from Florida.
            </motion.p>
            <motion.p style={{ margin: 0 }} {...rv(0.06)}>
              I'm a AI Software Engineer — a passionate and quick learner. I love exploring new technologies and am often amazed by the progress we've made as a species in recent years.
            </motion.p>
            <motion.p style={{ margin: 0, color: "#6b5d56", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase" }} {...rv(0.12)}>
              Apart from coding, things I love —
            </motion.p>
            <div className="hobbies-list">
              {HOBBIES.map((h) => (
                <motion.div key={h.num} className="hobby-card" {...rv(0.06)}>
                  <span className="hobby-num">{h.num}</span>
                  <div>
                    <div className="hobby-title">{h.title}</div>
                    <div className="hobby-sub">{h.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column – quote */}
          <motion.div style={{ display: "flex", alignItems: "center" }} {...rv(0.1)}>
            <blockquote className="quote-block">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                Life is like coding — it may seem difficult at first, but with persistence, patience and the right mindset, anything is achievable.
              </p>
              <footer className="quote-footer">— ABHIRAM GORLE</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section className="port-section">
        <motion.div className="section-label" {...rv()}>
          03 — Capabilities
        </motion.div>
        <motion.h2 className="section-heading" {...rv()}>
          Professional <span className="accent">skillset</span>
        </motion.h2>
        <motion.p className="section-sub" {...rv(0.05)}>
          The languages, frameworks and platforms I reach for most.
        </motion.p>

        <div className="skills-grid">
          {SKILLS.map((sk) => (
            <motion.div key={sk.n} className="skill-card" {...rv()}>
              <div className="skill-header">
                <div className="skill-icon">{sk.a}</div>
                <span className="skill-pct">{sk.lvl}%</span>
              </div>
              <div className="skill-name">{sk.n}</div>
              <SkillBar lvl={sk.lvl} />
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.h3
          style={{ margin: "56px 0 24px", fontWeight: 600, fontSize: "clamp(22px,2.6vw,30px)", color: "#f4ece8" }}
          {...rv()}
        >
          Tools <span className="accent">I use</span>
        </motion.h3>
        <div className="tools-grid">
          {TOOLS.map((t) => (
            <motion.div key={t.n} className="tool-card" {...rv()}>
              <div className="tool-icon">{t.a}</div>
              <span className="tool-name">{t.n}</span>
            </motion.div>
          ))}
        </div>

        {/* GitHub calendar */}
        
      </section>
    </>
  );
}

export default About;
