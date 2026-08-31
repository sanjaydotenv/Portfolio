import React, { useRef } from "react";
import p1 from "../../../../../src/assets/p1.png";
import p2 from "../../../../../src/assets/p2.png";
import p3 from "../../../../../src/assets/p3.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectPage = () => {
  const container = useRef();

  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".project-container");

      projects.forEach((project, index) => {
        if (index === projects.length - 1) return;

        ScrollTrigger.create({
          trigger: project,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(project, {
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: projects[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: 5,
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="w-full flex flex-col items-center p-5 pt-30"
    >
      {/* PROJECT 1 */}
      <div className="project-container sticky top-0 h-[70vh] w-[80%] bg-[var(--primary-color)] rounded-lg overflow-hidden">
        <div className="work-top h-20 w-full bg-[var(--secondary-color)] rounded-b-xl">
          <h1 className="text-[var(--primary-color)] text-3xl font-semibold flex items-center h-full px-5">
            Project 1
          </h1>
        </div>

        <div className="work-main h-[calc(100%-5rem)] w-full flex items-center relative justify-center">
          <div className="img h-[90%] w-[95%] rounded-xl overflow-hidden">
            <div className="worl-design h-15 w-230 bg-[var(--primary-color)] absolute right-0 top-[-50px] rounded-tl-[120px]"></div>
            <img
              className="
    h-full w-full object-cover rounded-xl
    scale-100
    transition-transform duration-1000
    ease-[cubic-bezier(0.16,1,0.3,1)]
    hover:scale-[1.12]
  "
              src={p1}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="project-container sticky top-0 h-[70vh] w-[80%] bg-[#064E3B] rounded-lg overflow-hidden">
        <div className="work-top h-20 w-full bg-[var(--secondary-color)] rounded-b-xl">
          <h1 className="text-[#064E3B] text-3xl font-semibold flex items-center h-full px-5">
            Project 2
          </h1>
        </div>

        <div className="work-main h-[calc(100%-5rem)] w-full flex items-center relative justify-center">
          <div className="img h-[90%] w-[95%] rounded-xl overflow-hidden">
            <div className="worl-design h-15 w-230 bg-[#064E3B] absolute right-0 top-[-50px] rounded-tl-[120px]"></div>
            <img
              className="
    h-full w-full object-cover rounded-xl
    scale-100
    transition-transform duration-1000
    ease-[cubic-bezier(0.16,1,0.3,1)]
    hover:scale-[1.12]
  "
              src={p2}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="project-container sticky top-0 h-[70vh] w-[80%] bg-[#3A0CA3] rounded-lg overflow-hidden">
        <div className="work-top h-20 w-full bg-[#FFF275] rounded-b-xl">
          <h1 className="text-[#3A0CA3] text-3xl font-semibold flex items-center h-full px-5">
            Project 3
          </h1>
        </div>

        <div className="work-main h-[calc(100%-5rem)] w-full flex items-center relative justify-center">
          <div className="img h-[90%] w-[95%] rounded-xl overflow-hidden">
            <div className="worl-design h-15 w-230 bg-[#3A0CA3] absolute right-0 top-[-50px] rounded-tl-[120px]"></div>
            <img
              className="
    h-full w-full object-cover rounded-xl
    scale-100
    transition-transform duration-1000
    ease-[cubic-bezier(0.16,1,0.3,1)]
    hover:scale-[1.12]
  "
              src={p3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
