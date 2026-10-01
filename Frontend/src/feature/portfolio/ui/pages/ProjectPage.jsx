import React, { useRef } from "react";

import p1 from "../../../../../src/assets/p1.png";
import p2 from "../../../../../src/assets/p2.png";
import p3 from "../../../../../src/assets/p3.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".project-container");

      projects.forEach((project, index) => {
        // Last project ko pin nahi karna
        if (index === projects.length - 1) return;

        // Pin current project
        ScrollTrigger.create({
          trigger: project,
          start: "top top",
          end: "bottom top",
          pin: true,

          // IMPORTANT:
          // Space preserve karega
          pinSpacing: true,
        });

        // Current project ko thoda scale down karna
        // jab next project enter kare
        gsap.to(project, {
          scale: 0.9,
          ease: "none",

          scrollTrigger: {
            trigger: projects[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        });
      });

      // Initial calculation
      ScrollTrigger.refresh();
    },
    {
      scope: container,
    },
  );

  return (
    <div
      ref={container}
      className="flex w-full flex-col items-center px-5 pb-20 pt-20"
    >
      {/* =====================================================
          PROJECT 1
      ====================================================== */}
      <div className="project-container h-[70vh] w-[80%] overflow-hidden rounded-lg bg-[var(--primary-color)]">
        {/* Header */}
        <div className="work-top h-20 w-full rounded-b-xl bg-[var(--secondary-color)]">
          <h1 className="flex h-full items-center px-5 text-3xl font-semibold text-[var(--primary-color)]">
            Project 1
          </h1>
        </div>

        {/* Main */}
        <div className="work-main relative flex h-[calc(100%-5rem)] w-full items-center justify-center">
          <div className="img h-[90%] w-[95%] overflow-hidden rounded-xl">
            {/* Decorative Shape */}
            <div className="worl-design absolute right-0 top-[-50px] h-15 w-230 rounded-tl-[120px] bg-[var(--primary-color)]" />

            <img
              src={p1}
              alt="Project 1"
              className="
                h-full
                w-full
                rounded-xl
                object-cover
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:scale-[1.12]
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          PROJECT 2
      ====================================================== */}
      <div className="project-container h-[70vh] w-[80%] overflow-hidden rounded-lg bg-[#064E3B]">
        {/* Header */}
        <div className="work-top h-20 w-full rounded-b-xl bg-[var(--secondary-color)]">
          <h1 className="flex h-full items-center px-5 text-3xl font-semibold text-[#064E3B]">
            Project 2
          </h1>
        </div>

        {/* Main */}
        <div className="work-main relative flex h-[calc(100%-5rem)] w-full items-center justify-center">
          <div className="img h-[90%] w-[95%] overflow-hidden rounded-xl">
            {/* Decorative Shape */}
            <div className="worl-design absolute right-0 top-[-50px] h-15 w-230 rounded-tl-[120px] bg-[#064E3B]" />

            <img
              src={p2}
              alt="Project 2"
              className="
                h-full
                w-full
                rounded-xl
                object-cover
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:scale-[1.12]
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          PROJECT 3
      ====================================================== */}
      <div className="project-container h-[70vh] w-[80%] overflow-hidden rounded-lg bg-[var(--main-bg)]">
        {/* Header */}
        <div className="work-top h-20 w-full rounded-b-xl bg-[var(--secondary-color)]">
          <h1 className="flex h-full items-center px-5 text-3xl font-semibold text-[var(--main-bg)]">
            Project 3
          </h1>
        </div>

        {/* Main */}
        <div className="work-main relative flex h-[calc(100%-5rem)] w-full items-center justify-center">
          <div className="img h-[90%] w-[95%] overflow-hidden rounded-xl">
            {/* Decorative Shape */}
            <div className="worl-design absolute right-0 top-[-50px] h-15 w-230 rounded-tl-[120px] bg-[var(--main-bg)]" />

            <img
              src={p3}
              alt="Project 3"
              className="
                h-full
                w-full
                rounded-xl
                object-cover
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:scale-[1.12]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
