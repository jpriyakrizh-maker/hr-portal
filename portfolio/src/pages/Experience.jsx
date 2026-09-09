import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-page">
      <div className="section-heading">
        <h1>Experience & Internship</h1>
        <p>My practical learning experience.</p>
      </div>

      <div className="experience-card">

        <div className="experience-date">
          <strong>June</strong>
          <span>2025</span>
        </div>

        <div className="experience-line"></div>

        <div className="experience-content">
          <p className="experience-label">
            FULL STACK DEVELOPMENT INTERN
          </p>

          <h2>Phoenix Softech, Madurai</h2>

          <p>
            Completed a 30-hour internship in Full Stack Development using
            the MERN Stack. Gained practical exposure to web application
            development and modern full-stack technologies.
          </p>

          <div className="experience-points">
            <span>✓ Web Application Development</span>
            <span>✓ MERN Stack Technologies</span>
            <span>✓ Responsive Web Design</span>
            <span>✓ Problem Solving & Debugging</span>
          </div>
        </div>

        <div className="company-box">
          PHOENIX
          <br />
          SOFTECH
        </div>

      </div>
    </section>
  );
}

export default Experience;