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
    <div className="marque flex h-20 gap-20 shrink-0 items-center justify-between bg-[#391C0E] px-6 text-4xl">
      {items.map((item) => (
        <React.Fragment key={item}>
          <h1>{item}</h1>
          <Arrow />
        </React.Fragment>
      ))}
    </div>
  );
};

const Marque = () => {
  return (
    <div className="h-20 w-full overflow-hidden bg-[#391C0E]">
      <div className="flex h-full w-max animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default Marque;