import React from "react";
import universe from "../../../../assets/universe.svg"

const ContactPage = () => {
  return (
    <div className="h-screen w-full py-20 px-40">
      <div className="contact-top flex justify-between">
        <div className="top-left-contact flex flex-col gap-4">
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
        </div>

        <div className="right-top-contact h-100 w-100">
          <div className="img h-100 w-100">
            <img className="h-100 w-100" src={universe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
