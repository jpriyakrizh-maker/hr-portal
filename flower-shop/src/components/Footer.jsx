import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-ambient-glow" />

      <div className="footer-star-border" data-aos="zoom-in" data-aos-duration="1000">
        <span className="star-point">✦</span>
        <span className="star-line">─────</span>
        <span className="star-point">✦</span>
        <span className="star-line">─────</span>
        <span className="star-point">✦</span>
        <span className="star-line">─────</span>
        <span className="star-point">✦</span>
      </div>

      <div className="container footer-content" data-aos="fade-up" data-aos-duration="900">
        {/* Brand Header */}
        <div className="footer-brand">
          <h2 className="footer-logo">BLOOMÉ</h2>
          <p className="footer-tagline">Flowers for beautiful moments.</p>
        </div>

        {/* Quick Links Navigation */}
        <nav className="footer-nav">
          <Link to="/" className="footer-link">HOME</Link>
          <span className="nav-dot">•</span>
          <Link to="/shop" className="footer-link">SHOP</Link>
          <span className="nav-dot">•</span>
          <Link to="/about" className="footer-link">ABOUT</Link>
        </nav>

        {/* Social Links */}
        <div className="footer-socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            INSTAGRAM
          </a>
          <span className="social-divider">/</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            FACEBOOK
          </a>
          <span className="social-divider">/</span>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            PINTEREST
          </a>
        </div>

        {/* Bottom Star Accent & Copyright */}
        <div className="footer-bottom">
          <div className="bottom-star-accent" data-aos="fade-up" data-aos-delay="200">
            ✦
          </div>
          <p className="copyright-text">© 2026 BLOOMÉ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
