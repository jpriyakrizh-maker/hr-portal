import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserShield,
  FaBoltLightning,
  FaTags,
  FaClockRotateLeft,
  FaArrowRight,
  FaStar,
  FaPhoneVolume,
  FaCircleCheck
} from 'react-icons/fa6';
import SplitText from '../components/SplitText';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { servicesData, whyChooseUsData } from '../data/servicesData';
import './Home.css';

const featureIconMap = {
  FaUserShield: FaUserShield,
  FaBoltLightning: FaBoltLightning,
  FaTags: FaTags,
  FaClockRotateLeft: FaClockRotateLeft
};

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
        </div>

        <div className="container hero-container">
          {/* Left Column: Heading, Subtitle & Buttons */}
          <div className="hero-content" data-aos="fade-right" data-aos-duration="900">
            <div className="hero-badge">
              <span className="badge-star"><FaStar /></span>
              <span>Top Rated Plumbing Company in the City</span>
            </div>

            <h1 className="hero-title">
              <SplitText
                text="Your Trusted Plumbing Solution"
                className="hero-split-heading"
                delay={40}
              />
            </h1>

            <p className="hero-subtitle">
              Fast, Reliable &amp; Professional Plumbing Services for Your Home and Business.
            </p>

            <div className="hero-btn-group">
              <Link to="/contact" className="btn-primary hero-btn">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
              <Link to="/services" className="btn-outline hero-btn">
                <span>Our Services</span>
              </Link>
            </div>

            <div className="hero-trust-list">
              <div className="trust-item">
                <FaCircleCheck className="trust-icon" />
                <span>Certified Technicians</span>
              </div>
              <div className="trust-item">
                <FaCircleCheck className="trust-icon" />
                <span>Transparent Quotes</span>
              </div>
              <div className="trust-item">
                <FaCircleCheck className="trust-icon" />
                <span>100% Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Zoom/Fade Animation */}
          <div className="hero-image-wrapper" data-aos="zoom-in" data-aos-duration="1000">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                alt="Professional Plumber at Work"
                className="hero-main-img"
              />
              
              {/* Floating Emergency Badge */}
              <div className="hero-float-badge emergency-float" data-aos="fade-up" data-aos-delay="300">
                <div className="float-icon-wrap">
                  <FaPhoneVolume />
                </div>
                <div>
                  <span className="float-sub">Emergency Call</span>
                  <strong className="float-main">24/7 Available</strong>
                </div>
              </div>

              {/* Floating Rating Badge */}
              <div className="hero-float-badge rating-float" data-aos="fade-left" data-aos-delay="400">
                <div className="rating-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div>
                  <strong className="float-main">5.0 Star Rating</strong>
                  <span className="float-sub">500+ Local Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up" data-aos-duration="700">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The Plumbing X Standard of Excellence</h2>
            <p className="section-subtitle">
              We provide unmatched plumbing craftsmanship, state-of-the-art diagnostic equipment, and dependable round-the-clock service.
            </p>
          </div>

          <div className="why-choose-grid">
            {whyChooseUsData.map((feature, idx) => {
              const IconComp = featureIconMap[feature.iconName] || FaUserShield;
              return (
                <div
                  key={feature.id}
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  data-aos-duration="800"
                >
                  <div className="feature-icon-box" style={{ background: `${feature.color}15`, color: feature.color }}>
                    <IconComp />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="services-preview-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up" data-aos-duration="700">
            <span className="section-tag">Featured Services</span>
            <h2 className="section-title">Complete Residential & Commercial Solutions</h2>
            <p className="section-subtitle">
              From emergency faucet repairs to full sewer repiping, our experienced plumbers deliver long-lasting solutions.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="services-view-all text-center" data-aos="fade-up" data-aos-delay="200">
            <Link to="/services" className="btn-primary services-all-btn">
              <span>View All Plumbing Services</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <CTASection />
    </div>
  );
};

export default Home;
