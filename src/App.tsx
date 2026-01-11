import React, { useState } from "react";
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
import Education from "./components/Education";

import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      {/* ✅ Main visible immediately (better LCP) */}
      <Main />

      {/* ✅ Animate only below sections */}
      <FadeIn transitionDuration={700}>
        <TrustedBy />
        <Expertise />
        <Timeline />
        <Project />
        <Education />
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
