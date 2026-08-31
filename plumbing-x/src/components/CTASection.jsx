import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaArrowRight, FaShieldHalved, FaClock } from 'react-icons/fa6';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section-wrapper">
      <div className="container">
        <div className="cta-card" data-aos="zoom-in" data-aos-duration="800">
          <div className="cta-shapes">
            <div className="cta-circle cta-circle-1"></div>
            <div className="cta-circle cta-circle-2"></div>
          </div>

          <div className="cta-content">
            <div className="cta-badge">
              <FaClock /> Emergency Service Available 24/7
            </div>
            
            <h2 className="cta-subtitle">Having a problem?</h2>
            <h3 className="cta-title">We'll fix it today!</h3>
            
            <p className="cta-description">
              Don't let leaks or clogged drains ruin your day. Call our licensed plumbers now for lightning-fast dispatch and guaranteed peace of mind.
            </p>

            <div className="cta-features">
              <div className="cta-feature-item">
                <FaShieldHalved className="cta-feature-icon" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="cta-feature-item">
                <FaShieldHalved className="cta-feature-icon" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            <div className="cta-actions">
              <a href="tel:8005557473" className="cta-phone-btn">
                <div className="cta-phone-icon-wrap">
                  <FaPhone />
                </div>
                <div className="cta-phone-text">
                  <span>Call Us Now</span>
                  <strong>(800) 555-PIPE</strong>
                </div>
              </a>

              <Link to="/contact" className="cta-quote-btn">
                <span>Get a Quote</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="cta-image-col">
            <div className="cta-image-container">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80"
                alt="Expert Plumber"
                className="cta-plumber-img"
                loading="lazy"
              />
              <div className="cta-floating-badge">
                <span className="badge-highlight">30 Min</span>
                <span className="badge-sub">Average Arrival</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
