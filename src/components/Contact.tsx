import React from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  const TO_EMAIL = "natiiidealy@gmail.com";
  const CAL_LINK = "https://cal.com/natiora/30min";

  return (
    <section className="contact_wrapper" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <h1>Contact</h1>

          <p className="contact-subtitle">
            Send me a message or book a quick call.
          </p>

          <div className="contact-quick">
            <a
              className="contact-pill"
              href={`mailto:${TO_EMAIL}?subject=${encodeURIComponent("Portfolio contact")}`}
            >
              Message me
            </a>

            <a
              className="contact-pill contact-pill--primary"
              href={CAL_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>
          </div>

          <p className="contact-note">Response time: within 24–48 hours.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
