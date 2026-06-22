import React from "react";
import { motion } from "framer-motion";
import geofence from "../../Assets/Projects/geofence.webp";
import gcommunity from "../../Assets/Projects/gcommunity.png";
import pdfchatbot from "../../Assets/Projects/pdfchatbot.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import twitter from "../../Assets/Projects/twitter.png";
import iot from "../../Assets/Projects/iot.png";
import netflix from "../../Assets/Projects/netflix.png";

const rv = (delay = 0) => ({
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] },
});

const PROJECTS = [
  {
    img: geofence,
    kind: "Web · Maps",
    name: "Geo-Fence",
    desc: "Makes searching for places quick and easy by adding a fence to the map — find a specific area or restaurants in just a click.",
    tags: ["React", "Google Maps", "Node.js"],
    gh: "https://github.com/abhiramgorle/Geo-Fence",
    demo: "https://geo-fence-chi.vercel.app/",
  },
  {
    img: gcommunity,
    kind: "Web · Social",
    name: "G-Community",
    desc: "A platform for students to connect with peers, share posts and exchange knowledge across the GITAM student community.",
    tags: ["Angular", "Firebase"],
    gh: "https://github.com/abhiramgorle/G-Community",
    demo: "https://g-community-a714f.web.app/landing",
  },
  {
    img: pdfchatbot,
    kind: "AI · NLP",
    name: "PDF-Chatbot",
    desc: "A chatbot that extracts text from a PDF and answers questions based on its content. Built with Python, Flask and the Universal Sentence Encoder.",
    tags: ["Python", "Flask", "NLP"],
    gh: "https://github.com/abhiramgorle/Pdf_Chatbot",
    demo: null,
  },
  {
    img: bitsOfCode,
    kind: "Web · Tooling",
    name: "Angular Task Manager",
    desc: "A personal task manager built with Angular and a JSON server — add, arrange and delete completed tasks with a feature to clear them all.",
    tags: ["Angular", "JSON Server"],
    gh: "https://github.com/abhiramgorle/Angular-Task-Manager/",
    demo: "https://angular-task-manager-ten.vercel.app/",
  },
  {
    img: twitter,
    kind: "ML · Data",
    name: "Twitter Sentiment Analysis",
    desc: "A machine-learning web app that analyses real-time tweets and visualises sentiment, built with Python, Flask and the Universal Sentence Encoder.",
    tags: ["Python", "Flask", "ML"],
    gh: "https://github.com/abhiramgorle/Twitter_Sentiment_Analysis",
    demo: null,
  },
  {
    img: iot,
    kind: "IoT · Cloud",
    name: "HealthCare IoT Project",
    desc: "An optimized healthcare monitoring system that processes patient data and stores it in the cloud for remote viewing by guardians, doctors and family.",
    tags: ["IoT", "Cloud", "Python"],
    gh: "https://github.com/abhiramgorle/SmartHealthcare-IoT-Project",
    demo: null,
  },
  {
    img: netflix,
    kind: "Web · Gallery",
    name: "Remembr",
    desc: "A photo-gallery web app with a Netflix-style UI to store and view personal albums. Built with React, Material-UI, Bootstrap and Firebase.",
    tags: ["React", "Material-UI", "Firebase"],
    gh: "",
    demo: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="port-section">
      <motion.div className="section-label" {...rv()}>
        05 — Selected work
      </motion.div>
      <motion.h2 className="section-heading" {...rv()}>
        My recent <span className="accent">works</span>
      </motion.h2>
      <motion.p className="section-sub" {...rv(0.05)}>
        A few projects I've built recently — across web, ML and IoT.
      </motion.p>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.name} className="project-card" {...rv(i * 0.05)}>
            <div className="project-thumb">
              {p.img && <img src={p.img} alt={p.name} />}
              <span className="project-kind">{p.kind}</span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-actions">
                {p.gh && (
                  <a
                    href={p.gh}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-ghost"
                    data-mag=""
                  >
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-fill"
                    data-mag=""
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
