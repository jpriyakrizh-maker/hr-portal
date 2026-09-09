import React from "react";
import "./Skills.css";

function Skills() {
  const programmingSkills = [
    "C",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MERN Stack",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "MS Office",
  ];

  const otherSkills = [
    "CAD",
    "Problem Solving",
    "Time Management",
    "Teamwork",
  ];

  return (
    <section className="skills-page">

      {/* PAGE HEADING */}
      <div className="section-heading">
        <h1>Skills</h1>
        <p>
          Technologies, tools and skills I have learned through
          academics and practical experience.
        </p>
      </div>

      {/* SKILLS */}
      <div className="skills-container">

        {/* PROGRAMMING */}
        <div className="skill-card purple-card">
          <div className="skill-top">
            <div className="skill-icon">
              {"</>"}
            </div>

            <span className="skill-number">01</span>
          </div>

          <h2>Programming & Web</h2>

          <p className="skill-description">
            Basic knowledge of programming and modern web
            development technologies.
          </p>

          <div className="skill-list">
            {programmingSkills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span>✓</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="skill-card blue-card">
          <div className="skill-top">
            <div className="skill-icon">
              ⚙
            </div>

            <span className="skill-number">02</span>
          </div>

          <h2>Tools & Technologies</h2>

          <p className="skill-description">
            Tools I use for coding, development and everyday
            productivity.
          </p>

          <div className="skill-list">
            {tools.map((skill) => (
              <div className="skill-item" key={skill}>
                <span>✓</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OTHER SKILLS */}
        <div className="skill-card green-card">
          <div className="skill-top">
            <div className="skill-icon">
              ▣
            </div>

            <span className="skill-number">03</span>
          </div>

          <h2>Other Skills</h2>

          <p className="skill-description">
            Personal and professional skills that support my
            learning and development.
          </p>

          <div className="skill-list">
            {otherSkills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span>✓</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;