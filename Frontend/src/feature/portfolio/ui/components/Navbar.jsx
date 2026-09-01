import React, { useEffect, useState } from "react";
import logo from "../../../../assets/logo.png";
import Arrow from "./Arrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
          );

          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const dots = document.querySelectorAll(".nav-dot");

    dots.forEach((dot) => {
      gsap.killTweensOf(dot);
      gsap.set(dot, {
        clearProps: "backgroundColor,transform",
      });
    });
  }, [activeSection]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const dot = button.querySelector(".nav-dot");

    gsap.to(button, {
      y: -5,
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(dot, {
      backgroundColor: "var(--primary-color)",
      scale: 1.3,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e) => {
    const button = e.currentTarget;
    const dot = button.querySelector(".nav-dot");

    const isActive = button.dataset.active === "true";

    gsap.to(button, {
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(dot, {
      backgroundColor: isActive
        ? "var(--primary-color)"
        : "var(--low-opacity-color)",
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        bg-[rgba(20,20,20,0.25)]
        backdrop-blur-md
        border-b border-white/5
        transition-transform duration-300 ease-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div
        className="
          mx-auto
          flex
          min-h-20
          w-full
          max-w-[1600px]
          items-center
          justify-between
          gap-4
          px-4
          sm:px-6
          lg:px-10
        "
      >
        <div className="left flex h-20 w-auto shrink-0 items-center gap-2">
          <img
            className="w-10 object-contain sm:w-12"
            src={logo}
            alt="Sanjay Logo"
          />

          <div className="line h-10 w-[1px] bg-white"></div>

          <div className="content font-semibold">
            <h2 className="text-sm leading-4 tracking-[.1rem] sm:text-xl">
              Crafted
            </h2>

            <h1 className="text-xl tracking-tighter sm:text-2xl">
              by <i className="text-[var(--primary-color)]">Sanjay</i>
            </h1>
          </div>
        </div>

        <div className="center hidden md:block">
          <div
            className="
              flex
              gap-2
              rounded-full
              border
              border-[var(--low-opacity-color)]
              lg:gap-5
            "
          >
            {navlinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  data-active={isActive}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`
                    flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-3
                    lg:px-5
                    ${isActive ? "bg-[#363131]" : "bg-transparent"}
                  `}
                >
                  <span
                    className={`
                      nav-dot
                      block
                      h-2
                      w-2
                      rounded-full
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

        <div className="right shrink-0 rounded-full border">
          <button
            onClick={() => handleNavClick("contact")}
            className="
              flex
              w-auto
              items-center
              gap-2
              px-3
              py-2
              text-base
              sm:w-45
              sm:gap-3
              sm:px-5
              sm:text-xl
            "
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
