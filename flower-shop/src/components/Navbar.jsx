import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, wishlist, isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useShop();
  const location = useLocation();

  // Handle sticky navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand">
            <span className="brand-symbol">✦</span>
            <span className="brand-name">BLOOMÉ</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav desktop-only">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end
            >
              HOME
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              SHOP
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              ABOUT
            </NavLink>
          </nav>

          {/* Action Icons: Wishlist, Search, Cart */}
          <div className="navbar-actions">
            {/* Wishlist */}
            <Link to="/shop" className="action-btn" title="Wishlist" aria-label="Wishlist">
              <span className="icon-wrap">
                <i className="bi bi-heart"></i>
                {wishlist.length > 0 && (
                  <span className="badge-count wishlist-badge">{wishlist.length}</span>
                )}
              </span>
            </Link>

            {/* Search Trigger */}
            <button
              className={`action-btn search-trigger ${isSearchOpen ? 'active' : ''}`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              title="Search flowers"
              aria-label="Search"
            >
              <i className="bi bi-search"></i>
              <span className="action-label">SEARCH</span>
            </button>

            {/* Cart with dynamic badge */}
            <Link to="/shop" className="action-btn cart-btn" title="Cart" aria-label="Shopping Cart">
              <span className="icon-wrap">
                <i className="bi bi-bag"></i>
                {cartCount > 0 && <span className="badge-count cart-badge">{cartCount}</span>}
              </span>
              <span className="action-label">CART</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger-btn mobile-only ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        <div className={`navbar-search-bar ${isSearchOpen ? 'open' : ''}`}>
          <div className="search-bar-inner">
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              placeholder="Search roses, bouquets, seasonal blooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <i className="bi bi-x-lg"></i>
              </button>
            )}
            <button
              className="close-search-btn"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              CLOSE
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-brand">
            <span className="brand-symbol">✦</span>
            <span>BLOOMÉ</span>
          </div>
          <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <nav className="mobile-nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            end
          >
            <span>HOME</span>
            <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>SHOP</span>
            <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>ABOUT</span>
            <i className="bi bi-arrow-right"></i>
          </NavLink>
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-tagline">Flowers for beautiful moments.</div>
          <div className="mobile-quick-stats">
            <Link to="/shop" className="mobile-stat-item">
              <i className="bi bi-heart"></i> Wishlist ({wishlist.length})
            </Link>
            <Link to="/shop" className="mobile-stat-item">
              <i className="bi bi-bag"></i> Cart ({cartCount})
            </Link>
          </div>
          <div className="mobile-stars">✦ ───── ✦ ───── ✦</div>
        </div>
      </div>
    </>
  );
}
