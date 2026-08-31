import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaFaucetDrip, FaBars, FaXmark, FaPhone, FaShieldHalved } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Mini Banner */}
        <div className="top-bar">
          <div className="container top-bar-content">
            <div className="top-bar-left">
              <span className="emergency-badge">
                <span className="pulsing-dot"></span> 24/7 Emergency Plumbing Service
              </span>
            </div>
            <div className="top-bar-right">
              <a href="tel:8005557473" className="top-bar-link">
                <FaPhone className="top-icon" /> (800) 555-PIPE
              </a>
              <span className="top-bar-divider">|</span>
              <span className="top-bar-text">
                <FaShieldHalved className="top-icon" /> Licensed & Insured #PL-9482
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar">
          <div className="container navbar-container">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <div className="brand-icon-wrapper">
                <FaFaucetDrip className="brand-icon" />
              </div>
              <div className="brand-text">
                <span className="brand-name">Plumbing <span className="brand-highlight">X</span></span>
                <span className="brand-tagline">Pro Plumbing Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="navbar-desktop-nav">
              <ul className="navbar-links">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Get A Quote Action Button */}
              <Link to="/contact" className="btn-primary nav-cta-btn">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="navbar-toggle-btn"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-Out Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <div className="brand-icon-wrapper">
              <FaFaucetDrip className="brand-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-name">Plumbing <span className="brand-highlight">X</span></span>
            </div>
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaXmark />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="btn-primary mobile-cta-btn">
              Get a Quote
            </Link>
            <div className="mobile-contact-info">
              <p><strong>Need Immediate Help?</strong></p>
              <a href="tel:8005557473" className="mobile-phone-link">
                <FaPhone /> (800) 555-PIPE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
