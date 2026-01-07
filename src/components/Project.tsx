/* =========================
   FILE 1: src/components/Project.tsx
   ========================= */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faEnvelope,
  faGears,
  faBullhorn,
  faPenNib,
  faPalette,
  faRobot,
  faComments,
  faWandMagicSparkles,
  faMagnifyingGlass,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="tools">
      <h2>Tools & AI Skills</h2>

      <div className="tools-ai-grid">
        {/* TOOLS USED */}
        <div className="tools-ai-col">
          <h2 className="tools-ai-title">Tools Used</h2>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faClipboardList} />
            <div>
              <h3>Trello</h3>
              <p>Task tracking, project organization and delivery follow-up.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faFileWord} />
            <div>
              <h3>Microsoft Office</h3>
              <p>Documentation, reporting and presentations.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h3>Mailchimp</h3>
              <p>Email campaigns, segmentation and performance tracking.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faPalette} />
            <div>
              <h3>Canva / Adobe Express</h3>
              <p>Visual content and communication assets.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faGears} />
            <div>
              <h3>Automation Tools</h3>
              <p>Make, Google tools, Meta Business Suite.</p>
            </div>
          </div>
        </div>

        {/* AI SKILLS */}
        <div className="tools-ai-col">
          <h2 className="tools-ai-title">AI Skills</h2>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faRobot} />
            <div>
              <h3>Generative AI</h3>
              <p>ChatGPT, Claude, Gemini, DeepSeek.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faComments} />
            <div>
              <h3>AI for Productivity</h3>
              <p>Notion AI, DeepL Write, Quillbot, Microsoft Copilot.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <div>
              <h3>Creative AI</h3>
              <p>Napkin AI, Aiter, Canva AI, Dall-E.</p>
            </div>
          </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faClipboardList} />
           <div>
             <h3>AI for Project Management</h3>
             <p>Notion AI, Asana, ClickUp, Taskade.</p>
           </div>
         </div>

          <div className="tools-ai-card">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <div>
              <h3>AI-Assisted Research</h3>
              <p>Perplexity, Consensus, Elicit, Scite.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;