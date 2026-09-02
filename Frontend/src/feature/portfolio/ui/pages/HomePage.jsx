import React, { useRef } from "react";
import Gradient1 from "../components/Gradient1";
import CtaDesign from "../components/CtaDesign";
import Arrow from "../components/Arrow";
import Marque from "../components/Marque";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAnimation } from "../../hooks/useAnimatioHook";

gsap.registerPlugin(useGSAP);

const HomePage = () => {
  const {
    heroBtnAniEnter,
    heroBtnAniLeave,
    heroLetsBtnEnter,
    heroLetsBtnLeave,
    handleNavClick,

    videoRef,
    cameraOpen,
    handleCamera,
  } = useAnimation();

  const headingRef = useRef(null);
  const secHeadingRef = useRef(null);

  // ==============================
  // HERO ANIMATION
  // ==============================
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
      <div
        className={`
          absolute inset-0 z-0 overflow-hidden
          transition-opacity duration-700
          ${
            cameraOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="
            absolute inset-0
            h-full w-full
            scale-105
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <Gradient1 />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute right-0 top-0 scale-x-[-1]">
          <Gradient1 />
        </div>
      </div>

      <div
        className="
          hero relative z-10
          flex h-[88%] w-full
          flex-col items-center justify-center
          gap-4 px-4 text-center
          sm:px-6
          md:px-8
        "
      >
        <div
          id="hero-top"
          className="flex flex-col items-center overflow-hidden"
        >
          <div className="wrapper h-19 overflow-hidden">
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

          <div className="wrapper h-22 overflow-hidden">
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
            w-full max-w-5xl
            text-base
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
            onClick={() => handleNavClick("work")}
            onMouseEnter={heroBtnAniEnter}
            onMouseLeave={heroBtnAniLeave}
            className="
              flex items-center justify-center gap-2
              rounded-sm
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
            onClick={() => handleNavClick("contact")}
            onMouseEnter={heroLetsBtnEnter}
            onMouseLeave={heroLetsBtnLeave}
            className="
              flex items-center justify-center gap-2
              rounded-sm
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

        <button
          onClick={handleCamera}
          className="
            group
            mt-4
            flex items-center gap-3
            rounded-full
            border border-white/20
            bg-white/5
            px-5 py-2.5
            text-sm
            backdrop-blur-xl
            transition-all duration-300
            hover:bg-white/10
          "
        >
          <span
            className={`
              h-2 w-2 rounded-full
              transition-all duration-300
              ${cameraOpen ? "animate-pulse bg-red-500" : "bg-white/40"}
            `}
          />

          <span>{cameraOpen ? "Camera On" : "Enable Camera"}</span>
        </button>
      </div>

      <div className="relative z-10">
        <Marque />
      </div>
    </div>
  );
};

export default HomePage;
