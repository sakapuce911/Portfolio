import React, { useMemo, useState } from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  const TO_EMAIL = "natiiidealy@gmail.com.com";
  const CAL_LINK = "https://cal.com/natiora/30min";

  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("Portfolio contact");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const cleanName = name.trim() || "Anonymous";
    const cleanEmail = fromEmail.trim() || "No email provided";
    const cleanSubject = subject.trim() || "Portfolio contact";
    const cleanMessage = message.trim() || "(No message)";

    const body = `Name: ${cleanName}\nContact: ${cleanEmail}\n\nMessage:\n${cleanMessage}`;

    return `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(body)}`;
  }, [name, fromEmail, subject, message]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <section className="contact_wrapper" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Send me a message or book a quick call.</p>

          <div className="contact-quick">
            <a className="contact-pill" href={`mailto:${TO_EMAIL}`}>
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
        </div>

        <div className="contact-card">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-grid">
              <div className="field">
                <label>Your name</label>
                <input
                  className="contact-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div className="field">
                <label>Your email</label>
                <input
                  className="contact-input"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>

              <div className="field field--full">
                <label>Subject</label>
                <input
                  className="contact-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Your subject"
                />
              </div>

              <div className="field field--full">
                <label>Message</label>
                <textarea
                  className="contact-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows={7}
                />
              </div>
            </div>

            <div className="contact-actions">
              <button type="submit" className="contact-submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
