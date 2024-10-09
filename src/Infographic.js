import React from "react";
import "./Infographic.css"; // External CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserFriends,
  faUser,
  faClipboardList,
  faGlobe,
  faCalculator,
  faFlask,
  faPaintBrush,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Infographic = () => {
  return (
    <div className="infographic">
      {/* Header Section */}
      <div className="header-section">
        <h1>Understanding the RTI Model for New Teachers</h1>
        <h2>A multi-tiered approach to student support</h2>
        <div className="visual-element">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="4x" />
        </div>
      </div>

      {/* Tiers Overview Section */}
      <div className="tiers-overview">
        {/* Tier 1 */}
        <div className="tier tier-1">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
          <h3>Tier 1: Universal Instruction</h3>
          <ul>
            <li>
              <strong>Group Size:</strong> Whole class
            </li>
            <li>
              <strong>Instruction Time:</strong> 90+ minutes daily
            </li>
            <li>
              <strong>Who Teaches:</strong> Classroom teacher
            </li>
            <li>
              <strong>Method/Program:</strong> High-quality, differentiated
              instruction
            </li>
            <li>
              <strong>Assessment:</strong> Universal screening (3x per year)
            </li>
            <li>
              <strong>Family Communication:</strong> Progress reports,
              newsletters
            </li>
          </ul>
        </div>

        {/* Tier 2 */}
        <div className="tier tier-2">
          <FontAwesomeIcon icon={faUserFriends} size="3x" />
          <h3>Tier 2: Targeted Small Group Instruction</h3>
          <ul>
            <li>
              <strong>Group Size:</strong> 3-5 students
            </li>
            <li>
              <strong>Instruction Time:</strong> 30 minutes, 3-5 days per week
            </li>
            <li>
              <strong>Who Teaches:</strong> Teacher or intervention specialist
            </li>
            <li>
              <strong>Method/Program:</strong> Small group reading/math
              interventions
            </li>
            <li>
              <strong>Assessment:</strong> Bi-weekly progress monitoring
            </li>
            <li>
              <strong>Family Communication:</strong> Bi-weekly reports, mid-term
              reviews
            </li>
          </ul>
        </div>

        {/* Tier 3 */}
        <div className="tier tier-3">
          <FontAwesomeIcon icon={faUser} size="3x" />
          <h3>Tier 3: Intensive Individualized Instruction</h3>
          <ul>
            <li>
              <strong>Group Size:</strong> 1-3 students
            </li>
            <li>
              <strong>Instruction Time:</strong> 45-120 minutes daily
            </li>
            <li>
              <strong>Who Teaches:</strong> Special education teacher or
              intervention specialist
            </li>
            <li>
              <strong>Method/Program:</strong> Intensive interventions (e.g.,
              Orton-Gillingham)
            </li>
            <li>
              <strong>Assessment:</strong> Weekly progress monitoring
            </li>
            <li>
              <strong>Family Communication:</strong> Weekly reports, monthly
              family meetings
            </li>
          </ul>
        </div>
      </div>

      {/* Assessment Frequency and Communication (Spanning Section) */}

      <div className="assessment-communication full-width">
        <h3>Assessment Frequency Across Tiers</h3>
        <div className="visual-element">
          <FontAwesomeIcon icon={faClipboardList} size="3x" />
        </div>

        {/* Comparison Chart */}
        <div className="comparison-chart">
          <div className="comparison-step">
            <div className="dot-pattern light-dots"></div>
            <p>Universal Screening (3x/year)</p>
          </div>
          <div className="comparison-step">
            <div className="dot-pattern medium-dots"></div>
            <p>Bi-weekly Progress Monitoring</p>
          </div>
          <div className="comparison-step">
            <div className="dot-pattern dense-dots"></div>
            <p>Weekly Progress Monitoring</p>
          </div>
        </div>

        <p>
          <strong>Family Communication Tip:</strong> Frequent updates are
          key—use strategies like emails, charts, and in-person meetings for
          each tier.
        </p>
      </div>

      {/* RTI in All Content Areas Section */}
      <div className="rti-content-areas emphasized">
        <h3>RTI Supports All Content Areas</h3>
        <div className="content-area-icons">
          <div className="content-area">
            <FontAwesomeIcon icon={faBook} size="3x" />
            <p>Reading</p>
          </div>
          <div className="content-area">
            <FontAwesomeIcon icon={faCalculator} size="3x" />
            <p>Math</p>
          </div>
          <div className="content-area">
            <FontAwesomeIcon icon={faFlask} size="3x" />
            <p>Science</p>
          </div>
          <div className="content-area">
            <FontAwesomeIcon icon={faPaintBrush} size="3x" />
            <p>Arts</p>
          </div>
          <div className="content-area">
            <FontAwesomeIcon icon={faGlobe} size="3x" />
            <p>Social Studies</p>
          </div>
        </div>
        <p className="rti-description">
          The RTI framework is designed to support students in all subjects,
          ensuring every child has access to the individualized interventions
          they need for success across all areas of learning.
        </p>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <p>
          Effective communication and collaboration with families ensures
          student success at every tier.
        </p>
      </div>
    </div>
  );
};

export default Infographic;
