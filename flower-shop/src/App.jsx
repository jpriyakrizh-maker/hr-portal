import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';

import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartToast from './components/CartToast';
import QuickViewModal from './components/QuickViewModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import './App.css';

export default function App() {
  const location = useLocation();

  // Refresh AOS triggers on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <ShopProvider>
      <ScrollToTop />
      <div className="app-layout">
        {/* Same Common Navbar across all 3 pages */}
        <Navbar />

        {/* 3 Main Pages */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Same Common Footer across all 3 pages */}
        <Footer />

        {/* Shared UI Components */}
        <CartToast />
        <QuickViewModal />
      </div>
    </ShopProvider>
  );
}
