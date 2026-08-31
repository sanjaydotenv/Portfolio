import React from "react";
import universe from "../../../../assets/universe.svg";
import Arrow from "../components/Arrow";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="h-[280vh] w-full py-20 px-40 overflow-hidden ">
      <div className="contact-top h-[25%] flex justify-between gap-80">
        <div className="top-left-contact flex flex-col gap-8">
          <p className="flex items-center gap-2 text-2xl text-[var(--primary-color)] font-semibold">
            <span className="dot h-2 w-2 bg-[var(--primary-color)] block rounded-full"></span>
            CONTACT
          </p>

          <div className="mid-content">
            <h1 className="text-6xl leading-16">Let's build</h1>
            <h1 className="text-6xl text-[var(--primary-color)] font-semibold">
              <i>Something</i>
            </h1>
            <h1 className="text-6xl">
              Great<span className="text-[var(--primary-color)]">.</span>
            </h1>
          </div>

          <p className="w-70 text-[#ffffffa1]">
            Have an idea, project or opportunity? i’d love to hear about it.
          </p>

          <button className="bg-[var(--primary-color)] w-65  text-xl font-semibold rounded flex items-center gap-2 py-3 px-5 ">
            Start a Conversation{" "}
            <span className="mt-1">
              <Arrow />
            </span>{" "}
          </button>
        </div>

        <div className="right-top-contact h-200 w-200 ">
          <div className="img h-200 w-200">
            <img className="w-120" src={universe} alt="" />
          </div>
        </div>
      </div>

      <div className="contact-form">
        <ContactForm />
      </div>

    </div>
  );
};

export default ContactPage;
