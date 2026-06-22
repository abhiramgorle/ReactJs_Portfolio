import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth || window.innerWidth;
    let h = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    cam.position.z = 4.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Main icosahedron group
    const geo = new THREE.IcosahedronGeometry(1.55, 1);
    const group = new THREE.Group();

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0xff5a36, transparent: true, opacity: 0.9 })
    );
    const solid = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0xff3a1e, transparent: true, opacity: 0.05 })
    );
    const verts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xff8a5e, size: 0.07 })
    );
    group.add(solid);
    group.add(wire);
    group.add(verts);

    // Inner rotating icosahedron
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.55, 0),
      new THREE.MeshBasicMaterial({ color: 0xff5a36, transparent: true, opacity: 0.25, wireframe: true })
    );
    group.add(inner);
    scene.add(group);

    // Particle field
    const pCount = 520;
    const pos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 9;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const field = new THREE.Points(
      pg,
      new THREE.PointsMaterial({ color: 0xff5a36, size: 0.025, transparent: true, opacity: 0.55 })
    );
    scene.add(field);

    let mx = 0, my = 0;
    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    let animId;
    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y += 0.0028;
      group.rotation.x = Math.sin(t * 0.3) * 0.18;
      inner.rotation.y -= 0.01;
      inner.rotation.x += 0.006;
      field.rotation.y -= 0.0006;
      const sc = 1 + Math.sin(t * 1.1) * 0.03;
      group.scale.set(sc, sc, sc);
      cam.position.x += (mx * 0.9 - cam.position.x) * 0.05;
      cam.position.y += (-my * 0.9 - cam.position.y) * 0.05;
      cam.lookAt(0, 0, 0);
      renderer.render(scene, cam);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      w = mount.clientWidth || window.innerWidth;
      h = mount.clientHeight || window.innerHeight;
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      geo.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
