import React from "react";
import "./CamAbout.css";
import { Link } from "react-router-dom";

function CamAbout() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <nav className="about-navbar">

        <div className="about-logo">
          LUMORA
        </div>

        <input type="checkbox" id="about-menu-toggle" />

        <label htmlFor="about-menu-toggle" className="about-menu-btn">
          ☰
        </label>

        <div className="about-nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="about-mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* About Hero */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-small-text">
            BEHIND THE LENS
          </p>

          <h1>
            WE BELIEVE
            <br />
            EVERY FRAME
            <br />
            MATTERS.
          </h1>

          <p>
            LUMORA is built for people who see the world
            differently and want to turn moments into stories.
          </p>

        </div>

        <div className="about-hero-image">

          <img
            src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=80"
            alt="Photographer using camera"
          />

        </div>

      </section>


      {/* Our Story */}
      <section className="our-story" id="story">

        <div className="story-number">
          01
        </div>

        <div className="story-text">

          <p className="about-small-text">
            OUR STORY
          </p>

          <h2>
            FROM A
            <br />
            MOMENT TO
            <br />
            A MEMORY.
          </h2>

          <p>
            Photography is more than pressing a button.
            It is about seeing light, emotion and movement
            in a completely different way.
          </p>

          <p>
            LUMORA brings together carefully selected cameras
            and photography equipment for creators who want
            quality without limits.
          </p>

        </div>

      </section>


      {/* Numbers */}
      <section className="about-stats">

        <div className="stat-box">
          <h2>2026</h2>
          <p>YEAR FOUNDED</p>
        </div>

        <div className="stat-box">
          <h2>100+</h2>
          <p>CAMERA PRODUCTS</p>
        </div>

        <div className="stat-box">
          <h2>4.9</h2>
          <p>AVERAGE RATING</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>CREATOR SUPPORT</p>
        </div>

      </section>


      {/* Our Values */}
      <section className="values">

        <div className="values-heading">

          <p className="about-small-text">
            WHAT DRIVES US
          </p>

          <h2>
            OUR
            <br />
            VALUES.
          </h2>

        </div>

        <div className="values-grid">

          <div className="value-card">
            <span>01</span>

            <h3>PRECISION</h3>

            <p>
              Every detail matters, from the lens
              to the final frame.
            </p>
          </div>

          <div className="value-card">
            <span>02</span>

            <h3>CREATIVITY</h3>

            <p>
              We believe the best photographs
              come from unique perspectives.
            </p>
          </div>

          <div className="value-card">
            <span>03</span>

            <h3>QUALITY</h3>

            <p>
              Reliable equipment for creators
              who refuse to compromise.
            </p>
          </div>

        </div>

      </section>


      {/* Quote */}
      <section className="camera-quote">

        <p>
          "SEE THE WORLD.
          <br />
          CAPTURE YOUR VERSION."
        </p>

        <span>
          — LUMORA
        </span>

      </section>


      {/* Contact */}
      <section className="about-contact" id="contact">

        <p className="about-small-text">
          LET'S CREATE
        </p>

        <h2>
          READY TO
          <br />
          TELL YOUR STORY?
        </h2>

        <a href="mailto:hello@lumora.com">
          CONTACT LUMORA →
        </a>

      </section>


      {/* Footer */}
      <footer className="about-footer">

        <h2>LUMORA</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>
        </div>

        <p>
          Instagram • YouTube • Pinterest
        </p>

        <p>
          © 2026 LUMORA Camera Store
        </p>

      </footer>

    </div>
  );
}

export default CamAbout;