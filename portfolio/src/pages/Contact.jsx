import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <p>GET IN TOUCH</p>

          <h1>
            Let's Create Something
            <span> Meaningful Together</span>
          </h1>

          <div className="heading-line"></div>
        </div>

        {/* Main Contact Area */}
        <div className="contact-wrapper">

          {/* Left Side */}
          <div className="contact-info">

            <div className="big-jp">JP</div>

            <div className="info-content">
              <p className="small-title">LET'S CONNECT</p>

              <h2>
                Have an idea?
                <br />
                Let's talk.
              </h2>

              <p className="info-description">
                I'm open to opportunities, collaborations and interesting
                projects. Feel free to reach out and let's create something
                useful together.
              </p>

              {/* Email */}
              <a
                href="mailto:jp1206206@gmail.com"
                className="contact-link"
              >
                <div className="link-icon">✉</div>

                <div>
                  <small>EMAIL</small>
                  <strong>jp1206206@gmail.com</strong>
                </div>

                <span>↗</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jeya-priya-059b27414/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <div className="link-icon">in</div>

                <div>
                  <small>LINKEDIN</small>
                  <strong>Connect with me</strong>
                </div>

                <span>↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/jpriyakrizh-maker"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <div className="link-icon">◉</div>

                <div>
                  <small>GITHUB</small>
                  <strong>View my projects</strong>
                </div>

                <span>↗</span>
              </a>
            </div>

            {/* Decorative Circles */}
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <div className="circle circle-three"></div>
          </div>

          {/* Right Side */}
          <div className="contact-form-box">

            <div className="form-header">
              <p>SEND A MESSAGE</p>
              <span>I'd love to hear from you.</span>
            </div>

            <form>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Project discussion"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit">
                Send Message
                <span>↗</span>
              </button>

            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="contact-bottom">
          <div>
            <span>OPEN TO OPPORTUNITIES</span>
            <strong>Internships • Projects • Collaborations</strong>
          </div>

          <div className="bottom-status">
            <i></i>
            AVAILABLE FOR NEW PROJECTS
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;