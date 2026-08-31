import React from "react";
import Arrow from "./Arrow";

const items = [
  "Ideas",
  "Design",
  "Code",
  "Build",
  "Deploy",
  "Products",
];

const MarqueeContent = () => {
  return (
    <div className="marque flex h-14 sm:h-16 md:h-20 shrink-0 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-[#391C0E] px-4 sm:px-5 md:px-6 text-2xl sm:text-3xl md:text-4xl">
      {items.map((item) => (
        <React.Fragment key={item}>
          <h1 className="whitespace-nowrap">
            {item}
          </h1>

          <Arrow />
        </React.Fragment>
      ))}
    </div>
  );
};

const Marque = () => {
  return (
    <div className="h-14 sm:h-16 md:h-20 w-full overflow-hidden bg-[#391C0E]">
      <div className="flex h-full w-max animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default Marque;