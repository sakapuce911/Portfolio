import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 – Present"
            iconStyle={{ background: "#ff6b00", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Global Delivery Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Orange Business Madagascar
            </h4>
            <p>
              Led end-to-end delivery of international IT and connectivity projects.
              Coordinated clients, technical teams, and field operations to ensure
              quality, deadlines, and service activation.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2023 – May 2024"
            iconStyle={{ background: "#ff6b00", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Digital Marketing Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mauritius Digital Service
            </h4>
            <p>
              Delivered data-driven digital campaigns across paid ads, social media,
              and email marketing. Focused on performance optimization, reporting,
              and measurable business results.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2021 – November 2022"
            iconStyle={{ background: "#ff6b00", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Consultant – Africa Zone
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              2Interact Inc (USA)
            </h4>
            <p>
              Supported business development across French-speaking African markets.
              Advised on local regulations, adapted content, and analyzed performance
              data to support client acquisition and growth.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;