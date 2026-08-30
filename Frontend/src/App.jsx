import React from "react";
import Navbar from "./feature/portfolio/ui/components/Navbar";
import HomePage from "./feature/portfolio/ui/pages/HomePage";
import AboutMePage from "./feature/portfolio/ui/pages/AboutMePage";
import ProjectPage from "./feature/portfolio/ui/pages/ProjectPage";
import ContactPage from "./feature/portfolio/ui/pages/ContactPage";

const App = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[var(--main-bg)] text-[var(--secondary-color)]">

      <Navbar />

      <div>
        <section id="home" className="scroll-mt-20">
          <HomePage />
        </section>

        <section id="about-me" className="scroll-mt-20">
          <AboutMePage />
        </section>

        <section id="work" className="scroll-mt-20">
          <ProjectPage />
        </section>

        <section id="contact" className="scroll-mt-20">
          <ContactPage />
        </section>
      </div>

    </main>
  );
};

export default App;