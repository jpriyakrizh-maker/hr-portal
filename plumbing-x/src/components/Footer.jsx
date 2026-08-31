import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFaucetDrip,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck
} from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  return (
    <footer className="footer-section">
      <div className="footer-top-accent"></div>
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Company Info */}
          <div className="footer-col" data-aos="fade-up" data-aos-duration="600">
            <Link to="/" className="footer-brand">
              <div className="footer-brand-icon">
                <FaFaucetDrip />
              </div>
              <div className="footer-brand-text">
                <span>Plumbing <span className="brand-highlight">X</span></span>
              </div>
            </Link>
            <p className="footer-description">
              Plumbing X delivers fast, reliable, and premium plumbing services for residential and commercial properties. Available 24/7 for all your emergency plumbing needs.
            </p>
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="footer-col" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            <h4 className="footer-heading">Quick Menu</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact" state={{ selectedService: 'Faucet & Leak Repair' }}>Faucet Repair</Link>
              </li>
              <li>
                <Link to="/contact" state={{ selectedService: 'Drain Cleaning & Repair' }}>Drain Cleaning</Link>
              </li>
              <li>
                <Link to="/contact" state={{ selectedService: 'Water Line Repair' }}>Water Line Repair</Link>
              </li>
              <li>
                <Link to="/contact" state={{ selectedService: 'Gas Line Services' }}>Gas Line Service</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to get seasonal plumbing tips, maintenance guides, and exclusive discount offers.
            </p>
            {subscribed ? (
              <div className="newsletter-success">
                <FaCircleCheck className="check-icon" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <FaPaperPlane />
                  </button>
                </div>
                {error && <span className="newsletter-error">{error}</span>}
              </form>
            )}

            <div className="footer-contact-mini">
              <div className="mini-contact-item">
                <FaPhone className="mini-icon" />
                <span>(800) 555-PIPE</span>
              </div>
              <div className="mini-contact-item">
                <FaEnvelope className="mini-icon" />
                <span>support@plumbingx.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright-text">
            &copy; 2026 Plumbing X | All Rights Reserved
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact">Emergency Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
