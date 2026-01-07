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
          <img src={profilePic} alt="Natiora Idealy" />
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

          {/* NAME & ROLE */}
          <h1>Natiora Idealy</h1>
          <p>Digital & IT Project Manager</p>

          {/* ABOUT ME */}
          <div className="about-inline">
            <h2>About Me</h2>
            <p>
              Digital & IT Project Manager with hands-on experience delivering
              connectivity and digital projects in international environments. I
              specialize in end-to-end delivery, stakeholder coordination, and
              ensuring projects are delivered on time, on budget, and with high
              quality standards.
            </p>
          </div>

          {/* CV CARD */}
          <div className="cv-card">
            <h3>Download My CV</h3>
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
