import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";

import TrustedBy from "./components/TrustedBy";
import FadeIn from "./components/FadeIn";
import Education from "./components/Education"; // ✅ AJOUT

import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      <FadeIn transitionDuration={700}>
        <Main />

        {/* ✅ Preuve sociale */}
        <TrustedBy />

        <Expertise />
        <Timeline />
        <Project />

        {/* ✅ Education */}
        <Education />

        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
