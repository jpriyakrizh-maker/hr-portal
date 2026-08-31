import React from "react";
import { Link } from "react-router-dom";

import {
  FaAward,
  FaHandshake,
  FaBullseye,
  FaEye,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

import SplitText from "../components/SplitText";
import StatCounter from "../components/StatCounter";
import CTASection from "../components/CTASection";

import { statisticsData } from "../data/servicesData";

import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Header Banner */}
      <section className="page-header">
        <div className="container text-center">

          <span className="page-header-tag" data-aos="fade-down">
            Our Story &amp; Dedication
          </span>

          <h1 className="page-header-title">
            <SplitText
              text="About Plumbing X"
              className="page-split-heading"
              delay={45}
            />
          </h1>

          <p
            className="page-header-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Delivering gold-standard plumbing repairs, installations, and 24/7
            emergency response since 2016.
          </p>

        </div>
      </section>

      {/* Company Overview */}
      <section className="about-intro-section">
        <div className="container">

          <div className="about-intro-grid">

            {/* Image */}
            <div
              className="about-image-column"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="about-image-card">

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                  alt="Plumbing X Team of Experts"
                  className="about-main-image"
                />

                <div className="about-experience-badge">
                  <span className="exp-num">10+</span>
                  <span className="exp-text">
                    Years of Excellence
                  </span>
                </div>

              </div>
            </div>

            {/* Content */}
            <div
              className="about-content-column"
              data-aos="fade-left"
              data-aos-duration="900"
            >

              <span className="section-tag">
                Who We Are
              </span>

              <h2 className="section-title">
                We Provide The Best Plumbing Services
              </h2>

              <p className="about-paragraph">
                Founded with a mission to eliminate homeowner anxiety
                surrounding plumbing repairs, <strong>Plumbing X</strong> has
                grown into the region's most trusted name for residential and
                commercial plumbing.
              </p>

              <p className="about-paragraph secondary">
                Every member of our team is fully licensed, insured, and
                background-checked. We invest heavily in cutting-edge
                pipe-inspection cameras, acoustic leak detectors, and
                eco-friendly trenchless tools to guarantee precise,
                non-invasive results.
              </p>

              <div className="about-feature-bullets">

                <div className="bullet-item">
                  <div className="bullet-check">
                    <FaCheck />
                  </div>
                  <span>100% Upfront &amp; Fixed Pricing</span>
                </div>

                <div className="bullet-item">
                  <div className="bullet-check">
                    <FaCheck />
                  </div>
                  <span>Licensed, Bonded &amp; Insured Plumbers</span>
                </div>

                <div className="bullet-item">
                  <div className="bullet-check">
                    <FaCheck />
                  </div>
                  <span>Same-Day Emergency Dispatch</span>
                </div>

                <div className="bullet-item">
                  <div className="bullet-check">
                    <FaCheck />
                  </div>
                  <span>State-Of-The-Art Diagnostic Technology</span>
                </div>

              </div>

              <div className="about-btn-wrap">
                <Link
                  to="/contact"
                  className="btn-primary about-cta-btn"
                >
                  <span>Get In Touch With Us</span>
                  <FaArrowRight />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats-section">
        <div className="container">

          <div className="stats-grid">

            {statisticsData.map((stat, idx) => (
              <div
                key={stat.id}
                className="stat-card"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >

                <div className="stat-value">
                  <StatCounter
                    endValue={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <h4 className="stat-label">
                  {stat.label}
                </h4>

                <p className="stat-desc">
                  {stat.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">

          <div
            className="section-header text-center"
            data-aos="fade-up"
          >

            <span className="section-tag">
              Our Core Purpose
            </span>

            <h2 className="section-title">
              Mission &amp; Vision
            </h2>

            <p className="section-subtitle">
              Guided by uncompromising integrity, modern engineering, and a
              genuine passion for serving our community.
            </p>

          </div>

          <div className="mission-vision-grid">

            {/* Mission */}
            <div
              className="mv-card mission-card"
              data-aos="fade-right"
              data-aos-duration="800"
            >

              <div className="mv-icon-badge">
                <FaBullseye />
              </div>

              <h3 className="mv-title">
                Our Mission
              </h3>

              <p className="mv-text">
                To deliver fast, honest, and flawless plumbing solutions that
                protect our customers' homes, businesses, and wallets. We treat
                every property with the highest degree of respect and complete
                every job with relentless attention to detail.
              </p>

              <ul className="mv-list">

                <li>
                  <FaCheck className="mv-check" />
                  Rapid response with zero excuses
                </li>

                <li>
                  <FaCheck className="mv-check" />
                  Transparent quotes with no surprise charges
                </li>

                <li>
                  <FaCheck className="mv-check" />
                  Leaving every workspace cleaner than we found it
                </li>

              </ul>

            </div>

            {/* Vision */}
            <div
              className="mv-card vision-card"
              data-aos="fade-left"
              data-aos-duration="800"
            >

              <div className="mv-icon-badge vision-badge">
                <FaEye />
              </div>

              <h3 className="mv-title">
                Our Vision
              </h3>

              <p className="mv-text">
                To set the benchmark for standard of service in modern trade
                industries. We envision a future where intelligent water
                management, sustainable repiping methods, and unmatched
                customer care create lasting peace of mind for every homeowner.
              </p>

              <ul className="mv-list">

                <li>
                  <FaCheck className="mv-check" />
                  Pioneering eco-conscious plumbing methods
                </li>

                <li>
                  <FaCheck className="mv-check" />
                  Investing in ongoing technician training &amp; safety
                </li>

                <li>
                  <FaCheck className="mv-check" />
                  Building lifelong relationships with local communities
                </li>

              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section">
        <div className="container">

          <div
            className="section-header text-center"
            data-aos="fade-up"
          >

            <span className="section-tag">
              Values We Live By
            </span>

            <h2 className="section-title">
              Why Customers Trust Plumbing X
            </h2>

          </div>

          <div className="values-grid">

            {/* Integrity */}
            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="value-icon">
                <FaShieldAlt />
              </div>

              <h4>
                Integrity First
              </h4>

              <p>
                We provide straightforward advice and only recommend repairs
                that are truly needed.
              </p>

            </div>

            {/* Craftsmanship */}
            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="value-icon">
                <FaAward />
              </div>

              <h4>
                Master Craftsmanship
              </h4>

              <p>
                We never cut corners. All materials and pipe installations
                exceed national building codes.
              </p>

            </div>

            {/* Reliability */}
            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="value-icon">
                <FaClock />
              </div>

              <h4>
                Punctual &amp; Reliable
              </h4>

              <p>
                We respect your time. When we schedule an appointment or
                dispatch, we arrive promptly.
              </p>

            </div>

            {/* Customer Focus */}
            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >

              <div className="value-icon">
                <FaHandshake />
              </div>

              <h4>
                Customer Focused
              </h4>

              <p>
                Your satisfaction is our metric of success. We are not done
                until you are 100% happy.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
};

export default About;
