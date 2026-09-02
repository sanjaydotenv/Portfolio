import React from "react";

const Gradient1 = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="
          absolute
          -left-32 -top-32
          h-60 w-60
          rounded-full
          bg-[var(--primary-color)]
          opacity-50
          blur-[120px]

          sm:-left-40 sm:-top-40
          sm:h-72 sm:w-72
          sm:blur-[150px]

          md:h-80 md:w-80
          md:blur-[180px]

          lg:h-96 lg:w-96
          lg:blur-[220px]
        "
      />
    </div>
  );
};

export default Gradient1;