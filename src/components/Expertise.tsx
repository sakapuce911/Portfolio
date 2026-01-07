import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faChartLine, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Project Planning",
  "Delivery Management",
  "Stakeholder Coordination",
  "Risk Management",
  "Quality Control",
  "International Projects",
];

const labelsSecond = [
  "Digital Strategy",
  "Data Analysis",
  "Campaign Optimization",
  "Reporting",
  "Process Improvement",
];

const labelsThird = [
  "Client Communication",
  "Team Coordination",
  "Leadership",
  "Problem Solving",
  "Execution",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x"/>
                    <h3>Project & Delivery Management</h3>
                    <p>
                    End-to-end management of digital and IT projects, from planning to delivery. Coordinating stakeholders, managing risks, and ensuring quality and deadlines in international environments.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Core skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Digital & Data</h3>
                    <p>
                    Driving digital initiatives through data analysis, reporting, and performance optimization. Supporting decision-making with insights and continuous improvement.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Core skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHandshake} size="3x"/>
                    <h3>Communication & Leadership</h3>
                    <p>
                    Strong focus on communication, coordination, and execution. Acting as a bridge between clients, technical teams, and operations to ensure alignment and successful delivery.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Core skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;