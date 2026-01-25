import React from "react";
import "../assets/styles/Project.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faGears,
  faRobot,
  faMagnifyingGlass,
  faComments,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

type SkillItem = {
  icon: any;
  title: string;
  description: string;
};

const toolsUsed: SkillItem[] = [
  {
    icon: faClipboardList,
    title: "Project Delivery & Governance",
    description:
      "Planning, backlog structuring, milestones, reporting, and delivery monitoring in international environments to ensure scope control and business-aligned execution.",
  },
  {
    icon: faGears,
    title: "Process Optimization",
    description:
      "Continuous improvement mindset to streamline workflows, reduce delivery friction, and support adoption across stakeholders and teams.",
  },
  {
    icon: faComments,
    title: "Stakeholder Communication",
    description:
      "Clear communication, alignment workshops, and decision support to keep cross-functional teams synchronized and delivery predictable.",
  },
];

const aiAndDigitalSkills: SkillItem[] = [
  {
    icon: faRobot,
    title: "Digital Transformation Projects",
    description:
      "Delivery of digital initiatives that improve operations, customer experience, and business performance through structured project execution.",
  },
  {
    icon: faMagnifyingGlass,
    title: "Analytics & Performance Tracking",
    description:
      "Monitoring KPIs, building reporting routines, and using insights to support decisions and improve project outcomes over time.",
  },
  {
    icon: faWandMagicSparkles,
    title: "Automation & Modern Tools",
    description:
      "Leveraging modern tools and structured documentation to accelerate delivery cycles, ensure traceability, and maintain quality standards.",
  },
];

const deliverables: SkillItem[] = [
  {
    icon: faFileWord,
    title: "Project Documentation",
    description:
      "Specifications, meeting notes, governance documents, and stakeholder-ready summaries for alignment and execution.",
  },
  {
    icon: faFilePowerpoint,
    title: "Executive Communication",
    description:
      "Clear project updates, steering materials, and delivery summaries adapted for leadership and stakeholders.",
  },
  {
    icon: faFileExcel,
    title: "Tracking & Reporting",
    description:
      "KPI tracking, action plans, risk logs, and structured dashboards to support transparent decision-making.",
  },
  {
    icon: faGoogle,
    title: "Collaboration & Tools",
    description:
      "Comfortable working with modern collaboration tools, structured documentation, and reporting routines to keep stakeholders aligned throughout delivery.",
  },
];

function Project() {
  return (
    <section
      className="projects-container"
      id="tools"
      aria-label="Tools and skills for international IT project delivery"
    >
      <h2>Projects</h2>

      <p className="tools-ai-subtitle">
        A practical toolkit to deliver <strong>digital transformation</strong> and{" "}
        <strong>projects</strong> in international contexts: structured governance,
        stakeholder coordination, reporting, and execution discipline to achieve
        measurable business outcomes.
      </p>

      <div className="tools-ai-grid">
        {/* TOOLS USED */}
        <div className="tools-ai-col">
          <h2 className="tools-ai-title">Delivery Toolkit</h2>

          {toolsUsed.map((item, idx) => (
            <div className="tools-ai-card" key={`tool-${idx}`}>
              <FontAwesomeIcon icon={item.icon} />
              <div className="tools-ai-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DIGITAL TRANSFORMATION */}
        <div className="tools-ai-col">
          <h2 className="tools-ai-title">Digital Transformation Focus</h2>

          {aiAndDigitalSkills.map((item, idx) => (
            <div className="tools-ai-card" key={`skill-${idx}`}>
              <FontAwesomeIcon icon={item.icon} />
              <div className="tools-ai-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DELIVERABLES */}
      <div className="tools-ai-deliverables">
        <h2 className="tools-ai-title">Typical Deliverables</h2>

        <div className="tools-ai-deliverables-grid">
          {deliverables.map((item, idx) => (
            <div className="tools-ai-card" key={`deliv-${idx}`}>
              <FontAwesomeIcon icon={item.icon} />
              <div className="tools-ai-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
