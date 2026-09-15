import React from "react";
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

const skills = [
  // Frontend
  {
    name: "HTML",
    icon: html,
    glow: "rgba(249, 115, 22, 0.8)",
  },
  {
    name: "CSS",
    icon: css,
    glow: "rgba(37, 99, 235, 0.8)",
  },
  {
    name: "JavaScript",
    icon: javascript,
    glow: "rgba(250, 204, 21, 0.8)",
  },
  {
    name: "TypeScript",
    icon: typescript,
    glow: "rgba(49, 120, 198, 0.8)",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    glow: "rgba(6, 182, 212, 0.8)",
  },

  // React Ecosystem
  {
    name: "React",
    icon: Reactt,
    glow: "rgba(97, 218, 251, 0.8)",
  },
  {
    name: "Redux",
    icon: redux,
    glow: "rgba(118, 74, 188, 0.8)",
  },

  // Backend
  {
    name: "Node.js",
    icon: node,
    glow: "rgba(83, 158, 67, 0.8)",
  },
  {
    name: "Express.js",
    icon: express,
    glow: "rgba(255, 255, 255, 0.65)",
  },

  // Database / Cache
  {
    name: "MongoDB",
    icon: MongoDB,
    glow: "rgba(71, 162, 72, 0.8)",
  },
  {
    name: "Redis",
    icon: Redis,
    glow: "rgba(220, 38, 38, 0.8)",
  },

  // DevOps
  {
    name: "Docker",
    icon: docker,
    glow: "rgba(36, 150, 237, 0.8)",
  },
];

const AboutMeSkillsPage = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050816] px-6 py-20 text-white md:px-12 lg:px-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Small Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              My Skills
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Technologies{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              I Work With
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of technologies and tools I use to build modern,
            scalable and interactive web applications.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex w-fit items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />

            <div className="h-1.5 w-1.5 rotate-45 bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              {/* Outer Glow */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 blur-md transition duration-500 group-hover:opacity-100"
                style={{
                  background: skill.glow,
                }}
              />

              {/* Card */}
              <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30 group-hover:bg-[#10172b]">
                {/* Inner Gradient */}
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.glow}, transparent 65%)`,
                  }}
                />

                {/* Top Shine */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Icon */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-5 shadow-[inset_0_0_25px_rgba(255,255,255,0.03)] transition duration-500 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                  />
                </div>

                {/* Name */}
                <h3 className="relative z-10 mt-5 text-sm font-semibold tracking-wide text-gray-300 transition group-hover:text-white">
                  {skill.name}
                </h3>

                {/* Bottom Glow Line */}
                <div
                  className="relative z-10 mt-3 h-0.5 w-8 rounded-full opacity-40 transition-all duration-500 group-hover:w-14 group-hover:opacity-100"
                  style={{
                    background: skill.glow,
                    boxShadow: `0 0 12px ${skill.glow}`,
                  }}
                />

                {/* Corner */}
                <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white/10 transition group-hover:bg-white/40" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-600">
            Always Learning • Always Building
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSkillsPage;
