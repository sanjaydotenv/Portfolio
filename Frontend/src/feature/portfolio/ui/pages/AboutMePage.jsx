import React, { useState } from "react";
import Marque from "../components/Marque";
import Gradient from "../components/Gradient1"
import Gradient1 from "../components/Gradient1";

const AboutMePage = () => {
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

  const [activeBtn, setActiveBtn] = useState("me");

  return (
    <div className="min-h-screen w-full ">
        
      <div className="aboutme-top h-40  sm:h-48 md:h-60 w-full flex items-center justify-center px-4">
        <div className="toggle border w-fit rounded-full">
          {toggleBtn.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveBtn(btn.id)}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl px-6 sm:px-8 md:px-10 py-2 ${
                activeBtn === btn.id ? "bg-[#fc6d263d]" : ""
              } rounded-full`}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>


      {activeBtn === "me" && (
        <div className="aboutme-hero  min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)] w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-30 pb-10 flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 justify-start lg:justify-between">
          {/* Left Content */}
          <div className="content-about-me  text-2xl w-full lg:w-[40%] flex flex-col gap-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-14">
              ABOUT ME
            </h1>

            <h2 className="text-[var(--primary-color)] text-lg sm:text-xl">
              // a little about me
            </h2>

            <p className="text-base sm:text-lg md:text-xl">
              I'm a full-stack developer who loves building complete web
              applications — from thoughtful interfaces to reliable backend
              systems.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              Clean code, thoughtful UI and solid architecture are what I care
              about.
            </p>
          </div>

          <div className="mack-visual-code h-[500px] sm:h-[550px]  mr-10 md:h-[600px] lg:h-[70%] w-full lg:w-[40%] border border-[var(--low-opacity-color)] rounded overflow-hidden">
            <div className="mack-top h-10 w-full bg-[#cfcfcf27] flex items-center px-3 sm:px-4 gap-2">
              {mackDot.map((color) => (
                <div
                  key={color.dotColor}
                  style={{ backgroundColor: color.dotColor }}
                  className="mack-dot h-2 w-2 rounded-full shrink-0"
                ></div>
              ))}

              <p className="text-[10px] sm:text-xs ml-1 sm:ml-2">
                developer.js
              </p>
            </div>

            <div className="mack-center h-100 w-full p-2 sm:p-3 flex">
              <div className="mack-left h-full w-8 sm:w-10 bg-[#cfcfcf27] flex items-center flex-col p-1 sm:p-2 shrink-0">
                {numberLine.map((num) => (
                  <p
                    key={num}
                    className="text-[9px] sm:text-xs h-6 flex items-center justify-center"
                  >
                    {num}
                  </p>
                ))}
              </div>

              <div className="mack-right flex flex-col gap-[2px] h-full w-full px-3 sm:px-4 md:px-6 py-2 font-mono text-[11px] sm:text-[13px] md:text-[16px] leading-6 overflow-hidden">
                <p>
                  <span className="text-[#D17AC0]">const</span>{" "}
                  <span className="text-[#54C7ED]">developer</span>{" "}
                  <span>=</span> <span>{"{"}</span>
                </p>

                <p className="pl-4 sm:pl-6 md:pl-8">
                  <span className="text-[#54C7ED]">name</span>

                  <span>: </span>

                  <span className="text-[#D99478]">"Sanjay Bairagi"</span>

                  <span>,</span>
                </p>

                <p className="pl-4 sm:pl-6 md:pl-8">
                  <span className="text-[#54C7ED]">role</span>

                  <span>: </span>

                  <span className="text-[#D99478]">"Full Stack Developer"</span>

                  <span>,</span>
                </p>

                <p className="pl-4 sm:pl-6 md:pl-8">
                  <span className="text-[#54C7ED]">location</span>

                  <span>: </span>

                  <span className="text-[#D99478]">"India"</span>

                  <span>,</span>
                </p>

                <p className="pl-4 sm:pl-6 md:pl-8">
                  <span className="text-[#54C7ED]">Stack</span>

                  <span>: [</span>
                </p>

                <p className="pl-8 sm:pl-12 md:pl-16">
                  <span className="text-[#4CFF65]">"MongoDB"</span>

                  <span>,</span>
                </p>

                <p className="pl-8 sm:pl-12 md:pl-16">
                  <span className="text-[#4CFF65]">"Express"</span>

                  <span>,</span>
                </p>

                <p className="pl-8 sm:pl-12 md:pl-16">
                  <span className="text-[#4CFF65]">"React"</span>

                  <span>,</span>
                </p>

                <p className="pl-8 sm:pl-12 md:pl-16">
                  <span className="text-[#4CFF65]">"Node.js"</span>
                </p>

                <p className="pl-4 sm:pl-6 md:pl-8">],</p>

                <p className="pl-4 sm:pl-6 md:pl-8">
                  <span className="text-[#D17AC0]">Mindset</span>

                  <span>: </span>

                  <span className="text-[#EADBC9]">
                    "Build. Learn. Improve."
                  </span>

                  <span>,</span>
                </p>

                <p className="pl-4 sm:pl-6 md:pl-8">
                  <span className="text-[#D17AC0]">Currently</span>

                  <span>: </span>

                  <span className="text-[#EADBC9]">
                    "Building cool things 🚀"
                  </span>
                </p>

                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeBtn === "skills" && <h1>skills</h1>}

      <Marque />
    </div>
  );
};

export default AboutMePage;
