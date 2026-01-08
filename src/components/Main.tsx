import React from "react";
import "../assets/styles/Main.scss";

import profilePic from "../assets/images/profile.jpg";

// ✅ Material UI Icons (déjà dans ton template)
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Main() {
  return (
    <div className="container">
      <section className="about-section" id="about">
        {/* PROFILE IMAGE */}
        <div className="image-wrapper">
          <img src={profilePic} alt="Natiora Idealy Digital & IT Project Manager" />
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
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* NAME & ROLE (SEO optimized) */}
          <p className="name">Natiora Idealy</p>
          <h1>Digital & IT Project Manager</h1>
          <p className="tagline">
           International Projects • Global Delivery • Business-Oriented Execution
         </p>
         <p className="availability">
          Available for international and remote opportunities
          </p>

          {/* ABOUT ME */}
          <div className="about-inline">
            <h2>About Me</h2>
            <p>
              Digital & IT Project Manager with international experience delivering
              digital and IT projects in complex environments. I work at the
              intersection of technology, business, and stakeholders to ensure
              projects are delivered on time, on budget, and aligned with strategic
              objectives.
              </p>
              <p>
                I have led global delivery initiatives at Orange Business Madagascar
                and managed data-driven digital projects at Mauritius Digital Service,
                collaborating with cross-functional and international teams.
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

          {/* SEO TEXT BLOCK (for Google + Screaming Frog) */}
          <section className="seo-text">
            <h2>Digital & IT Project Manager – International Project Delivery</h2>

            <p>
              I deliver digital and IT projects in international environments,
              focusing on stakeholder coordination, reliable execution, and
              business-aligned outcomes. My experience includes global delivery
              activities and cross-functional collaboration to ensure projects
              are completed on time, on budget, and with high quality standards.
            </p>

            <p>
              This portfolio highlights my background in digital transformation,
              project management, reporting, and communication. You can also
              download my CV in English or French and connect with me on LinkedIn.
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

              <a
                href="/french.pdf"
                download
                className="cv-button cv-button--secondary"
              >
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
              rel="noreferrer"
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
