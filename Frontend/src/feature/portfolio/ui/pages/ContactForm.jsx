import React from "react";
import Arrow from "../components/Arrow";
import { MdOutlineWatchLater } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Marque from "../components/Marque";
import Footer from "../components/Footer";
import { useAnimation } from "../../hooks/useAnimatioHook";

const ContactForm = () => {
  const SocialMediaHandles = [
    {
      icon: <VscMail />,
      label: "EMAIL",
      handle: "sanjaybairagi9263@gamil.com",
      arrow: <Arrow />,
    },
    {
      icon: <FaGithub />,
      label: "GITHUB",
      handle: "github.com/sanjaydotenv",
      arrow: <Arrow />,
    },
    {
      icon: <FaLinkedin />,
      label: "LINKEDIN",
      handle: "likedin.com/in/sanjay",
      arrow: <Arrow />,
    },
    {
      icon: <FaXTwitter />,
      label: "X (TWITTER)",
      handle: "x.com/mayurbairagi01",
      arrow: <Arrow />,
    },
  ];

  const AVAILABLE = [
    {
      checkIcon: <FaCheck size={15} color="#fc6c26" />,
      label: "Freelance Projects",
    },
    {
      checkIcon: <FaCheck size={15} color="#fc6c26" />,
      label: "Collaborations",
    },
    {
      checkIcon: <FaCheck size={15} color="#fc6c26" />,
      label: "Full-time Opportunities",
    },
    {
      checkIcon: <FaCheck size={15} color="#fc6c26" />,
      label: "The Developer",
    },
  ];

  const watchClick = (label) => {
    if (label === "EMAIL") {
      window.location.href = "mailto:sanjaybairagi9263@gamil.com";
    } else if (label === "GITHUB") {
      window.open("https://github.com/sanjaydotenv", "_blank");
    } else if (label === "LINKEDIN") {
      window.open(
        "https://www.linkedin.com/in/sanjay-vaishnav-bairagi-112534395/",
        "_blank",
      );
    } else {
      window.open("https://x.com/mayurbairagi01", "_blank");
    }
  };

  const { contactFormHandles } = useAnimation();

  return (
    <div className="w-full">
      {/* CONTACT CONTENT */}
      <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5">
        {/* LEFT - FORM */}
        <div className="contact-left min-h-[700px] lg:min-h-[100vh] w-full lg:w-[65%] border rounded-2xl border-[var(--primary-color)] relative">
          <div className="form p-4 sm:p-5 lg:p-6">
            <h1 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
              <span className="h-2 w-2 shrink-0 bg-[var(--primary-color)] block rounded-full"></span>
              SEND A MESSAGE
            </h1>

            <form className="py-5 px-0 sm:px-2 flex flex-col gap-6 sm:gap-8">
              <div className="input-group flex flex-col gap-2">
                <label className="text-[var(--low-opacity-color)]">
                  Your Name
                </label>

                <input
                  className="border w-full px-3 py-3 rounded border-[var(--low-opacity-color)] outline-none focus:border-[var(--primary-color)] transition"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-[var(--low-opacity-color)]">
                  Your Email
                </label>

                <input
                  className="border w-full px-3 py-3 rounded border-[var(--low-opacity-color)] outline-none focus:border-[var(--primary-color)] transition"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-[var(--low-opacity-color)]">
                  What's this about?
                </label>

                <input
                  className="border w-full px-3 py-3 rounded border-[var(--low-opacity-color)] outline-none focus:border-[var(--primary-color)] transition"
                  type="text"
                  placeholder="What's this about?"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-[var(--low-opacity-color)]">
                  Tell me about your project
                </label>

                <textarea
                  className="border w-full px-3 py-3 rounded border-[var(--low-opacity-color)] h-36 sm:h-40 resize-none outline-none focus:border-[var(--primary-color)] transition"
                  placeholder="Write your message here..."
                />
              </div>
            </form>

            <div className="form-contact-bottom flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center mt-2">
              <button
                type="button"
                className="flex gap-3 ml-0 sm:ml-2 items-center bg-[var(--primary-color)] hover:bg-[#ea641c] hover:scale-105 animation duration-150 px-4 sm:px-5 py-3 rounded-sm text-base sm:text-xl"
              >
                Send Message
                <span className="mt-[6px]">
                  <Arrow />
                </span>
              </button>

              <p className="text-[var(--low-opacity-color)] flex items-center gap-2 text-[10px] sm:text-xs">
                <MdOutlineWatchLater />I usually reply within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right w-full lg:w-[35%] min-h-[700px] lg:h-[100vh] flex flex-col gap-4">
          {/* CONNECT DIRECTLY */}
          <div className="contact-left-top min-h-[480px] lg:h-[70%] w-full border rounded-2xl border-[var(--primary-color)] p-4 sm:p-5 flex flex-col gap-5 sm:gap-6">
            <h1 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
              <span className="h-2 w-2 shrink-0 bg-[var(--primary-color)] block rounded-full"></span>
              CONNECT DIRECTLY
            </h1>

            <div className="contact-right-top-icons w-full">
              <div className="gap-4 sm:gap-5 w-full rounded-lg px-0 sm:px-2 flex flex-col">
                {SocialMediaHandles.map((item) => {
                  return (
                    <div
                      key={item.label}
                      onClick={() => watchClick(item.label)}
                      className=" w-full min-w-0 flex bg-[#48434351] cursor-pointer rounded-lg p-2 sm:px-4 h-[70px] sm:h-[75px] items-center hover:bg-[#48434370] transition"
                    >
                      <div className="wrapper flex gap-3 sm:gap-4 h-full w-full min-w-0 items-center">
                        <div className="icon bg-[#00000055] shrink-0 flex items-center justify-center h-[90%] w-11 sm:w-14 border border-[var(--primary-color)] rounded-lg text-xl sm:text-2xl">
                          {item.icon}
                        </div>

                        <div className="content min-w-0 flex-1">
                          <h1 className="text-sm sm:text-base font-medium">
                            {item.label}
                          </h1>

                          <p className="text-xs sm:text-sm text-[var(--low-opacity-color)] truncate">
                            {item.handle}
                          </p>
                        </div>
                      </div>

                      <div className="icon shrink-0 ml-2 text-xl sm:text-2xl rotate-[-45deg] text-[var(--primary-color)]">
                        {item.arrow}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CURRENTLY AVAILABLE */}
          <div className="contact-left-bottom flex flex-col gap-4 min-h-[220px] lg:h-[30%] w-full border border-[var(--primary-color)] rounded-2xl p-4 sm:p-5">
            <h1 className="flex items-center gap-2 text-sm sm:text-base font-semibold">
              <span className="h-2 w-2 shrink-0 bg-[var(--primary-color)] block rounded-full"></span>
              CURRENTLY AVAILABLE
            </h1>

            <div className="items flex flex-col gap-3">
              {AVAILABLE.map((item) => {
                return (
                  <div key={item.label} className="flex gap-2 items-center">
                    <div className="circle shrink-0 border flex items-center justify-center border-[var(--primary-color)] rounded-full w-6 h-6">
                      {item.checkIcon}
                    </div>

                    <div className="label text-sm sm:text-base">
                      <i>{item.label}</i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE - FULL WIDTH BELOW CONTACT */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen mt-30 overflow-hidden">
        <Marque />
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
