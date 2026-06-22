import React, { useEffect, useRef } from "react";
import HeroScene from "../Hero/HeroScene";
import { motion } from "framer-motion";

const ROLES = ["AI Software Developer", "Full-Stack Engineer", "ML Enthusiast", "Creative Coder"];

function Typer() {
  const elRef = useRef(null);
  const stateRef = useRef({ wi: 0, ci: 0, del: false, timer: null });

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const s = stateRef.current;

    const tick = () => {
      const w = ROLES[s.wi];
      if (!s.del) {
        s.ci++;
        if (s.ci > w.length) {
          s.del = true;
          s.timer = setTimeout(tick, 1500);
          return;
        }
      } else {
        s.ci--;
        if (s.ci < 0) {
          s.del = false;
          s.wi = (s.wi + 1) % ROLES.length;
          s.ci = 0;
        }
      }
      el.textContent = w.substring(0, Math.max(0, s.ci));
      s.timer = setTimeout(tick, s.del ? 45 : 95);
    };
    tick();
    return () => clearTimeout(s.timer);
  }, []);

  return <span ref={elRef} className="hero-typer-text" />;
}

function Home() {
  function scrollTo(e, id) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="hero-section">
      {/* 3D scene */}
      <div className="hero-3d">
        <HeroScene />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge-dot" />
          Hi there — welcome
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          I'm <span className="accent">Abhiram</span>
          <br />Gorle.
        </motion.h1>

        <motion.div
          className="hero-typer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          <span className="hero-typer-prompt">&gt;</span>
          <Typer />
          <span className="hero-typer-cursor" />
        </motion.div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
        >
          AI Software Engineer building intelligent web products, from LLM-powered apps to real-time dashboards. Obsessed with clean architecture and the details most people scroll past.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
        >
          <a
            href="#projects"
            className="hero-cta-primary"
            data-mag=""
            onClick={(e) => scrollTo(e, "projects")}
          >
            View my work →
          </a>
          <a
            href="#contact"
            className="hero-cta-secondary"
            data-mag=""
            onClick={(e) => scrollTo(e, "contact")}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="hero-scroll-pill">
          <span className="hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

export default Home;
