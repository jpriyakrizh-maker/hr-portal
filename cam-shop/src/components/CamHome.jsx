import React from "react";
import "./CamHome.css";
import { Link } from "react-router-dom";
import cam1 from "../assets/cam1.jpg";

function CamHome() {
  return (
    <div className="cam-home">

      <nav className="navbar">
        <div className="logo">LUMORA</div>

        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="menu-btn">
          ☰
        </label>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#cameras">Cameras</a>
          <Link to="/about">About</Link>
          <a href="#cart">🛒 Cart</a>
        </div>
      </nav>


      <section className="hero" id="home">

        <div className="hero-content">
          <p className="small-text">EST. 2026</p>

          <h1>
            CAPTURE
            <br />
            THE UNSEEN.
          </h1>

          <p className="hero-description">
            Professional cameras for extraordinary moments.
          </p>

          <a href="#cameras" className="hero-btn">
            EXPLORE CAMERAS →
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
            alt="Professional camera"
          />
        </div>

      </section>


      <section className="vision">

        <p className="small-text">FIND YOUR STYLE</p>

        <h2>CHOOSE YOUR VISION</h2>

        <div className="vision-grid">

          <div className="vision-card">
            <span>01</span>
            <h3>PORTRAIT</h3>
            <p>Capture every expression.</p>
          </div>

          <div className="vision-card">
            <span>02</span>
            <h3>TRAVEL</h3>
            <p>Take your stories everywhere.</p>
          </div>

          <div className="vision-card">
            <span>03</span>
            <h3>WILDLIFE</h3>
            <p>Get closer to nature.</p>
          </div>

          <div className="vision-card">
            <span>04</span>
            <h3>CINEMATIC</h3>
            <p>Turn moments into stories.</p>
          </div>

        </div>
      </section>


      <section className="featured" id="cameras">

        <div className="featured-image">
          <img src={cam1}
            alt="Featured camera"
          />
        </div>

        <div className="featured-content">

          <p className="small-text">FEATURED CAMERA</p>

          <h2>NIKON Z9</h2>

          <p>
            Professional Full Frame Mirrorless Camera • 8K Video
          </p>

          <h3>₹4,49,995</h3>

          <a
            href="https://www.nikon.co.in/articles/nikon-z-9-producing-more-than-just-quality-images"
            className="hero-btn"
            target="_blank"
            rel="noreferrer"
          >
            EXPLORE Z9 →
          </a>

        </div>

      </section>


      <section className="story" id="about">

        <div className="story-content">

          <p className="small-text">OUR PHILOSOPHY</p>

          <h2>
            YOUR CAMERA.
            <br />
            YOUR STORY.
          </h2>

          <p>
            Every photograph has a story.
            LUMORA helps you capture yours.
          </p>

        </div>

      </section>


      <footer className="footer">

        <h2>LUMORA</h2>

        <p>Instagram • YouTube • Contact</p>

        <p>© 2026 LUMORA Camera Store</p>

      </footer>

    </div>
  );
}

export default CamHome;