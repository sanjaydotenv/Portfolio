import React, { useEffect, useState } from "react";
import logo from "../../../../assets/logo.png";
import Arrow from "./Arrow";

const Navbar = () => {
  const navlinks = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about-me" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-transform duration-300 ease-in-out  bg-[rgba(20,20,20,0.25)]
    backdrop-blur-md border-b border-white/5
        ${showNavbar ? "translate-y-0" : "-translate-y-full "}
      `}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* LEFT */}
        <div className="left flex h-20 w-auto shrink-0 items-center gap-2">
          <img
            className="w-10 object-contain sm:w-12"
            src={logo}
            alt="Sanjay Logo"
          />

          <div className="line h-10 w-[1px] bg-white"></div>

          <div className="content font-semibold">
            <h2 className="text-lg leading-4 tracking-[.1rem] sm:text-2xl">
              Crafted
            </h2>

            <h1 className="text-2xl tracking-tighter sm:text-3xl">
              by <i className="text-[var(--primary-color)]">Sanjay</i>
            </h1>
          </div>
        </div>

        {/* CENTER */}
        <div className="center hidden md:block">
          <div className="flex gap-2 rounded-full border border-[var(--low-opacity-color)] lg:gap-5">
            {navlinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    flex w-fit items-center gap-2 rounded-full px-3 py-3
                    transition-all duration-300
                    lg:px-5
                    ${isActive ? "bg-[#363131]" : "bg-transparent"}
                  `}
                >
                  <span
                    className={`
                      block h-2 w-2 rounded-full
                      ${
                        isActive
                          ? "bg-[var(--primary-color)]"
                          : "bg-[var(--low-opacity-color)]"
                      }
                    `}
                  />

                  {link.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="right shrink-0 rounded-full border">
          <button
            onClick={() => handleNavClick("contact")}
            className="flex w-auto items-center gap-2 px-3 py-2 text-base sm:w-45 sm:gap-3 sm:px-5 sm:text-xl"
          >
            <span className="hidden sm:block">Contact Us</span>

            <span className="sm:hidden">Contact</span>

            <span className="rotate-[-45deg]">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
