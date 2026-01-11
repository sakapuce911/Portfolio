import React from "react";
import "../assets/styles/Timeline.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    date: "Jun 2024 — Present",
    title: "Global Delivery Manager",
    company: "Orange Business",
    location: "Madagascar",
    summary:
      "Leading international IT project delivery and digital transformation initiatives, coordinating cross-functional teams and stakeholders to ensure reliable execution and measurable business outcomes.",
    bullets: [
      "Led end-to-end delivery of international IT projects, ensuring on-time and on-budget execution.",
      "Coordinated stakeholders across multiple regions to align scope, priorities, and delivery plans.",
      "Implemented project governance, reporting, and risk management to maintain quality standards.",
      "Supported digital transformation adoption by aligning delivery with business objectives and user needs.",
    ],
  },
  {
    date: "Jan 2023 — May 2024",
    title: "Digital Marketing Manager",
    company: "Mauritius Digital Service",
    location: "Mauritius",
    summary:
      "Managed data-driven digital initiatives with a strong focus on planning, execution, performance optimization, and cross-team coordination to deliver business-aligned results.",
    bullets: [
      "Delivered multi-channel digital projects with structured planning, timelines, and KPI monitoring.",
      "Coordinated cross-functional teams to ensure consistent execution.",
      "Optimized performance through reporting and continuous improvement cycles.",
      "Managed budgets and stakeholder expectations with clear communication.",
    ],
  },
  {
    date: "Mar 2021 — Nov 2022",
    title: "Consultant – Africa Zone",
    company: "2Interact Inc",
    location: "United States",
    summary:
      "Supported international business expansion by aligning solutions with local regulations, coordinating communication materials, and optimizing go-to-market execution.",
    bullets: [
      "Advised on compliance and market requirements.",
      "Created French communication assets to support adoption.",
      "Aligned stakeholders on execution priorities.",
      "Analyzed performance insights to support growth strategies.",
    ],
  },
];

function Timeline() {
  return (
    <section className="timeline-container" id="career">
      <h2>Career</h2>

      <p className="timeline-subtitle">
        International experience delivering <strong>digital transformation</strong>{" "}
        and <strong>IT projects</strong> across complex environments, with a strong
        focus on structured execution, cross-functional coordination, and business impact.
      </p>

      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={`${exp.company}-${idx}`}
            date={exp.date}
            iconStyle={{
              background: "#6d28d9", // ✅ violet branding
              color: "#ffffff",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={{
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(0,0,0,0.15)",
            }}
          >
            <h2 className="vertical-timeline-element-title">{exp.title}</h2>

            <h3 className="vertical-timeline-element-subtitle">
              {exp.company} • {exp.location}
            </h3>

            <p>{exp.summary}</p>

            <ul className="timeline-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
