import React, { useRef } from "react";
import Gradient1 from "../components/Gradient1";
import CtaDesign from "../components/CtaDesign";
import Arrow from "../components/Arrow";
import Marque from "../components/Marque";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  gsap.registerPlugin(useGSAP);

  const headingRef = useRef(null);
  const secHeadingRef = useRef(null);


  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "expo.out",
      },
    });

    tl.from(headingRef.current, {
      y: 120,
      opacity: 0,
      duration: 2,
    }).from(
      secHeadingRef.current,
      {
        y: 80,
        opacity: 0,
        duration: 2,
      },
      "-=1.4",
    );
  });

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden pt-20">
      {/* Gradients */}
      <Gradient1 />

      <div className="absolute right-0">
        <Gradient1 />
      </div>

      <div
        className="
          hero flex h-[88%] w-full flex-col items-center justify-center
          gap-4 px-4 text-center
          sm:px-6
          md:px-8
        "
      >
        <div
          id="hero-top"
          className="flex flex-col overflow-hidden items-center"
        >
          <div className="wrappe overflow-hidden h-19">
            <h1
              ref={headingRef}
              className="
              text-[2.7rem] leading-[0.95]
              sm:text-[3.8rem]
              md:text-[4.7rem]
              lg:text-[5.5rem] lg:leading-16
            "
            >
              Build Better. Ship Faster.
            </h1>
          </div>

          <div className="wrapper overflow-hidden h-22">
            <h1
              ref={secHeadingRef}
              className="
              text-[2.7rem] leading-[1]
              sm:text-[3.8rem]
              md:text-[4.7rem]
              lg:text-[5.5rem]
            "
            >
              Grow Smarter.
            </h1>
          </div>
        </div>

        <div
          id="hero-center"
          className="
            w-full max-w-5xl text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
          "
        >
          <h1 className="flex flex-wrap items-center justify-center">
            i'm a{" "}
            <span className="px-2">
              <CtaDesign />
            </span>{" "}
            building modern, scalable
          </h1>

          <h1>and thoughtful web experiences from frontend to backend</h1>
        </div>

        <div
          id="hero-bottom"
          className="
            mt-5 flex flex-col gap-3
            sm:flex-row sm:gap-6
            md:gap-10
          "
        >
          <button
            className="
              flex items-center justify-center gap-2 rounded-sm
              bg-[var(--primary-color)]
              px-6 py-2
              text-sm font-semibold
              sm:px-7
              md:px-8 md:text-base
          "
          >
            View My Work
            <span className="rotate-[-45deg]">
              <Arrow />
            </span>
          </button>

          <button
            className="
              flex items-center justify-center gap-2 rounded-sm
              border border-[var(--low-opacity-color)]
              px-6 py-2
              text-sm font-semibold
              text-[var(--primary-color)]
              sm:px-7
              md:px-8 md:text-base
            "
          >
            Let's Talk
            <span className="rotate-[-45deg]">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
      <Marque />
    </div>
  );
};

export default HomePage;
