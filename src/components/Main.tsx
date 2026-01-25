import React from "react";
import "../assets/styles/Main.scss";

import profilePic from "../assets/images/profile.webp";

// ✅ Material UI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Main() {
  return (
    <div className="container">
      <section className="about-section" id="about">
        {/* PROFILE IMAGE */}
        <div className="image-wrapper">
          <img
            src="/profile.webp"
            alt="Natiora Idealy, Digital Transformation & IT Project Manager specialized in international project delivery"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* CONTENT */}
        <div className="content">
          {/* SOCIAL ICONS (DESKTOP) */}
          <div className="social_icons">
            <a
              href="https://wa.me/23057261909"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/natiora/"
              target="_blank"
              rel="noreferrer me"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* NAME & ROLE (SEO optimized) */}
          <p className="name">Natiora Idealy</p>
          <h1>Digital & IT Project Manager</h1>
          <p className="tagline">
          International Project Management and Digital Transformation</p>
         <p className="availability">
          Available for international and remote opportunities
          </p>
          {/* ABOUT ME */}
          <div className="about-inline">
            <h2>About Me</h2>
            <p>
              I am a Digital Transformation & IT Project Manager with international experience delivering complex
              technology and business change initiatives across multi-regional teams. I lead end-to-end delivery—from
              planning and coordination to execution and reporting—ensuring projects are delivered on time, on budget,
              and aligned with strategic objectives.
            </p>
            <p>
              In my recent roles, I have managed global delivery programs and digital initiatives within demanding
              environments, collaborating with cross-functional stakeholders to drive measurable outcomes. I combine
              structured project governance with clear communication to keep teams aligned, risks controlled, and
              results consistently achieved.
            </p>
          </div>

          <div className="about-inline">
            <h2>What I Bring</h2>
            <ul>
              <li>End-to-end project delivery in international environments</li>
              <li>Strong stakeholder coordination across technical & business teams</li>
              <li>Clear communication, reporting, and execution focus</li>
              <li>Ability to translate business needs into actionable delivery plans</li>
            </ul>
          </div>

          {/* SEO TEXT BLOCK (for Google + Crawlers) */}
          <section className="seo-text">
            <h2>International IT Project Management & Digital Transformation Delivery</h2>

            <p>
              I deliver digital transformation and IT projects in international environments, focusing on reliable
              execution, stakeholder alignment, and business impact. My work covers project planning, governance,
              reporting, and cross-functional coordination to ensure high-quality delivery and strong adoption across
              teams and regions.
            </p>

            <p>
              This portfolio showcases my experience in international project delivery, digital transformation, and IT
              program execution. You can download my CV in English or French and connect with me on LinkedIn to discuss
              remote or international opportunities.
            </p>
          </section>

          {/* CV CARD */}
          <div className="cv-card">
            <h3>Download My CV</h3>
            <p>Available for international and remote opportunities.</p>
            <p>Choose your preferred language</p>

            <div className="cv-buttons">
              <a href="/english.pdf" download className="cv-button">
                English
              </a>

              <a href="/french.pdf" download className="cv-button cv-button--secondary">
                Français
              </a>
            </div>
          </div>

          {/* SOCIAL ICONS (MOBILE) */}
          <div className="mobile_social_icons">
            <a
              href="https://wa.me/23057261909"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/natiora/"
              target="_blank"
              rel="noreferrer me"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
