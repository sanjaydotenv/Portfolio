import React from "react";
import universe from "../../../../assets/universe.svg";
import Arrow from "../components/Arrow";
import ContactForm from "./ContactForm";
import { useAnimation } from "../../hooks/useAnimatioHook";

const ContactPage = () => {
  const { heroLetsBtnEnter, heroLetsBtnLeave } = useAnimation();

  return (
    <div className="w-full min-h-screen overflow-hidden px-4 py-24 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">

      {/* ================= TOP ================= */}
      <div
        className="
          flex w-full flex-col
          gap-12
          md:gap-16
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          xl:gap-20
        "
      >

        {/* LEFT */}
        <div
          className="
            top-left-contact
            flex w-full flex-col
            gap-6
            sm:gap-7
            lg:w-[55%]
            xl:w-[50%]
          "
        >

          {/* TITLE */}
          <p
            className="
              flex items-center gap-2
              text-base font-semibold
              text-[var(--primary-color)]
              sm:text-lg
              md:text-xl
            "
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary-color)]" />
            CONTACT
          </p>

          {/* HEADING */}
          <div className="mid-content">

            <h1
              className="
                text-4xl leading-[1.05]
                sm:text-5xl
                md:text-6xl
                lg:text-5xl
                xl:text-6xl
                2xl:text-7xl
              "
            >
              Let's build
            </h1>

            <h1
              className="
                text-4xl leading-[1.05]
                font-semibold
                text-[var(--primary-color)]
                sm:text-5xl
                md:text-6xl
                lg:text-5xl
                xl:text-6xl
                2xl:text-7xl
              "
            >
              <i>Something</i>
            </h1>

            <h1
              className="
                text-4xl leading-[1.05]
                sm:text-5xl
                md:text-6xl
                lg:text-5xl
                xl:text-6xl
                2xl:text-7xl
              "
            >
              Great<span className="text-[var(--primary-color)]">.</span>
            </h1>

          </div>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-md
              text-sm leading-6
              text-[#ffffffa1]
              sm:text-base
              md:text-lg
            "
          >
            Have an idea, project or opportunity? I’d love to hear about it.
          </p>

          {/* BUTTON */}
          <button
            onMouseEnter={heroLetsBtnEnter}
            onMouseLeave={heroLetsBtnLeave}
            className="
              flex w-fit
              items-center gap-2
              rounded
              border border-[var(--low-opacity-color)]
              px-4 py-3
              text-xs font-semibold
              transition-all duration-200
              hover:border-[var(--primary-color)]
              hover:text-[var(--primary-color)]
              sm:px-5
              sm:text-sm
            "
          >
            Start a Conversation

            <span className="mt-1 rotate-[-45deg]">
              <Arrow />
            </span>
          </button>
        </div>

        {/* RIGHT / UNIVERSE */}
        <div
          className="
            right-top-contact
            flex w-full
            items-center justify-center
            lg:w-[45%]
            xl:w-[50%]
          "
        >
          <div
            className="
              flex
              h-52 w-52
              items-center justify-center
              sm:h-64 sm:w-64
              md:h-72 md:w-72
              lg:h-80 lg:w-80
              xl:h-96 xl:w-96
              2xl:h-[28rem] 2xl:w-[28rem]
            "
          >
            <img
              className="
                h-full
                w-full
                object-contain
              "
              src={universe}
              alt="Universe"
            />
          </div>
        </div>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="contact-form mt-16 sm:mt-20 md:mt-24 lg:mt-28">
        <ContactForm />
      </div>

    </div>
  );
};

export default ContactPage;