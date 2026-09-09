import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-heading">
          <p>ABOUT ME</p>
          <h1>Turning Ideas Into <span>Digital Experiences</span></h1>
        </div>

        <div className="about-content">

          <div className="about-card">
            <span className="about-number">01</span>
            <h2>Who I Am</h2>
            <p>
              I am R Jeyapriya, a B.Sc. Information Technology student
              passionate about web development and modern technologies.
            </p>
            <p>
              I enjoy learning new technologies and building clean,
              responsive and user-friendly websites.
            </p>
          </div>

          <div className="about-card">
            <span className="about-number">02</span>
            <h2>Education</h2>
            <h3>B.Sc. Information Technology</h3>
            <p>
              Theni Kammavar Sangam College of Arts and Science
            </p>
            <span className="year">2023 — 2026</span>
          </div>

          <div className="about-card">
            <span className="about-number">03</span>
            <h2>Internship</h2>
            <h3>Full Stack Development</h3>
            <p>
              Completed a 30-hour MERN Stack Full Stack Development
              internship at Phoenix Softech, Madurai.
            </p>
            <span className="year">June 2025</span>
          </div>

          <div className="about-card">
            <span className="about-number">04</span>
            <h2>My Approach</h2>
            <p>
              I believe in continuous learning, practical experience and
              creating simple solutions for real-world problems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;