import React from "react";
import "../assets/styles/Education.scss";

type EduItem = {
  title: string;
  school: string;
  location: string;
  period: string;
  description: string;
};

type CertItem = {
  title: string;
  organization: string;
  year: string;
};

const education: EduItem[] = [
  {
    title: "MBA — Digital Marketing",
    school: "Amity University",
    location: "Mauritius",
    period: "2022 — 2024",
    description:
      "Focused on digital strategy, SEO/SEM, social media, and marketing analytics. Strengthened data-driven decision-making and performance execution in international environments.",
  },
  {
    title: "MBA — Business Management",
    school: "Asia Pacific University",
    location: "Malaysia",
    period: "2019 — 2021",
    description:
      "Built strong business and management foundations, with exposure to business intelligence, data analytics, and technology management to support structured project execution.",
  },
  {
    title: "Bachelor — Marketing",
    school: "ACEEM University",
    location: "Madagascar",
    period: "2015 — 2018",
    description:
      "Developed core skills in market strategy, consumer behavior, brand positioning, and business-oriented communication to support stakeholder alignment and delivery success.",
  },
];

const certifications: CertItem[] = [
  { title: "IELTS", organization: "British Council", year: "2020" },
  { title: "Drop-Shipping Masterclass", organization: "Udemy", year: "2023" },
  { title: "Product Strategy — Creation & Marketing", organization: "Udemy", year: "2025" },
  { title: "Build Profitable E-commerce Stores", organization: "Udemy", year: "2025" },
];

function Education() {
  return (
    <section
      className="education-container"
      id="education"
      aria-label="Education and certifications"
    >
      <h1>Education</h1>

      <p className="education-subtitle">
        Academic background aligned with <strong>digital transformation</strong>, structured execution, and
        international environments supporting clear communication, stakeholder alignment, and results-driven delivery.
      </p>

      <div className="education-grid">
        {education.map((item, idx) => (
          <div className="education-card" key={`edu-${idx}`}>
            <h2 className="education-title">{item.title}</h2>
            <p className="education-meta">
              {item.school} • {item.location} • {item.period}
            </p>
            <p className="education-desc">{item.description}</p>
          </div>
        ))}

        <div className="education-card education-card--certs">
          <h2 className="education-title">Certifications</h2>
          <p className="education-meta">Continuous learning & upskilling</p>

          <ul className="education-list">
            {certifications.map((c, idx) => (
              <li key={`cert-${idx}`}>
                <strong>{c.title}</strong> — {c.organization} ({c.year})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
