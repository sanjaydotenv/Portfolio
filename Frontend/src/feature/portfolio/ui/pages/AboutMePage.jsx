import React, { useState } from "react";
import Marque from "../components/Marque";
import AboutMeSkillsPage from "./AboutMeSkillsPage";
import ScrollTrigger from "gsap/ScrollTrigger";
const AboutMePage = () => {
  const [activeBtn, setActiveBtn] = useState("me");
  const toggleBtn = [
    { name: "Me", id: "me" },
    { name: "Skills", id: "skills" },
  ];
  const mackDot = [
    { dotColor: "#DA2727" },
    { dotColor: "#DC7622" },
    { dotColor: "#09DF2D" },
  ];
  const numberLine = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  const handleToggle = (id) => {
    setActiveBtn(id);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
  };
  return (
    <div className="min-h-screen w-full">
      {" "}
      {/* Toggle */}{" "}
      <div className="aboutme-top flex h-40 w-full items-center justify-center px-4 sm:h-48 md:h-60">
        {" "}
        <div className="toggle w-fit rounded-full border">
          {" "}
          {toggleBtn.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleToggle(btn.id)}
              className={`rounded-full px-6 py-2 text-xl sm:px-8 sm:text-2xl md:px-10 md:text-3xl lg:text-4xl ${activeBtn === btn.id ? "bg-[#fc6d263d]" : ""}`}
            >
              {" "}
              {btn.name}{" "}
            </button>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* ABOUT ME */}{" "}
      {activeBtn === "me" && (
        <div className="aboutme-hero flex min-h-[calc(100vh-10rem)] w-full flex-col justify-start gap-12 px-5 pb-10 sm:min-h-[calc(100vh-12rem)] sm:px-8 md:min-h-[calc(100vh-15rem)] md:px-12 lg:flex-row lg:justify-between lg:gap-8 lg:px-20 xl:gap-16 xl:px-30">
          {" "}
          {/* Left Content */}{" "}
          <div className="content-about-me flex w-full flex-col gap-5 text-2xl lg:w-[40%]">
            {" "}
            <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl md:leading-14">
              {" "}
              ABOUT ME{" "}
            </h1>{" "}
            <h2 className="text-lg text-[var(--primary-color)] sm:text-xl">
              {" "}
              // a little about me{" "}
            </h2>{" "}
            <p className="text-base sm:text-lg md:text-xl">
              {" "}
              I'm a full-stack developer who loves building complete web
              applications — from thoughtful interfaces to reliable backend
              systems.{" "}
            </p>{" "}
            <p className="text-base sm:text-lg md:text-xl">
              {" "}
              Clean code, thoughtful UI and solid architecture are what I care
              about.{" "}
            </p>{" "}
          </div>{" "}
          {/* Code Window */}{" "}
          <div className="mack-visual-code mr-10 h-[500px] w-full overflow-hidden rounded border border-[var(--low-opacity-color)] sm:h-[550px] md:h-[600px] lg:h-[70%] lg:w-[40%]">
            {" "}
            {/* Top */}{" "}
            <div className="mack-top flex h-10 w-full items-center gap-2 bg-[#cfcfcf27] px-3 sm:px-4">
              {" "}
              {mackDot.map((color) => (
                <div
                  key={color.dotColor}
                  style={{ backgroundColor: color.dotColor }}
                  className="mack-dot h-2 w-2 shrink-0 rounded-full"
                />
              ))}{" "}
              <p className="ml-1 text-[10px] sm:ml-2 sm:text-xs">
                {" "}
                developer.js{" "}
              </p>{" "}
            </div>{" "}
            {/* Code Area */}{" "}
            <div className="mack-center flex h-100 w-full p-2 sm:p-3">
              {" "}
              {/* Line Numbers */}{" "}
              <div className="mack-left flex h-full w-8 shrink-0 flex-col items-center bg-[#cfcfcf27] p-1 sm:w-10 sm:p-2">
                {" "}
                {numberLine.map((num) => (
                  <p
                    key={num}
                    className="flex h-6 items-center justify-center text-[9px] sm:text-xs"
                  >
                    {" "}
                    {num}{" "}
                  </p>
                ))}{" "}
              </div>{" "}
              {/* Code */}{" "}
              <div className="mack-right flex h-full w-full flex-col gap-[2px] overflow-hidden px-3 py-2 font-mono text-[11px] leading-6 sm:px-4 sm:text-[13px] md:px-6 md:text-[16px]">
                {" "}
                <p>
                  {" "}
                  <span className="text-[#D17AC0]">const</span>{" "}
                  <span className="text-[#54C7ED]">developer</span>{" "}
                  <span>=</span> <span>{"{"}</span>{" "}
                </p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">
                  {" "}
                  <span className="text-[#54C7ED]">name</span> <span>: </span>{" "}
                  <span className="text-[#D99478]"> "Sanjay Bairagi" </span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">
                  {" "}
                  <span className="text-[#54C7ED]">role</span> <span>: </span>{" "}
                  <span className="text-[#D99478]">
                    {" "}
                    "Full Stack Developer"{" "}
                  </span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">
                  {" "}
                  <span className="text-[#54C7ED]">location</span>{" "}
                  <span>: </span>{" "}
                  <span className="text-[#D99478]">"India"</span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">
                  {" "}
                  <span className="text-[#54C7ED]">Stack</span>{" "}
                  <span>: [</span>{" "}
                </p>{" "}
                <p className="pl-8 sm:pl-12 md:pl-16">
                  {" "}
                  <span className="text-[#4CFF65]">"MongoDB"</span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-8 sm:pl-12 md:pl-16">
                  {" "}
                  <span className="text-[#4CFF65]">"Express"</span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-8 sm:pl-12 md:pl-16">
                  {" "}
                  <span className="text-[#4CFF65]">"React"</span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-8 sm:pl-12 md:pl-16">
                  {" "}
                  <span className="text-[#4CFF65]">"Node.js"</span>{" "}
                </p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">],</p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">
                  {" "}
                  <span className="text-[#D17AC0]">Mindset</span>{" "}
                  <span>: </span>{" "}
                  <span className="text-[#EADBC9]">
                    {" "}
                    "Build. Learn. Improve."{" "}
                  </span>{" "}
                  <span>,</span>{" "}
                </p>{" "}
                <p className="pl-4 sm:pl-6 md:pl-8">
                  {" "}
                  <span className="text-[#D17AC0]">Currently</span>{" "}
                  <span>: </span>{" "}
                  <span className="text-[#EADBC9]">
                    {" "}
                    "Building cool things 🚀"{" "}
                  </span>{" "}
                </p>{" "}
                <p>{"}"}</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {/* SKILLS */} {activeBtn === "skills" && <AboutMeSkillsPage />}{" "}
      {/* Marquee */} <Marque />{" "}
    </div>
  );
};
export default AboutMePage;
