import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useAnimation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);

  const videoRef = useRef(null);
  const cameraStreamRef = useRef(null);
  const [cameraOpen, setCameraOpen] = useState(false);

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

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
      } else {
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

    if (dot) {
      gsap.to(dot, {
        backgroundColor: "var(--primary-color)",
        scale: 1.3,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
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

    if (dot) {
      gsap.to(dot, {
        backgroundColor: isActive
          ? "var(--primary-color)"
          : "var(--low-opacity-color)",
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleContactBtnEnter = (e) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#FC6C27",
      y: -7,
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleContactBtnLeave = (e) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "transparent",
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const heroBtnAniEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -7,
      scale: 1.1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const heroBtnAniLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const heroLetsBtnEnter = (e) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#FC6C27",
      color: "white",
      y: -7,
      scale: 1.1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const heroLetsBtnLeave = (e) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "transparent",
      color: "#fff4d6",
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleCamera = async () => {
    try {
      if (cameraOpen) {
        closeCamera();
        return;
      }

      if (!navigator.mediaDevices?.getUserMedia) {
        alert("Your browser does not support camera access.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
        },
        audio: false,
      });

      cameraStreamRef.current = stream;

      setCameraOpen(true);
    } catch (error) {
      console.error("Camera Error:", error);

      if (error.name === "NotAllowedError") {
        alert("Camera permission allow karo.");
      } else if (error.name === "NotFoundError") {
        alert("Camera device nahi mila.");
      } else {
        alert("Camera open nahi ho paya.");
      }
    }
  };

  useEffect(() => {
    if (!cameraOpen) return;

    const video = videoRef.current;
    const stream = cameraStreamRef.current;

    if (!video || !stream) return;

    video.srcObject = stream;

    const playVideo = async () => {
      try {
        await video.play();

        gsap.fromTo(
          video,
          {
            opacity: 0,
            scale: 1.15,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
        );
      } catch (error) {
        console.error("Video Play Error:", error);
      }
    };

    if (video.readyState >= 1) {
      playVideo();
    } else {
      video.onloadedmetadata = playVideo;
    }

    return () => {
      video.onloadedmetadata = null;
    };
  }, [cameraOpen]);

  const closeCamera = () => {
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      cameraStreamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }

    setCameraOpen(false);
  };

  useEffect(() => {
    return () => {
      if (cameraStreamRef.current) {
        cameraStreamRef.current.getTracks().forEach((track) => {
          track.stop();
        });

        cameraStreamRef.current = null;
      }
    };
  }, []);

  return {
    // Navbar
    activeSection,
    showNavbar,
    handleNavClick,
    handleMouseEnter,
    handleMouseLeave,
    handleContactBtnEnter,
    handleContactBtnLeave,

    // Hero
    heroBtnAniEnter,
    heroBtnAniLeave,
    heroLetsBtnEnter,
    heroLetsBtnLeave,

    // Camera
    videoRef,
    cameraOpen,
    handleCamera,
    closeCamera,
  };
};
