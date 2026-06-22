import React, { useState, useEffect } from "react";

const SECTIONS = ["home", "about","experience", "projects",  "contact"];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.25 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollTo(e, id) {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="port-nav">
      <a href="#home" className="port-nav-brand" onClick={(e) => scrollTo(e, "home")}>
        AG<span>.</span>
      </a>

      <button
        className="port-nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`port-nav-links${mobileOpen ? " open" : ""}`}>
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          
        ].map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={(e) => scrollTo(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="port-nav-cta"
            data-mag=""
            onClick={(e) => scrollTo(e, "contact")}
          >
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
