import React from 'react';
import { useShop } from '../context/ShopContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewProduct } = useShop();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id, product.name);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="product-card" data-aos="fade-up" data-aos-duration="800">
      {/* Image Container with Hover Overlay */}
      <div className="product-image-wrap" onClick={handleQuickView}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="product-top-bar">
          {product.tag ? (
            <span className="product-tag">{product.tag}</span>
          ) : (
            <span />
          )}

          {/* Wishlist Heart Button */}
          <button
            className={`product-wishlist-btn ${wishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
            title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label="Wishlist"
          >
            <i className={`bi ${wishlisted ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>

        {/* Hover Overlay with QUICK VIEW */}
        <div className="product-overlay">
          <button
            className="quick-view-btn"
            onClick={handleQuickView}
            aria-label={`Quick view ${product.name}`}
          >
            <span>QUICK VIEW</span>
            <i className="bi bi-eye"></i>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-info">
        <div className="product-category-text">{product.category}</div>
        <h3 className="product-title" onClick={handleQuickView}>
          {product.name}
        </h3>
        
        <div className="product-bottom-row">
          <div className="product-price">
            ₹{product.price.toLocaleString('en-IN')}
          </div>

          <button
            className="btn-add-cart"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <span>ADD TO CART</span>
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
