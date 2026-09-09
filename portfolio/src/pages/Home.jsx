import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-content">
          <p className="home-subtitle">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span> Jeyapriya</span>
          </h1>

          <h2>
            IT Student & Full Stack Developer
          </h2>

          <p className="home-description">
            I am a B.Sc. Information Technology student with an interest in
            web development and modern technologies. I enjoy creating
            responsive and user-friendly websites using frontend and backend
            technologies.
          </p>

          {/* BUTTONS */}
          <div className="home-buttons">
            <Link to="/about" className="btn primary-btn">
              About Me
            </Link>

            <Link to="/contact" className="btn secondary-btn">
              Contact Me
            </Link>
          </div>

          {/* SKILLS */}
          <div className="home-skills">

            <div className="skill-item">
              <strong>HTML</strong>
              <span>Web Development</span>
            </div>

            <div className="skill-item">
              <strong>Python</strong>
              <span>Programming</span>
            </div>

            <div className="skill-item">
              <strong>MERN</strong>
              <span>Full Stack</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home-image">

          <div className="image-circle">
            <img
              src={profileImg}
              alt=" Jeyapriya"
              className="profile-img"
            />
          </div>

          {/* FLOATING CARD 1 */}
          <div className="floating-card card-one">
            <span>01</span>
            <p>Creative</p>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="floating-card card-two">
            <span>02</span>
            <p>Developer</p>
          </div>

        </div>
      </div>

      {/* BOTTOM INFO */}
      <div className="home-bottom">

        <div className="bottom-item">
          <span>01</span>
          <p>About Me</p>
        </div>

        <div className="bottom-item">
          <span>02</span>
          <p>My Skills</p>
        </div>

        <div className="bottom-item">
          <span>03</span>
          <p>My Projects</p>
        </div>

        <div className="bottom-item">
          <span>04</span>
          <p>Contact</p>
        </div>

      </div>
    </section>
  );
};

export default Home;