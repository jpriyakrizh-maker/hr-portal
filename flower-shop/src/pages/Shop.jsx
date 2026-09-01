import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import './Shop.css';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const { searchQuery, setSearchQuery } = useShop();

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Split products for placement around the featured banner
  const primaryProducts = filteredProducts.slice(0, 6);
  const secondaryProducts = filteredProducts.slice(6);

  const handleBannerAction = () => {
    setSelectedCategory('SEASONAL');
    const filterElement = document.getElementById('category-filter-section');
    if (filterElement) {
      filterElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="shop-page">
      {/* Ambient Glow Elements */}
      <div className="ambient-glow glow-gold" style={{ top: '8%', left: '8%' }} />
      <div className="ambient-glow glow-rose" style={{ top: '40%', right: '5%' }} />

      {/* =========================================================================
          SHOP HERO
          ========================================================================= */}
      <section className="shop-hero-section">
        <div className="container shop-hero-content" data-aos="fade-up" data-aos-duration="900">
          {/* Breadcrumb */}
          <div className="shop-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Shop</span>
          </div>

          <div className="hero-star-deco" data-aos="zoom-in" data-aos-delay="200">
            ✦
          </div>

          <h1 className="shop-hero-title">THE FLOWER EDIT</h1>

          <p className="shop-hero-subtitle">
            Discover our seasonal blooms, handcrafted for every occasion.
          </p>

          <div className="shop-hero-divider">
            <span className="star-line">───────</span>
            <span className="star-point">✦</span>
            <span className="star-line">───────</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER
          ========================================================================= */}
      <section id="category-filter-section" className="category-filter-section">
        <div className="container">
          <div className="category-filter-bar" data-aos="fade-up" data-aos-duration="700">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {searchQuery && (
            <div className="search-status-bar" data-aos="fade-in">
              <span>Showing results for: <strong>"{searchQuery}"</strong> ({filteredProducts.length} items)</span>
              <button className="clear-search-link" onClick={() => setSearchQuery('')}>
                Clear Search <i className="bi bi-x"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          PRIMARY PRODUCT GRID
          ========================================================================= */}
      <section className="product-grid-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="empty-products" data-aos="fade-in">
              <span className="empty-star">✦</span>
              <h3>No blooms found</h3>
              <p>We couldn't find any flower arrangements matching your filter criteria.</p>
              <button
                className="btn-bloome"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
              >
                <span>VIEW ALL BLOOMS</span>
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {primaryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          FEATURED COLLECTION BANNER
          ========================================================================= */}
      <section className="featured-banner-section section">
        <div className="container">
          <div className="featured-banner-card" data-aos="zoom-in" data-aos-duration="900">
            {/* Banner Text Content */}
            <div className="banner-content">
              <div className="banner-badge">
                <span className="star-point">✦</span>
                <span className="badge-text">CURATOR'S CHOICE</span>
              </div>

              <h2 className="banner-heading">THIS WEEK'S BLOOMS</h2>

              <p className="banner-subheading">
                Freshly arranged. Available for a limited time.
              </p>

              <p className="banner-description">
                Hand-selected morning arrivals from botanical growers, composed in harmonic palettes of dusk rose, toffee gold, and meadow eucalyptus.
              </p>

              <button className="btn-bloome btn-bloome-gold banner-cta-btn" onClick={handleBannerAction}>
                <span>SHOP THE EDIT</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            {/* Banner Side Image */}
            <div className="banner-visual">
              <img
                src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1000&auto=format&fit=crop"
                alt="This week's featured blooms"
                className="banner-image"
              />
              <div className="banner-image-border" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECONDARY PRODUCT GRID (More Products)
          ========================================================================= */}
      {secondaryProducts.length > 0 && (
        <section className="product-grid-section secondary-grid-section">
          <div className="container">
            <div className="more-products-header" data-aos="fade-up">
              <h3 className="more-products-title">MORE FROM OUR COLLECTION</h3>
              <p className="more-products-subtitle">Carefully composed botanical arrangements</p>
            </div>
            <div className="product-grid">
              {secondaryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          FLORAL QUOTE
          ========================================================================= */}
      <section className="floral-quote-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="container quote-container">
          <div className="quote-star-top">✦</div>
          <blockquote className="floral-quote-text">
            "Flowers say what words sometimes cannot."
          </blockquote>
          <div className="quote-star-bottom">✦</div>
        </div>
      </section>
    </div>
  );
}
