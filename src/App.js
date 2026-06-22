import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}

function CatCursor() {
  const ballRef = useRef(null);
  const ballInnerRef = useRef(null);
  const catRef = useRef(null);
  const catEmRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({ mx: -200, my: -200, catX: -200, catY: -200, dir: 1, idle: false, lastMove: 0, prevMx: -200, prevMy: -200 });

  useEffect(() => {
    const isMobile = window.matchMedia && window.matchMedia("(pointer:coarse)").matches;
    if (isMobile) return;

    const ball = ballRef.current;
    const ballInner = ballInnerRef.current;
    const cat = catRef.current;
    const catEm = catEmRef.current;
    if (!ball || !cat) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      const s = stateRef.current;
      s.mx = e.clientX;
      s.my = e.clientY;
      s.lastMove = performance.now();
      if (s.idle) {
        s.idle = false;
        if (catEm) catEm.style.animation = "";
        if (ballInner) ballInner.style.animation = "";
      }
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      const s = stateRef.current;
      const now = performance.now();
      const vx = s.mx - s.prevMx;
      const vy = s.my - s.prevMy;
      const moving = Math.hypot(vx, vy) > 0.4;
      let targetX, targetY;
      if (s.idle) {
        targetX = s.mx + 26; targetY = s.my + 4;
      } else if (moving) {
        const ang = Math.atan2(vy, vx);
        targetX = s.mx - Math.cos(ang) * 50;
        targetY = s.my - Math.sin(ang) * 50;
      } else {
        targetX = s.mx - 46; targetY = s.my + 2;
      }
      s.catX += (targetX - s.catX) * 0.13;
      s.catY += (targetY - s.catY) * 0.13;
      if (s.mx > s.catX + 3) s.dir = -1;
      else if (s.mx < s.catX - 3) s.dir = 1;

      ball.style.transform = `translate(${s.mx}px,${s.my}px) translate(-50%,-50%)`;
      cat.style.transform = `translate(${s.catX}px,${s.catY}px) translate(-50%,-50%) scaleX(${s.dir})`;

      if (!s.idle && now - s.lastMove > 1100) {
        s.idle = true;
        if (catEm) catEm.style.animation = "catPlay .5s ease-in-out infinite";
        if (ballInner) ballInner.style.animation = "ballJiggle .45s ease-in-out infinite";
      }
      s.prevMx = s.mx;
      s.prevMy = s.my;
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    const onOver = (e) => {
      if (!ballInner) return;
      if (e.target.closest && e.target.closest("a,button,[data-mag]")) {
        ballInner.style.transform = "scale(1.45)";
        ballInner.style.boxShadow = "0 0 24px rgba(255,90,54,1),inset -5px -5px 7px rgba(120,0,12,.55),inset 3px 3px 6px rgba(255,225,210,.5)";
      }
    };
    const onOut = (e) => {
      if (!ballInner) return;
      if (e.target.closest && e.target.closest("a,button,[data-mag]")) {
        ballInner.style.transform = "";
        ballInner.style.boxShadow = "0 0 14px rgba(255,90,54,.7),inset -5px -5px 7px rgba(120,0,12,.55),inset 3px 3px 6px rgba(255,225,210,.5)";
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div id="fur-ball" ref={ballRef}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "30px", height: "30px", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "repeating-conic-gradient(from 0deg,rgba(255,120,80,.85) 0deg 1.4deg,transparent 1.4deg 5deg)", filter: "blur(1.4px)", opacity: .55, animation: "yarnspin 11s linear infinite" }} />
        <div ref={ballInnerRef} style={{ position: "relative", width: "24px", height: "24px", borderRadius: "50%", overflow: "hidden", background: "radial-gradient(circle at 33% 28%,#ffc7b0,#ff5a36 52%,#a50f29 98%)", boxShadow: "0 0 14px rgba(255,90,54,.7),inset -5px -5px 7px rgba(120,0,12,.55),inset 3px 3px 6px rgba(255,225,210,.5)", transition: "transform .2s ease,box-shadow .2s ease" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "repeating-linear-gradient(37deg,rgba(95,0,10,.5) 0 1px,transparent 1px 4px),repeating-linear-gradient(37deg,rgba(255,222,205,.55) 0 .6px,transparent .6px 4px)", animation: "yarnspin 7s linear infinite" }} />
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "repeating-linear-gradient(-48deg,rgba(95,0,10,.4) 0 1px,transparent 1px 5px),repeating-linear-gradient(-48deg,rgba(255,222,205,.4) 0 .6px,transparent .6px 5px)", animation: "yarnspin 7s linear infinite reverse" }} />
        </div>
      </div>
      <div id="cat-cursor" ref={catRef} style={{ width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span ref={catEmRef} style={{ fontSize: "34px", lineHeight: 1, filter: "drop-shadow(0 3px 6px rgba(0,0,0,.55))" }}>🐈</span>
      </div>
    </>
  );
}

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Ambient */}
        <div className="grain-overlay" />
        <div className="ambient-top" />
        <div className="ambient-bottom" />

        <ScrollProgress />
        <CatCursor />
        <Navbar />
        <main>
          <Home />
          <Home2 />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
