import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import logo from "../../../../assets/logo.png"; // apne logo ka path yaha set kar dena

const Footer = () => {
  const navigate = ["Home", "About Me", "Work", "Pricing", "Contact"];

  const connect = [
    {
      name: "GitHub",
      link: "https://github.com/sanjaydotenv",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sanjay-vaishnav-bairagi-112534395/",
    },
    {
      name: "Email",
      link: "mailto:sanjaybairagi9263@gamil.com",
    },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0d0908] text-white overflow-hidden">
      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          w-full
          border-t border-[#ffffff0d]
          bg-[radial-gradient(circle_at_20%_80%,rgba(252,108,38,0.08),transparent_35%)]
        "
      >
        <div
          className="
            max-w-[1600px]
            mx-auto
            px-6 sm:px-10 lg:px-16
            py-12 sm:py-16 lg:py-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr]
            gap-12
            lg:gap-16
          "
        >
          {/* ================= BRAND ================= */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0">
                <img
                  src={logo}
                  alt="Sanjay logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="leading-[0.9]">
                <p className="text-lg sm:text-xl font-medium tracking-wide">
                  Crafted
                </p>

                <p className="text-lg sm:text-xl font-medium">
                  by{" "}
                  <span className="text-[var(--primary-color)] italic">
                    Sanjay
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-[320px]">
              <p className="text-base sm:text-lg font-medium mb-2">
                Full-Stack Developer
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-white/70">
                Building modern, scalable
                <br className="hidden sm:block" />
                and thoughtful web experiences.
              </p>
            </div>
          </div>

          {/* ================= NAVIGATE ================= */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-4 sm:mb-5">
              NAVIGATE
            </h3>

            <div className="flex flex-col gap-2">
              {navigate.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    handleScroll(
                      item === "Home"
                        ? "home"
                        : item.toLowerCase().replace(" ", "-"),
                    )
                  }
                  className="
                    text-left
                    w-fit
                    text-sm sm:text-base
                    text-white/80
                    hover:text-[var(--primary-color)]
                    transition-colors duration-300
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ================= CONNECT ================= */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-4 sm:mb-5">
              CONNECT
            </h3>

            <div className="flex flex-col gap-2">
              {connect.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    w-fit
                    text-sm sm:text-base
                    text-white/80
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  <span>{item.name}</span>

                  <FaArrowUpRightFromSquare
                    className="
                      text-xs
                      text-white/70
                      group-hover:text-[var(--primary-color)]
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      transition-all duration-300
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className="lg:pl-2">
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-[32px]
                leading-[1.08]
                font-light
                tracking-tight
                max-w-[330px]
              "
            >
              LET’S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-white/75">WORTH</span>
              <br />
              <span className="text-[var(--primary-color)]">REMEMBERING.</span>
            </h2>

            {/* Button */}
            <button
              onClick={() => handleScroll("contact")}
              className="
                group
                mt-6
                flex
                items-center
                justify-between
                gap-5
                border
                border-[var(--primary-color)]
                bg-transparent
                rounded-xl
                px-5
                py-3
                text-sm sm:text-base
                min-w-[175px]
                hover:bg-[var(--primary-color)]
                transition-all duration-300
              "
            >
              <span>Get in Touch</span>

              <span
                className="
                  text-xl
                  group-hover:translate-x-1
                  transition-transform duration-300
                "
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="
          border-t border-[#ffffff08]
          bg-[#100b09]
        "
      >
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6 sm:px-10 lg:px-16
            py-5 sm:py-7
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            text-xs sm:text-sm
            text-white/50
          "
        >
          {/* Copyright */}
          <p>© {new Date().getFullYear()}</p>

          {/* Center */}
          <p className="order-3 sm:order-2">
            Designed & developed by{" "}
            <span className="text-white/70">Sanjay</span>
          </p>

          {/* Back to top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              order-2 sm:order-3
              group
              flex
              items-center
              gap-2
              hover:text-white
              transition-colors
            "
          >
            <span>Back to Top</span>

            <FaArrowUp
              className="
                text-xs
                group-hover:-translate-y-1
                transition-transform duration-300
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
