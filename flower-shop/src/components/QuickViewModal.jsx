import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './QuickViewModal.css';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isWishlisted } = useShop();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const wishlisted = isWishlisted(quickViewProduct.id);

  const handleClose = () => {
    setQuickViewProduct(null);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    handleClose();
  };

  const handleWishlist = () => {
    toggleWishlist(quickViewProduct.id, quickViewProduct.name);
  };

  return (
    <div className="quickview-backdrop" onClick={handleClose}>
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          className="quickview-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="quickview-grid">
          {/* Product Image */}
          <div className="quickview-image-pane">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="quickview-image"
            />
            {quickViewProduct.tag && (
              <span className="quickview-tag">{quickViewProduct.tag}</span>
            )}
          </div>

          {/* Product Info */}
          <div className="quickview-info-pane">
            <div className="quickview-category">{quickViewProduct.category}</div>
            <h2 className="quickview-title">{quickViewProduct.name}</h2>
            
            <div className="quickview-price">
              ₹{quickViewProduct.price.toLocaleString('en-IN')}
            </div>

            <p className="quickview-desc">{quickViewProduct.description}</p>

            {quickViewProduct.details && (
              <div className="quickview-details-box">
                <div className="details-header">
                  <span className="details-star">✦</span>
                  <span>ARRANGEMENT DETAILS</span>
                </div>
                <p className="details-body">{quickViewProduct.details}</p>
              </div>
            )}

            {/* Quantity Selector & Add To Cart */}
            <div className="quickview-actions">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="quantity-val">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>

              <button className="btn-bloome quickview-cart-btn" onClick={handleAddToCart}>
                <span>ADD TO CART • ₹{(quickViewProduct.price * quantity).toLocaleString('en-IN')}</span>
              </button>

              <button
                className={`quickview-wishlist-btn ${wishlisted ? 'active' : ''}`}
                onClick={handleWishlist}
                title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-label="Wishlist"
              >
                <i className={`bi ${wishlisted ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              </button>
            </div>

            {/* Guarantee / Perks */}
            <div className="quickview-perks">
              <div className="perk-item">
                <i className="bi bi-truck"></i>
                <span>Fresh Morning Harvest</span>
              </div>
              <div className="perk-item">
                <i className="bi bi-stars"></i>
                <span>Hand-Tied Botanical Silk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
