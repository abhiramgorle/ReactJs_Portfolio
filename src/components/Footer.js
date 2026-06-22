import React from "react";
import { motion } from "framer-motion";

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.85, delay, ease: [0.2, 0.7, 0.2, 1] },
});

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/abhiramgorle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiram-gorle/" },
  { label: "Instagram", href: "https://www.instagram.com/abhiram_gorle/" },
  { label: "Email", href: "mailto:abhiramgorle6@gmail.com" },
];

function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-glow" />

      <div className="contact-inner">
        <motion.div className="contact-label" {...rv()}>
          Let's build something
        </motion.div>

        <motion.h2 className="contact-heading" {...rv(0.08)}>
          Feel free to <span className="accent">connect</span> with me.
        </motion.h2>

        <motion.div {...rv(0.14)}>
          <a
            href="mailto:abhiramgorle6@gmail.com"
            className="contact-cta"
            data-mag=""
          >
            Say hello →
          </a>
        </motion.div>

        <motion.div className="contact-socials" {...rv(0.2)}>
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
        </motion.div>
      </div>

      <div className="footer-bar">
        <span>
          Designed &amp; developed by <span className="hl">Abhiram Gorle</span>
        </span>
        <span>© {new Date().getFullYear()} AG — All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
