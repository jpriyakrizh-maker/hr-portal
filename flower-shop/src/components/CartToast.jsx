import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import './CartToast.css';

export default function CartToast() {
  const { toast, hideToast } = useShop();

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  if (!toast.show) return null;

  return (
    <aside className="cart-toast-container" role="alert" aria-live="assertive">
      <div className="cart-toast-card">
        {toast.image ? (
          <img src={toast.image} alt="Cart item" className="toast-img" />
        ) : (
          <div className="toast-icon-wrap">
            <span className="toast-star">✦</span>
          </div>
        )}

        <div className="toast-details">
          <div className="toast-header">
            <span className="toast-title">{toast.message}</span>
          </div>
          {toast.subtext && <p className="toast-subtext">{toast.subtext}</p>}
        </div>

        <button
          className="toast-close"
          onClick={hideToast}
          aria-label="Close notification"
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    </aside>
  );
}
