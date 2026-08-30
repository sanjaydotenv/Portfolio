import React from "react";

const CtaDesign = () => {
  return (
    <div className="flex">
      <span className="border border-[var(--primary-color)] bg-[#fc6d2634] px-3 py-[1px] relative">
        Full Stack Developer

        <div className="dot h-[6px] w-[6px] bg-[var(--low-opacity-color)] absolute top-[-2px] left-[-3px]"></div>
        <div className="dot h-[6px] w-[6px] bg-[var(--low-opacity-color)] absolute top-[-2px] right-[-3px]"></div>
        <div className="dot h-[6px] w-[6px] bg-[var(--low-opacity-color)] absolute bottom-[-2px] left-[-3px]"></div>
        <div className="dot h-[6px] w-[6px] bg-[var(--low-opacity-color)] absolute bottom-[-2px] right-[-3px]"></div>
      </span>
    </div>
  );
};

export default CtaDesign;
