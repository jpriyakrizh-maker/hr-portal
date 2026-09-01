import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// AOS animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS scroll animations with luxury easing
AOS.init({
  duration: 900,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  once: false,
  offset: 60,
  delay: 50,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
