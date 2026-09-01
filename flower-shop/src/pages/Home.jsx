import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const FLIP_PHRASES = [
  'EVERY MOMENT',
  'EVERY CELEBRATION',
  'EVERY MEMORY',
  'EVERY OCCASION',
];

export default function Home() {
  const [currentFlipIndex, setCurrentFlipIndex] = useState(0);
  const [flipAnimationState, setFlipAnimationState] = useState('active'); // 'enter', 'active', 'exit'

  useEffect(() => {
    const interval = setInterval(() => {
      // Begin flip exit animation
      setFlipAnimationState('exit');

      setTimeout(() => {
        setCurrentFlipIndex((prevIndex) => (prevIndex + 1) % FLIP_PHRASES.length);
        setFlipAnimationState('enter');

        // Immediately trigger active state for smooth 3D flip-in
        requestAnimationFrame(() => {
          setTimeout(() => {
            setFlipAnimationState('active');
          }, 40);
        });
      }, 500); // Time for exit flip
    }, 3200); // Flip cycle duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-rose" style={{ top: '5%', left: '5%' }} />
      <div className="ambient-glow glow-gold" style={{ top: '35%', right: '5%' }} />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero-section">
        {/* Floating Decorative Stars */}
        <div className="hero-deco-star star-1" data-aos="fade-in" data-aos-delay="200">✦</div>
        <div className="hero-deco-star star-2" data-aos="fade-in" data-aos-delay="400">✦</div>
        <div className="hero-deco-star star-3" data-aos="fade-in" data-aos-delay="600">✦</div>

        <div className="container hero-container">
          {/* Left Text Column */}
          <div className="hero-content" data-aos="fade-up" data-aos-duration="900">
            <div className="hero-pretitle">
              <span className="star-point">✦</span>
              <span className="luxury-tag">ARTISANAL BOTANICAL STUDIO</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-static">FLOWERS FOR</span>
              <br />
              <span className="hero-flip-wrapper">
                <span className={`hero-flip-text ${flipAnimationState}`}>
                  {FLIP_PHRASES[currentFlipIndex]}
                </span>
              </span>
            </h1>

            <p className="hero-subtitle">
              Fresh flowers, thoughtfully arranged.
            </p>

            <div className="hero-actions">
              <Link to="/shop" className="btn-bloome hero-cta-btn">
                <span>SHOP COLLECTION</span>
                <i className="bi bi-arrow-right"></i>
              </Link>

              <div className="hero-feature-pills">
                <span className="hero-pill">
                  <i className="bi bi-check2"></i> Fresh Daily Stems
                </span>
                <span className="hero-pill">
                  <i className="bi bi-check2"></i> Bespoke Hand-Tied
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Column */}
          <div
            className="hero-visual"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="hero-image-frame">
              <div className="hero-frame-border" />
              <img
                src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury curated floral arrangement"
                className="hero-image"
              />
              <div className="hero-badge-floating">
                <span className="badge-star">✦</span>
                <div className="badge-texts">
                  <strong>LUXURY EDIT</strong>
                  <span>Autumn • Winter 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Star Transition Divider */}
      <div className="container" data-aos="zoom-in" data-aos-duration="700">
        <div className="star-divider">✦</div>
      </div>

      {/* =========================================================================
          ABOUT PREVIEW SECTION
          ========================================================================= */}
      <section className="about-preview-section section">
        <div className="container about-preview-grid">
          {/* Left: Large Flower Image with Interactive Hover Reveal */}
          <div
            className="about-preview-image-wrap"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <Link to="/about" className="about-preview-card" aria-label="Explore our story">
              <div className="about-image-inner">
                <img
                  src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1000&auto=format&fit=crop"
                  alt="Florist artist assembling botanicals"
                  className="about-preview-img"
                />
                <div className="about-image-overlay">
                  <div className="about-overlay-content">
                    <span className="overlay-star">✦</span>
                    <span className="overlay-text">EXPLORE OUR STORY →</span>
                  </div>
                </div>
              </div>
              <div className="about-preview-corner-tag">
                <span>SINCE 2026</span>
              </div>
            </Link>
          </div>

          {/* Right: Narrative Content */}
          <div
            className="about-preview-content"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="section-label">
              <span className="star-point">✦</span>
              <span className="label-text">OUR STORY</span>
            </div>

            <h2 className="about-preview-heading">
              Flowers with a feeling.
            </h2>

            <p className="about-preview-text">
              Every arrangement is thoughtfully created to make ordinary moments feel a little more beautiful.
            </p>

            <p className="about-preview-subtext">
              From delicate morning ranunculus to dramatic garden roses, we celebrate the poetry in petals. Each stem is curated with devotion, handcrafted in our studio, and wrapped in eco-conscious botanical silks.
            </p>

            <div className="about-preview-actions">
              <Link to="/about" className="btn-bloome">
                <span>DISCOVER MORE</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
