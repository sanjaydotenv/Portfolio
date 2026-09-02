import React from "react";
import Arrow from "../components/Arrow";
import { MdOutlineWatchLater } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Marque from "../components/Marque";
import Footer from "../components/Footer";
import { useHandleForm } from "../../hooks/useFormHook";

const ContactForm = () => {
  const { formHandler, changeHandler } = useHandleForm();

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
      handle: "linkedin.com/in/sanjay",
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
      checkIcon: <FaCheck size={13} color="#fc6c26" />,
      label: "Freelance Projects",
    },
    {
      checkIcon: <FaCheck size={13} color="#fc6c26" />,
      label: "Collaborations",
    },
    {
      checkIcon: <FaCheck size={13} color="#fc6c26" />,
      label: "Full-time Opportunities",
    },
    {
      checkIcon: <FaCheck size={13} color="#fc6c26" />,
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

  return (
    <div className="w-full">

      {/* ================================================= */}
      {/* CONTACT GRID */}
      {/* ================================================= */}

      <div
        className="
          flex w-full
          flex-col
          gap-4
          sm:gap-5
          lg:flex-row
          lg:items-stretch
        "
      >

        {/* ================================================= */}
        {/* LEFT - FORM */}
        {/* ================================================= */}

        <div
          className="
            contact-left
            w-full
            rounded-2xl
            border border-[var(--primary-color)]
            lg:w-[62%]
          "
        >
          <div
            className="
              p-4
              sm:p-5
              md:p-6
              lg:p-7
              xl:p-8
            "
          >

            {/* FORM TITLE */}
            <h1
              className="
                flex items-center gap-3
                text-lg font-semibold
                sm:text-xl
                md:text-2xl
              "
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary-color)]" />
              SEND A MESSAGE
            </h1>

            {/* FORM */}
            <form
              onSubmit={formHandler}
              className="
                mt-7
                flex flex-col
                gap-5
                sm:mt-8
                sm:gap-7
                md:gap-8
              "
            >

              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--low-opacity-color)]">
                  Your Name
                </label>

                <input
                  name="name"
                  onInput={changeHandler}
                  className="
                    w-full
                    rounded
                    border
                    border-[var(--low-opacity-color)]
                    bg-transparent
                    px-3 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[var(--primary-color)]
                    sm:text-base
                  "
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--low-opacity-color)]">
                  Your Email
                </label>

                <input
                  name="email"
                  onInput={changeHandler}
                  className="
                    w-full
                    rounded
                    border
                    border-[var(--low-opacity-color)]
                    bg-transparent
                    px-3 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[var(--primary-color)]
                    sm:text-base
                  "
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* ABOUT */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--low-opacity-color)]">
                  What's this about?
                </label>

                <input
                  name="aboutyou"
                  onInput={changeHandler}
                  className="
                    w-full
                    rounded
                    border
                    border-[var(--low-opacity-color)]
                    bg-transparent
                    px-3 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[var(--primary-color)]
                    sm:text-base
                  "
                  type="text"
                  placeholder="What's this about?"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--low-opacity-color)]">
                  Tell me about your project
                </label>

                <textarea
                  name="aboutYourProject"
                  onInput={changeHandler}
                  className="
                    h-32
                    w-full
                    resize-none
                    rounded
                    border
                    border-[var(--low-opacity-color)]
                    bg-transparent
                    px-3 py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[var(--primary-color)]
                    sm:h-40
                    sm:text-base
                  "
                  placeholder="Write your message here..."
                />
              </div>

              {/* BOTTOM */}
              <div
                className="
                  mt-1
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <button
                  type="submit"
                  className="
                    flex w-fit
                    items-center gap-3
                    rounded-sm
                    bg-[var(--primary-color)]
                    px-4 py-3
                    text-sm
                    transition-all duration-200
                    hover:scale-105
                    sm:px-5
                    sm:text-base
                  "
                >
                  Send Message

                  <span className="mt-1 rotate-[-45deg]">
                    <Arrow />
                  </span>
                </button>

                <p
                  className="
                    flex items-center gap-2
                    text-[10px]
                    text-[var(--low-opacity-color)]
                    sm:text-xs
                  "
                >
                  <MdOutlineWatchLater />
                  I usually reply within 24 hours
                </p>

              </div>
            </form>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT */}
        {/* ================================================= */}

        <div
          className="
            contact-right
            flex w-full
            flex-col
            gap-4
            sm:gap-5
            lg:w-[38%]
          "
        >

          {/* ================= CONNECT ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              rounded-2xl
              border border-[var(--primary-color)]
              p-4
              sm:p-5
              md:p-6
            "
          >

            <h1
              className="
                flex items-center gap-3
                text-lg font-semibold
                sm:text-xl
                md:text-2xl
              "
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary-color)]" />
              CONNECT DIRECTLY
            </h1>

            <div className="mt-6 flex flex-col gap-3 sm:gap-4">

              {SocialMediaHandles.map((item) => (
                <div
                  key={item.label}
                  onClick={() => watchClick(item.label)}
                  className="
                    flex
                    min-h-[68px]
                    w-full
                    cursor-pointer
                    items-center
                    rounded-lg
                    bg-[#48434351]
                    p-2
                    transition
                    hover:bg-[#48434370]
                    sm:min-h-[74px]
                    sm:px-3
                    md:px-4
                  "
                >

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      items-center
                      gap-3
                      sm:gap-4
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-12 w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border border-[var(--primary-color)]
                        bg-[#00000055]
                        text-xl
                        sm:h-14 sm:w-14
                        sm:text-2xl
                      "
                    >
                      {item.icon}
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <h1 className="text-sm font-medium sm:text-base">
                        {item.label}
                      </h1>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[11px]
                          text-[var(--low-opacity-color)]
                          sm:text-xs
                          md:text-sm
                        "
                      >
                        {item.handle}
                      </p>
                    </div>
                  </div>

                  {/* ARROW */}
                  <div
                    className="
                      ml-2
                      shrink-0
                      rotate-[-45deg]
                      text-lg
                      text-[var(--primary-color)]
                      sm:text-xl
                    "
                  >
                    {item.arrow}
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* ================= AVAILABLE ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              rounded-2xl
              border border-[var(--primary-color)]
              p-4
              sm:p-5
              md:p-6
            "
          >

            <h1
              className="
                flex items-center gap-2
                text-sm font-semibold
                sm:text-base
              "
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary-color)]" />
              CURRENTLY AVAILABLE
            </h1>

            <div className="mt-5 flex flex-col gap-3">

              {AVAILABLE.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                >

                  <div
                    className="
                      flex
                      h-6 w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--primary-color)]
                    "
                  >
                    {item.checkIcon}
                  </div>

                  <div className="text-sm sm:text-base">
                    <i>{item.label}</i>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* ================================================= */}
      {/* MARQUEE */}
      {/* ================================================= */}

      <div
        className="
          relative
          left-1/2
          mt-20
          w-screen
          -translate-x-1/2
          overflow-hidden
          sm:mt-24
          md:mt-28
          lg:mt-32
        "
      >
        <Marque />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default ContactForm;