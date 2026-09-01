import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('bloome_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('bloome_wishlist');
      return saved ? JSON.parse(saved) : [1, 3];
    } catch {
      return [1, 3];
    }
  });

  // Toast notification state
  const [toast, setToast] = useState({
    show: false,
    message: '',
    image: null,
    subtext: '',
  });

  // Quick view modal
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Search & Cart drawer states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('bloome_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('bloome_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Show Toast helper
  const showToast = (message, image = null, subtext = '') => {
    setToast({
      show: true,
      message,
      image,
      subtext,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  // Add to cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });

    showToast(
      `Added "${product.name}" to cart`,
      product.image,
      `₹${product.price.toLocaleString('en-IN')} × ${quantity}`
    );
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Wishlist toggle
  const toggleWishlist = (productId, productName = 'Item') => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`Removed from wishlist`, null, productName);
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`Added to your wishlist ♡`, null, productName);
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        wishlist,
        toggleWishlist,
        isWishlisted,
        toast,
        showToast,
        hideToast,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
