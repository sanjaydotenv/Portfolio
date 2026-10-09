import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import MongoDB from "../../../../../src/assets/MONGO DB.png";
import Redis from "../../../../../src/assets/REDIS.png";
import node from "../../../../../src/assets/NODE JS.png";
import redux from "../../../../../src/assets/redux.png";
import tailwind from "../../../../../src/assets/TAILWIND.png";
import typescript from "../../../../../src/assets/TYPE SCRIPT.png";
import html from "../../../../../src/assets/HTML.png";
import javascript from "../../../../../src/assets/JAVA SCRIPT.png";
import express from "../../../../../src/assets/EXPRESS.png";
import docker from "../../../../../src/assets/DOCKER.png";
import css from "../../../../../src/assets/CSS.png";
import Reactt from "../../../../../src/assets/REACT.png";

import "./AboutMeSkillsPage.css";

const skills = [
  {
    name: "HTML",
    icon: html,
    glow: "#f97316",
  },
  {
    name: "CSS",
    icon: css,
    glow: "#2563eb",
  },
  {
    name: "JavaScript",
    icon: javascript,
    glow: "#facc15",
  },
  {
    name: "TypeScript",
    icon: typescript,
    glow: "#3178c6",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    glow: "#06b6d4",
  },
  {
    name: "React",
    icon: Reactt,
    glow: "#61dafb",
  },
  {
    name: "Redux",
    icon: redux,
    glow: "#764abc",
  },
  {
    name: "Node.js",
    icon: node,
    glow: "#539e43",
  },
  {
    name: "Express.js",
    icon: express,
    glow: "#ffffff",
  },
  {
    name: "MongoDB",
    icon: MongoDB,
    glow: "#47a248",
  },
  {
    name: "Redis",
    icon: Redis,
    glow: "#dc2626",
  },
  {
    name: "Docker",
    icon: docker,
    glow: "#2496ed",
  },
];

const AboutMeSkillsPage = () => {
  const mountRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    let disposed = false;
    let animationId;

    // =====================================
    // 1. SCENE
    // =====================================

    const scene = new THREE.Scene();

    scene.background = new THREE.Color("#03040b");

    // =====================================
    // 2. CAMERA
    // =====================================

    const camera = new THREE.PerspectiveCamera(
      65,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000,
    );

    camera.position.set(0, 0, 38);

    // =====================================
    // 3. RENDERER
    // =====================================

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });

    renderer.setSize(mount.clientWidth, mount.clientHeight);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mount.appendChild(renderer.domElement);

    // =====================================
    // 4. MOUSE CONTROLS
    // =====================================

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.enablePan = true;

    controls.autoRotate = false;

    controls.minDistance = 12;
    controls.maxDistance = 100;

    // =====================================
    // 5. BACKGROUND STARS
    // =====================================

    const starGeometry = new THREE.BufferGeometry();

    const starCount = 5000;

    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const index = i * 3;

      starPositions[index] = (Math.random() - 0.5) * 180;

      starPositions[index + 1] = (Math.random() - 0.5) * 120;

      starPositions[index + 2] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );

    const starMaterial = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.12,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars);

    // =====================================
    // 6. CENTER ENERGY CORE
    // =====================================

    const coreGeometry = new THREE.SphereGeometry(1.4, 32, 32);

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: "#6d28d9",
      transparent: true,
      opacity: 0.85,
    });

    const core = new THREE.Mesh(coreGeometry, coreMaterial);

    scene.add(core);

    const coreLight = new THREE.PointLight("#7c3aed", 25, 70);

    coreLight.position.set(0, 0, 0);

    scene.add(coreLight);

    // =====================================
    // 7. LOGO GROUP
    // =====================================

    const logoGroup = new THREE.Group();

    scene.add(logoGroup);

    const textureLoader = new THREE.TextureLoader();

    const raycaster = new THREE.Raycaster();

    const pointer = new THREE.Vector2();

    const clickableLogos = [];

    const animatedLogos = [];

    let selectedLogo = null;

    // =====================================
    // 8. POSITION ALL 12 LOGOS
    // =====================================

    // Four columns and three rows.
    // Small position changes give the layout
    // a natural floating-universe appearance.

    const columns = 4;
    const spacingX = 8.5;
    const spacingY = 7.5;

    function getLogoPosition(index) {
      const column = index % columns;

      const row = Math.floor(index / columns);

      const x =
        (column - (columns - 1) / 2) * spacingX + (Math.random() - 0.5) * 1.2;

      const y = (1 - row) * spacingY + (Math.random() - 0.5) * 1.2;

      const z = (Math.random() - 0.5) * 5;

      return new THREE.Vector3(x, y, z);
    }

    // =====================================
    // 9. LOAD TECHNOLOGY LOGOS
    // =====================================

    skills.forEach((skill, index) => {
      textureLoader.load(
        skill.icon,

        (texture) => {
          if (disposed) {
            texture.dispose();
            return;
          }

          texture.colorSpace = THREE.SRGBColorSpace;

          const position = getLogoPosition(index);

          const size = 3.1;

          // Main logo
          const logoMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthWrite: false,
          });

          const logo = new THREE.Sprite(logoMaterial);

          logo.position.copy(position);

          logo.scale.set(size, size, 1);

          logo.userData.name = skill.name;

          logo.userData.glowColor = skill.glow;

          logo.userData.originalScale = size;

          logoGroup.add(logo);

          clickableLogos.push(logo);

          // Colored glow
          const glowMaterial = new THREE.SpriteMaterial({
            map: texture,
            color: new THREE.Color(skill.glow),
            transparent: true,
            opacity: 0.42,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          });

          const glow = new THREE.Sprite(glowMaterial);

          glow.position.copy(position);

          glow.scale.set(size * 1.65, size * 1.65, 1);

          logoGroup.add(glow);

          logo.userData.glow = glow;

          // Animation settings
          animatedLogos.push({
            object: logo,
            originalPosition: position.clone(),
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.3,
            amplitude: 0.3 + Math.random() * 0.35,
          });
        },

        undefined,

        (error) => {
          console.error(`Failed to load ${skill.name} logo:`, error);
        },
      );
    });

    // =====================================
    // 10. CLICK LOGO TO SHOW ITS NAME
    // =====================================

    function handleLogoClick(event) {
      const rect = renderer.domElement.getBoundingClientRect();

      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;

      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);

      const intersections = raycaster.intersectObjects(clickableLogos, false);

      if (intersections.length > 0) {
        selectedLogo = intersections[0].object;

        if (tooltipRef.current) {
          tooltipRef.current.textContent = selectedLogo.userData.name;

          tooltipRef.current.style.opacity = "1";
        }
      } else {
        selectedLogo = null;

        if (tooltipRef.current) {
          tooltipRef.current.style.opacity = "0";
        }
      }
    }

    renderer.domElement.addEventListener("click", handleLogoClick);

    // =====================================
    // 11. ANIMATION
    // =====================================

    const clock = new THREE.Clock();

    function animate() {
      if (disposed) return;

      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Starfield movement
      stars.rotation.y = elapsedTime * 0.006;

      stars.rotation.x = Math.sin(elapsedTime * 0.08) * 0.02;

      // Center core movement
      core.rotation.y = elapsedTime * 0.3;

      const coreScale = 1.4 + Math.sin(elapsedTime * 1.5) * 0.08;

      core.scale.setScalar(coreScale);

      // Logo floating animation
      animatedLogos.forEach((item) => {
        const { object, originalPosition, phase, speed, amplitude } = item;

        object.position.y =
          originalPosition.y +
          Math.sin(elapsedTime * speed + phase) * amplitude;

        object.position.x =
          originalPosition.x +
          Math.cos(elapsedTime * speed * 0.5 + phase) * amplitude * 0.3;

        const originalSize = object.userData.originalScale;

        const targetSize =
          object === selectedLogo ? originalSize * 1.25 : originalSize;

        const currentSize = THREE.MathUtils.lerp(
          object.scale.x,
          targetSize,
          0.1,
        );

        object.scale.set(currentSize, currentSize, 1);

        // Glow follows the logo
        const glow = object.userData.glow;

        if (glow) {
          glow.position.copy(object.position);

          const pulse = 1.6 + Math.sin(elapsedTime * 2 + phase) * 0.12;

          glow.scale.set(currentSize * pulse, currentSize * pulse, 1);

          glow.material.opacity =
            0.3 + (Math.sin(elapsedTime * 2 + phase) + 1) * 0.1;
        }
      });

      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    // =====================================
    // 12. RESPONSIVE RESIZE
    // =====================================

    function handleResize() {
      const width = mount.clientWidth;

      const height = mount.clientHeight;

      camera.aspect = width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    window.addEventListener("resize", handleResize);

    // =====================================
    // 13. CLEANUP
    // =====================================

    return () => {
      disposed = true;

      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", handleResize);

      renderer.domElement.removeEventListener("click", handleLogoClick);

      controls.dispose();

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

          materials.forEach((material) => {
            if (material.map) {
              material.map.dispose();
            }

            material.dispose();
          });
        }
      });

      renderer.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="coding-universe">
      {" "}
      <div ref={mountRef} className="coding-universe-canvas" />
      <div className="universe-label">
        <span className="universe-status-dot" />

        <span>INTERACTIVE TECH UNIVERSE</span>
      </div>
      <div className="universe-tooltip">
        <span ref={tooltipRef} className="universe-tooltip-text" />
      </div>
      <div className="universe-instructions">
        <span>DRAG TO EXPLORE</span>

        <span className="instruction-divider">•</span>

        <span>SCROLL TO ZOOM</span>
      </div>
    </section>
  );
};

export default AboutMeSkillsPage;
